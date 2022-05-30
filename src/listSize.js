import React from "react";


export default function ListSize(props) {
    
    const length = props.movies.length;
    const query = props.query
    
    if(length < 1 && query !== "") {
        return(
            <p>No results found!</p>
        )
    } else if (length === 1) { 
        return (
            <>
                <div>
                    Showing 1 result
                </div>
            </>
        )
    } else if (length > 1) {
        return (
            <>
                <div>
                    Showing {length} results
                </div>
            </>
        )
    }
}