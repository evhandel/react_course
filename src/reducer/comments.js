import { ADD_COMMENT } from '../constants'
import {normalizedComments as defaultComments} from '../fixtures'
import { arrToMap } from '../helpers'

export default (comments = arrToMap(defaultComments), action) => {
    const { type, payload, generatedId } = action

    switch (type) {
        case ADD_COMMENT:
            return {...comments, [generatedId]: {...payload.comment, id: generatedId}}
    }

    return comments
}