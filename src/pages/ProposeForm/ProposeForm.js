import React from "react";
import PropTypes from "prop-types";
import {
  FormPage,
  FormField,
  FormInput,
  FormFieldGroup,
  Description,
  AddPhotos,
  AddPhotosWrapper,
  SubmitButton
} from "./ProposeForm.styles";
import { useFormik } from "formik";

const ProposeForm = props => {
  const formik = useFormik({
    initialValues: {
      name: "",
      city: "",
      street: "",
      website: ""
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    }
  });

  return (
    <FormPage>
      <h1>
        Add a <br /> Coffeeshop
      </h1>
      <form onSubmit={formik.handleSubmit}>
        <FormFieldGroup>
          <FormField>
            <label htmlFor="email">name</label>
            <FormInput
              id="name"
              name="name"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.name}
            />
          </FormField>
          <FormField>
            <label htmlFor="email">city</label>
            <FormInput
              id="city"
              name="city"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.city}
            />
          </FormField>
          <FormField>
            <label htmlFor="email">street</label>
            <FormInput
              id="street"
              name="street"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.street}
            />
          </FormField>
          <FormField>
            <label htmlFor="email">website</label>
            <FormInput
              id="website"
              name="website"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.website}
            />
          </FormField>
        </FormFieldGroup>
        <FormField>
          <label htmlFor="description">description</label>
          <Description id="description" name="description" />
        </FormField>
        <AddPhotosWrapper>
          <AddPhotos type="file"></AddPhotos>
          <SubmitButton type="submit">Submit</SubmitButton>
        </AddPhotosWrapper>
      </form>
    </FormPage>
  );
};

ProposeForm.propTypes = {};

export default ProposeForm;
