import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {
    const [note, setNote] = useState({
        title: "",
        content: ""
    });
    function handleChange(event) {
        const { name, value } = event.target;
        setNote(prevValue => {
            return {
                ...prevValue,
                [name]: value
            };
        });
    }

    function handleClick(event) {
        props.onAdd(note);
        setNote({
            title: "",
            content: ""
        });
        event.preventDefault();
    }
    const [clicked,clicking] = useState(false);


    return (
        <div>
            <form className="create-note">
                {clicked && <input onChange={handleChange} value={note.title} name="title" placeholder="Title" />}
                <textarea onChange={handleChange} onClick = {() =>{ return clicking(true)}} value={note.content} name="content" placeholder="Take a note..." rows={clicked ? "3":"1"} />
                <Zoom in={clicked}>
                    <Fab onClick={handleClick}>
                        <AddIcon />
                    </Fab>
                </Zoom>
            </form>
        </div>
    );
}

export default CreateArea;
