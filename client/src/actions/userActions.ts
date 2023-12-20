import axios from "axios";
import  jwt from "jsonwebtoken";
const baseUrl = 'http://localhost:8000';
const secretKey = `V5LzRs_Pw9OYSt5cMOSc3b8aK1V6n2wiBWaeAcJ48kY`;

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

export const loginUser = async (data: any) => {

  return axios({
    method: "post",
    url: `${baseUrl}/login`,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    data: data,
    timeout: 5000, // Set a timeout of 5 seconds (adjust as needed)
  })
    .then((response) => {
      console.log(response.data);
      return response.data;
    })
    .catch((error) => {
      throw error;
      
    });
};

export const forgot = async (data: any) => {

  return axios({
    method: "post",
    url: `${baseUrl}/forgot`,
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

export const reset = async (data: any) => {

  return axios({
    method: "put",
    url: `${baseUrl}/reset`,
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

export const logoutUser = async (data: any) => {

  return axios({
    method: "delete",
    url: `${baseUrl}/logout`,
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


export const verifyToken = async (data: any) => {
  
  try {
    const response = await axios({
      method: "post",
      url: `${baseUrl}/verify`,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      data: data,
      timeout: 5000,
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw error;
  }

};

