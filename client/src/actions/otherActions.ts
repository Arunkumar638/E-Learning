import axios from "axios";
const baseUrl = "http://localhost:8000/app";

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
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
};

export const getCourseById = async (data:any) => {
  return axios({
    method: "post",
    url: `${baseUrl}/getcoursebyId`,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    timeout: 5000,
    data:data,
  })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
};

export const getCartData = async () => {
  return axios({
    method: "get",
    url: `${baseUrl}/getcart`,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    timeout: 5000,
  })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
};

export const deleteCartData = async (data:any) => {
  return axios({
    method: "delete",
    url: `${baseUrl}/deletecartdata`,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    data:data,
    timeout: 5000,
  })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
};

export const getPurchaseCourse = async (data:any) => {

  return axios({
    method: "post",
    url: `${baseUrl}/getpurchasecourses`,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    timeout: 5000,
    data:data,
  })
    .then((response) => {
      console.log(response.data);
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
};

export const purchaseCourse = async (data:any) => {

  return axios({
    method: "post",
    url: `${baseUrl}/purchasecourse`,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    timeout: 5000,
    data:data,
  })
    .then((response) => {
      console.log(response.data);
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
};

export const getCoursePurchased = async (data:any) => {

  return axios({
    method: "post",
    url: `${baseUrl}/getcoursepurchased`,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    timeout: 5000,
    data:data
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

export const getAddress = async () => {
  return axios({
    method: "get",
    url: `${baseUrl}/getaddress`,
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

export const addToCart = async (data: any) => {
  return axios({
    method: "post",
    url: `${baseUrl}/cart`,
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

export const saveAddress = async (data: any) => {
  return axios({
    method: "post",
    url: `${baseUrl}/saveaddress`,
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


export const getCategory = async () => {
  return axios({
    method: "get",
    url: `${baseUrl}/getcategories`,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    timeout: 5000,
  })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
};


export const getSubCategory = async () => {
  return axios({
    method: "get",
    url: `${baseUrl}/getsubcategories`,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    timeout: 5000,
  })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
};

export const getPurchaseId = async () => {

  return axios({
    method: "get",
    url: `${baseUrl}/getpurchaseId`,
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

export const addPurchaseCourse = async (data: any) => {
  return axios({
    method: "post",
    url: `${baseUrl}/addpurchasecourse`,
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

export const deleteCart = async () => {
  return axios({
    method: "delete",
    url: `${baseUrl}/deletecart`,
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