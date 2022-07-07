import getLinks from "./Links";
import getSocials from "./Socials";
import NavButton from "./NavButton";
import './style.css';

function SocialButton(props){
    return(
        <a href={props.link.link} target="_blank">
            <div className="socialButton">
                <div className="socialIcon" dangerouslySetInnerHTML={{__html:props.link.icon}}>
                </div>
            </div>
        </a>
    )
}

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
               {getLinks().map((link, i) =>
              <NavButton key={i} linky={link}/>)}
           </nav>
           <div className="bottom">
               <div className="flex">
               {getSocials().map((social, i)=>
                   <SocialButton key={i} link={social}/>)}
               </div>
           </div>
               
    
       </div>
    );
}

export default Sidebar;