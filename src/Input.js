import { Component } from "react";

export class Input extends Component {
    state = {
        UserInput: "",
        listNote: []
    }
    onChangeEvent(e) {
        this.setState({UserInput: e})
    }
    addNote(input) {
        if(input === "") {
            alert ("Please, put your note")
        }else {
        let noteArray = this.state.listNote;
        noteArray.push(input);
        this.setState({listNote: noteArray, UserInput: ""})
        }
    }
    Enter(e) {
        e.preventDefault();
    }
    render() {
        return(
            <div className="parent">     
            <form onSubmit={this.Enter}>       
                <input type="text" placeholder="Note:" 
                onChange={(e) => {this.onChangeEvent(e.target.value)}}
                value={this.state.UserInput}/>
                <p>
                {this.state.listNote.map((oneNote, index) => (
                <p>key={index} {oneNote}</p>
                ))}
                </p>
                    <div>
                <button onClick={() => this.addNote(this.state.UserInput)}className="btnAdd">Add</button>
                </div>
                </form> 
            </div>
    )
}
}