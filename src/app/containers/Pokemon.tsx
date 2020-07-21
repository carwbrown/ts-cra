import React, { useState, useCallback, useEffect } from "react";
import { Container } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import PokemonCard from "./PokemonCard";

// https://openlibrary.org/api/books?format=json&jscmd=data

interface IPokemon {
  name: string;
}

const fetchPokemon = async (offset = 20, limit = 20) => {
  const pokemonDataRes = await fetch(
    `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`,
  );
  const getPokemonData = await pokemonDataRes.json();

  return getPokemonData.results;
};

const Pokemon = () => {
  const [loading, setLoading] = useState(true);
  const [pokemon, setPokemon] = useState<IPokemon[]>([]);

  const fetchData = useCallback(async () => {
    setLoading(true);
    const fetchedPokemon = await fetchPokemon();
    setPokemon(fetchedPokemon);

    setLoading(false);
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (loading) {
    return <div>Loading Pokemon...</div>;
  }

  return (
    <Container>
      <h2>Pokemon</h2>
      <Grid
        container
        direction="row"
        justify="space-evenly"
        alignItems="flex-start"
        spacing={5}
      >
        {pokemon.map((mon: IPokemon) => {
          return <PokemonCard key={mon.name} name={mon.name} />;
        })}
      </Grid>
    </Container>
  );
};

export default Pokemon;
