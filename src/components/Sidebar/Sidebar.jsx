import getLinks from "./Links";
import NavButton from "./NavButton";
import './style.css';

function Sidebar(){
    return(
       <div className="sidebar">
           <a href="/">
                <div className="logoContainer">
                    TradeMyStocks
                </div>
           </a>
           
           <nav>
           <div className="breakline"></div>
               {getLinks().map((link) =>
              <NavButton key={link.name} linky={link}/>)}
           </nav>
       </div>
    );
}

export default Sidebar;