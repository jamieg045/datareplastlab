import React from "react";
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export class BookItem extends React.Component {

    //Creating a constructor that binds to an instance of the delete method
    constructor()
    {
        super();
        this.DeleteBook = this.DeleteBook.bind(this);
    }

    //Method to delete a book from the server when called upon by the user
    DeleteBook(e)
    {
        e.preventDefault();

        axios.delete('http://localhost:4000/api/book/'+this.props.book._id)
        .then((res)=> {
            this.props.ReloadData();
        })
        .catch();
    }

    render() {
        return (
            <div>
                {/* <h4>{this.props.book.title}</h4>
        <img src={this.props.book.thumbnailUrl}></img>
                <h6>{this.props.book.authors[0]}</h6> */}

                <Card>
                    <Card.Header>{this.props.book.title}</Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <img src={this.props.book.cover}></img>
                            <footer >
                                {this.props.book.author}
                            </footer>
                        </blockquote>
                    </Card.Body>
                <Link to={'/edit/'+this.props.book._id} className="btn btn-primary">Edit</Link>
                <Button variant="danger" onClick={this.DeleteBook}>Delete</Button>
                </Card>
            </div>
        );
    }
}