import {combineReducers} from 'redux'
import counterReducer from './counter'
import articles from './articles'
import selected from './filterSelected'
import dateRange from './filterDateRange'

export default combineReducers({
    counter: counterReducer,
    articles,
    selected,
    dateRange
})