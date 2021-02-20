import { useState, useEffect } from "react";
import axios from "axios";

const CharactersComics = ({ adressSite, source, search }) => {
   const [data, setData] = useState([]);
   const [isLoading, setIsLoading] = useState(true);

   useEffect(() => {
      try {
         const fetchData = async () => {
            setIsLoading(true);
            let req = "";
            if (search !== "") {
               source === "characters"
                  ? (req = `search?name=${search}`)
                  : (req = `search?title=${search}`);
            } else {
               req = `${source}?limit=100`;
            }
            const skip = 1;
            if (skip !== undefined) {
               req += `&skip=${skip}`;
            }

            const response = await axios.get(`${adressSite}display/`, {
               request: req,
               source: source,
            });
            setData(response.data);
            setIsLoading(false);
         };
         fetchData();
      } catch (error) {
         console.log(error.message);
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
               {console.log(data.results)}
               {data.results.map((item, index) => {
                  return (
                     <>
                        <div className="character">
                           <p key={item._id}>
                              {source === "characters"
                                 ? item.name && item.name.substr(0, 16)
                                 : item.title && item.title.substr(0, 16)}
                           </p>
                           <img
                              alt={
                                 source === "characters"
                                    ? item.name && item.name.substr(0, 16)
                                    : item.title && item.title.substr(0, 16)
                              }
                              src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
                           />

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
