import React, { useState } from 'react';
import { Box, Button, CircularProgress, Grid, Typography } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowBack } from '@mui/icons-material';

import useStyles from './styles';
import { useGetActorDetailQuery, useGetMoviesByActorIdQuery } from '../../services/TMDB';
import { MovieList, Pagination } from '..';

const Actors = () => {
    const classes = useStyles();
    const { id } = useParams();
    const [page, setPage] = useState(1);
    const { data, isFetching, error } = useGetActorDetailQuery(id);
    const { data: actorMovies, isFetching: isActorsMovieFetching, error: actorError } = useGetMoviesByActorIdQuery({ id, page });
    const navigate = useNavigate();
    if (isFetching) {
        return (
            <Box display="flex" justifyContent="center" alignItems="center">
                <CircularProgress size="8rem" />
            </Box>
        );
    }

    if (error) {
        console.log(error);
        return (
            <Box display="flex" justifyContent="center" alignItems="center">
                <Button startIcon={<ArrowBack />} onClick={() => navigate(-1)} color="primary">Go Back</Button>
            </Box>
        );
    }
    console.log(actorMovies);
    return (
        <>
            <Grid container spacing={3}>
                <Grid item lg={5} xl={4}>
                    <img
                        className={classes.image}
                        src={`https://image.tmdb.org/t/p/w780/${data?.profile_path}`}
                        alt={data.name}
                    />
                </Grid>
                <Grid item lg={7} xl={8} style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                    <Typography variant="h2" gutterBottom>{data?.name}</Typography>
                    <Typography variant="h5" gutterBottom>Born: {new Date(data?.birthday).toDateString()}</Typography>
                    <Typography variant="body1" align="justify" paragraph>{data?.biography || 'Sorry, no biography yet...'}</Typography>
                    <Box marginTop="2rem" display="flex" justifyContent="space-around">
                        <Button variant="contained" color="primary" target="_blank" href={`https://www.imdb.com/name/${data?.imdb_id}`}>IMDB</Button>
                        <Button startIcon={<ArrowBack />} onClick={() => navigate(-1)} color="primary">Back</Button>
                    </Box>
                </Grid>
            </Grid>
            <Box margin="2rem 0">
                <Typography variant="h2" align="center" gutterBottom>Movies</Typography>
                {isActorsMovieFetching ? <Box display="flex" justifyContent="center" alignItems="center" height='20rem'>
                    <CircularProgress size="4rem" />
                </Box> :
                    actorMovies
                        ? <MovieList movies={actorMovies} numberOfMovies={12} />
                        : <Box>Sorry, nothing is found.</Box>
                }
                <Pagination currentPage={page} setPage={setPage} totalPages={actorMovies?.total_pages} />
            </Box>
        </>
    );
};

export default Actors;