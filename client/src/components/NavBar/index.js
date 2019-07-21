import React from "react"
import { Link } from "react-router-dom"
import "./style.css"

const NavBar = ({...props})=>{
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
            <div className="text-light nav-brand ">Google Book Search</div>
            <Link className="nav-link" 
                         to="/" >
                    Search
            </Link>
            <Link className="nav-link" 
                         to="/saved" >
                    Saved
            </Link>
        </nav>
    )
}

export default NavBar;