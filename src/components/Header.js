import Logo from "../assets/img/marvel.png";
const Header = ({ setSearch, search }) => {
   return (
      <>
         <header className="container">
            <img src={Logo} alt="logo marvel" />

            <input
               placeholder="Search Characters Comics..."
               onChange={(e) => setSearch(e.target.value)}
               value={search}
               type="text"
            />
         </header>
      </>
   );
};
export default Header;
