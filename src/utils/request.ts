import axios from "axios";


// const request = axios.create({
//   baseURL: process.env.
// })

// console.log(import.meta.env.VITE_APP_WEB_URL);

export const request = axios.create({
  baseURL: import.meta.env.VITE_APP_WEB_URL,
  withCredentials: true,
  timeout:3000
}
)