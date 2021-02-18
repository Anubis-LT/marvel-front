import "./assets/Css/App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

import Header from "./components/Header";
import Menu from "./containers/Menu";
import Login from "./containers/Login";
import Signup from "./containers/Signup";
import CharactersComics from "./containers/CharactersComics";
import ComicsCharact from "./containers/ComicsCharact";
import Footer from "./components/Footer";

/********Acces backend*********/
const AdressSite = "https://marvel-backend-glt.herokuapp.com/";

function App() {
   const [data, setData] = useState([]);
   const [search, setSearch] = useState("");
   const [source, setSource] = useState();
   const [isLoading, setIsLoading] = useState(true);

   useEffect(() => {
      const fetchData = async (skip) => {
         try {
            setIsLoading(true);
            let req = "";
            if (search !== "") {
               source === "characters"
                  ? (req = `search?name=${search}&`)
                  : (req = `search?title=${search}&`);
            } else {
               req = `characters?limit=100`;
            }
            if (skip !== undefined) {
               req += `&skip=${skip}`;
            }

            const response = await axios.get(`${AdressSite}${req}`);
            console.log(response.data);
            setData(response.data);
            setIsLoading(false);
         } catch (error) {
            alert(error.message);
            console.log(error.message);
         }
      };

      fetchData();
   }, [search, source]);

   return isLoading ? (
      <span>En cours de chargement... </span>
   ) : (
      <>
         <Router>
            <div>
               <Header />
               <Menu />
               <Switch>
                  <Route path="/comics">
                     {setSource["comics"]}
                     <CharactersComics
                        AdressSite={AdressSite}
                        Request="comics"
                        data={data}
                     />
                  </Route>
                  <Route path="/comics/:characterId">
                     <ComicsCharact />
                  </Route>

                  <Route path="/login">
                     <Login AdressSite={AdressSite} />
                  </Route>
                  <Route path="/signup">
                     <Signup AdressSite={AdressSite} />
                  </Route>
                  <Route path="/">
                     {setSource[""]}
                     <CharactersComics
                        AdressSite={AdressSite}
                        Request="characters"
                        data={data}
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
