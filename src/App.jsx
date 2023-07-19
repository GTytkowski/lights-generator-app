import "./App.css";
import { useState } from "react"
import { Counter } from "./components/Counter";
import { SingleLight } from "./components/SingleLight";
import { Text } from "./components/Text";
import { Grid } from "./components/Grid";

function App() {

  const [rows, setRows] = useState(0);
  const [columns, setColumns] = useState(0);

  const handleIncrementRows = () => {
    setRows(rows + 1);
  };
  const handlerDecrementRows = () => {
      if(rows <= 0) return;
      setRows(rows - 1);
  };
  const handleIncrementColumns = () => {
    if(columns >= 9) return;
    setColumns(columns + 1);
  };
  const handlerDecrementColumns = () => {
      if(columns <= 0) return;
      setColumns(columns - 1);
  };

  const totalLights = rows * columns;

  const lights = Array.from({length:totalLights});

  return <div>
    <nav className={"nav"}>
      <Text>{totalLights} bulbs</Text>
      <Counter text={"rows"} value={rows} onIncrement={handleIncrementRows} onDecrement = {handlerDecrementRows} />
      <Counter text={"columns"} value={columns}onIncrement={handleIncrementColumns} onDecrement = {handlerDecrementColumns} />
    </nav>
    <Grid columns ={columns}>
     {lights.map((value, idx) => {
        return <SingleLight key={idx}/>;
     })}
    </Grid>
  </div>;
}

export default App;
