
import {testAdd} from '../constant'

const initState = 0
export default function test(prevState=initState, action){
    switch (action.type) {
        case testAdd:
            return prevState + 1
        default:
            return prevState
    }

    
}