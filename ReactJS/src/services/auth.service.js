import axios from "axios";

const API_URL = "http://localhost:8080/api/auth/";

class AuthService {
  login(username, password) {
    return axios
      .post(API_URL + "signin", {
        username,
        password
      })
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(username, email, password, contact, adharno,role) {
    return axios.post(API_URL + "signup", {
      username,
      email,
      password,
      contact,
      adharno,
      role
    });
  }

  addcrop(crop_name,species,grade,sowing_time,storage_time,qty,photos,least_price,username){
    return axios.post("http://localhost:8080/api/test/FarmerPost/", {
      crop_name,
      species,
      grade,
      sowing_time,
      storage_time,
      qty,photos,
      least_price,
      username
    });
  }

  update(username, email, password, contact, adharno,role) {
    return axios.put(API_URL + "signup", {
      username,
      email,
      password,
      contact,
      adharno,
      role
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));;
  }
}

export default new AuthService();
