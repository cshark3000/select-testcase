export type SelectProps = {
    placeholder: string;
    options: any[];
    multiple?: boolean;
    searchable?: boolean;
    onChange: (value: any) => void;
}

export type Option = {
    value: string;
    label: string;
}
export type SelectOption = Option | Option[];