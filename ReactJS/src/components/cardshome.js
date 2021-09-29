import axios from 'axios'
import React, { Component } from 'react'
import './cardshome.css';
import imm from '../components/q.png'
import ReactCircleModal from 'react-circle-modal'
import Input from "react-validation/build/input";
import Form from "react-validation/build/form";


var vari1;
export default class Cards extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             list:[],errmsg:''
        }
    }
    handleit()
    {
        console.log("jg");
    }
    componentDidMount(){
        axios.get('http://localhost:8080/api/test/FarmerPost/')
        .then(res=>{
            console.log(res)
            this.setState({list:res.data})  //list is array of objects (200 objects)
        })
        .catch(error=>{console.log(error)
            this.setState({errmsg:"Server not connected !!"})
        })

        var gg = JSON.parse(localStorage.getItem('user'));
        if(gg){
            const {roles:temp} = gg;
            vari1=temp[0]
        }
        
        //console.log(temp[0]);
        //console.log(gg)
    }

   
    render() {

        return(
            <div>
                
                <div className="row">
               

<div className="container"> 
{this.state.list.map(li=>

                        <div  key={li.id}>
    
    {(() => {
            if (li.status) {
                // let date = li.sowing_time.getDate();
        return (    
                
<div className="card">
    <div className="box">
            <div className="content">
           
        <img className="img11" src={imm} height="120px" width="120px"/>
        
                     
                   <h3>Crop Name: {li.crop_name}</h3>
                  <p> Location: {li.location}
                  </p>


                  {/* <form onSubmit={this.handleit}
                  ref={c => {
                    this.form = c;
                  }}>
                      <div>
                 <Input
                    type="text"
                    
                    value=""
                    // onChange={this.onChangeUsername}
                    
                  />
</div>
                  </form> */}


                     </div>
                            
  <ReactCircleModal
      
      toogleComponent={onClick => (
        <button className='btn2' onClick={onClick}>
          View Details
        </button>)}>
      
 {(onClick) => (
        <div className='mbox'>
             <div className='mbox-snip'>
             <img className="img12" src={imm} height="120px" width="120px"/>
       <div className='detail'>
             <h3>Crop Name: {li.crop_name}</h3>
             <p> Location: {li.location} &emsp;&emsp;
             </p>
             <p> Species: {li.species} &emsp;&emsp; Grade: {li.grade} &emsp; Quantity: {li.qty}Kg.  
             </p>
             
             <p> Sowing Time: {li.storage_time} &emsp;&emsp; Storage Time: {li.storage_time} 
             </p>
              
             
             
            
             
             
             
             </div>
          <button className='btn3' onClick={onClick}>
            Close
          </button>
             </div>
          
        </div>
      )}
      </ReactCircleModal>


      </div>
    </div>
    )
}
})()}
  </div>
  )}
                </div>


                {this.state.errmsg}
            </div>
            </div>
        )
    }
}