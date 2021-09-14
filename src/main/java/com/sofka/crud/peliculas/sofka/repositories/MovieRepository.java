package com.sofka.crud.peliculas.sofka.repositories;

import com.sofka.crud.peliculas.sofka.entities.Movie;
import org.springframework.data.repository.CrudRepository;

public interface MovieRepository extends CrudRepository<Movie, Integer> {
}
