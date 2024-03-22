export const checkValidateData = (email, password) => {

    //const isNamevalid = /^[A-Za-z]+(?:\s+[A-Za-z]+)+$/.test(name); 
    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    //if (!isNamevalid) return "Name is not a Valid Name";
    if (!isEmailValid) return "Email ID is not Valid";
    if (!isPasswordValid) return "Password is not Valid";

    return null;

};