import reducer from "./reducer";
export default function logger(reducer) {
    return (prevState, action) => {
        console.group(action.type)
        console.log('Prev State: ', prevState)
        const newState = reducer(prevState, action)
        console.log('Next State: ', newState)
        console.log('Action: ', action.type)
        console.groupEnd()

        return reducer(prevState, action)
    }
}