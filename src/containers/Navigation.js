import React, { useState, useEffect } from "react";
const Navigation = () => {
   return (
     <>  
    {searchData.length === 0 && (
       <div className="button-div">
          {offset !== 0 && (
             <button
                onClick={(e) => {
                   if (search.length > 0) {
                      let newSkip = skipChar - 100;
                      setSkip(newSkip);
                      handleSubmit(e, newSkip);
                   } else {
                      setOffset(offset - 100);
                   }
                }}
             >
                Page précédente
             </button>
          )}
          {offset + 100 < data.count && (
             <button
                onClick={(e) => {
                   if (search.length > 0) {
                      let newSkip = skipChar + 100;
                      setSkip(newSkip);
                      handleSubmit(e, newSkip);
                   } else {
                      setOffset(offset + 100);
                   }
                }}
             >
                Page suivante
             </button>
          )}
       </div>
    );
 }
 ;
 </>
}

   export default Navigation;
   
   