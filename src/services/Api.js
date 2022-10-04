import axios from "axios";

const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    API_KEY: 'd7be37f171d8123214539749ff0838e8',
  });
