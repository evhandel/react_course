import React from 'react'

export default (OriginalComponent) => class AccordeonDecorator extends React.Component {
    state = {
        openItemId: null
    }

    toggleOpenItem = openItemId => () => {
        openItemId = openItemId != this.state.openItemId ? openItemId : null
        return this.setState({ openItemId })
    }

    render() {
        return <OriginalComponent
            {...this.props}
            openItemId = {this.state.openItemId}
            toggleOpenItem = {this.toggleOpenItem}/>
    }
}