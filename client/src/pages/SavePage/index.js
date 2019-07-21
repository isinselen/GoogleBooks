import React from "react"
import BookList from "../../components/BookList"
import API from "../../ultis/API";

class SavePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            books:[]
        }
    }

    loadBooks() {
        API.getBooks()
           .then(res=> this.setState({ books:res.data}))
           .catch(err => console.log(err))
    }

    handleRemoveBook(bookId) {
        API.removeBook(bookId)
           .then(res => {
               console.log(this)
                document.reload()}
               )
           .catch(err => console.log(err))
    }

    componentDidMount() {
        this.loadBooks()
    }

    render() {
        return (
            <div className="container">
                <BookList label="Saved Books" data={this.state.books} handleBook={this.handleRemoveBook} buttonLabel="Remove" reload={this.loadBooks()}/>
            </div>
        )
    }
}

export default SavePage