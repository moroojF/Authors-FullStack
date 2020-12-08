import React, { useState } from 'react';
import { Link } from '@reach/router';

import 'bootstrap/dist/css/bootstrap.min.css';

const AddForm = props => {
    const { initialName, onSubmitProp, action, errors } = props;
    const [name, setName] = useState(initialName);

    const myCreate = e => {
        e.preventDefault();
        onSubmitProp({
            name
        });
    }
    return (
        <div className="container">
            <h1>Favorite authors</h1>
            <Link to="/" >Home</Link>
            <div className="row d-flex justify-content-center my-4">
                <div className="card text-left">
                    <div className="card-body">
                        <h4 className="card-title">{action} Author</h4>
                        <div className="card-text">
                            <form onSubmit={myCreate}>
                                {errors.map((err, index) => <p key={index}>{err}</p>)}
                                <div className="form-grpup">
                                    <label>Name:</label>
                                    <input type="text" className="form-control" onChange={e => setName(e.target.value)} defaultValue={initialName} />
                                </div>
                                <div className="card-footer text-center">
                                    <div className="btn-group">
                                        <input type="submit" className="btn btn-outline-secondary my-3" value={action} />
                                        <Link className="btn btn-outline-secondary my-3" to="/" >Cancel</Link>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AddForm;
