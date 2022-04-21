import React from "react";
import {Component} from 'react';  

import "./Application.css";
import Aux from "../../hoc/Auxiliary/Auxiliary";
import Section from "../../components/UI/Section/Section";

class volunteerApplication extends Component {  
    constructor(props) {
      super(props);
  
      this.state = {
        newApplicants: {
          name: '',
          number:'',
          email: '',
          age: '',
          gender: '',
        }
      }
      this.handleFormSubmit = this.handleFormSubmit.bind(this);
      this.handleClearForm = this.handleClearForm.bind(this);
    }
  
    handleFormSubmit() {
      // Form submission logic
    }
    handleClearForm() {
      // Reset the form
    }
    render() {
      return (
        <Aux>
            <Section sectionType="Blue" displayType="Flex">
            <body>
                <form className="container" onSubmit={this.handleFormSubmit}>
                    <label>Name: </label>
                    <input type="text" name="name" placeholder="name" />
                    <p></p>
                    <label>Number: </label>
                    <input type="text" name="number" placeholder="number" />
                    <p></p>
                    <label>Gender: </label>
                    <input type="text" name="gender" placeholder="gender" />
                    <p></p>
                    <label>Email: </label>
                    <input type="text" name="email" placeholder="email" />
                    <p></p>
                    <label>Age: </label>
                    <input type="text" name="age" placeholder="age" />
                    <p></p>
                    <label>Location: </label>
                    <input type="text" name="location" placeholder="location" />
                    <p></p>
                    <button>Submit</button>
                </form>
            </body>
            </Section>
        </Aux>
      );
    }
  }
  
export default volunteerApplication;