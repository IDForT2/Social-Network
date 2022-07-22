export const required = value => {
    if (value) return undefined;
    return "Field is required";

}

export  const maxLengthCreator = (MaxLength) => (value) => {
    if (value && value.length > MaxLength) return `Max length is ${MaxLength} symbols`;
    return undefined;
}