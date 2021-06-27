const formValidators = {
    isRequired: {
        type: 'nested',
        fn: (fieldName) => (value) => {
            if (!value) {
                return `${fieldName} is required`
            }
        },
    },
    validateEmail: {
        type: 'normal',
        fn: (value) => {
            let emailRegex =
                /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
            if (!emailRegex.test(value)) {
                return `Invalid Email`
            }
        },
    },
    validateMobile: {
        type: 'normal',
        fn: (value) => {
            let isInvalidValue = value != Number(value) || value.length !== 10
            if (isInvalidValue) {
                return `Invalid Mobile Number`
            }
        },
    },
    validateRegex: {
        type: 'nested',
        fn: (regex) => (value) => {
            if (!regex.test(value)) {
                return `Invalid Format Provided`
            }
        },
    },
    validateEmailOrMobile: {
        type: 'normal',
        fn: (value) => {
            let emailError = formValidators.validateEmail.fn(value)
            let mobileError = formValidators.validateMobile.fn(value)
            if (emailError && mobileError) {
                return 'Invalid Email/Mobile'
            }
        },
    },
    validateLength: {
        type: 'nested',
        fn: (length) => (text) => {
            if (text && text.length < length) {
                return 'Must be 4 characters or more.'
            }
        },
    },
}

export const validateField = (validators, value) => {
    let errorMessage = ''
    validators.some(({type, params = []}) => {
        const validator = formValidators[type]
        const validatorFn =
            validator.type === 'nested' ? validator.fn(...params) : validator.fn
        let validationError = validatorFn(value)
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
