function formValidation(email, password){
    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const isPasswordValid = /^(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/.test(password);

    if(!isEmailValid) return "Email is not Valid";
    if(!isPasswordValid) return "Password is not Valid";

    return null;
}

export default formValidation;