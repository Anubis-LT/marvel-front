import "./assets/Css/App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";

import Header from "./components/Header";
import Menu from "./containers/Menu";
import Login from "./containers/Login";
import Signup from "./containers/Signup";
import CharactersComics from "./containers/CharactersComics";
import ComicsCharact from "./containers/ComicsCharact";
import Footer from "./components/Footer";

/********Acces backend*********/
//const adressSite = "https://marvel-backend-glt.herokuapp.com/";
const adressSite = "http://localhost:3001/";

function App() {
   const [data, setData] = useState([]);
   const [search, setSearch] = useState("");
   const [source, setSource] = useState("");

   return (
      <>
         <Router>
            <div>
               <Header search={search} setSearch={setSearch} />
               <Menu source={source} setSource={setSource} setData={setData} />
               <Switch>
                  <Route path="/comics">
                     <CharactersComics
                        adressSite={adressSite}
                        source="comics"
                        search={search}
                     />
                  </Route>
                  <Route path="/comics/Id">
                     <ComicsCharact />
                  </Route>

                  <Route path="/login">
                     <Login adressSite={adressSite} />
                  </Route>
                  <Route path="/signup">
                     <Signup adressSite={adressSite} />
                  </Route>
                  <Route path="/">
                     <CharactersComics
                        adressSite={adressSite}
                        source="characters"
                        search={search}
                     />
                  </Route>
               </Switch>
               <Footer />
            </div>
         </Router>
      </>
   );
}

export default App;
