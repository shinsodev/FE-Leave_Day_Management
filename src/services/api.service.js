import axios from "./axios.customize";

// const createUser = (fullName, email, password, phoneNumber) => {
//     const URL_BACKEND = "/api/v1/user";
//     const data = {
//         fullName: fullName,
//         email: email,
//         password: password,
//         phone: phoneNumber
//     }
//     return axios.post(URL_BACKEND, data)
// }

const createUser = (name, email, password) => {
  const URL_BACKEND = "/users/add";
  const data = {
    name: name,
    email: email,
    password: password,
  };
  return axios.post(URL_BACKEND, data);
};

export { createUser };
