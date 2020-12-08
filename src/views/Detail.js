import React, { useEffect, useState } from 'react';
import { Link, navigate } from '@reach/router';
import axios from 'axios';

export default props => {
    const [author, setAuthor] = useState({})

    useEffect(() => {
        axios.get(`http://localhost:8000/api/author/${props.id}`)
            .then(res => {
                setAuthor(res.data.author);
                
            })
    }, [props.id])

    const myDelete = () => {
        axios.delete("http://localhost:8000/api/author/delete/" + props.id)
            .then(res => {
                navigate("/");
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="row d-flex justify-content-center my-4">
            <div className="card text-left">
                <div className="card-body">
                    <h4 className="card-title">{author.name}</h4>
                </div>
                <div className="card-footer btn-group">
                    <Link className="btn btn-outline-secondary my-2" to="/" >Home</Link>
                    <Link className="btn btn-outline-secondary my-2" to={`/${author._id}/update`} >Update</Link>
                    <button className="btn btn-outline-secondary my-2" onClick={myDelete} >Remove</button>
                </div>
            </div>
        </div>
    )
}