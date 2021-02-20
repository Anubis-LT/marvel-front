import { Link } from "react-router-dom";
const Menu = ({ source, setSource, setData }) => {
   return (
      <>
         <div className="container connection">
            <Link to={`/login/`}>Login</Link>
            <Link to={`/signup/`}>Signup</Link>
         </div>
         <div className="container menu">
            <Link
               onClick={() => {
                  setData([]);
                  setSource(["characters"]);
               }}
               to="/"
            >
               Characters
            </Link>

            <Link
               onClick={() => {
                  setData([]);
                  setSource(["comics"]);
               }}
               to="/comics"
            >
               Comics
            </Link>
            {/*<Link to="/favorites">Favorites</Link>*/}
         </div>
      </>
   );
};

export default Menu;
