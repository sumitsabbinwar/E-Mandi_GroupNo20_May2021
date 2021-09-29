import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import AuthService from "../services/auth.service";
import "../App.css"
import Btn from "./button";
import Axios from "axios";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";
import Addcrops from "../common/addcrop";
import imm from '../components/q.png'
import ReactCircleModal from 'react-circle-modal'

// var profile = "";
// var post = [];
var ff="";
var gg= "";
const cu = {id:null,usernm:null,mail:null,cont:null,adhar:null,role:[],post:{},unm:null};
export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.handleRegister = this.handleRegister.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeAdhar = this.onChangeAdhar.bind(this);
    this.onChangeContact = this.onChangeContact.bind(this);

    this.state = {
      redirect: null,
      userReady: false,
      btnShow: false,
      refvar:false,
      refvar2:false,
      username: "",
      email: "",
      password: "",
      adharno:"",
      contact:"",
      list: []
      // currentUser:{}
    };
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    });
  }

  onChangeContact(e) {
    this.setState({
      contact: e.target.value
    });
  }

onChangeAdhar(e) {
    this.setState({
      adharno: e.target.value
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value
    });
  }

  handleRegister(e) {
    e.preventDefault();

    this.setState({
      message: "",
      successful: false
    });

    // this.form.validateAll();

    const role= [cu.usernm, cu.role[0]]  

console.log(role)
    if (this.checkBtn.context._errors.length === 0) {
      AuthService.update(
        this.state.username,
        this.state.email,
        this.state.password,
        this.state.contact,
        this.state.adharno,
        role
      ).then(
        response => {
          this.setState({
            message: response.data.message,
            successful: true
          });
        },
        error => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          this.setState({
            successful: false,
            message: resMessage
          });
        }
      );
    }

    this.setState({ refvar:!this.state.refvar})
  }

  componentDidMount() {
    const currentUser = AuthService.getCurrentUser();
    // const [btnShow, setBtnShow] = React.useState(false);

    if (!currentUser) this.setState({ redirect: "/home" });
    this.setState({ userReady: true })

    cu.id=currentUser.id;
    cu.usernm=currentUser.username;
    cu.mail=currentUser.email;
    cu.cont=currentUser.contact;
    cu.adhar=currentUser.adharno;
    cu.role = currentUser.roles;

    console.log(currentUser.roles);
    //console.log(this.state.currentUser)
    // const [btnShow, setBtnShow] = React.useState(false);

      //   currentUser.roles &&
      // currentUser.roles.map((role, index) => 
      // {
      //     // if(this.props.role == "ROLE_FARMER")
      //     // this.setState({btnShow: true})
      //     console.log("hello")
      // }
      // );


      Axios.get('http://localhost:8080/api/test/FarmerPost/')
      .then(res=>{
          // console.log(res.data[0].crop_name)
          this.setState({list:res.data})
          cu.post = res.data; 
          console.log(cu.post[0].crop_name)
          console.log(cu.post[2].crop_name)
          cu.unm = res.data[2].crop_name;
          console.log(cu.post,"post")
          console.log(this.state.list,"list")
          // console.log(list[2].crop_name)

      })
      .catch(error=>{console.log(error)
          this.setState({errmsg:"Server not connected !!"})
      })
       gg = JSON.parse(localStorage.getItem('user'));
      // console.log(gg.username,"gg");

      ff = cu.usernm;
      // console.log(list[0].crop_name)
      
  }

  
showProfile=()=>{

  //const currentUr = AuthService.getCurrentUser();
  this.setState({ refvar:!this.state.refvar})
  //console.log("inside showprofile");
  //console.log(profile);
}


addCrop=()=>{

  
  this.setState({ refvar2:!this.state.refvar2})
  
}


  render() {
    
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />
    }

    const { refvar, refvar2 } = this.state;
