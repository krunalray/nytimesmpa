import axios from 'axios';

const BASE_URI = process.env.REACT_APP_API;

const ax = axios.create({
  baseURL: BASE_URI
});

export default ax;
