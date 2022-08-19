import { useQuery } from "@tanstack/react-query";
import { signOut } from "firebase/auth";
import { useState } from 'react';
import { Navigate } from "react-router-dom";
import auth from "../firebase.init";
import axiosPrivate from '../Pages/Api/axiosPrivate';

const UserInformation = (user) => {
    const [users,setUsers]  = useState({})

    const { data, isLoading, refetch } = useQuery(["user"], () => {
        axiosPrivate
          .get(`/single/user/${user?.email}`)
          .then((res) => {
            setUsers(res.data);
          })
          .catch((err) => {
            if (err.response.status === 401 || err.response.status === 403) {
              signOut(auth);
              Navigate("/");
              localStorage.removeItem("userToken");
            }
          });
      });
    return [users,isLoading,refetch]
};

export default UserInformation;