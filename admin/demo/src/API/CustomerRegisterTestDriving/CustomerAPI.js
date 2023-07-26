import { api } from "./api"



// get list customer API 
export let getListCustomerTestDrivingAPI = () => {
    return api("GET", "ListCustomerType1", null);
}

// delete
export const deleteCustomerTestDrivingAPI = (Id_delete) => {
    let url = "ListCustomerType1/" + Id_delete;
    return api("DELETE", url);
}

// create new customer API
export let addNewCustomerTestDrivingAPI = (customer_New) => {
    return api("POST", "ListCustomerType1", customer_New);
}

// update customer API
export const updateCustomerTestDrivingAPI = (customer) => {
    let url = "ListCustomerType1/" + customer.id;
    return api("PUT", url, customer);
}