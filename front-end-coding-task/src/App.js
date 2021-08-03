import "./App.css";
import React, { useEffect, useState } from "react";
import { makeStyles, withTheme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "auto",
    },
  },
}));

function App() {
  const classes = useStyles();
  const [joke, setJoke] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [numberJoke, setNumberJoke] = useState(1);

  const fetchJoke = async () => {
    if (numberJoke) {
      console.log(numberJoke.toString());
    }
    const res = await fetch(
      `http://api.icndb.com/jokes/random/${numberJoke}?firstName=${firstName}&lastName=${lastName}`
    );
    const joke = await res.json();
    setJoke(joke.value);
  };
  console.log(joke);

  const selectName = (e) => {
    e.preventDefault();
    fetchJoke();
  };

  const handleNumberChange = (value) => {
    setNumberJoke(value);
  };

  return (
    <div className="App">
      <div>
        <h1>Do you want some joke?</h1>
      </div>
      <div className="form-style">
        <form
          className={`${classes.root} form`}
          onSubmit={(value) => selectName(value)}
        >
          <TextField
            id="filled-number"
            label="Firstname"
            InputLabelProps={{
              shrink: true,
            }}
            variant="filled"
            type="text"
            name="fistname"
            onChange={(e) => setFirstName(e.target.value)}
            value={firstName}
          />

          <TextField
            id="filled-number"
            label="Lastname"
            InputLabelProps={{
              shrink: true,
            }}
            variant="filled"
            type="text"
            name="lastname"
            onChange={(e) => setLastName(e.target.value)}
            value={lastName}
          />

          <TextField
            id="filled-number"
            label="Number"
            type="number"
            InputProps={{ inputProps: { min: 1, max: 100 } }}
            InputLabelProps={{
              shrink: true,
            }}
            variant="filled"
            onChange={(e) => handleNumberChange(e.target.value)}
            value={numberJoke}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="joke-style">
        {joke ? (
          <ul>
            {joke.map((joke) => {
              return <li key={joke.id}>{joke.joke}</li>;
            })}
          </ul>
        ) : null}
      </div>
    </div>
  );
}

export default App;
