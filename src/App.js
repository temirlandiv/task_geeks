import { useEffect, useState } from "react";
import "./App.css";
import Cart from "./components/Cart/cart";
import axios from "axios";
function App() {
  const [task, setTask] = useState([]);
  const [pokemons, setPokemons] = useState([]);
  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/ ")
      .then((response) => response.json())
      .then((data) => {
        setTask(data);
      })
      .catch((error) => console.error(error)); 

  }, []);   

  const getPokemons = async () => {
    task?.results?.forEach(async (item) => {
      const response = await axios.get(item.url);
      pokemons.push(response.data);
    });
  };
  useEffect(() => {
    getPokemons();
  }, [task]);

  return (
    <>
      <div className="wraper">
        {" "}
        {pokemons?.map((item) => {
          return <Cart
          art key={item.id} item={item} />;
        })}
      </div>
    </>
  );
}

export default App;
