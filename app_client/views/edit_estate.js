import React, { Component } from 'react';
import { Link } from 'react-router';
import { reduxForm, Field } from 'redux-form';

import { InputField, SelectField }  from '../components/input_field';

export class EditEstate extends Component {
  onSubmit(props){
    console.log(props);
  }


  render(){
    const { handleSubmit } = this.props;
    return (
      <div className="row">
        <div className="col-lg-6 col-lg-offset-3">
          <form role="form" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
            <Field
              name="country"
              label="Country"
              options={[['PL', 'Polska'], ['EN', 'England']]}
              component={SelectField}
              type="select"
            />
            <hr/>
            <Field
              name="street"
              label="Street"
              component={InputField}
              type="text"
            />
            <hr/>
            <Field
              name="postalCode"
              label="Postal code"
              component={InputField}
              type="text"
            />
            <hr/>
            <Field
              name="city"
              label="City"
              component={InputField}
              type="text"
            />
            <hr/>
            <Field
              name="buildingType"
              label="Building Type"
              options={[[0, 'House'], [1, 'Apartment']]}
              component={SelectField}
              type="select"
            />
            <hr/>
            <Field
              name="name"
              label="Name"
              component={InputField}
              type="text"
            />
            <hr/>
            <div className="row">
              <div className="col-sm-6">
                <Link to="/estates" className="btn btn-default btn-block">Anuluj</Link>
              </div>
              <div className="col-sm-6">
                <button type="submit" className="btn btn-primary btn-block">Zapisz</button>
              </div>
            </div>
          </form>
        </div>
        <div className="col-lg-6">
        </div>
      </div>
    );
  }
}

const validate = (values) => {
  let errors = {};
  return errors;
};

EditEstate = reduxForm({
  form: 'ManageEstate',
  validate
})(EditEstate);

export default EditEstate;
