import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from '../components/Home';

export default () => {
    const [authors, setAuthors] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/authors')
            .then(res => {
                setAuthors(res.data.authors);
            });
    }, [authors]);
    const removeFromDom = authorId => {
        setAuthors(authors.filter(author => author._id = !authorId));
    }
    
    return (
        <div className="container">
            <Home authors={authors} removeFromDom={removeFromDom} />
        </div>
    )
}
