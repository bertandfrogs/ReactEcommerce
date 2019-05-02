import {createStore} from "redux";

// const initialState = [{products: []}, {cart: []}];
//
// const initialState = [];

const initialState = [
    {
        products: [],
        cart: []
    }
];

function dataReducer(state = initialState, action){
    switch (action.type) {
        case "ADD_PRODUCT":
            state[0].products = action.data;
            console.log(action.data);
            console.log(state);
            return state;

        case "ADD_CART":
            state[0].cart.push(action.data);
            console.log(action.data);
            console.log(state);
            return state;

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
