import React, { useEffect, useState } from 'react';
import { navigate } from '@reach/router';
import axios from 'axios';
import AddForm from '../components/AddForm';

export default props => {
    const [author, setAuthor] = useState({});
    useEffect(() => {
        axios.get(`http://localhost:8000/api/author/${props.id}`)
            .then(res => {
                setAuthor(res.data.author);
            })
    }, [props.id])

    const myUpdate = author => {
        axios.put("http://localhost:8000/api/author/update/" + props.id, author)
        .then(res => {
            navigate("/" + props.id)
        })
            .catch(err => console.log(err))
    }

    return (
        <AddForm onSubmitProp={myUpdate} initialName={author.name} action="Update"/>
    )
}