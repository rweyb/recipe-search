import React from "react";
import { useState } from "react";
import { useEffect } from "react";


export default function SearchResults() {

    const [data, setData] =useState(null);
    const [isLoading, setLoading] =useState(true);
    const [error, setError] =useState('');

    useEffect(() => {
        setLoading(true);
        fetchData()
        .then(result => setData(result))
        .catch(err => setError(error.message))
        .finally(() => setLoading(false));

    })
    
    if (isLoading) {
        return <p>Loading...</p>;
    }

    if(error) {
        return<p>Error: (error)</p>;
    }

    return(
        <div>
            {result.map((item, index) => (
            <div key={index}>
                {item}
            </div>
            ))}
        </div>
    );
}