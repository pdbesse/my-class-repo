import React, { Component } from "react";
import Display from "../Display";
import DisplayDate from "../DisplayDate";
const FA = require("react-fontawesome");

class Todo extends Component {

    state = {
        todoItem: "",
        list: ["Feed the baby"]
    }

    componentDidMount() {
        this.loadData();
    }

    loadData = () => {
        let allList = localStorage.getItem("todo");
        if (allList)
            this.setState({
                list: JSON.parse(allList)
            })
    }

    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
    }

    handleSubmit = event => {
        event.preventDefault();
        console.log(event.target);
        let todoArr = [];
        todoArr.push(...this.state.list);
        todoArr.push(this.state.todoItem);
        localStorage.setItem("todo", JSON.stringify(todoArr));
        this.setState({
            todoItem: ""
        })
        this.loadData();
    }

    handleDelete = event => {
        event.preventDefault();
        console.log(event.target.id);
        let todosInProgress = this.state.list.filter(item => {
            return item != event.target.id
        })
        localStorage.setItem("todo", JSON.stringify(todosInProgress));

        this.setState({
            list: todosInProgress
        })
    }

    render() {
        const Style = {
            submit: {
                "width": "80px",
                "height": "80px",
                "line-height": "80px",
                "border": "2px solid #f5f5f5",
                "border-radius": "50%",
                "color": "#f5f5f5",
                "text-align": "center",
                "text-decoration": "none",
                "background": "#555777",
                "box-shadow": "0 0 3px gray",
                "font-size": "20px",
                "font-weight": "bold"
            }
        }
        return (
            <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-8">
                    <br></br><br></br><br></br><br></br><br></br>
                    <div className="card shadow-lg p-3 mb-5 bg-info rounded col-lg-8 d-flex align-items-stretch" style={{ width: "500px" }}>
                        <div class="card-title text-center">
                            <DisplayDate />
                        </div>
                        <input className="shadow-lg p-3 mb-5 bg-white rounded" type="text" name="todoItem" value={this.state.todoItem} onChange={this.handleInputChange}></input>
                        {this.state.list.map(item => (
                            <Display
                                key={item}
                                id={item}
                                item={item}
                                handleDelete={this.handleDelete}
                            />
                        ))}
                        <div className="text-center">
                            <button className="text-center" type="submit" onClick={this.handleSubmit} className="submit" style={Style.submit}>
                                <FA name="plus" />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="col-md-2"></div>
            </div>
        )
    }
}

export default Todo;