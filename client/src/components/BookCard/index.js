import React from "react"

const BookCard = (props)=>{
    return (
            <div className="card my-3 rounded-0">
                <div className="card-header d-flex flex-row justify-content-between">
                    <div className="col-10">
                        <h4 classnName="card-title">{props.data.title}</h4>
                           
                    </div>
                    <div className="col-2">
                        <div className="d-flex flex-column justify-content-center">
                            <a className="btn btn-primary rounded-0" href={props.data.link}>View</a>
                            <button className="btn btn-primary mt-2 rounded-0"
                                reload = {props.reload}
                                onClick={()=>{
                                    props.onClickAction(
                                        props.buttonLabel === "Save" 
                                        ? props.data 
                                        : props.data._id)
                            }}> 
                                {props.buttonLabel} 
                            </button>
                        </div>   
                    </div>
                    
                </div>

                <div className="card-body"> 
                    <div className="row justify-content-start">
                        <div className="col-2">
                            <img className="image-fluid px-auto" style={{width: "80%"}} src={props.data.image} alt="bookImage"/>
                        </div>
                        <div className="col-10">
                            <p>{props.data.description}</p>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default BookCard