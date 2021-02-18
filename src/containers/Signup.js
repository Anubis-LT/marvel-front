import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

const Signup = ({ setUser, AdressSite }) => {
   const [username, setUserName] = useState();
   const [phone, setPhone] = useState();
   const [email, setEmail] = useState();
   const [password, setPassword] = useState();
   const [file, setFile] = useState({});
   const [preview, setPreview] = useState("");

   const history = useHistory();

   const handleSubmit = async (event) => {
      try {
         event.preventDefault();
         const formData = new FormData();
         formData.append("picture", file);
         formData.append("username", username);
         formData.append("email", email);
         formData.append("phone", phone);
         formData.append("password", password);

         const response = await axios.post(
            `${AdressSite}/user/signup`,
            formData
         );
         if (response.data.token) {
            setUser(response.data.token);
            // Naviguer vers la home page
            history.push("/");
         }
      } catch (error) {
         alert("toto:" + error);
         console.log(error);
      }
   };
   return (
      <div>
         <div className="container">
            <form onSubmit={handleSubmit}>
               <div className="login">
                  <span>S'inscrire</span>

                  <input
                     onChange={(event) => setUserName(event.target.value)}
                     type="text"
                     value={username}
                     placeholder="Nom d'utilisateur"
                  />
                  <input
                     onChange={(event) => setEmail(event.target.value)}
                     type="text"
                     value={email}
                     placeholder="Adresse Email"
                  />
                  <input
                     onChange={(event) => setPassword(event.target.value)}
                     type="password"
                     value={password}
                     placeholder="Mot de Passe"
                  />
                  <div className="file-select">
                     {preview ? (
                        <div className="dashed-preview-image">
                           <img src={preview} alt="pré-visualisation" />
                           <div
                              className="remove-img-button"
                              onClick={() => {
                                 setPreview("");
                              }}
                           >
                              X
                           </div>
                        </div>
                     ) : (
                        <div className="dashed-preview-without">
                           <div className="input-design-default">
                              <label htmlFor="file" className="label-file">
                                 <span className="input-sign">+</span>
                                 <span>Ajoute une photo</span>
                              </label>
                              <input
                                 id="file"
                                 type="file"
                                 className="input-file"
                                 onChange={(event) => {
                                    setFile(event.target.files[0]);
                                    setPreview(
                                       URL.createObjectURL(
                                          event.target.files[0]
                                       )
                                    );
                                 }}
                              />
                           </div>
                        </div>
                     )}
                  </div>

                  <input
                     onChange={(event) => setPhone(event.target.value)}
                     type="text"
                     value={phone}
                     placeholder="Téléphone"
                  />

                  <div className="newsletterInscription">
                     <input type="checkbox" />
                     S'incrire à notre newsletter
                  </div>
                  <p></p>
                  <p>
                     En m'inscrivant je confirme avoir lu et accepte les Termes
                     & Conditions Politique de Confidentialité de Vinted; Je
                     confirme avoir au moins 18 ans.
                  </p>
                  <button type="submit">S'inscrire</button>
                  <p>
                     <Link to="/login">
                        Tu as déja un compte ? Connecte toi !
                     </Link>
                  </p>
               </div>
            </form>
         </div>
      </div>
   );
};

export default Signup;
