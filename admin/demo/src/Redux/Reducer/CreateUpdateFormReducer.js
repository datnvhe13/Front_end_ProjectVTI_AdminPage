import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: false,
  car: {}
}

export const CreateUpdateFormReducer = createSlice({
  name: 'CreateUpdateFormReducer',
  initialState,
  reducers: {
    showUpdateForm: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value = true;
      state.car = action.payload
    },
    closeUpdateForm: (state) => {
      state.value = false
    }
  },
})

// Action creators are generated for each case reducer function
export const { showUpdateForm, closeUpdateForm } = CreateUpdateFormReducer.actions

export default CreateUpdateFormReducer.reducer