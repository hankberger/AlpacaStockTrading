function ActiveButton(props){
    return(
        <a href={props.link.link}>
            <div className="navLink active">
                <div className="navIcon" dangerouslySetInnerHTML={{__html:props.link.icon}}>
                </div>
                <div className="navName">
                    {props.link.name}
                </div>
            </div>
        </a>
    );
}

function RegButton(props){
    return(
        <a href={props.link.link}>
            <div className="navLink">
                <div className="navIcon" dangerouslySetInnerHTML={{__html:props.link.icon}}>
                </div>
                <div className="navName">
                    {props.link.name}
                </div>
            </div>
        </a>
    );
}

function NavButton(props){
    let active = (window.location.pathname == props.linky.link);
    if(active){
        return <ActiveButton link={props.linky}/>
    } else {
        return <RegButton link = {props.linky}/>
    }
}

export default NavButton;