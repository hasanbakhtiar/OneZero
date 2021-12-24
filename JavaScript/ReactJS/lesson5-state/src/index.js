import React,{Component} from "react";
import ReactDOM from "react-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import img1 from './assets/img/img1.jpg';
import img2 from './assets/img/img2.jpg';


class Book extends Component{

  constructor(props){
    super(props);
    this.nextBook = this.nextBook.bind(this);
    this.state ={
      bookImg:img1,
      bookName:"Görünməyən İzlər",
      bookAuthor:"Elxan Elatlı",
      bookPageLenght:300
    }
  }

  nextBook(){
    this.setState(
      {
        bookImg: img2,
        bookName:"Black Coffee",
        bookAuthor: "Agatha Christie",
        bookPageLenght : 150
      }
    )
  }

  render(){
    return(
      <div className="container">
        <h1>Books</h1>
        <img src={this.state.bookImg} width="100" alt="" />
        <h5>Book name: {this.state.bookName}</h5>
        <p>Author: {this.state.bookAuthor}</p>
        <p>Page Lenght: {this.state.bookPageLenght}</p>
        <button onClick={this.nextBook} className="btn btn-primary">Next Book</button>
      </div>
    )
  }
}

ReactDOM.render(<Book />,document.querySelector("#root"));