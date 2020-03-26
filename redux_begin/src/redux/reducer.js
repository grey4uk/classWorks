import types from './types';



export const reducer=(state=10,{type,payload})=>{
    switch (type) {
        case types.INCREMENT:
            return state+payload;
        case types.DECREMENT:
            return state-payload;
    
        default:
            return state;
    }
};

// export const increment=value=>({
//     type:'INCREMENT',
//     payload: value
// })
// export const decrement=value=>({
//     type:'DECREMENT',
//     payload: value
// })