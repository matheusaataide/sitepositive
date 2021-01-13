import React from 'react';
import api from '../../services/api';

export default class Schedule extends React.Component {
    state = {
        courses: []
    };

    componentDidMount () {
        api.get('courses')
            .then(res => {
                const courses = res.data;
                this.setState({ courses });
            }); 
    }

    render () {
        return (
            <ul>
                { this.state.courses.map(course => (
                        <li key={ course.id }>{ course.title }</li>
                    )
                )}
            </ul>
        );
    }
}