// if (this.state.)
    return (
      <div className="container">
       
          <button style={{position:"fixed", top:"100px" ,left:"10px" }} class="btn btn-primary me-2 right" type="button" onClick={this.showProfile}>Edit Profile</button>
          

{/* {(btnShow) ?
        <div>
             <div class="text-center">
        <button class="btn btn-primary me-2" type="button">Add Crops</button>
        </div> 
</div>:null} */}

        {(this.state.userReady) ?
        <div>
        
          

           {refvar ?
          <div> 
{/* <div className="col-md-12"> */}
<header className="card4">
        <div className="cardx">

<Form
            onSubmit={this.handleRegister}
            ref={c => {
              this.form = c;
            }}
          >
            {!this.state.successful && (
              <div>
                <div className="form-group">
                  <label htmlFor="username">Username</label>
                  <Input
                    type="text"
                    className="form-control"
                    placeholder={cu.usernm}
                    name="username"
                    value={cu.usernm}
                    onChange={this.onChangeUsername}
                    // validations={[required, vusername]}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <Input
                    type="text"
                    className="form-control"
                    placeholder={cu.mail}
                    name={cu.mail}
                    value={cu.mail}
                    onChange={this.onChangeEmail}
                    // validations={[required, email]}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <Input
                    type="password"
                    className="form-control"
                    name="password"
                    placeholder={cu.password}
                    value={cu.password}
                    onChange={this.onChangePassword}
                    // validations={[required, vpassword]}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="contact">Contact</label>
                  <Input
                    type="text"
                    className="form-control"
                    name="contact"
                    placeholder={cu.cont}
                    value={cu.cont}
                    onChange={this.onChangeContact}
                    // validations={[required, number]}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="adharno">Adhar No.</label>
                  <Input
                    type="text"
                    className="form-control"
                    name="adhar"
                    placeholder={cu.adhar}
                    value={cu.adhar}
                    onChange={this.onChangeAdhar}
                    // validations={[required, adhar]}
                  />
                </div>

                {/* <div>
            <select id="dropdown" onChange={this.onChangeDropdown} required placeholder="Select type">
              <option  >Select</option>
              <option value="trader">Trader</option>
              <option value="farmer">Farmer</option>
              
            </select>
          </div> */}


                <div className="form-group">
                  <br/>
                  <button className="btn btn-primary btn-block">Update</button>
                </div>
              </div>
            )}

            {this.state.message && (
              <div className="form-group">
                <div
                  className={
                    this.state.successful
                      ? "alert alert-success"
                      : "alert alert-danger"
                  }
                  role="alert"
                >
                  {this.state.message}
                </div>
              </div>
            )}
            <CheckButton
              style={{ display: "none" }}
              ref={c => {
                this.checkBtn = c;
              }}
            />
          </Form>

</div>
{/* </div> */}


      
        </header>
        </div>: null} 



 {refvar2 ?
          <div> 
<Addcrops/>
</div>: null} 



       
        {/* <p>
          <strong>Token:</strong>{" "}
          {currentUser.accessToken.substring(0, 20)} ...{" "}
          {currentUser.accessToken.substr(currentUser.accessToken.length - 20)}
        </p> */}
        
        {/* <strong>Authorities:</strong>
        <ul>
          
          {cu.role
          //  &&
          //   cu.role.map((role, index) => <li key={index}>
          //     {role}
          // </li>
          // )
            }
        </ul> */}

        {/* {cu.post
           &&
            cu.post.map((post, index) => <li key={index}>
              {post}
          </li>
          )
            } */}
            {/* <ul>
            {console.log(this.state.list[1])}
</ul> */}
<div className="container2">
{this.state.list.map(li=>

                        <div  key={li.id}>
    {/* {console.log(gg,"gg")} */}
    {console.log(ff,"ff")}
    {console.log(li.user.username,"gg")}
    {(() => {
            if (li.user.username == ff) {
                // let date = li.sowing_time.getDate();
        return (    
                
<div className="card">
    <div className="box">
            <div className="content">
           
        <img className="img11" src={imm} height="120px" width="120px"/>
        
                     
                   <h3>Crop Name: {li.crop_name}</h3>
                  <p> Location: {li.location}
                  </p>

                  {/* style={{position:"fixed", top:"100px" ,left:"150px"}} */}
                  {(!li.status) ?
        <div>
        <p>Sold</p>
        </div>: null} 


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


        {(cu.role[0]=="ROLE_FARMER") ?
        <div style={{position:"fixed", top:"100px" ,left:"150px" }}  >
        <Btn />
        </div>: null} 









      </div>: null}
      </div>
    );
  }
}
