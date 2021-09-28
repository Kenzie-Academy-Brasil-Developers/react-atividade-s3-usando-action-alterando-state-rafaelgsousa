import { CHANGE_NAME } from "./actionType"

const changeName = (name) => {
    return {
        type: CHANGE_NAME,
        name: name
    }
    
}

export default changeName