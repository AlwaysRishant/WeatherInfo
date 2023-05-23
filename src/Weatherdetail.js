import { useState} from "react";
import"../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Weather from "./Weathercondition";
export default function Weatherdetail() {
  const[city,setCity]=useState("Bhopal"); 
  const[newcity,setnewCity]=useState("Bhopal");
  const handleSubmit=(e)=>{
      e.preventDefault();
      setnewCity(city);
      document.querySelector(".me-2").value="";
  }
  return(
    <div>
      <nav className="navbar bg-body-tertiary">
    <div className="container-fluid">
        <h2 className="navbar-brand">Weather App</h2>
        <form className="d-flex" role="search" onSubmit={handleSubmit}>
        <input className="form-control me-2" type="search" placeholder="Search" onChange={(e)=>{
            setCity(e.target.value);
        }} aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit" >Search</button>
        </form>
       
    </div>
    </nav>
    {<h1 className="text-center">Weather for {newcity}</h1>}
    {city && <Weather cityname={newcity}/>}
    </div>
  )
}