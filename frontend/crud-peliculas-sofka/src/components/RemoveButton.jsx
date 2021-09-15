import React, { useState } from 'react'

const RemoveButton = () => {
    const [idstate, setidstate] = useState(0)

    HandleChangeId = (event) => {
        
    }

    const deleteMovie = (id) => {
        fetch(`http://localhost:8080/api/movies/remove/${id}`,
            {
                method: "DELETE",
                headers: { "Content-Type": "application/json" },
            }).then((response) => { console.log(response); })
    }

    return (
        <>
            <input name="id" onChange={HandleChangeId} type="number"/>
            <button className="btn btn-danger" onClick={deleteMovie(idstate)}>Delete</button>
        </>
    )
}

export default RemoveButton
