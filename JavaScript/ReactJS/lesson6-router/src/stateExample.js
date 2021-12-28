class Counter extends Component{
    constructor(props){
      super(props);
      this.addCount = this.addCount.bind(this);
      this.clearCount = this.clearCount.bind(this);
      this.state={
        count:0
      }
    }
  
  clearCount(){
    if (this.state.count > 0) {
      this.setState({
        count: this.state.count - 1
      })
    }
  }
  
  addCount(){
    this.setState({
      count: this.state.count + 1
    })
  }
  
  
    render(){
      return(
        <div className="container">
          <h1>U clicked {this.state.count}</h1>
          <button onClick={this.clearCount} className="btn btn-danger me-1">-1</button>
          <button onClick={this.addCount} className="btn btn-success">+1</button>
        </div>
      )
    }
  }