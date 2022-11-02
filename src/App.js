import "./App.css";
import { useState } from "react";
import{ data } from "./data";
import Slides from "./Slides";
import { Input } from "./Input";

function App() {
  const [recipe, setRecipe] = useState(data);
  const removeRecipe = (id) => {
    let newRecipe = recipe.filter(oneResipe => oneResipe.id !== id );
    setRecipe(newRecipe);
  }
  return(
    <div>
      
      <div>
        <Slides/>
      </div>

      <div className="container">
        <h1>You should try {recipe.length} of these</h1>
      </div>

      {recipe.map((oneResipe => {
        const {id, name, image} = oneResipe;

        return (
          <div key={id} className="container">
            <div className="containerSmall">
              <img src={image} width="200px" alt="egg"/>
              <h3>{name}</h3>
              <Input/>
            <button className="btnDone" onClick={() => removeRecipe(id)}>I Did It</button>
            </div>
          </div>
        )
}))}
        <div className="btn container">
              <button className="btnEvery" onClick={() => setRecipe([])}>I did everything</button>
            </div>
    </div>
  )
}
export default App;