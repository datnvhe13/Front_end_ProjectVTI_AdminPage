import { api } from "./api"



// get list car API 
export let getListCarAPI = () => {
    return api("GET", "BmwCars", null);
}

// get list car API 
export let getListCarCategoryAPI = () => {
    return api("GET", "BmwCarcategory", null);
}

// delete
export const deleteCarAPI = (Id_delete) => {
    let url = "BmwCars/" + Id_delete;
    return api("DELETE", url);
}

// create new car API
export let addNewCarAPI = (car_New) => {
    return api("POST", "BmwCars", car_New);
}

// update car API
export const updateCarAPI = (car) => {
    let url = "BmwCars/" + car.id;
    return api("PUT", url, car);
}
