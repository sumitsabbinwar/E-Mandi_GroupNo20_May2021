import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

import "../App.css";
import "../components/cardshome.css";
import AuthService from "../services/auth.service";


var gg="";
var ff="";
const required = value => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};




export default class Addcrops extends Component {
  constructor(props) {
    super(props);
    this.handleRegister = this.handleRegister.bind(this);
    this.onChangeCrop_name = this.onChangeCrop_name.bind(this);
    this.onChangeSpecies = this.onChangeSpecies.bind(this);
    this.onChangeGrade = this.onChangeGrade.bind(this);
    this.onChangeSowing_time = this.onChangeSowing_time.bind(this);
    this.onChangeStorage_time = this.onChangeStorage_time.bind(this);
    this.onChangeQty= this.onChangeQty.bind(this);
    this.onChangePhotos= this.onChangePhotos.bind(this);
    this.onChangeLeast_price= this.onChangeLeast_price.bind(this);
    this.state = {
        crop_name: "",
        species: "",
        grade: "",
        sowing_time:"",
        storage_time:"",
        qty: "",
        photos:"",
        least_price:"",
      role:"",
      username:"",
      successful: false,
      successful2: false,
      message: ""
    };
  }

  componentDidMount(){
    gg = JSON.parse(localStorage.getItem('user'));
    console.log(gg.username,"addcrops");

    ff = gg.username;

    this.setState({
      username: ff
  });

  console.log(ff,"addcrops");
  }

  onChangeCrop_name(e) {
    this.setState({
        crop_name: e.target.value
    });
  }

  onChangeSpecies(e) {
    this.setState({
        species: e.target.value
    });
  }

  onChangeGrade(e) {
    this.setState({
        grade: e.target.value
    });
  }

onChangeSowing_time(e) {
    this.setState({
        sowing_time: e.target.value
    });
  }

  onChangeStorage_time(e) {
    this.setState({
        storage_time: e.target.value
    });
  }

//   onChangeDropdown(e) {
//     this.setState({
//       role: e.target.value
//     });
//   }

  onChangeQty(e) {
    this.setState({
        qty: e.target.value
    });
  }

  onChangePhotos(e) {
    this.setState({
      photos: e.target.value
    });
  }
  onChangeLeast_price(e) {
    this.setState({
      least_price: e.target.value
    });
  }
  
  handleRegister(e) {
    e.preventDefault();

    this.setState({
      message: "",
      successful: false
    });

    this.form.validateAll();

   
    // const role= [this.state.username, this.state.role]  
// console.log(role)
    if (this.checkBtn.context._errors.length === 0) {
      AuthService.addcrop(
        this.state.crop_name,
        this.state.species,
        this.state.grade,
        this.state.sowing_time,
        this.state.storage_time,
        this.state.qty,
        this.state.photos,
        this.state.least_price,
        ff
       
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
      this.setState({
        successful2: true,
        
      });

    }
  }

  render() {
    return (
        <div className="flow">
        <header className="card4">
        <div className="cardx">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpordi5-ZLH-8KEfQSpzH6AaAHzlEfdVnTZQ&usqp=CAU"
            // https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpordi5-ZLH-8KEfQSpzH6AaAHzlEfdVnTZQ&usqp=CAU
            alt="profile-img"
            className="profile-img-card"
          />

          <Form
            onSubmit={this.handleRegister}
            ref={c => {
              this.form = c;
            }}
          >
            {!this.state.successful && (
              <div>
                <div className="form-group">
                  <label htmlFor="crop_name">Crop Name</label>
                  <Input
                    type="text"
                    className="form-control"
                    name="crop_name"
                    placeholder="crop name"
                    onChange={this.onChangeCrop_name}
                    validations={[required]}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="species">Species</label>
                  <Input
                    type="text"
                    className="form-control"
                    name="species"
                    placeholder="species"
                    onChange={this.onChangeSpecies}
                    validations={[required]}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="grade">Grade</label>
                  <Input
                    type="text"
                    className="form-control"
                    name="grade"
                    placeholder="grade"
                    onChange={this.onChangeGrade}
                    validations={[required]}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="sowing_time">Date of Sowing </label>
                  <Input
                    type="text"
                    className="form-control"
                    name="sowing_time"
                    placeholder="sowing time"
                    onChange={this.onChangeSowing_time}
                    validations={[required]}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="storage_time">Date of Storage</label>
                  <Input
                    type="text"
                    className="form-control"
                    name="Storage_time"
                    placeholder="Storage time"
                    onChange={this.onChangeStorage_time}
                    validations={[required]}
                  />
                </div>


                <div className="form-group">
                  <label htmlFor="qty">Quantity (KG) </label>
                  <Input
                    type="text"
                    className="form-control"
                    name="qty"
                    placeholder="quantity"
                    onChange={this.onChangeQty}
                    validations={[required]}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="photos">photos url </label>
                  <Input
                    type="text"
                    className="form-control"
                    name="photos"
                    placeholder="photos"
                    onChange={this.onChangePhotos}
                    validations={[required]}
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="least_price">Least price </label>
                  <Input
                    type="text"
                    className="form-control"
                    name="least_price"
                    placeholder="least price"
                    onChange={this.onChangeLeast_price}
                    validations={[required]}
                  />
                </div>


                <div className="form-group">
                  <br/>
                  <button className="btn btn-primary btn-block"> Add </button>

                  {/* on this add buton we have to pass a state to profile.component for closing the modal */}
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
          <div >

          {this.successful2 ?
          <div> 
<h1>Crop Added successful !!</h1>
</div>: null} 

            </div>
        </div>
      </header>
      </div>
    );
  }
}
