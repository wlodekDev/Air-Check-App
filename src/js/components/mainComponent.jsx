import React from 'react';
import {LocationModule} from './locationModule.jsx';
import {TempModule} from './tempModule.jsx';
import {AirQualityModule} from './airQualityModule.jsx';
import {PressHumModule} from './pressureHumidityModule.jsx';
import {WindModule} from './windModule.jsx';

class MainWrapper extends React.Component {

    render(){

        const lat = this.props.lat;
        const lon = this.props.lon;

        return <div className='mainWrapper'>
            <div className='ribbon'>
                <a href="https://github.com/wlodekDev" target='_blank'><img style={{position: 'absolute', top: '0', right: '0', border: '0'}} src="https://s3.amazonaws.com/github/ribbons/forkme_right_gray_6d6d6d.png" alt="Fork me on GitHub"/></a>
            </div>
            <LocationModule lat={lat} lon={lon}/>
            <TempModule lat={lat} lon={lon} />
            <AirQualityModule lat={lat} lon={lon} />
            <PressHumModule lat={lat} lon={lon} />
            <WindModule lat={lat} lon={lon} />
        </div>
    }
}

export {MainWrapper};