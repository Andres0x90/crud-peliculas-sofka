import React, {  useState, useEffect } from 'react'

const ListAll = (props) =>
{
    useEffect(() => {
        getAllMovies();
    }, []);

    const getAllMovies= () => {
        fetch('http://localhost:8080/api/movies/list',
        {
            method: "GET",
            headers: { "Content-Type": "application/json" }
        }).then((response) =>  response.json())
        .then((data) => {props.setMovies(data);});
    }      

    return (
        <>
            <table className="table">
            <thead>
                <tr>
                <th scope="col">Nombre</th>
                <th scope="col">Genero</th>
                <th scope="col">Director</th>
                <th scope="col">Año</th>
                <th scope="col">Editar</th>
                <th scope="col">Eliminar</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.movies.map((movie) => 
                    {
                        return(
                            <tr key={movie.id}>
                                <td>{movie.name}</td>
                                <td>{movie.gender}</td>
                                <td>{movie.directory}</td>
                                <td>{movie.year}</td>
                                <td><button onClick={()=>{props.setCurrentMovie(movie);}}>Editar</button></td>
                                <td><button>Eliminar</button></td>
                            </tr>
                        )
                    })
                }

            </tbody>
            </table>
        </>
    )
}

export default ListAll;