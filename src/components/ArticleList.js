import React, {Component} from 'react'
import {findDOMNode} from 'react-dom'
import Article from './Article'
import PropTypes from 'prop-types'
import accordion from '../decorators/accordion'
import {connect} from 'react-redux'
import {deleteArticle} from '../AC'

class ArticlesList extends Component {
    articleRefs = []
    filterSelected = []

    render() {
        const {deleteArticle, toggleOpenItem, openItemId} = this.props
        const articles = this.getFilteredArticles()
        const articleElements = articles.map(article => (
            <li key = {article.id}>
                <Article
                    ref = {this.setArticleRef}
                    article = {article}
                    isOpen = {article.id === openItemId}
                    toggleOpen = {toggleOpenItem(article.id)}
                    handleDelete = {deleteArticle}
                />
            </li>
        ))
        return (
            <ul ref = {this.setContainerRef} >
                {articleElements}
            </ul>
        )
    }

    getFilteredArticles() {
        const {selected, dateRange} = this.props

        console.log('selectedId', this.selectedId, selected)
        if (!selected.length && !dateRange.from && !dateRange.to) {
            return this.props.articles
        }
        else {
            this.filterSelected = selected.map(item => item.value)
            return this.props.articles.filter(this.filterArticles)
        }
    }

    filterArticles = (article) => {
        const {dateRange} = this.props
        const articleDate = new Date(article.date)
        let res = true

        if (dateRange.from && dateRange.from > articleDate ) res = false
        if (dateRange.to && dateRange.to < articleDate ) res = false
        if (this.filterSelected.length && this.filterSelected.indexOf(article.id) === -1) res = false
        return res
    }

    setContainerRef = (container) => {
        this.container = container
        console.log('---', container)
    }

    setArticleRef = (articleRef) => {
        this.articleRefs.push(articleRef)
    }

    componentDidMount() {
        console.log('---', this.articleRefs)
        console.log('---', 'own node: ', findDOMNode(this))
        console.log('---', 'nodes: ', this.articleRefs.map(findDOMNode))
    }
}

ArticlesList.propTypes = {
    //from connect
    deleteArticle: PropTypes.func.isRequired,
    articles: PropTypes.array.isRequired,
    //from accordion decorator
    openItemId: PropTypes.string,
    toggleOpenItem: PropTypes.func.isRequired
}

export default connect(
    ({ articles, selected, dateRange }) => ({ articles, selected, dateRange }),
    { deleteArticle }
)(accordion(ArticlesList))