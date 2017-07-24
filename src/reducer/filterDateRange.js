import {SET_DATE_RANGE_FILTER} from '../constants'
import { DateUtils } from 'react-day-picker'

export default (dateRangeState = { from: null, to: null}, action) => {
    const {type, payload} = action

    switch (type) {
        case SET_DATE_RANGE_FILTER:
            return DateUtils.addDayToRange(payload.day, dateRangeState)
    }
    return dateRangeState
}