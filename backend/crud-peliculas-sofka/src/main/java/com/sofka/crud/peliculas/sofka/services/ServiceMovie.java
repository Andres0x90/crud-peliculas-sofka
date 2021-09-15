package com.sofka.crud.peliculas.sofka.services;

import com.sofka.crud.peliculas.sofka.entities.Movie;
import com.sofka.crud.peliculas.sofka.repositories.MovieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class ServiceMovie implements InterfaceServiceMovie{

    @Autowired
    private MovieRepository movieRepository;

    @Override
    public List<Movie> listAll() {
        return (List<Movie>) movieRepository.findAll();
    }

    @Override
    public Movie listById(Integer id) {
        return movieRepository.findById(id).orElseThrow();
    }

    @Override
    public Movie create(Movie movie) {
        return movieRepository.save(movie);
    }

    @Override
    public Movie update(Movie movie) {
        this.listById(movie.getId());
        return movieRepository.save(movie);
    }

    @Override
    public Map<String, String> remove(Integer id) {
        movieRepository.deleteById(id);
        HashMap<String, String> response = new HashMap<>();
        response.put("mensaje", "Persona eliminada correctamente");

        return response;
    }
}
