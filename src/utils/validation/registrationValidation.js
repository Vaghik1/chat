import { validateCommonErrors } from './validateCommonErrors';

export default (values) => {
    const errors = {};

    validateCommonErrors(values, errors, [
        {
            fieldName: 'email',
            validate: [
                'isEmail',
                'isRequired',
                { name: 'isMaxLength', maxCount: 255 }
            ]
        },
        {
            fieldName: 'name',
            validate: [
                'isRequired',
                { name: 'isMinLength', minCount: 5 },
                { name: 'isMaxLength', maxCount: 255 }
            ]
        },
        {
            fieldName: 'username',
            validate: [
                'isRequired',
                { name: 'isMinLength', minCount: 5 },
                { name: 'isMaxLength', maxCount: 255 }
            ]
        },
        {
            fieldName: 'password',
            validate: [
                'isRequired',
                { name: 'isMaxLength', maxCount: 255 },
                { name: 'isMinLength', minCount: 8 }
            ]
        },
    ]);

    return errors;
}