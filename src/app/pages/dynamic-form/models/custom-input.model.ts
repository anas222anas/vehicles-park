export interface CUSTOM_INPUT_MODEL {
    key: string;
    type: TYPES
    label?: string | null;
    placeholder?: string | null;
    defaultValue?: string | number | string[] | number[] | null;
    minLength?: string | number | null;
    maxLength?: string | number | null;
    min?: string | number | null;
    max?: string | number | null;
    required?: boolean | null;
    disabled?: boolean | null,
    readonly?: boolean | null,
    options?: {value: string | number | null, label: string}[]
    multiple?: boolean | null
}
export enum TYPES {
    Text = 'text',
    Number = 'number',
    Date = 'date',
    Password = 'password',
    Checkbox = 'checkbox',
    Select = 'select'
}
export class CustomInputTypes {
    text = TYPES.Text
    number = TYPES.Number
    date = TYPES.Date
    password = TYPES.Password
    checkbox = TYPES.Checkbox
    select = TYPES.Select
}