import './App.css';
import data from "./data";
import Card from "./Card";
function App() {


  console.log(data)

  return (
    <div className="App">

        <div>
            <img style={{width:"80px",float:"left",alignSelf:"center",paddingLeft:"800px",paddingTop:"100px"}} src="https://img.icons8.com/material/96/undefined/fast-track--v2.png"/>

            <nav className={"nav"}>
                <h1 style={{marginTop:"100px",marginBottom:"200px"}}>my travel journal.</h1>

            </nav>
        </div>


        {data.map( d=>(
            <div>
                <Card
                    {...d}
                />
                <hr style={{width:"1400px",border:"1px solid #003F88",marginTop:"50px",marginBottom:"50px"}}/>
            </div>


        ) )}



    </div>
  );
}

export default App;
