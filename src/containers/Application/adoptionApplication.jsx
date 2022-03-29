import React from "react";
import {Component} from 'react';  

import "./Application.css";
import Aux from "../../hoc/Auxiliary/Auxiliary";
import Section from "../../components/UI/Section/Section";

class adoptionApplication extends Component {  
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
                    <label for="name">Name: </label>
                    <input type="text" name="name" placeholder="name" />
                    <p></p>
                    <label for="number">Number: </label>
                    <input type="text" name="number" placeholder="number" />
                    <p></p>
                    <label for="gender">Gender: </label>
                    <input type="text" name="gender" placeholder="gender" />
                    <p></p>
                    <label for="email">Email: </label>
                    <input type="text" name="email" placeholder="email" />
                    <p></p>
                    <label for="age">Age: </label>
                    <input type="text" name="age" placeholder="age" />
                    <p></p>
                    <button>Submit</button>
                </form>
            </body>
            </Section>
        </Aux>
      );
    }
  }
  
export default adoptionApplication;