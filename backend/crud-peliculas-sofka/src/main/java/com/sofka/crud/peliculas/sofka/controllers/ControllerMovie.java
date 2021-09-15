package com.sofka.crud.peliculas.sofka.controllers;

import com.sofka.crud.peliculas.sofka.entities.Movie;
import com.sofka.crud.peliculas.sofka.services.InterfaceServiceMovie;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@CrossOrigin(origins = "http://localhost:8080")
@RequestMapping("/api/movies")
public class ControllerMovie
{
    @Autowired
    InterfaceServiceMovie serviceMovie;

    @GetMapping("/list")
    public Iterable<Movie> listMovies()
    {
        return serviceMovie.listAll();
    }

    @GetMapping("/list/{id}")
    public Movie listarPorId(@PathVariable Integer id)
    {
        return serviceMovie.listById(id);
    }

    @PostMapping("/create")
    public Movie guardar(@RequestBody Movie movie)
    {
        return serviceMovie.create(movie);
    }

    @PutMapping("/update")
    public Movie actualizar(@RequestBody Movie movie)
    {
        return serviceMovie.update(movie);
    }

    @DeleteMapping("/remove/{id}")
    public Map<String, String> eliminar(@PathVariable Integer id)
    {
        return serviceMovie.remove(id);
    }
}
