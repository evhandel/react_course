import {SET_SELECTED_FILTER} from '../constants'

export default (selectState = [], action) => {
    const {type, payload} = action

    switch (type) {
        case SET_SELECTED_FILTER:
            return payload.selected
    }
    return selectState
}