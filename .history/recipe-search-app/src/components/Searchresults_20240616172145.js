import React from "react";

export default function SearchResults({ result }) {

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