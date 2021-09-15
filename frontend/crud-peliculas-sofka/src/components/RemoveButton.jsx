import React, {useState} from 'react'

const RemoveButton = () => {

    const deleteMovie = (id) => {
        fetch(`http://localhost:8080/api/movies/remove/${id}`,
        {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(dates)
        }).then((response) => { console.log(response); })
    }

    return (
        <>
            <div className="">
                <span onClick={deleteMovie()}>Delete</span>
            </div>
        </>
    )
}

export default RemoveButton
