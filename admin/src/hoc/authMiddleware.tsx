'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';


const withAuth = (Component: any) => (props: any) => {
  const router = useRouter();
  const [data, setData] = useState("");

  useEffect(() => {
    var token = window.localStorage.getItem('token');
    if(token){
        router.push("/")
        setData(token)
    }
    else{
        router.push("/login")
    }
  }, []);

  if (!!data) return <Component {...props} />;
  else return null;
};

export default withAuth;