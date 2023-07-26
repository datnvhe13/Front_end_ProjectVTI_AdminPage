import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { FETCH_CAR_CATEGORY_LIST } from '../ActionType/ActionType';
import { getListCarCategoryAPI } from '../../API/CarAPI';

const initialState = {
  listCarCategory: [],
}

// action : get all car category from api
export let actionGetListCarCategoryAPI = createAsyncThunk(
  FETCH_CAR_CATEGORY_LIST,
    async () => {
        let listCarCategoryAPI = await getListCarCategoryAPI();  //action api
        return listCarCategoryAPI;
    }
)


export const carCategorySlice = createSlice({
  name: 'carCategory',
  initialState,
  reducers: {
    // handle reducers not relate to middleware
  },
  extraReducers: {
     // handle reducers  relate to middleware
    // handle when call API succesfully
    [actionGetListCarCategoryAPI.fulfilled]: (state, action) => {
        state.listCarCategory = action.payload;
    }

  }
})


export default carCategorySlice.reducer