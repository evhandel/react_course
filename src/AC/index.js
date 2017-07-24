import {INCREMENT, DELETE_ARTICLE, SET_SELECTED_FILTER, SET_DATE_RANGE_FILTER} from '../constants'

export function increment() {
    return {
        type: INCREMENT
    }
}

export function deleteArticle(id) {
    return {
        type: DELETE_ARTICLE,
        payload: { id }
    }
}

export function setSelectedFilter(selected) {
    return {
        type: SET_SELECTED_FILTER,
        payload: { selected }
    }
}

export function setDateRangeFilter(day) {
    return {
        type: SET_DATE_RANGE_FILTER,
        payload: { day }
    }
}