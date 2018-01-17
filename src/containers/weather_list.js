import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Sparklines, SparklinesLine } from 'react-sparklines';

class WeatherList extends Component {

    renderWeather(element) {
        return (
            <tr key={element.city.id}>
                <td>{element.city.name}</td>
                <td>
                    <Sparklines>
                        height={120}
                        width={180}
                        data={element.list.map(weather => weather.main.temp)}
                        <SparklinesLine color="rgba(255, 0, 0, .3)" />
                    </Sparklines>
                </td>
                <td>
                    <Sparklines>
                        height={120}
                        width={180}
                        data={element.list.map(weather => weather.main.pressure)}
                        <SparklinesLine color="rgba(0, 255, 0, .3)" />
                    </Sparklines>
                </td>
                <td>
                    <Sparklines>
                        height={120}
                        width={180}
                        data={element.list.map(weather => weather.main.humidity)}
                        <SparklinesLine color="rgba(0, 0, 255, .3)" />
                    </Sparklines>
                </td>
            </tr>
        );
    }

    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature</th>
                        <th>Pressure</th>
                        <th>Humidity</th>
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