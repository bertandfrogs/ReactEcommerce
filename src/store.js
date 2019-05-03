import {createStore} from "redux";

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

        case "DELETE_CART":
            let itemid = action.data[0];
            let pos = action.data[1];
            console.log(state[0].cart);
            console.log('product to delete', itemid);
            console.log('delete index', pos);
            state[0].cart.splice(pos, 1);
            return state;
        default:
            return state;
    }
}

const store = createStore(dataReducer);

export default store;
