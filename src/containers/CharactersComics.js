import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const CharactersComics = ({
   adressSite,
   source,
   setSource,
   search,
   setSearch,
}) => {
   const [data, setData] = useState([]);
   const [isLoading, setIsLoading] = useState(true);

   useEffect(() => {
      try {
         const fetchData = async () => {
            setIsLoading(true);
            let req = "";
            if (search !== "") {
               // condition search for characters and comics
               source === "characters" // condition
                  ? (req = `name=${search}`) // list all characters
                  : source === "comics" && // condition
                    (req = `title=${search}`); // list all comics

               // condition list comics for id characters  already assigned in source => source/id)
            } else {
               // req = `limit=100`;
            }
            // const skip = 1;
            //if (skip !== undefined) {
            //   req += `&skip=${skip}`;
            //}

            const response = await axios.post(`${adressSite}display/`, {
               request: req,
               source: source,
            });
            setData(response.data);
            setIsLoading(false);
         };
         fetchData();
      } catch (error) {
         console.log(error.message);
         <p>Erreur de requete</p>;
      }
   }, [adressSite, search, source]);

   return isLoading ? (
      <>
         <p>on rappelle tous les heros en ce moment</p>
      </>
   ) : (
      <div className="container content">
         <div className="list_character">
            <div className="characters">
               {console.log(source)}

               {source[0] !== "" && source[0].substr(0, 7) === "comics/"
                  ? data.comics &&
                    data.comics.map((item, index) => {
                       return (
                          // Characters in comics
                          <div className="character characterInComics">
                             <p key={item._id}>
                                <img
                                   alt={item.title && item.title.substr(0, 16)}
                                   src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
                                />
                                <p>{item.title}</p>
                                <p>{item.description}</p>
                             </p>
                          </div>
                       );
                    })
                  : data.results.map((item, index) => {
                       return (
                          <>
                             <div className="character">
                                <p key={item._id}>
                                   {source === "characters"
                                      ? item.name && item.name.substr(0, 16)
                                      : item.title && item.title.substr(0, 16)}
                                </p>
                                {source === "characters" ? (
                                   <Link
                                      onClick={() => {
                                         // setData([]);
                                         const newSource = `comics/${item._id}`;
                                         setSource([newSource]);
                                      }}
                                      to="/comicscharacters"
                                   >
                                      {" "}
                                      <img
                                         alt={
                                            source === "characters"
                                               ? item.name &&
                                                 item.name.substr(0, 16)
                                               : item.title &&
                                                 item.title.substr(0, 16)
                                         }
                                         src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
                                      />
                                   </Link>
                                ) : (
                                   <img
                                      alt={
                                         source === "characters"
                                            ? item.name &&
                                              item.name.substr(0, 16)
                                            : item.title &&
                                              item.title.substr(0, 16)
                                      }
                                      src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
                                   />
                                )}

                                <p>
                                   {item.description &&
                                      `${item.description.substr(0, 50)}...`}
                                </p>
                             </div>
                          </>
                       );
                    })}
            </div>
         </div>
      </div>
   );
};

export default CharactersComics;
