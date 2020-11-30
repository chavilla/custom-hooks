import { useState } from "react";


const  useForm= (initialState={}) => {
    
    const [value,setValue]=useState(initialState);

    const reset=()=>{
        setValue(initialState)
    }

    const handleChange=({target})=>{
        setValue({
            ...value,
            [target.name]:target.value
        });
    }

    return [value, handleChange, reset];
}
 
export default useForm;