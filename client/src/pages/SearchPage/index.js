import React from "react";
import SearchBar from "../../components/SearchBar"
import BookList from "../../components/BookList"
import API from "../../ultis/API";

class SearchPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            books: [],
            searchTerm: ""
        }
    }

    handleInputChange = event => {
        const {value} = event.target;
        this.setState({
            searchTerm: value
        })
        console.log(this.state)
    }

    handleSaveBook = book => {
        API.addBook(book)
           .then(res => console.log(res))
           .catch(err => console.log(err))
    }

    handleFormSubmit = event => {
        event.preventDefault();
        API.getGoogleBooks(this.state.searchTerm)
           .then(res => {
               const bookData = res.data.items.map((item)=>{
                   return {
                       title: item.volumeInfo.title,
                       authors: item.volumeInfo.authors,
                       description: item.volumeInfo.description,
                       image: item.volumeInfo.imageLinks.thumbnail,
                       link: item.volumeInfo.infoLink
                   }
               })
               this.setState( { books: bookData })
               console.log(this.state)
            })
           .catch(err => console.log(err));
    }

    render() {
        return (
            <div className="container">
                <SearchBar onTextChange={this.handleInputChange} onSearchSubmit={this.handleFormSubmit}/>
                <BookList label="Result List" data={this.state.books} handleBook={this.handleSaveBook} buttonLabel="Save"/>
            </div>
        )
    }
}

export default SearchPage