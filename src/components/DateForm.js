import React, { Component } from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';

class DateForm extends Component {

    state = {
        dateEntered: '',
    }

    handleDayClick = (day) => {
        let dayToChange = day
        this.setState({
            dateEntered: dayToChange
        })
        if(this.props.updateEnteredDate){
            this.props.updateEnteredDate(dayToChange);
        }
        
    }
    

    render(){
        return (
            <DayPickerInput
                initialMonth={this.props.today} id="day-picker-input"
                dayPickerProps={{
                    disabledDays:
                        { before: this.props.today }
                }}
                value={this.state.dateEntered}
                onDayChange={day => this.handleDayClick(day)} />)
    }
}

export default DateForm;