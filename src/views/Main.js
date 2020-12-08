import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from '../components/Home';

export default () => {
    const [authors, setAuthors] = useState([]);
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/authors')
            .then(res => {
                setAuthors(res.data.authors);
            });
    }, [authors]);
    const removeFromDom = authorId => {
        setAuthors(authors.filter(author => author._id = !authorId));
    }
    const createAuthor = author => {
        axios.post("http://localhost:8000/api/author/new", author)
            .then(res => {
                setAuthors([...authors, res.data.author]);
            })
            .catch(err => {
                const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                const errorArr = []; // Define a temp error array to push the messages incopy
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
                // Set Errors
                setErrors(errorArr);
            })
    }
    return (
        <div className="container">
            <Home authors={authors} removeFromDom={removeFromDom} />
        </div>
    )
}
