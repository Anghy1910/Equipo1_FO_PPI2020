import React, { Component } from 'react'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
import axios from 'axios'

export default class CreateNote extends Component {

    state = {
        title: '',
        content: '',
        fecha: new Date(),
        editing: false,
        _id: ''
    }

    async componentDidMount() {
            const res = await axios.get('http://localhost:4000/api/notas');
            console.log(res.data)
            this.setState({
                title: res.data.title,
                content: res.data.content,
                fecha: new Date(res.data.date),
                _id: res.data._id,
                editing: true
            });
    }

    onSubmit = async (e) => {
        e.preventDefault();
        if (this.state.editing) {
            const updatedNote = {
                title: this.state.title,
                content: this.state.content,
                fecha: this.state.date
            };
            await axios.put('http://localhost:4000/api/notas' + this.state._id, updatedNote);
        } else {
            const newNote = {
                title: this.state.title,
                content: this.state.content,
                fecha: this.state.date
            };
            axios.post('http://localhost:4000/api/notas', newNote);
        }
        window.location.href = '/';

    }

    onInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onChangeDate = date => {
        this.setState({ date });
    }

    render() {
        return (
            <div className="col-md-6 offset-md-3">
                <div className="card card-body">
                    <h4>Create a Note</h4>
                    <form onSubmit={this.onSubmit}>
                        
                        {/* Note Title */}
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Title"
                                onChange={this.onInputChange}
                                name="title"
                                value={this.state.title}
                                required />
                        </div>
                        {/* Note Content */}
                        <div className="form-group">
                            <textarea
                                type="text"
                                className="form-control"
                                placeholder="Content"
                                name="content"
                                onChange={this.onInputChange}
                                value={this.state.content}
                                required>
                            </textarea>
                        </div>
                        {/* Note Date */}
                        <div className="form-group">
                            <DatePicker className="form-control" selected={this.state.fecha} onChange={this.onChangeDate} />
                        </div>
                        <button className="btn btn-primary">
                            Save <i className="material-icons">
                                assignment</i>
                        </button>
                    </form>
                </div>
            </div>
        )
    }
}