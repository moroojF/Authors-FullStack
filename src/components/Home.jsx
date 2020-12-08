import React from 'react'
import { Link } from '@reach/router';
import axios from 'axios';

export default props => {
    const { removeFromDom } = props;

    const myDelete = authorId => {
        axios.delete("http://localhost:8000/api/author/delete/" + authorId)
            .then(res => {
                removeFromDom(authorId);
            })
            .catch(err => console.log(err))
    }

    return (
        <>
            <h1>Favorite authors</h1>
            <Link to="/new" >Add an author</Link>
            <p>We have quotes by:</p>
            <table className="table-control">
                <th>
                    <td>Author</td>
                    <td>Actions available</td>
                </th>
                {props.authors.map((author) => {
                    return <tr key={author._id}>
                        <td>{author.name}</td>
                        <td>
                        <div className="btn-group">
                            <Link to={`/${author._id}/update`} className="btn btn-outline-secondary my-2">Edit</Link>
                            <button onClick={e => { myDelete(author._id) }} className="btn btn-outline-secondary my-2" >Remove</button>
                            </div>
                        </td>
                    </tr>
                })}
            </table>
        </>
    )
}