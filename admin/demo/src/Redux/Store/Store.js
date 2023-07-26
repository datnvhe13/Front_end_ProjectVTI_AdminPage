
import { configureStore } from '@reduxjs/toolkit';
import CarSliceReducer from '../Reducer/CarSliceReducer';
import CreateNewFormReducer from '../Reducer/CreateNewFormReducer';
import CreateUpdateFormReducer from '../Reducer/CreateUpdateFormReducer';
import CreateNewCustomerFormReducer from '../Reducer/CustomerReceiveAlertPrice/CreateNewCustomerFormReducer';
import CreateUpdateCustomerFormReducer from '../Reducer/CustomerReceiveAlertPrice/CreateUpdateCustomerFormReducer';
import CreateNewCustomerTestFormReducer from '../Reducer/CustomerTestDriving/CreateNewCustomerTestFormReducer';
import carCategorySliceReducer  from '../Reducer/CarCategorySliceReducer';
import  customerSlice  from '../Reducer/CustomerReceiveAlertPrice/CustomerSliceReducer';
import  customerTestDrivingSlice  from '../Reducer/CustomerTestDriving/CustomerTestDrivingSliceReducer';
import CreateUpdateCustomerTestDrivingFormReducer from '../Reducer/CustomerTestDriving/CreateUpdateCustomerFormReducer';


export const store = configureStore({
    reducer: {
        carSlice : CarSliceReducer,
        formSlice: CreateNewFormReducer,
        formUpdateSlice: CreateUpdateFormReducer,
        CreateNewCustomerFormReducer: CreateNewCustomerFormReducer,
        CreateUpdateCustomerFormReducer: CreateUpdateCustomerFormReducer,
        CreateNewCustomerTestFormReducer: CreateNewCustomerTestFormReducer,
        CreateUpdateCustomerFormReducer: CreateUpdateCustomerFormReducer,
        carCategorySlice: carCategorySliceReducer,
        customerReceiveAlertPrice: customerSlice,
        customerTestDriving: customerTestDrivingSlice,
        CreateUpdateCustomerTestDrivingFormReducer: CreateUpdateCustomerTestDrivingFormReducer
    },
})

