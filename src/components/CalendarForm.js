import React, { Component } from 'react';
import DayPicker from 'react-day-picker';
import {Heading} from 'react-bulma-components'
import 'react-day-picker/lib/style.css';

class CalendarForm extends Component {

    state = {
        selectedDay: '',
    }

    handleDayClick = (day, { selected, disabled }) => {
        if (disabled) {
            // Day is disabled, do nothing
            return;
        }
        if (selected) {
            // Unselect the day if already selected
            this.setState({ selectedDay: undefined });
            return;
        }
        this.setState({ selectedDay: day });

        if (this.props.updateEnteredDate) {
            this.props.updateEnteredDate(day);
        }
    }


    render() {
        return (<>
        <Heading size={6}>Select a Day</Heading>
            <DayPicker
                initialMonth={this.props.today}
                selectedDays={this.state.selectedDay}
                disabledDays={{ before: this.props.today }}
                onDayClick={this.handleDayClick} />
                </>)
    }
}

export default CalendarForm;