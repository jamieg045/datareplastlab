import React from "react";
import {BookItem} from './bookItem';
import {Read} from './read'

export class Books extends React.Component{
    render(){
        return this.props.books.map(
            (book)=>{
                return <BookItem book={book} key={book._id} ReloadData={this.props.ReloadData}></BookItem>
            }
        );
    }
}