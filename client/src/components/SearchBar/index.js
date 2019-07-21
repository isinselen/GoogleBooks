import React from "react"
import "./style.css"


const SearchBar = (props) => {
    return(
        <div className="card rounded-0 my-2">
            <div className="card-body">
                <h2 className="card-title"> Book Search</h2>
                <form className="form-group " onSubmit={props.onSearchSubmit}>
                    <label htmlFor="searchTerm">Book: </label>
                    <input className="form-control" type="text" name="searchTerm" onChange={props.onTextChange}></input>
                    <button className="btn btn-dark my-2" type="submit" onSubmit={props.onSearchSubmit}>Search</button>
                </form>
            </div>

        </div>

        
    )
}

export default SearchBar