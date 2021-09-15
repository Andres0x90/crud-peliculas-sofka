import React, { Fragment } from "react";
import {useForm} from "react-hook-form";



const UpdateMovie = () => 
{ 
    const {register, errors, handleSubmit} = useForm();

    const onSubmit = (data) =>
    {
        data.id=4;

        fetch('http://localhost:8080/api/movies/update',
        {
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(data)
        }).then((response) => response.json())
        .then((data) => console.log(data));
    }

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
                <div>
                    <button type="submit" className="btn btn-primary my-3" >Actualizar</button>
                </div>
            </form>
        </Fragment>
    );
}

export default UpdateMovie;


