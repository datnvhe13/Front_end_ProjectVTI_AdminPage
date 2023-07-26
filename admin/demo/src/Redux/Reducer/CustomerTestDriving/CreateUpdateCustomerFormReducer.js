import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: false,
  customerUpdate: {}
}

export const CreateUpdateCustomerTestDrivingFormReducer = createSlice({
  name: 'CreateUpdateCustomerTestDrivingFormReducer',
  initialState,
  reducers: {
    showUpdateCustomerTestDrivingForm: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value = true;
      state.customerUpdate = action.payload
    },
    closeUpdateCustomerTestDrivingForm: (state) => {
      state.value = false
    }   
  },
})

// Action creators are generated for each case reducer function
export const { showUpdateCustomerTestDrivingForm, closeUpdateCustomerTestDrivingForm } = CreateUpdateCustomerTestDrivingFormReducer.actions

export default CreateUpdateCustomerTestDrivingFormReducer.reducer