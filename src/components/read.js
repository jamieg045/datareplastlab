import React from "react";
import { Books } from "./books";
import axios from "axios";

export class Read extends React.Component{

    constructor()
    {
        super();
        this.ReloadData = this.ReloadData.bind(this);
    }
    

    componentDidMount() {
        axios.get('http://localhost:4000/api/books')
        .then((response)=>{
            this.setState({books:response.data})
        })
        .catch((error)=>{
            console.log(error);
        })
    }


    ReloadData()
    {
        axios.get('http://localhost:4000/api/books')
        .then((response)=>{
            this.setState({books:response.data})
        })
        .catch((error)=>{
            console.log(error);
        })
    }

    state = {
        books:[ ]
    }
    
    render(){
        return(
            <div>
                <h3>Hello from my Read component!</h3>
                <Books books={this.state.books} ReloadData={this.ReloadData}></Books>
            </div>
        );
    }
}