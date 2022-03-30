import React from "react";
import Map from "./Map";
import {Component} from 'react'; 
import Aux from "../../hoc/Auxiliary/Auxiliary";
import Section from "../../components/UI/Section/Section";
import "./Rescue.css";

class Rescue extends Component {
    render() {
      return(
      <div className="map_display">
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