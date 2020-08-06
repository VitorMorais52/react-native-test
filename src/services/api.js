import axios from 'axios';


 const api = axios.create({
     //baseURL: "https://my-json-server.typicode.com/VitorMorais52/api-json/db",
     baseURL: "https://my-json-server.typicode.com/VitorMorais52/api-json/",
 });

 export default api;