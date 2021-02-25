import "./styles.css";
import { DataGrid } from "@material-ui/data-grid";
import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
//import AddSong from "./addSong";

const columns = [
  { field: "id", headerName: "ID", width: 67 },
  { field: "title", headerName: "Title", width: 220 },
  { field: "artist", headerName: "Artist", width: 140 },
  { field: "tempo", headerName: "Tempo", type: "number", width: 95 },
  {
    field: "songLink",
    headerName: "Link",
    description: "This column is a link and is not sortable.",
    sortable: false,
    width: 160
  }
];

let rows = [
  {
    id: 1,
    artist: "God Is Always Good",
    title: "God Is Always Good",
    tempo: 76
  },
  { id: 2, artist: "Leeland", title: "Way Maker", tempo: 70 },
  {
    id: 3,
    artist: "Lannister",
    title: "What A Beautiful Name It Is",
    tempo: 45
  }
];

function addSong(artist, title, tempo) {
  //let lastId = row[-1].id
  console.log(rows[-1]);
  rows.push({
    id: 1, //lastId++,
    artist: artist,
    title: title,
    tempo: tempo
  });
}

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch"
    }
  }
}));

function AddSongForm() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField
          required
          id="titleInput"
          label="Song Title"
          variant="outlined"
        />
        <TextField
          required
          id="artistInput"
          label="Artist"
          variant="outlined"
        />
        <TextField
          required
          id="tempoInput"
          label="Tempo"
          type="number"
          variant="outlined"
        />
        <TextField
          id="linkInput"
          label="Link"
          helperText="If available"
          variant="outlined"
        />
      </div>
      <Container>
        <Button variant="contained" color="primary">
          Add Song
        </Button>
      </Container>
    </form>
  );
}

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

//export default function App() {
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <h1>Drum Set List App</h1>
        <DataTable />

        <AddSongForm />
      </div>
    );
  }
}

function DataTable() {
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
    </div>
  );
}

export default App;
