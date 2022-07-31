import React from 'react';
import { CssBaseline } from '@mui/material';
import { Route,Routes } from 'react-router-dom';
import { Actors,MovieInformation,Profile,Navbar,Movies } from "./";
import useStyles from "./styles";

const App = () => {
  const classes = useStyles(); 
  return (
    <div className={classes.root}>
        <CssBaseline/>
        <Navbar/>
        <main className={classes.content}> 
        <div className={classes.toolbar}/>
            <Routes>
                <Route exact path="/Actors" element={<Actors/>} />
                <Route exact path="/MovieInformation" element={<MovieInformation/>} />
                <Route exact path="/Profile" element={<Profile/>} />
                <Route exact path="/" element={<Movies/>} />
            </Routes>
        </main>
    </div>
  )
}

export default App;