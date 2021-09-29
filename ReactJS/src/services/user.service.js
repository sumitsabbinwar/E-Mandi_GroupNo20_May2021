import axios from 'axios';
import authHeader from './auth-header';
import http from "./http-common";

const API_URL = 'http://localhost:8080/api/test/';

class UserService {
  getPublicContent() {
    return axios.get(API_URL + 'all');
  }

  getUserBoard() {
    return axios.get(API_URL + 'user', { headers: authHeader() });
  }

  getModeratorBoard() {
    return axios.get(API_URL + 'mod', { headers: authHeader() });
  }

  getAdminBoard() {
    return axios.get(API_URL + 'admin', { headers: authHeader() });
  }

  update(id, data) {
    return http.put(`/test/signin/${id}`, data);
  }

  delete(id) {
    return http.delete(`/test/signin/${id}`);
  }
}

export default new UserService();
