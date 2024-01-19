import axios from "axios";
const baseUrl = "http://localhost:8000/admin";

export const addCourse = async (data: any) => {
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

export const addCategory = async (data: any) => {
  return axios({
    method: "post",
    url: `${baseUrl}/addcategory`,
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

export const addSubCategory = async (data: any) => {
  return axios({
    method: "post",
    url: `${baseUrl}/addsubcategory`,
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

export const addBlog = async (data: any) => {
  return axios({
    method: "post",
    url: `${baseUrl}/addblog`,
    headers: {
      "Content-Type": "multipart/form-data",
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

export const addCourseContent = async (data: any) => {
  return axios({
    method: "post",
    url: `${baseUrl}/addcoursecontent`,
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

export const getCategory = async () => {
  return axios({
    method: "get",
    url: `${baseUrl}/getcategory`,
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

export const getSubCategory = async () => {
  return axios({
    method: "get",
    url: `${baseUrl}/getsubcategory`,
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

export const getWishlist = async () => {
  return axios({
    method: "get",
    url: `${baseUrl}/getwishlist`,
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

export const getPurchaseCourse = async () => {
  return axios({
    method: "get",
    url: `${baseUrl}/getpurchasecourse`,
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

export const getPurchaseById = async (data:any) => {

  return axios({
    method: "post",
    url: `${baseUrl}/getpurchasebyId`,
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
      console.log(response.data);
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
};

export const updateCourseStatus = async (data:any) => {
  
  return axios({
    method: "put",
    url: `${baseUrl}/updatecoursestatus`,
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

export const updateCategory = async (data:any) => {
  
  return axios({
    method: "put",
    url: `${baseUrl}/updatecategory`,
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

export const updateSubCategory = async (data:any) => {
  
  return axios({
    method: "put",
    url: `${baseUrl}/updatesubcategory`,
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
export const deleteCategory = async (data:any) => {
  
  return axios({
    method: "delete",
    url: `${baseUrl}/deletecategory`,
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

export const deleteSubCategory = async (data:any) => {
  
  return axios({
    method: "delete",
    url: `${baseUrl}/deletesubcategory`,
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

export const sendPurchaseStatus = async (data:any) => {

  return axios({
    method: "post",
    url: `${baseUrl}/sendpurchasestatus`,
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