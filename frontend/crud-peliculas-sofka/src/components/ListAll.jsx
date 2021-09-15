import React, {  useState, useEffect } from 'react'

const ListAll = () =>
{
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        onChange();
    }, []);

    const onChange= () => {
        fetch('http://localhost:8080/api/movies/list',
        {
            method: "GET",
            headers: { "Content-Type": "application/json" }
        }).then((response) =>  response.json())
        .then((data) => {setMovies(data);});
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
                    movies.map((movie) => 
                    {
                        return(
                            <tr>
                                <td>{movie.name}</td>
                                <td>{movie.gender}</td>
                                <td>{movie.directory}</td>
                                <td>{movie.year}</td>
                                <td><button>Editar</button></td>
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