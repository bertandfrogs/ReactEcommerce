import {createStore} from "redux";

// const initialState = [{products: []}, {cart: []}];

const initialState = [];

//const initialState = {
//     products: [],
//     cart: []
// };

function dataReducer(state = initialState, action){
    switch (action.type) {
        case "ADD_PRODUCT":
            return state.concat(action.data);

        // case "ADD_CART":
        //
        //
        // case "DELETE_CART":
        //

        default:
            return state;
    }
}

// function addProduct(data){
//     return {
//         data: data,
//         type: "ADD_PRODUCT"
//     }
// }

const store = createStore(dataReducer);

export default store;