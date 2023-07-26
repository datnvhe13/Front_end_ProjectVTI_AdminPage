import axios from 'axios'


const axiosClient = axios.create({
    baseURL: "https://6435207983a30bc9ad5887af.mockapi.io/",
    headers: {
        "content-type": "application/json",
    }
});

export const api = (method, endpoint, payload) => {
    return axiosClient(endpoint, {method : method, data: payload}).then((response)=>{
        return response.data;
    })
    .catch((error)=>{
        console.log(error);
    })
}

