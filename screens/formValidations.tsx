const formValidators = {
    isRequired: (fieldName) => (value) => {
        if (!value) {
            return `${fieldName} is required`
        }
    },
    validateEmail: () => (value) => {
        let emailRegex =
            /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        if (!emailRegex.test(value)) {
            return `Invalid Email`
        }
    },
    validateMobile: () => (value) => {
        let isInvalidValue = value != Number(value) || value.length !== 10
        if (isInvalidValue) {
            return `Invalid Mobile Number`
        }
    },
    validateRegex: (regex) => (value) => {
        if (!regex.test(value)) {
            return `Invalid Format Provided`
        }
    },
    validateEmailOrMobile: () => (value) => {
        let emailError = formValidators.validateEmail()(value)
        let mobileError = formValidators.validateMobile()(value)
        if (emailError && mobileError) {
            return 'Invalid Email/Mobile'
        }
    },
    validateLength: () => (text) => {
        if (text && text.length < 4) {
            return 'Must be 4 characters or more.'
        }
    },
}

export const validateField = (validators, value) => {
    let errorMessage = ''
    validators.some(({type, params = []}) => {
        const validator = formValidators[type](...params)
        let validationError = validator(value)
        if (validationError) {
            errorMessage = validationError
            return true
        }
    })
    return errorMessage
}

export const validateFields = ({fields, fieldKeys, values}) => {
    let errors
    fieldKeys.forEach((key) => {
        const field = fields[key]
        const validators = field.validators
        const value = values[key]
        if (validators && validators.length > 0) {
            const error = validateField(validators, value)

            if (error) {
                if (!errors) {
                    errors = {}
                }
                errors[key] = error
            }
        }
    })

    return errors
}
