import axios from "axios";;
const baseUrl = 'http://localhost:8000/admin';

export const addCourse = async (data:any) => {
  
    return axios({
      method: "post",
      url: `${baseUrl}/addcourse`,
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

  export const addBlog = async (data:any) => {
  
    return axios({
      method: "post",
      url: `${baseUrl}/addblog`,
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

  export const getContacts = async () => {
  
    return axios({
      method: "get",
      url: `${baseUrl}/getcontacts`,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
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