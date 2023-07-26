import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  ADD_NEW_CUSTOMER_RECEIVE_ALERT_PRICE_LIST,
  DELETE_CUSTOMER_RECEIVE_ALERT_PRICE_LIST,
  FETCH_CUSTOMER_RECEIVE_ALERT_PRICE_LIST,
  UPDATE_CUSTOMER_RECEIVE_ALERT_PRICE_LIST,
} from "../../ActionType/ActionType";
import {
  addNewCustomerAPI,
  deleteCustomerAPI,
  getListCustomerAPI,
  updateCustomerAPI,
} from "../../../API/CustomerReceiveAlertPrice/CustomerAPI";

const initialState = {
  listCustomer: [],
};

// action : get all customer from api
export let actionGetListCustomerAPI = createAsyncThunk(
  FETCH_CUSTOMER_RECEIVE_ALERT_PRICE_LIST,
  async () => {
    let listCustomerAPI = await getListCustomerAPI(); //action api
    return listCustomerAPI;
  }
);

// action : add new customer api
export let actionAddCustomerAPI = createAsyncThunk(
  ADD_NEW_CUSTOMER_RECEIVE_ALERT_PRICE_LIST,
  async (customerNew) => {
    let customerNew_API = await addNewCustomerAPI(customerNew); //action api
    return customerNew_API; //payload
  }
);

// action : delete a customer api
export let actionDeleteCustomerAPI = createAsyncThunk(
  DELETE_CUSTOMER_RECEIVE_ALERT_PRICE_LIST,
  async (id_delete) => {
    let customer_deleted = await deleteCustomerAPI(id_delete); //action api
    return customer_deleted; //payload
  }
);

// action : update customer
export let actionUpdateCustomerAPI = createAsyncThunk(
  UPDATE_CUSTOMER_RECEIVE_ALERT_PRICE_LIST,
  async (customerUpdate, { getState }) => {
    // get state
    const state = getState();
    // get listCustomer
    const listCustomer = state.customerReceiveAlertPrice.listCustomer;
    // update customer in middleware
    let customerUpdate_API = await updateCustomerAPI(customerUpdate); //action api
    // 
    const lst_Customer = listCustomer.map((customer) => {
      if (customer.id === customerUpdate_API.id) {
        customer = customerUpdate_API;
      }
      return customer;
    });

    return lst_Customer; //payload
  }
);

export const customerSlice = createSlice({
  name: "customerReceiveAlertPrice",
  initialState,
  reducers: {
    // handle reducers not relate to middleware
  },
  extraReducers: {
    // handle reducers  relate to middleware
    // handle when call API succesfully
    [actionGetListCustomerAPI.fulfilled]: (state, action) => {
      state.listCustomer = action.payload;
    },
    [actionAddCustomerAPI.fulfilled]: (state, action) => {
      state.listCustomer.push(action.payload); //accountNewAPi
    },

    [actionDeleteCustomerAPI.fulfilled]: (state, action) => {
      state.listCustomer.splice(
        state.listCustomer.findIndex(
          (customer) => customer.id === action.payload.id
        ),
        1
      ); //accountNewAPi
    },

    [actionUpdateCustomerAPI.fulfilled]: (state, action) => {
      state.listCustomer = action.payload;
    },
  },
});

export let { actions } = customerSlice;
export default customerSlice.reducer;
