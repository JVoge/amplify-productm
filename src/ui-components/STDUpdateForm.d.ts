/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type STDUpdateFormInputValues = {
    state?: string;
    facepage?: string;
    masterapplication?: string;
    tableofcontents?: string;
    definitions?: string;
    premiums?: string;
};
export declare type STDUpdateFormValidationValues = {
    state?: ValidationFunction<string>;
    facepage?: ValidationFunction<string>;
    masterapplication?: ValidationFunction<string>;
    tableofcontents?: ValidationFunction<string>;
    definitions?: ValidationFunction<string>;
    premiums?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type STDUpdateFormOverridesProps = {
    STDUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    state?: PrimitiveOverrideProps<TextFieldProps>;
    facepage?: PrimitiveOverrideProps<TextFieldProps>;
    masterapplication?: PrimitiveOverrideProps<TextFieldProps>;
    tableofcontents?: PrimitiveOverrideProps<TextFieldProps>;
    definitions?: PrimitiveOverrideProps<TextFieldProps>;
    premiums?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type STDUpdateFormProps = React.PropsWithChildren<{
    overrides?: STDUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    sTD?: any;
    onSubmit?: (fields: STDUpdateFormInputValues) => STDUpdateFormInputValues;
    onSuccess?: (fields: STDUpdateFormInputValues) => void;
    onError?: (fields: STDUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: STDUpdateFormInputValues) => STDUpdateFormInputValues;
    onValidate?: STDUpdateFormValidationValues;
} & React.CSSProperties>;
export default function STDUpdateForm(props: STDUpdateFormProps): React.ReactElement;
