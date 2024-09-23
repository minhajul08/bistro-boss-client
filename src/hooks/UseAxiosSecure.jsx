import axios from "axios";
import { useNavigate } from "react-router-dom";
import UseAuth from "./UseAuth";

const axiosSecure = axios.create ({
    baseURL: 'https://bistro-boss-resturent.vercel.app'
})
const UseAxiosSecure = () => {
  const navigate = useNavigate ();
  const {logOut} = UseAuth ();
    axiosSecure.interceptors.request.use(function (config) {
        const token = localStorage.getItem ('access-token')
        console.log ('request stopped by interceptor before adding token', token)
        config.headers.authorization = `Bearer ${token}`;
        // Do something before request is sent
        return config;
      }, function (error) {
        // Do something with request error
        return Promise.reject(error);
      });

    //   intercepts 401 and 403 status

    axiosSecure.interceptors.response.use (function (response) {
        return response;
    }, async (error) => {
        const status = error.response.status;
        if (status === 401 || status === 403){
          await logOut ();
            navigate ('/login')
        }
        console.log ('status error in the interceptor', status)
        return Promise.reject (error);
    })
   return axiosSecure;
};

export default UseAxiosSecure;