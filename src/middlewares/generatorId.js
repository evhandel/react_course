import {ADD_COMMENT} from '../constants'

export default store => next => action => {
    console.log('---genId', action)
    console.log('---genId state before', store.getState())
    if (action.type === ADD_COMMENT || 1) {
        action.generatedId = Math.random()
    }
    next(action)
    console.log('---genId state after', store.getState())
}