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

    const myCreate = author => {
        axios.post("http://localhost:8000/api/author/new/", author)
            .then(res => {
                navigate("/" + res.data.author._id)
            })
            .catch(err => console.log(err))
    }

    return (
        <AddForm onSubmitProp={myCreate} initialName="" action="Create" />
    )
}