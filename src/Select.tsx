import { useState, useEffect, useRef } from 'react'
import { Icon, CloseIcon } from './icons';
import { SelectProps, SelectOption, Option } from './types';
import {
    SelectContainerStyled,
    SelectHeaderStyled,
    SelectOptionsStyled,
    SelectOptionStyled,
    SelectOptionTagStyled,
    SelectOptionTagsStyled,
    SelectOptionTagClose,
    SelectSearchBox,
    SelectSearchBoxInput
} from "./styles";


const Select = (props: SelectProps) => {
    const { options, placeholder, multiple, searchable, onChange } = props;
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [selectedValue, setSelectedValue] = useState(multiple ? [] : '');
    const [searchValue, setSearchValue] = useState('');

    const searchRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        setSearchValue('');
        if (isOpen && searchRef.current) {
            searchRef.current.focus();
        }
    }, [isOpen]);

    useEffect(() => {
        const handler = () => setIsOpen(false);

        window.addEventListener("click", handler); return () => {
            window.removeEventListener("click", handler);
        };
    });

    const handleInputClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        setIsOpen(!isOpen);
    };

    const onItemClick = (option: Option) => {
        let newValue;
        if (multiple && Array.isArray(selectedValue)) {
            if (selectedValue.findIndex((o: Option) => o.value === option.value) >= 0) {
                newValue = removeOption(option);
            } else {
                newValue = [...selectedValue, option];
            }
        } else {
            newValue = option;
        }
        setSelectedValue(newValue);
        onChange(newValue);
    }

    const isSelected = (option: Option) => {
        if (!selectedValue) {
            return false;
        }

        if (multiple && Array.isArray(selectedValue)) {
            return selectedValue.filter((o: Option) => o.value === option.value).length > 0;
        }
        return selectedValue.value === option.value;
    }

    const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
    };

    const getOptions = () => {
        if (!searchValue) {
            return options;
        }
        return options.filter((option) => option.label.toLowerCase().indexOf(searchValue.toLowerCase()) >= 0);
    };

    const getDisplay = () => {
        if (!selectedValue || selectedValue.length === 0) {
            return placeholder;
        }
        if (multiple) {
            return (
                <SelectOptionTagsStyled>
                    {selectedValue.map((option: Option) => (
                        <SelectOptionTagStyled key={option.value}>
                            {option.label}
                            <SelectOptionTagClose onClick={(e) => onTagRemove(e, option)}><CloseIcon /></SelectOptionTagClose>
                        </SelectOptionTagStyled>
                    ))}
                </SelectOptionTagsStyled>
            );
        }
        return selectedValue.label;
    };

    const removeOption = (option: Option) => {
        return selectedValue.filter((o: Option) => o.value !== option.value);
    };

    const onTagRemove = (e: React.MouseEvent, option: Option) => {
        const newValue = removeOption(option);
        setSelectedValue(newValue);
        onChange(newValue);
    };

    return (
        <SelectContainerStyled>
            <SelectHeaderStyled onClick={handleInputClick}>
                <div>{getDisplay()}</div>
                <div>
                    <div>
                        <Icon />
                    </div>
                </div>
            </SelectHeaderStyled>
            {isOpen && <SelectOptionsStyled>
                {searchable && (
                    <SelectSearchBox>
                        <SelectSearchBoxInput onChange={onSearch} value={searchValue} ref={searchRef} />
                    </SelectSearchBox>
                )}
                {getOptions().map((option) =>
                    <SelectOptionStyled selected={isSelected(option)} key={option.value} onClick={() => onItemClick(option)}>{option.label}</SelectOptionStyled>
                )}
            </SelectOptionsStyled>}
        </SelectContainerStyled>
    );
}

export default Select;