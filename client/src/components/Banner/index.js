import React from "react"
import "./style.css"

class Banner extends React.Component {
    render() {
        return (
        <div className = "jumbotron mb-2 rounded-0 d-flex flex-row justify-content-end" style={{backgroundImage:`url(./banner.jpg)`}}>
            <div className="col-6">
                <h1 className="text-gray">Google Books Search</h1>
                <p className="text-gray"> Search for Books of Interest</p>
            </div>
        </div>
        )
    }
}

export default Banner;