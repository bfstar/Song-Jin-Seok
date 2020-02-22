import React from 'react';

class TimeTable extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            MedicineName : ['타이레놀','이가탄','게보린'],
            TimeSlice = [
                {meal:'아침식전',},{meal:'아침식후'}
                ,{meal:'점심식전'},{meal:'점심식후'}
                ,{meal:'저녁식전'},{meal:'저녁식후'}
            ]
        }
    }

    render(){
        return(
            <div>
                <p> {this.state.TimeSlice[0]} : {this.state.MedicineName[0]} </p>
            </div>
        )
    }
}

export default TimeTable;