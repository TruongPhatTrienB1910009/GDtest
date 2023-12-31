export const validateForm = (data) => {
    const emailRegex = /^\S+@\S+\.\S+$/
    let error = {};

    console.log(data)

    console.log(data.email == '')

    if (data.email && data.email == '') {
        error.email = 'Email cannot be empty';
    } else if (data.email && data.email != '' && !emailRegex.test(data.email)) {
        error.email = 'Email format is wrong'
    }

    if (data.password=='') {
        error.password = 'Password cannot be empty';
    }

    if(data.code=='') {
        error.code = 'Code cannot be empty';
    }

    if(data.name=='') {
        error.name = 'Name cannot be empty';
    }

    if (data.price <= 0) {
        error.price = 'Price must be greater than zero';
    }

    if(data.description=='') {
        error.description = 'Description cannot be empty';
    }

    return error;
}