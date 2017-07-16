import React, {Component} from 'react'
import Article from './Article'
import PropTypes from 'prop-types'
import Accordeon from '../decorators/accordeon'

class ArticlesList extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired,
        //from accordeon decorator
        toggleOpenItem: PropTypes.func.isRequired,
        openItemId: PropTypes.number

    }

    render() {
        const {articles} = this.props
        const articleElements = articles.map(article => (
            <li key = {article.id}>
                <Article
                    article = {article}
                    isOpen = {article.id === this.props.openItemId}
                    toggleOpen = {this.props.toggleOpenItem(article.id)}
                />
            </li>
        ))
        return (
            <ul>
                {articleElements}
            </ul>
        )
    }

}

ArticlesList.propTypes = {
    articles: PropTypes.array.isRequired
}

export default Accordeon(ArticlesList)