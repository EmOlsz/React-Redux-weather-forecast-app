import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/single_chart';

class WeatherList extends Component {

    renderWeather(element) {

        const temperature = element.list.map(weather => weather.main.temp);
        const pressure = element.list.map(weather => weather.main.pressure);
        const humidity = element.list.map(weather => weather.main.humidity);

        return (
            <tr key={element.city.id}>
                <td>{element.city.name}</td>
                <td><Chart data={temperature} color={"rgba(0, 0, 0, .5)"} unit="K" /></td>
                <td><Chart data={pressure} color={"rgba(255, 0, 0, .5)"} unit="hPa" /></td>
                <td><Chart data={humidity} color={"rgba(0, 0, 255, .5)"} unit="%" /></td>
            </tr>
        );
    }

    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (K)</th>
                        <th>Pressure (kPa)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
                <tfoot></tfoot>
            </table>
        );
    }
}

function mapStateToProps({ weather }) {
    return {
        weather
    };
}

export default connect(mapStateToProps)(WeatherList);