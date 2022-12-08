import {useState} from "react";
import {data} from "./Profile";
function App(){
  const [people,setPeople]=useState(data)
  const remove=(id)=>{
    let newPerson=people.filter((person) =>person.id!==id)
    setPeople(newPerson)
  }
  return(
    <>
    <h3 style={{backgroundColor:"plum",color:"purple",textAlign:"centre",fontSize:"40px"}}>You have {people.length} Birthday's today. </h3>
    {people.map((person) => {const {id,name,age,image}=person
    return(
      <div className="container">
        <img src={image} alt={name} />
        <ul>
         <li>{name}</li>
         <li>{age}</li>
        </ul>
        <button className="btn" onClick={() => remove(id)}>DISMISS</button>
      </div>
    )
  })}
    </>
  )

}
export default App