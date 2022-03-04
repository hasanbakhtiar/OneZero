import React,{Component} from "react";
import ReactDOM from "react-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';



class Book extends Component{

  constructor(props){
    super(props);
    this.langChangeAz = this.langChangeAz.bind(this);
    this.langChangeEn = this.langChangeEn.bind(this);
    this.state ={
      langOne:"Ana Sehife",
      langTwo: "Haqqimizda",
      langThree : "Elaqe",
      mode: "navbar navbar-expand-lg navbar-light bg-light"
    }
  }

  langChangeAz(){
    this.setState(
      {
        langOne:"Ana Sehife",
        langTwo: "Haqqimizda",
        langThree : "Elaqe",
        mode: "navbar navbar-expand-lg navbar-dark bg-dark"
      }
    )
  }


  langChangeEn(){
    this.setState(
      {
        langOne:"Home",
        langTwo: "About",
        langThree : "Contact",
        mode: "navbar navbar-expand-lg navbar-light bg-light"

      }
    )
  }

  render(){
    return(
            <nav className={this.state.mode}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">{this.state.langOne}</a>
              </li>

              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">{this.state.langTwo}</a>
              </li>

              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">{this.state.langThree}</a>
              </li>
            </ul>
            <div className="d-flex">
            <button onClick={this.langChangeAz} className="btn btn-outline-success me-3" type="submit">AZ/Dark</button>
              <button onClick={this.langChangeEn} className="btn btn-outline-success" type="submit">EN/Light</button>
             
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

ReactDOM.render(<Book />,document.querySelector("#root"));