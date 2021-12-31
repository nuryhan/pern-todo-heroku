import React, {Fragment, useState} from 'react'

const EditTodo = ({todo}) => {
    const [description,setDescription]= useState(todo.description);

    const updateDescription = async (e)=> {
        e.preventDefault();
        try {
            const body = {description};
            const response = await fetch(`/todos/${todo.todo_id}`, {
                method: 'PUT',
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            } )
            console.log(response);
            window.location= "/";
        } catch (err) {
            console.error(err.message);
        }
    }

    return (
        <Fragment>
            {/* <-- Button trigger modal --> */}
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target={`#modal${todo.todo_id}`} >
                Edit 
            </button>

            {/* <!-- Modal --> */}
            <div className="modal fade" id={`modal${todo.todo_id}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Edit Todo </h5>
                    <button type="button" className="btn-close" 
                    data-bs-dismiss="modal" 
                    aria-label="Close" 
                    onClick={()=> setDescription(todo.description)}></button>
                </div>
                <div className="modal-body">
                    <input type="text" className="form-control" value={description} onChange={e=> setDescription(e.target.value)} />
                </div>
                <div className="modal-footer">
                    <button type="button" 
                    className="btn btn-success"
                    data-bs-dismiss="modal" 
                    onClick={e=> updateDescription(e)}>Update</button>
                    <button type="button" 
                    className="btn btn-danger" 
                    data-bs-dismiss="modal"
                    onClick={()=> setDescription(todo.description)}>Close</button>
                </div>
                </div>
            </div>
            </div>
        </Fragment>
    )
}

export default EditTodo
