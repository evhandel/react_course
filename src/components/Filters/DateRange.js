import React, { Component } from 'react'
import PropTypes from 'prop-types'
import DayPicker, { DateUtils } from 'react-day-picker'
import {connect} from 'react-redux'
import { setDateRangeFilter } from '../../AC'

import 'react-day-picker/lib/style.css';

class DateRange extends Component {
    static propTypes = {
        dateRange: PropTypes.object,
        setDateRangeFilter: PropTypes.func.isRequired
    };

    handleDayClick = (day) => {
        const { setDateRangeFilter } = this.props
        setDateRangeFilter(day)
    }

    render() {
        const { from, to } = this.props.dateRange
        const selectedRange = from && to && `${from.toDateString()} - ${to.toDateString()}`
        return (
            <div className="date-range">
                <DayPicker
                    selectedDays={ day => DateUtils.isDayInRange(day, { from, to }) }
                    onDayClick={ this.handleDayClick }
                />
                {selectedRange}
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        dateRange: state.dateRange
    }
}

export default connect(mapStateToProps, {setDateRangeFilter})(DateRange)