import React from "react";
import {Component} from 'react';  

import "./Application.css";
import Aux from "../../hoc/Auxiliary/Auxiliary";
import Section from "../../components/UI/Section/Section";

const dateRegex = new RegExp('^\\d\\d\\d\\d-\\d\\d-\\d\\d');
function jsonDateReviver(key, value) {
  if (dateRegex.test(value)) return new Date(value);
  return value;
}
async function graphQLFetch(query, variables = {}) {
  try {
    const response = await fetch('http://localhost:5000/graphql', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({ query, variables })
    });
    const body = await response.text();
    const result = JSON.parse(body, jsonDateReviver);

    if (result.errors) {
      const error = result.errors[0];
      if (error.extensions.code === 'BAD_USER_INPUT') {
        const details = error.extensions.exception.errors.join('\n ');
        alert(`${error.message}:\n ${details}`);
      } else {
        alert(`${error.extensions.code}: ${error.message}`);
      }
    }
    return result.data;
  } catch (e) {
    alert(`Error in sending data to server: ${e.message}`);
  }
}

class volunteerApplication extends Component {  
    constructor(props) {
      super(props);
  
      this.state = {
          name: '',
          number:'',
          email: '',
          age: '',
          gender: '',
          location: ''
      }
      this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }
  
    handleFormSubmit(e) {
      e.preventDefault();
      const form = document.forms.applicationAdd;
      const application = {
        name: form.name.value, number: form.number.value, email: form.email.value, 
        age: form.age.value, gender: form.gender.value, location: form.location.value
      };
      this.createApplication(application);
      form.name.value = ""; 
      form.number.value = "";
      form.email.value = "";
      form.age.value = "";
      form.gender.value = "";
      form.location.value = "";
    }
    async createApplication(application) {
      const query = `mutation volunteerAdd($application: volunteerInputs!) {
        volunteerAdd(application: $application) {
          id
        }
      }`;
  
      const data = await graphQLFetch(query, { application });
      if (data) {
        console.log(data);
      }
    }
    render() {
      return (
        <Aux>
            <Section sectionType="Blue" displayType="Flex">
            <body>
                <form name="applicationAdd" onSubmit={this.handleFormSubmit}>
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