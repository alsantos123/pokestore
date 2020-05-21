import React, { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { fade, makeStyles } from "@material-ui/core/styles";
import { Grid, Card, CardMedia, CardContent, CardActions, Button, Typography, CircularProgress } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
import { grey } from '@material-ui/core/colors';
import api from '../services/api';

import MarketTemplate from '../components/marketTemplate'

const useStyles = makeStyles((theme) => ({
    pokedexContainer: {
        padding: 0,

    },
    cardMedia: {
        width: "130px", 
        height: "130px",
        margin: "auto",
        marginTop: '10px'
    },
    cardContent: {
        textAlign: "center",
    },
    cardActions: {
        padding: 0,
    },
    cardButton: {
        width: "100%",
    },
}));

const Home = (props) => {

    const classes = useStyles();
    const [pokemon, setPokemon] = useState({});
    const [pokemonDetail, setPokemonDetail] = useState({});

    // Carrega todas os pokemons
    const loadPokemonByType = async () => {
        api.get(`https://pokeapi.co/api/v2/pokemon?limit=100`)
            .then(function (response) {
                const { data } = response;
                const { results } = data;
                const newPokemonData = [];
                results.forEach((pokemon, index) => {
                    newPokemonData.push({
                        id: index + 1,
                        name: pokemon.name,
                        sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`,
                        image: `https://pokeres.bastionbot.org/images/pokemon/${index + 1}.png`,
                        price: Math.floor(Math.random() * 100)
                    });
                });
                // console.log(results);
                setPokemon(newPokemonData);
                return true;
            });
    }

    useEffect(() => {
        loadPokemonByType();
    }, []);

    // useEffect(() => {
    //     console.log("teste");
    //     // console.log(pokemon);

    //     for(let i  =0; i < pokemon.length; i++)
    //     {
    //         let res = api.get
    //     }

    //     // pokemon.map((obj) => {
    //     //     console.log(obj);
    //     // });

    // }, [pokemon]);

    const getPokemonCard = (pokemonId) => {
        const { id, name, image, price } = pokemon[pokemonId];
        return (
            <Grid item xs={12} sm={6} md={4} lg={3} key={pokemonId}>
                <Card >
                    <CardMedia className={classes.cardMedia} image={image} />
                    <CardContent className={classes.cardContent}>
                        <Typography>{`${id}. ${name}`}</Typography>
                        <Typography>{`R$ ${price},00`}</Typography>
                    </CardContent>
                    <CardActions className={classes.cardActions} aligh="center">
                        <Button className={classes.cardButton} startIcon={<AddShoppingCart />} color="primary" href="#contained-buttons">
                            Capturar Pokemon
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
        );
    };

    return (
        <>
            <MarketTemplate>
                {pokemon ? (
                    <Grid container spacing={2} className={classes.pokedexContainer}>
                        {Object.keys(pokemon).map((pokemonId) =>
                            getPokemonCard(pokemonId)
                        )}
                    </Grid>
                ) : (
                        <CircularProgress />
                    )}
            </MarketTemplate>
        </>
    )

}

export default Home;