import React,{useState} from 'react'

export const AddTodo = ({addTodo}) => {
   const [title, setTitle] = useState("");
   const [desc, setDesc] = useState("");
    const submit=(e)=>{
            e.preventDefault();
            if(!title||!desc){
                alert("Title or Description cannot be empty!!");
            }
            else{
            addTodo(title,desc);
            setTitle("");
            setDesc("");
            }
    }
    return (
        <div className="container muy-3">
            <h3>Add a ToDo</h3>
            <form onSubmit={submit}>
                <div class="mb-3">
                    <label htmlFor="title" className="form-label">ToDo Title</label>
                    <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control" id="title" aria-describedby="emailHelp" />                </div>
                <div class="mb-3">
                    <label htmlFor="desc" className="form-label">Todo Description</label>
                    <input type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}}className="form-control" id="desc" />
                </div>
                <button type="submit" className="btn btn-sm btn-success">Add Todo</button>
            </form>
        </div>
    )
}
