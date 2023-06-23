// constant values
import { INCREMENT, DECREMENT, RESET } from '../constants/counterConstant';

// action for increment
export const incCounter = () => {
    return {
        type: INCREMENT
    };
}

// action for decrement
export const decCounter = () => {
    return {
        type: DECREMENT
    };
}

// action for reset
export const resetCounter = () => {
    return {
        type: RESET
    };
}