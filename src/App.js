import { Navbar } from "./navbar/navbar";
import "./navbar/index.css";
import {Content} from "./content/index"
import {Card} from "./card/card"
import {Pasti} from "./pasti/index"
import {Pas} from "./pas/index"



function App() {
  return (
    <div >
   <Navbar/>
   <Content/>
   <Card/>
   <Pasti/>
   <Pas/>
    </div>
  );
}

export default App;
