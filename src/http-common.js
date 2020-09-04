import axios from 'axios';

//Define a URL base da origem para consumo do servico
// http://localhost:8081/
export default axios.create({
  baseURL: 'https://api-igti-modulo-04.herokuapp.com/',
  headers: {
    'Content-type': 'application/json',
  },
});
