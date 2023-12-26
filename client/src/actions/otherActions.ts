import axios from "axios";
const baseUrl = "http://localhost:8000";

export const contact = async (data: any) => {
  return axios({
    method: "post",
    url: `${baseUrl}/contact`,
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

export const getCourses = async () => {
  return axios({
    method: "get",
    url: `${baseUrl}/getcourses`,
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

export const getBlogs = async () => {
  return axios({
    method: "get",
    url: `${baseUrl}/getblogs`,
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

export const addWish = async (data: any) => {
  return axios({
    method: "post",
    url: `${baseUrl}/wishlist`,
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

export const subscribe = async (data: any) => {
  return axios({
    method: "post",
    url: `${baseUrl}/subscribe`,
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

export const comment = async (data: any) => {
  return axios({
    method: "post",
    url: `${baseUrl}/comment`,
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