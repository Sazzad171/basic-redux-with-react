// constant value
import { INCREMENT, DECREMENT, RESET } from '../constants/counterConstant';

// state value
const initialCounter = {
    count: {
        times: 0,
        event: ""
    }
}

// reducer function
const counterReducer = ( state = initialCounter, action ) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state.count,
                count: {
                    times: state.count.times + 1,
                    event: "INCREMENT"
                }
            }

        case DECREMENT:
            return {
                ...state.count,
                count: {
                    times: state.count.times - 1,
                    event: "DECREMENT"
                }
            }

        case RESET:
            return {
                ...state.count,
                count: {
                    times: 0,
                    event: "RESET"
                }
            }
    
        default:
            return state
    }
}

export default counterReducer;