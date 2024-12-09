import React, { useState } from "react"

export const useForm = <T = { [key: string]: any }>( initialForm: T ) => {


    const [formState, setFormState] = useState( initialForm );

    const onValueChange = ( inputRef: React.ChangeEvent<HTMLInputElement> ) => {
        const { target } = inputRef;
        
        setFormState({
            ...formState,
            [ target.name ]: target.value
        });
    }

    const onResetForm = () => {
        setFormState( initialForm );
    }


    return {
        onResetForm,
        formState,
        onValueChange
    }
}
