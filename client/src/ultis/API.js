import axios from "axios";

export default {
    getBooks: () => {
        return axios.get("/api/books")
    },
    removeBook: (bookId) => {
        return axios.delete(`/api/books/${bookId}`)
    },
    addBook: (bookData) => {
        return axios.post("/api/books", bookData)
    },
    getGoogleBooks: (querry) => {
        const querryString = `https://www.googleapis.com/books/v1/volumes?q=${querry}`
        return axios.get(querryString)
    }
}