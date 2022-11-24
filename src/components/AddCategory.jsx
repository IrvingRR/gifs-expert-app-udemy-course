import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = (e) => setInputValue(e.target.value);

    const onFormSubmit = (e) => {
        e.preventDefault();

        if(inputValue.trim().length <= 1) return;

        onNewCategory(inputValue.trim());
        setInputValue('');
    };

    return (
        <form onSubmit={ onFormSubmit }>
            <input type='text' placeholder="Search gif" value={ inputValue } onChange={ onInputChange }/>
        </form>
    )
}

// export default AddCategory;