import { Link } from "react-router-dom";
const Menu = () => {
   return (
      <>
         <div className="container connection">
            <Link to={`/login/`}>Login</Link>
            <Link to={`/signup/`}>Signup</Link>
         </div>
         <div className="container menu">
            <Link to={`/character/`}>Characters</Link>
            <Link to={`/comics/`}>Comics</Link>
         </div>
      </>
   );
};

export default Menu;
