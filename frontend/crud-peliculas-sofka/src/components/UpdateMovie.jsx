import React, { Fragment, useState } from "react";
import {useForm} from "react-hook-form";

const UpdateMovie = (props) => 
{ 
    const {register, errors, handleSubmit, setValue} = useForm();
    const [messageStatus, setMessageStatus] = useState();

    const onSubmit = (data) =>
    {
        setMessageStatus("Actualizando pelicula...");
        data.id=props.currentMovie.id;

        fetch('http://localhost:8080/api/movies/update',
        {
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(data)
        }).then((response) => response.json())
        .then(() => {setMessageStatus("Pelicula actualizada exitosamente");});

        props.setMovies(props.movies.map((movie)=> movie.id === data.id?data:movie))
        props.setCurrentMovie(data);
    }
    setValue("name", props.currentMovie.name);
    setValue("gender", props.currentMovie.gender);
    setValue("directory", props.currentMovie.directory);
    setValue("year", props.currentMovie.year);
    setValue("description", props.currentMovie.description);

    return(
        <Fragment>
            <form className="row col-4" onSubmit={handleSubmit(onSubmit)}>
                <h1>Actualizar Pelicula</h1>
                <div>
                    <label className="form-label">Nombre</label>
                    <input className="form-control" type="text" 
                    {... register("name")} />
                </div>
                <div>
                    <label className="form-label">Genero</label>
                    <input className="form-control" type="text" 
                    {... register("gender")} />
                </div>
                <div>
                    <label className="form-label">Director</label>
                    <input className="form-control" type="text" 
                    {... register("directory")} />
                </div>
                <div>
                    <label className="form-label">Año</label>
                    <input className="form-control" type="number" min="1895" 
                    {... register("year")} />
                </div>
                <div>
                    <label className="form-label">Descripcion</label>
                    <textarea className="form-control" name="" id="" cols="30" rows="10"
                    {... register("description")} ></textarea>
                </div>
                <p>{messageStatus}</p>
                <div>
                    <button type="submit" className="btn btn-primary my-3" >Actualizar</button>
                </div>
            </form>
        </Fragment>
    );
}

export default UpdateMovie;


