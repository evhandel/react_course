import {ADD_COMMENT} from '../constants'

export default store => next => action => {
    switch (action.type) {
        case ADD_COMMENT:
            const generatedId = (new Date()).toJSON() + Math.floor(Math.random() * 10000)
            next({...action, generatedId})
            break;
        default:
            next(action)
    }
}