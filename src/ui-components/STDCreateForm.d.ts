/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type STDCreateFormInputValues = {
    state?: string;
    facepage?: string;
    masterapplication?: string;
    tableofcontents?: string;
    definitions?: string;
    premiums?: string;
};
export declare type STDCreateFormValidationValues = {
    state?: ValidationFunction<string>;
    facepage?: ValidationFunction<string>;
    masterapplication?: ValidationFunction<string>;
    tableofcontents?: ValidationFunction<string>;
    definitions?: ValidationFunction<string>;
    premiums?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type STDCreateFormOverridesProps = {
    STDCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    state?: PrimitiveOverrideProps<TextFieldProps>;
    facepage?: PrimitiveOverrideProps<TextFieldProps>;
    masterapplication?: PrimitiveOverrideProps<TextFieldProps>;
    tableofcontents?: PrimitiveOverrideProps<TextFieldProps>;
    definitions?: PrimitiveOverrideProps<TextFieldProps>;
    premiums?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type STDCreateFormProps = React.PropsWithChildren<{
    overrides?: STDCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: STDCreateFormInputValues) => STDCreateFormInputValues;
    onSuccess?: (fields: STDCreateFormInputValues) => void;
    onError?: (fields: STDCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: STDCreateFormInputValues) => STDCreateFormInputValues;
    onValidate?: STDCreateFormValidationValues;
} & React.CSSProperties>;
export default function STDCreateForm(props: STDCreateFormProps): React.ReactElement;
