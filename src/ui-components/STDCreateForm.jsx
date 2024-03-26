/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { API } from "aws-amplify";
import { createSTD } from "../graphql/mutations";
export default function STDCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    state: "",
    facepage: "",
    masterapplication: "",
    tableofcontents: "",
    definitions: "",
    premiums: "",
  };
  const [state, setState] = React.useState(initialValues.state);
  const [facepage, setFacepage] = React.useState(initialValues.facepage);
  const [masterapplication, setMasterapplication] = React.useState(
    initialValues.masterapplication
  );
  const [tableofcontents, setTableofcontents] = React.useState(
    initialValues.tableofcontents
  );
  const [definitions, setDefinitions] = React.useState(
    initialValues.definitions
  );
  const [premiums, setPremiums] = React.useState(initialValues.premiums);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setState(initialValues.state);
    setFacepage(initialValues.facepage);
    setMasterapplication(initialValues.masterapplication);
    setTableofcontents(initialValues.tableofcontents);
    setDefinitions(initialValues.definitions);
    setPremiums(initialValues.premiums);
    setErrors({});
  };
  const validations = {
    state: [],
    facepage: [],
    masterapplication: [],
    tableofcontents: [],
    definitions: [],
    premiums: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          state,
          facepage,
          masterapplication,
          tableofcontents,
          definitions,
          premiums,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await API.graphql({
            query: createSTD.replaceAll("__typename", ""),
            variables: {
              input: {
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "STDCreateForm")}
      {...rest}
    >
      <TextField
        label="State"
        isRequired={false}
        isReadOnly={false}
        value={state}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              state: value,
              facepage,
              masterapplication,
              tableofcontents,
              definitions,
              premiums,
            };
            const result = onChange(modelFields);
            value = result?.state ?? value;
          }
          if (errors.state?.hasError) {
            runValidationTasks("state", value);
          }
          setState(value);
        }}
        onBlur={() => runValidationTasks("state", state)}
        errorMessage={errors.state?.errorMessage}
        hasError={errors.state?.hasError}
        {...getOverrideProps(overrides, "state")}
      ></TextField>
      <TextField
        label="Facepage"
        isRequired={false}
        isReadOnly={false}
        value={facepage}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              state,
              facepage: value,
              masterapplication,
              tableofcontents,
              definitions,
              premiums,
            };
            const result = onChange(modelFields);
            value = result?.facepage ?? value;
          }
          if (errors.facepage?.hasError) {
            runValidationTasks("facepage", value);
          }
          setFacepage(value);
        }}
        onBlur={() => runValidationTasks("facepage", facepage)}
        errorMessage={errors.facepage?.errorMessage}
        hasError={errors.facepage?.hasError}
        {...getOverrideProps(overrides, "facepage")}
      ></TextField>
      <TextField
        label="Masterapplication"
        isRequired={false}
        isReadOnly={false}
        value={masterapplication}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              state,
              facepage,
              masterapplication: value,
              tableofcontents,
              definitions,
              premiums,
            };
            const result = onChange(modelFields);
            value = result?.masterapplication ?? value;
          }
          if (errors.masterapplication?.hasError) {
            runValidationTasks("masterapplication", value);
          }
          setMasterapplication(value);
        }}
        onBlur={() =>
          runValidationTasks("masterapplication", masterapplication)
        }
        errorMessage={errors.masterapplication?.errorMessage}
        hasError={errors.masterapplication?.hasError}
        {...getOverrideProps(overrides, "masterapplication")}
      ></TextField>
      <TextField
        label="Tableofcontents"
        isRequired={false}
        isReadOnly={false}
        value={tableofcontents}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              state,
              facepage,
              masterapplication,
              tableofcontents: value,
              definitions,
              premiums,
            };
            const result = onChange(modelFields);
            value = result?.tableofcontents ?? value;
          }
          if (errors.tableofcontents?.hasError) {
            runValidationTasks("tableofcontents", value);
          }
          setTableofcontents(value);
        }}
        onBlur={() => runValidationTasks("tableofcontents", tableofcontents)}
        errorMessage={errors.tableofcontents?.errorMessage}
        hasError={errors.tableofcontents?.hasError}
        {...getOverrideProps(overrides, "tableofcontents")}
      ></TextField>
      <TextField
        label="Definitions"
        isRequired={false}
        isReadOnly={false}
        value={definitions}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              state,
              facepage,
              masterapplication,
              tableofcontents,
              definitions: value,
              premiums,
            };
            const result = onChange(modelFields);
            value = result?.definitions ?? value;
          }
          if (errors.definitions?.hasError) {
            runValidationTasks("definitions", value);
          }
          setDefinitions(value);
        }}
        onBlur={() => runValidationTasks("definitions", definitions)}
        errorMessage={errors.definitions?.errorMessage}
        hasError={errors.definitions?.hasError}
        {...getOverrideProps(overrides, "definitions")}
      ></TextField>
      <TextField
        label="Premiums"
        isRequired={false}
        isReadOnly={false}
        value={premiums}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              state,
              facepage,
              masterapplication,
              tableofcontents,
              definitions,
              premiums: value,
            };
            const result = onChange(modelFields);
            value = result?.premiums ?? value;
          }
          if (errors.premiums?.hasError) {
            runValidationTasks("premiums", value);
          }
          setPremiums(value);
        }}
        onBlur={() => runValidationTasks("premiums", premiums)}
        errorMessage={errors.premiums?.errorMessage}
        hasError={errors.premiums?.hasError}
        {...getOverrideProps(overrides, "premiums")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
