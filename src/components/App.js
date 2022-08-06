import React,{useRef} from 'react';
import { CssBaseline } from '@mui/material';
import { Route, Routes,Navigate } from 'react-router-dom';
import { Actors, MovieInformation, Profile, Navbar, Movies } from "./";
import useStyles from "./styles";
import useAlanAI from './AlanAI';

const App = () => {
  const classes = useStyles();
  const alanBtnContainer = useRef();
  useAlanAI();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Navbar />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Routes>
          <Route exact path="/" element={<Movies />} />
          <Route exact path="/approved" element={<Movies />} />
          <Route exact path="/Actor/:id" element={<Actors />} />
          <Route exact path="/Movie/:id" element={<MovieInformation />} />
          <Route exact path="/Profile/:id" element={<Profile />} />
          <Route path="*" element= {<Navigate to="/" replace />} />
        </Routes>
      </main>
      <div ref={alanBtnContainer}/>
    </div>
  )
}

export default App;