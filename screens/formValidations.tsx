export const isRequired = (fieldName) => (value) => {
  if (!value) {
    return `${fieldName} is required`;
  }
};

export const validateEmail = (value) => {
  let emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (!emailRegex.test(value)) {
    return `Invalid Email`;
  }
};

export const validateMobile = (value) => {
  let isInvalidValue = value != Number(value) || value.length !== 10;
  if (isInvalidValue) {
    return `Invalid Mobile Number`;
  }
};

export const validateRegex = (regex) => (value) => {
  if (!regex.test(value)) {
      return `Invalid Format Provided`;
  }
};

export const validateEmailOrMobile = (value) => {
    let emailError = validateEmail(value);
    let mobileError = validateMobile(value);
    if (emailError && mobileError) {
        return "Invalid Email/Mobile";
    }
};

export const validateLength = (text) => {
  if (text && text.length < 4) {
    return "Must be 4 characters or more.";
  }
};


export const validateField = (validators, value) => {
    let errorMessage = "";
    validators.some((validator) => {
        let validationError = validator(value);
        if (validationError) {
            errorMessage = validationError;
            return true;
        }
    });
    return errorMessage;
};

export const validateFields = ({fields, fieldKeys, values}) => {
    let errors;
    fieldKeys.forEach((key) => {
        const field = fields[key];
        const validators = field.validators;
        const value = values[key];
        if (validators && validators.length > 0) {
            const error = validateField(validators, value);

            if (error) {
                if(!errors){
                    errors = {}
                }
                errors[key] = error;
            }
        }
    });

    return errors;
};
