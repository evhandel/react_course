import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'
import {connect} from 'react-redux'
import { setSelectedFilter } from '../../AC'

import 'react-select/dist/react-select.css'

class SelectFilter extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired,
        setSelectedFilter: PropTypes.func.isRequired
    };

    handleChange = selected => {
        const { setSelectedFilter } = this.props
        setSelectedFilter(selected)
    }

    render() {
        const { articles, selected } = this.props
        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }))

        return <Select
            options={options}
            value={selected}
            multi={true}
            onChange={this.handleChange}
        />
    }
}

const mapStateToProps = state => {
    console.log(state)
    return {
        articles: state.articles,
        selected: state.selected
    }
}

export default connect(mapStateToProps, {setSelectedFilter})(SelectFilter)
