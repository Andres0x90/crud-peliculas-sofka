import React, {Fragment, useState} from 'react'


const CreateMovie = (props) => {
    const[dates, setDates] = useState({
        name: '',
        gender: '',
        directory: '',
        year: '',
        description: ''

    });
    const [messageStatus, setMessageStatus] = useState();

    const handleInputChange = (event, data) => {
        
        setDates({
            ...dates,
            [event.target.name]:event.target.value
        });
    }

    const sendData = (event) => {
        
        fetch('http://localhost:8080/api/movies/create',
        {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(dates)
        }).then((response) => {setMessageStatus("Pelicula creada exitosamente");return response.json();}).
        then((data) => {props.setMovies([...props.movies, data]);});
    
        event.target.reset();
        event.preventDefault();
    }



    return (  
        <Fragment>
            <h1>Crear Nueva Pelicula</h1>
            <form className="row" onSubmit={sendData}>
                <div className="col-md-5">
                    <input name="name" onChange={handleInputChange} className="form-control form-control my-2" type="text" placeholder="Nombre de la Pelicula" aria-label=".form-control-sm example"></input>
                    <input name="gender" onChange={handleInputChange} className="form-control form-control my-2" type="text" placeholder="Genero de la Pelicula" aria-label=".form-control-sm example"></input>
                    <input name="directory" onChange={handleInputChange} className="form-control form-control my-2" type="text" placeholder="Director de la Pelicula" aria-label=".form-control-sm example"></input>
                    <input name="year" onChange={handleInputChange} className="form-control form-control my-2" type="number" placeholder="Año de la Pelicula" aria-label=".form-control-sm example"></input>
                    <textarea className="form-control form-control my-2" name="description" onChange={handleInputChange} id="" cols="58" rows="3" placeholder="Ingresa una breve descripción"></textarea>
                    <p>{messageStatus}</p>
                    <div className="col-md-6" >
                        <button className="btn btn-primary col-md-6" type="submit">Crear</button>
                    </div>
                </div>
            </form>


        </Fragment>
    );
}
 
export default CreateMovie;