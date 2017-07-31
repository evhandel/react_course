import {normalizedArticles as defaultArticles} from '../fixtures'
import {DELETE_ARTICLE, ADD_COMMENT} from '../constants'
import {arrToMap, omitKey} from '../helpers'

export default (articleState = arrToMap(defaultArticles), action) => {
    const {type, payload} = action

    switch (type) {
        case DELETE_ARTICLE:
            return omitKey(articleState, payload.id)

        case ADD_COMMENT:
            const curArticle = articleState[payload.articleId]
            return {
                ...articleState,
                [payload.articleId]: {
                    ...curArticle,
                    comments: curArticle.comments.concat(action.generatedId)}
            }
    }
    return articleState
}