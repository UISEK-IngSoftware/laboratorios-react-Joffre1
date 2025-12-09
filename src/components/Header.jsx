import { AppBar, Container, Toolbar } from "@mui/material";
import pokedexLogo from "../assets/pokedex.png";
import "./Header.css";

export function Header(){
     return(
        <Container>
         <div className="pokedex-navbar">
             <AppBar position="static">
                 <Toolbar>
                       <div className="image-container">
                            <img src={pokedexLogo} alt="Logo" height={100} />
                       </div>
                 </Toolbar>
             </AppBar>
         </div>
        </Container>
     );
 }