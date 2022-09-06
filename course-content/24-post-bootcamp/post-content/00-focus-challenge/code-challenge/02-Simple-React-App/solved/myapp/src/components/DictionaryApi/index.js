import React, { Component } from "react";
import axios from "axios";
import Display from "../Display";

class DictionaryApi extends Component {
    state = {
        data: [],
        word: ""
    }

    componentDidMount() {
        
        // var config = {
        //     headers: {
        //         'Access-Control-Allow-Origin': 'Access-Control-*',
        //         "Access-Control-Expose-Headers": "Access-Control-*",
        //         'Allow-Control-Allow-Methods': 'Access-Control-*',
        //         'Access-Control-Allow-Headers': 'Access-Control-*, Origin, X-Requested-With, Content-Type, Accept',
        //         'Access-Control-Allow-Methods':'GET, POST, PUT, DELETE, OPTIONS, HEAD',
        //         'Allow': 'GET, POST, PUT, DELETE, OPTIONS, HEAD'
        //             }
        // };

        axios.get("http://localhost:8080/all")
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            })
    }

    searchByWord = () => {
        let searchWord = this.state.word.split(" ").join("+");
        console.log(searchWord);

        axios.get(`http://localhost:8080/${this.state.word}`)
            .then(res => {
                console.log(res);
                this.setState({
                    data: res.data,
                    word: ""
                })
            })
            .catch(err => {
                console.log(err);
            })
    }

    searchByLetter = () => {
        axios.get(`http://localhost:8080/all/${this.state.word}`)
            .then(res => {
                console.log(res);
                this.setState({
                    data: res.data,
                    word: ""
                })
            })
            .catch(err => {
                console.log(err);
            })
    }

    getAllWords = () => {
        axios.get(`http://localhost:8080/all`)
            .then(res => {
                console.log(res);
                this.setState({
                    data: res.data,
                    word: ""
                })
            })
    }

    searchWords = (event) => {
        event.preventDefault();
        this.searchByWord();
    }

    searchLetters = (event) => {
        event.preventDefault();
        this.searchByLetter();
    }

    allWords = (event) => {
        event.preventDefault();
        this.getAllWords();
    }

    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <div>
                <input type="text" name="word" value={this.state.value}
                    onChange={this.handleInputChange}></input>
                <button type="submit" onClick={this.searchWords}>Search a WORD</button>

                <input type="text" name="word" value={this.state.value}
                    onChange={this.handleInputChange}></input>
                <button type="submit" onClick={this.searchLetters}>Search by letter</button>
                <button type="submit" onClick={this.allWords}>All Words!</button>
                {this.state.data.map(word => (
                <Display
                    word = {word.WORD}
                    meaning = {word.MEANING}
                />
            ))}
                
            </div>
        )
    }
}

export default DictionaryApi;