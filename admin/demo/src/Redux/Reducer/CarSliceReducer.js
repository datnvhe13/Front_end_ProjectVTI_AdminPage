import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  ADD_NEW_CAR,
  DELETE_CAR,
  FETCH_CAR_LIST,
  UPDATE_CAR,
} from "./../ActionType/ActionType";
import {
  addNewCarAPI,
  deleteCarAPI,
  getListCarAPI,
  updateCarAPI,
} from "../../API/CarAPI";

const initialState = {
  listCar: [],
};

// action : get all car from api
export let actionGetListCarAPI = createAsyncThunk(FETCH_CAR_LIST, async () => {
  let listCarAPI = await getListCarAPI(); //action api
  return listCarAPI;
});

// action : add new account api
export let actionAddCarAPI = createAsyncThunk(ADD_NEW_CAR, async (carNew) => {
  let carNew_API = await addNewCarAPI(carNew); //action api
  return carNew_API; //payload
});
// action : delete a car api
export let actionDeleteCarAPI = createAsyncThunk(
  DELETE_CAR,
  async (id_delete) => {
    let car_deleted = await deleteCarAPI(id_delete); //action api
    return car_deleted; //payload
  }
);
// action : update car
export let actionUpdateCarAPI = createAsyncThunk(
  UPDATE_CAR,
  async (carUpdate, { getState }) => {
    // get state
    const state = getState();
    const listCart = state.carSlice.listCar;
    console.log(listCart);
    // update car API
    let carUpdate_API = await updateCarAPI(carUpdate); //action api
    console.log("carUpdate_API : ", carUpdate_API);
    
    const _lst = listCart.map((car) => {
      if (car.id === carUpdate_API.id) {
        car = carUpdate_API;
      }
      return car;
    });
    return _lst; //payload
  }
);

export const carSlice = createSlice({
  name: "car",
  initialState,
  reducers: {
    // handle reducers not relate to middleware
  },
  extraReducers: {
    // handle reducers  relate to middleware
    // handle when call API succesfully
    [actionGetListCarAPI.fulfilled]: (state, action) => {
      state.listCar = action.payload;
    },
    [actionAddCarAPI.fulfilled]: (state, action) => {
      state.listCar.push(action.payload); //accountNewAPi
    },

    [actionDeleteCarAPI.fulfilled]: (state, action) => {
      state.listCar.splice(
        state.listCar.findIndex((car) => car.id === action.payload.id),
        1
      ); //accountNewAPi
    },
    [actionUpdateCarAPI.fulfilled]: (state, action) => {
      state.listCar = action.payload;
    },
  },
});

export let { actions } = carSlice;
export default carSlice.reducer;
