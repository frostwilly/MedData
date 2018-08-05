import React, { Component } from 'react';
import './input-form.scss';
import { Form, Text, TextArea } from 'react-form';

class InputForm extends Component {
  constructor() {
    super()
    this.state = {}
  }

  handleSubmit = () => {
    this.forceUpdate()
  }

  render() {
    console.log(this.state);
    return (
      <div className="input-form-card">
        <Form
          onSubmit={submittedValues => this.setState({ submittedValues })}>
          {formApi => (
            <div>
              <form onSubmit={formApi.submitForm} id="dynamic-form">
                <label>
                  Diagnosis <br />
                  <TextArea className="diagnosis" field="diagnosis" id="diagnosis" />
                </label>
                {formApi.values.drugs && formApi.values.drugs.map((drug, i) => (
                  <div key={`drug${i}`}>
                    <div className="float-left">
                      <label htmlFor={`drug-name-${i}`}>Name <br /></label>
                      <Text field={['drug-name', i]} id={`drugs-${i}`} />
                    </div>
                    <div className="float-left">
                      <label htmlFor={`drug-dosage-${i}`}>Dosage <br /></label>
                      <Text field={['drug-dosage', i]} id={`drugs-${i}`} />
                    </div>
                    <div className="float-left">
                      <label htmlFor={`drug-type-${i}`}>Drug Type <br /></label>
                      <Text field={['drug-type', i]} id={`drugs-${i}`} />
                    </div>
                    <div className="float-left">
                      <label htmlFor={`drug-uses-${i}`}>Drug Uses <br /></label>
                      <Text field={['drug-uses', i]} id={`drugs-${i}`} />
                    </div>
                    <div className="float-left">
                      <label htmlFor={`drug-rx-${i}`}> Rx <br /></label>
                      <Text field={['drug-rx', i]} id={`drugs-${i}`} />
                    </div>
                    <button
                      onClick={() => formApi.removeValue('drugs', i)}
                      type="button"
                      className="mb-4 btn btn-danger">Remove</button>
                  </div>
                ))}
                <button
                  onClick={() => formApi.addValue('drugs', '')}
                  type="button"
                  className="mb-4 mr-4 btn btn-success">Add drug</button>
                <button type="submit" className="mb-4 btn btn-primary" onSubmit={this.handleSubmit}>Submit</button>
              </form>
            </div>
          )}
        </Form>
      </div>
    )
  }
}

export default InputForm