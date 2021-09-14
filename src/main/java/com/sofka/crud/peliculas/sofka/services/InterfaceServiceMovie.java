package com.sofka.crud.peliculas.sofka.services;

import com.sofka.crud.peliculas.sofka.entities.Movie;

import java.util.List;
import java.util.Map;

public interface InterfaceServiceMovie {
    public List<Movie> listAll();
    public Movie listById(Integer id);
    public Movie create(Movie movie);
    public Movie update(Movie movie);
    public Map<String, String> remove(Integer id);
}
