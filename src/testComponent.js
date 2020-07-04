import React, { Component } from 'react'

class TestComponent extends Component {

    state = {
        firstname: '',
        lastname: ''
    }

    onSubmit = (event) => {
        event.perventDefult();
        const form = new FormData(event.target);
        this.setState({ name: this.form("input") })
    }

    changeHandler = (event) => {
        const { target: { value, name } } = event;
        this.setState({ [name]: value })
    }


    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <input name="firstname" value={this.state.firstname} onChange={this.changeHandler} placeholder="lotfan : " />
                    <input name="lastname" value={this.state.lastname} onChange={this.changeHandler} placeholder="lotfan : " />
                    <button></button>
                </form>
                {`${this.state.firstname} ${this.state.lastname}`}
            </div>
        )

    }
}


export default TestComponent