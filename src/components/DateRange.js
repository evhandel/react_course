import React, { Component } from 'react'
import DayPicker, {DateUtils} from 'react-day-picker'

import 'react-day-picker/lib/style.css'

export default class DateRange extends Component {
    state = {
        from: null,
        to: null
    }

    handleDayClick = day => {
        const range = DateUtils.addDayToRange(day, this.state);
        this.setState(range);
    };

    render() {
        const { from, to } = this.state
        return (
            <div className="calendar">
                {!from && !to && <p>Please select the <b>first date</b>.</p>}
                {from && !to && <p>Please select the <b>second date</b>.</p>}
                {from &&
                    to &&
                    <p>
                        You chose from {from.toDateString()} to {to.toDateString()}
                    </p>
                }
                <DayPicker
                    numberOfMonths={2}
                    selectedDays={[from, { from, to }]}
                    onDayClick={this.handleDayClick}
                    fixedWeeks
                />
            </div>
        )
    }

}