import { api } from "./api"



// get list customer API 
export let getListCustomerAPI = () => {
    return api("GET", "ListCustomerType2", null);
}

// delete
export const deleteCustomerAPI = (Id_delete) => {
    let url = "ListCustomerType2/" + Id_delete;
    return api("DELETE", url);
}

// create new customer API
export let addNewCustomerAPI = (customer_New) => {
    return api("POST", "ListCustomerType2", customer_New);
}

// update customer API
export const updateCustomerAPI = (customer) => {
    let url = "ListCustomerType2/" + customer.id;
    return api("PUT", url, customer);
}