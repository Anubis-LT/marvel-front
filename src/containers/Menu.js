import { Link } from "react-router-dom";
const Menu = ({ source, setSource }) => {
   return (
      <>
         <div className="container connection">
            <Link to={`/login/`}>Login</Link>
            <Link to={`/signup/`}>Signup</Link>
         </div>
         <div className="container menu">
            <Link
               onClick={() => {
                  setSource(["characters"]);
               }}
               to="/"
            >
               Characters
            </Link>

            <Link
               onClick={() => {
                  setSource(["comics"]);
               }}
               to="/comics"
            >
               Comics
            </Link>
         </div>
      </>
   );
};

export default Menu;
