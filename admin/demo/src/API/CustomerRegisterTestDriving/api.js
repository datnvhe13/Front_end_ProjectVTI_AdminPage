import axios from 'axios'


const axiosClient = axios.create({
    baseURL: "https://64b9f4a979b7c9def6c1703d.mockapi.io/api/",
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

