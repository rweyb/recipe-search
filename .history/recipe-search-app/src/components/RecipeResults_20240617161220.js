import React from "react";
import { useState } from "react";
import { useEffect } from "react";



export default function SearchResults() {

    const [data, setData] =useState(null);
    const [isLoading, setLoading] =useState(true);
    const [error, setError] =useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                    const response = await fetch (`https://app.rakuten.co.jp/services/api/Recipe/CategoryList/20170426?applicationId=1048012658384045599&categoryType=large${query}`);
                const result = await response.json();
                setData(result.categories || []);
            } catch (err) {
                setError(err.message);
            }finally {
                setLoading(false);
            }
        };
        fetchData();
    },[]);
    
    if (isLoading) {
        return <p>Loading...</p>;
    }

    if(error) {
        return<p>Error: {error}</p>;
    }

    return(
        <div>
            {data && data.map((item, index) => (
            <div key={index}>
                {item}
            </div>
            ))}
        </div>
    );
}