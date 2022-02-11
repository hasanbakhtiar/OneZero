// 13 BlogForm qurulur.
import React, { Component } from 'react'

export class BlogForm extends Component {
    constructor(props){
        super(props)
        this.onTesdiq = this.onTesdiq.bind(this);
        this.onAciqlamaChange = this.onAciqlamaChange.bind(this);
        this.onBasliqChange = this.onBasliqChange.bind(this);
        this.state = {
            basliq:"",
            aciqlama:"",
            error:""
        }
    }
    onTesdiq(e){
        e.preventDefault();
        if(!this.state.basliq || !this.state.aciqlama)
        {
            this.setState({error:"xanalari doldurun"})
        }else{
            this.setState({error:""});
            this.props.onTesdiqGetdi({
                title: this.state.basliq,
                description:this.state.aciqlama
            })

        }
    }
    onAciqlamaChange(e){
        const aciqlama = e.target.value;
        this.setState(()=>({aciqlama}))
    }
    onBasliqChange(e){
        const basliq = e.target.value;
        this.setState(()=>({basliq}))
        
    }
  render() {
    return (
        <div>
            {this.state.error && <p> {this.state.error}</p>}
        <form onSubmit={this.onTesdiq}>

            <div className='mb-3'>
                <input onChange={this.onBasliqChange} type="text" placeholder='enter title' />
            </div>
            <div>
                <textarea cols="30" rows="10" onChange={this.onAciqlamaChange} placeholder='enter description'></textarea>
            </div>
            <div>
                <button type='submit' className='btn btn-primary'>Save</button>
            </div>
        </form>
    </div>
    )
  }
}

export default BlogForm