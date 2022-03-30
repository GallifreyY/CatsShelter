import React from "react";
import Map from "./Map";
import {Component} from 'react'; 

class Rescue extends Component {
    render() {
      return(
          <div style={{ margin: '100px' }}>
          <Map
       google={this.props.google}
       center={{lat: 1.2966, lng: 103.7764}}
       height='600px'
       zoom={15}
      />
      </div>
        )
    }
  }

export default Rescue;