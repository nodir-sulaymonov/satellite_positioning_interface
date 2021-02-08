import React, {
    ChangeEventHandler,
    forwardRef
} from 'react';

import classNames from 'classnames';

// @ts-ignore
import styles from './Input.scss';

export type InputProps = {
    // main props
    name?: string;
    type?: 'text' | 'tel' | 'email' | 'password' | 'color' | 'number' | 'search' | 'url' | 'time';
    value: string;
    // actions
    onChange: ChangeEventHandler<HTMLInputElement>;
    disabled?: boolean;
    placeholder?: string;
    id?: string;
    readOnly?: boolean;
    required?: boolean;
    maxLength?: number;
    minLength?: number;
    className?: string;
    error?: boolean;
};

const Input = forwardRef<HTMLInputElement, InputProps>(({
        name,
        value,
        type,
        onChange,
        disabled = false,
        placeholder,
        id,
        readOnly,
        required,
        maxLength,
        minLength,
        className,
        error = false,
    }, ref) => {
    const rootClassName = classNames(
        styles.root,
        styles.input,
        {
            [styles.error]: error,
            [styles.disabled]: disabled,
        },
        className,
    );

    return (
        <div className={rootClassName}>
            <input
                ref={ref}
                id={id}
                placeholder={placeholder}
                disabled={disabled}
                onChange={onChange}
                type={type}
                name={name}
                value={value}
                required={required}
                readOnly={readOnly}
                maxLength={maxLength}
                minLength={minLength} />
        </div>
    );
});
export default Input;

