export const validateForm = (data) => {
    const emailRegex = /^\S+@\S+\.\S+$/
    let error = {};

    if (!data.email) {
        error.email = 'Email cannot be empty';
    } else if (!emailRegex.test(data.email)) {
        error.email = 'Email format is wrong'
    }

    if (!data.password) {
        error.password = 'Password cannot be empty';
    }
    return error;
}