import { useState } from "react";

export const useLocalStorage = (key, initialValues) =>
{
    const [values, setValues] = useState(() =>
    {
        const item = localStorage.getItem(key);

        return item ? JSON.parse(item) : localStorage.setItem(key, JSON.stringify(initialValues));
    });

    const setStoredValues = (values) =>
    {
        localStorage.setItem(key, JSON.stringify(values));
        setValues(values);
    };

    return [values, setStoredValues];
};