import {testAdd} from '../constant'

// sync action
export const add = (data) => ({type:testAdd, data})

// async action
export const asyncAdd = (data) => {
    return (dispatch) => {
        setTimeout(()=>{
            dispatch(add(data))
        },1000)
    }
}