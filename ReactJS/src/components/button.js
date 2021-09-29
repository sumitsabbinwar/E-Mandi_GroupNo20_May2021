import React, { Component,useState } from "react";
import { Redirect } from "react-router-dom";
import Addcrops from "../common/addcrop";
import AuthService from "../services/auth.service";

class Btn extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      refvar2:false
    };
  }



    componentDidMount() {
        const currentUse = AuthService.getCurrentUser();
        
    }

    addCrop=()=>{
      this.setState({ refvar2:!this.state.refvar2})
      
    }
  
    render(){
      const { refvar2 } = this.state;
        return(<div>

        <div>
             <div class="text-center">
        <button class="btn btn-primary me-2" type="button" onClick={this.addCrop}>Add Crops</button>
        </div> </div>



        {refvar2 ?
          <div> 
<Addcrops/>
</div>: null} 



        </div>
    
  )
}
};

export default Btn;
