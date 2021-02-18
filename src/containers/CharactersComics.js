const CharactersComics = ({ Request, data }) => {
   return (
      <div className="container content">
         <div className="list_character">
            <div className="characters">
               {data.results.map((item, index) => {
                  return (
                     <>
                        <div className="character">
                           <p>
                              {Request === "characters"
                                 ? item.name.substr(0, 16)
                                 : item.title.substr(0, 16)}
                           </p>
                           <img
                              alt={
                                 Request === "characters"
                                    ? item.name.substr(0, 16)
                                    : item.title.substr(0, 16)
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
