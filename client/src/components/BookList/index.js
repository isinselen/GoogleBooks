import React from "react"
import BookCard from "../BookCard"

const BookList = (props)=> {
    return(
        <div className="card mt-2">
            <div className="card-body">
            <h2 className="card-title">{props.label}</h2>
            {
                props.data.map(
                    bookData => <BookCard 
                        data={bookData} 
                        onClickAction={props.handleBook} 
                        buttonLabel={props.buttonLabel}
                        reload={props.reload}/>
                )
            }
            </div>
        </div>
    )
}

export default BookList