import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: false,
}

export const CreateNewFormReducer = createSlice({
  name: 'CreateNewFormReducer',
  initialState,
  reducers: {
    showCreateForm: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value = true
    },
    closeCreateForm: (state) => {
      state.value = false
    }
  },
})

// Action creators are generated for each case reducer function
export const { showCreateForm, closeCreateForm } = CreateNewFormReducer.actions

export default CreateNewFormReducer.reducer