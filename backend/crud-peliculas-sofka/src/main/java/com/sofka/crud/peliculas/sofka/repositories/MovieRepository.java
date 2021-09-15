package com.sofka.crud.peliculas.sofka.repositories;

import com.sofka.crud.peliculas.sofka.entities.Movie;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MovieRepository extends CrudRepository<Movie, Integer> {
}
