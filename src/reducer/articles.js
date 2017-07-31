import {normalizedArticles as defaultArticles} from '../fixtures'
import {DELETE_ARTICLE} from '../constants'
import {arrToMap, omitKey} from '../helpers'

export default (articleState = arrToMap(defaultArticles), action) => {
    const {type, payload} = action

    switch (type) {
        case DELETE_ARTICLE:
            return omitKey(articleState, payload.id)
    }
    return articleState
}