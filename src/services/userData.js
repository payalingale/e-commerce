import axios from "axios";


export const getUserInfo = async (id) => {
    const response = await axios.get(`https://api.escuelajs.co/api/v1/users/${id}`);
    return response;
  };

  export const addUser = async(userName,email,password) =>{
    const body={
        "email": email,
        "name": userName,
        "password": password,
        "avatar": "https://drive.google.com/file/d/1QeniICAugDTSt9AHXp2LDMp9kdqRj-gW/view?usp=sharing",
        "role": "customer"
    }
    const response = await axios.post("https://api.escuelajs.co/api/v1/users",body);
    return response
  }