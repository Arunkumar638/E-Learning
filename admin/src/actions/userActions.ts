import axios from "axios";;
const baseUrl = 'http://localhost:8000/admin';

export const save = async (data:any) => {
  
    return axios({
      method: "post",
      url: `${baseUrl}/register`,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      data: data,
      timeout: 5000, 
    })
      .then((response) => {
        console.log(response.data);
        return response.data;
      })
      .catch((error) => {
        throw error;
      });
  };

  export const login = async (data:any) => {
  
    return axios({
      method: "post",
      url: `${baseUrl}/login`,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      data: data,
      timeout: 5000, 
    })
      .then((response) => {
        console.log(response.data);
        return response.data;
      })
      .catch((error) => {
        throw error;
      });
  };