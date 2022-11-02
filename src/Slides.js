import "./App.css";
import {useState} from "react";
import{data} from "./data";

function App() {
  const [breakfast, setBreakfast] = useState(0);
  const {id, name, description, image} = data[breakfast];
  const [showMore, setShowMore] = useState(false);

  const backRecipe = () => {
    setBreakfast((breakfast => {
      breakfast --;
      setShowMore(false);
      if(breakfast < 0) {
      return data.length -1;
      }
      return breakfast;
    }))
  }
  const nextRecipe = () => {
    setBreakfast((breakfast => {
      breakfast ++;
      setShowMore(false);
      if(breakfast > data.length -1) {
        breakfast = 0;
      }
      return breakfast;
    }))
  }
  return(
    <div>

      <div className="container">
        <h1>Let's cook the best {data.length} breakfasts with eggs</h1>
      </div>

      <div className="container">
        <h2>{id}-{name}</h2>
      </div>

      <div className="container">
        <img src={image} width="400px" alt="eggs"/>
      </div>

      <div className="container">
        <h3>{showMore ? description : description.substring(0, 250) + "..."}
        <button className="btnShow" onClick={() => setShowMore(!showMore)}>{showMore ? "Show Less" : "Show More"}</button>
        </h3>
      </div>

      <div className="btn container">
        <button className="btnOne" onClick={backRecipe}>BACK RECIPE</button>
        <button className="btnTwo" onClick={nextRecipe}>NEXT RECIPE</button>
      </div>


    </div>
  )
}
export default App;