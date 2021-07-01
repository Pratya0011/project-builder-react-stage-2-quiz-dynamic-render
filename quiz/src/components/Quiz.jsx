import React, { Component } from 'react'
import data from '../data.json';
import '../components/quiz.css';
class Quiz extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            i:0,

         }
    }
    renderNext=()=>{
        this.setState({i:this.state.i+1})  
    }
    renderPrevious=()=>{
        if(this.state.i === 0)
        this.setState({i:this.state.i})
        else
        this.setState({i:this.state.i-1})
    }
    render() { 
        return ( 
            <>
            <div className="quiz">
                <h1>Question</h1>
            <div>
             {data.map((item,index)=>(
                 (index===this.state.i)&&
                 <>
                 <div className='question'>
                    <div className='one'>{this.state.i+1} of {data.length}</div>
                    <div className='two'>{item.question}</div>
                 </div>
                 <div className="option">
                     <div>{item.optionA}</div>
                     <div>{item.optionB}</div>
                     <div>{item.optionC}</div>
                     <div>{item.optionC}</div>
                 </div>
                 </>
             ))}
             <div className='button'>
             <div className='colour'><button onClick={this.renderPrevious}>Previous</button></div>
             {(this.state.i < 11)&&<div className='colour'><button onClick={this.renderNext}>Next</button></div>}
             <div className='colour'><button>Submit</button></div>
             </div>
             </div>
             </div>
            </>
         );
    }
}
 
export default Quiz;