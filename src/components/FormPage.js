import React from "react";
// import Select from "react-select";

import { Controller, useForm } from "react-hook-form";
import {
  Container,
  Input,
  Form,
  TextArea,
  Button,
  Checkbox,
  Radio,
  Dropdown,
  FormDropdown,
} from "semantic-ui-react";
import Header from "./Header";

const countryOptions = [
  { key: "af", value: "af", flag: "af", label: "Afghanistan" },
  { key: "ax", value: "ax", flag: "ax", label: "Aland Islands" },
  { key: "al", value: "al", flag: "al", label: "Albania" },
  { key: "dz", value: "dz", flag: "dz", label: "Algeria" },
  { key: "as", value: "as", flag: "as", label: "American Samoa" },
  { key: "ad", value: "ad", flag: "ad", label: "Andorra" },
  { key: "ao", value: "ao", flag: "ao", label: "Angola" },
  { key: "ai", value: "ai", flag: "ai", label: "Anguilla" },
  { key: "ag", value: "ag", flag: "ag", label: "Antigua" },
  { key: "ar", value: "ar", flag: "ar", label: "Argentina" },
  { key: "am", value: "am", flag: "am", label: "Armenia" },
  { key: "aw", value: "aw", flag: "aw", label: "Aruba" },
  { key: "au", value: "au", flag: "au", label: "Australia" },
  { key: "at", value: "at", flag: "at", label: "Austria" },
  { key: "az", value: "az", flag: "az", label: "Azerbaijan" },
  { key: "bs", value: "bs", flag: "bs", label: "Bahamas" },
  { key: "bh", value: "bh", flag: "bh", label: "Bahrain" },
  { key: "bd", value: "bd", flag: "bd", label: "Bangladesh" },
  { key: "bb", value: "bb", flag: "bb", label: "Barbados" },
  { key: "by", value: "by", flag: "by", label: "Belarus" },
  { key: "be", value: "be", flag: "be", label: "Belgium" },
  { key: "bz", value: "bz", flag: "bz", label: "Belize" },
  { key: "bj", value: "bj", flag: "bj", label: "Benin" },
];

const FormPage = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      description: "",
      country: {},
      checkbox: false,
      radio: false,
    },
  });

  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <Header></Header>
      <Container>
        <div style={{ width: "60%", margin: "30px auto" }}>
          <h2>Form</h2>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group widths="equal">
              <Form.Input label="First name">
                <Controller
                  name="firstName"
                  control={control}
                  render={({ field }) => (
                    <Input placeholder="First Name" {...field} />
                  )}
                />
              </Form.Input>
              <Form.Input label="Last Name">
                <Controller
                  name="lastName"
                  control={control}
                  render={({ field }) => (
                    <Input placeholder="Last Name" {...field} />
                  )}
                />
              </Form.Input>
            </Form.Group>

            <Form.Field>
              <label>Description</label>
              <Controller
                name="description"
                control={control}
                render={({ field }) => (
                  <TextArea placeholder="Description" {...field} />
                )}
              />
            </Form.Field>

            <Form.Field>
              <label>Country</label>
              <Controller
                name="country"
                control={control}
                render={({ field: value, onChange, onBlur }) => (
                  <Dropdown
                    value={value}
                    selection
                    onChange={(e) => onChange(e.target.value)}
                    // onBlur={onBlur}
                    options={countryOptions}
                  />
                )}
              />
            </Form.Field>
            {/* <Form.Group>
              <label>Gender</label>
              <Form.Field>
                <Controller
                  name="checkbox"
                  control={control}
                  // rules={{ required: true }}
                  render={({ field }) => (
                    <Radio value="male" label="Male" {...field} />
                  )}
                />
              </Form.Field>
              <Form.Field>
                <Controller
                  name="checkbox"
                  control={control}
                  // rules={{ required: true }}
                  render={({ field }) => (
                    <Radio value="female" label="Female" {...field} />
                  )}
                />
              </Form.Field>
            </Form.Group> */}
            <Form.Field>
              <label>Radio Button</label>
              <Controller
                name="radio"
                control={control}
                render={({ field: { value, onChange } }) => (
                  <Radio toggle onChange={onChange} checked={value} />
                )}
              />
            </Form.Field>
            <Form.Field>
              <label>Terms & Conditions</label>
              <Controller
                name="checkbox"
                control={control}
                render={({ field: { value, onChange } }) => (
                  <Checkbox
                    checked={value}
                    onChange={(e) => {
                      onChange(e.target.checked);
                    }}
                  />
                )}
              />
            </Form.Field>
            <Button primary type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </Container>
    </div>
  );
};

export default FormPage;
