import React, { useEffect, useState } from 'react';
import { navigate } from '@reach/router';
import axios from 'axios';
import AddForm from '../components/AddForm';

export default props => {
    const [author, setAuthor] = useState({});
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/author/${props.id}`)
            .then(res => {
                setAuthor(res.data.author);
            })
    }, [props.id])

    const myUpdate = author => {
        axios.put("http://localhost:8000/api/author/update/" + props.id, author)
            .then(res => {
                if (res.data.errors) {
                    setErrors(res.data.errors);
                } else {
                    navigate("/" + props.id)
                }
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
        <AddForm onSubmitProp={myUpdate} initialName={author.name} action="Update" errors={errors} />
    )
}