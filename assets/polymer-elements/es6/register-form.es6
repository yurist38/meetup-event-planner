Polymer({
    is: 'register-form',
    properties: {
        validators: {
            type: Array,
            value: [
                {
                    regexp: '[\!\@\#\$\%\^\&\*]',
                    message: 'Must contain a special char.'
                },{
                    regexp: '\\d',
                    message: 'Must contain a digit.'
                },{
                    regexp: '[A-Z]',
                    message: 'Must contain a uppercase.'
                },{
                    regexp: '[a-z]',
                    message: 'Must contain a lowercase.'
                }
            ]
        },
        userLogged: {
            type: String
        },
        users: {
            type: Array
        },
        showOptional: {
            type: Boolean,
            value: false
        },
        birthdate: {
            type: String,
            value: ''
        },
        submitBtnDisabled: {
            type: Boolean,
            value: true
        }
    },
    initializeDefaultUser() {
        this.userLogged = '';
    },
    initializeDefaultUsers() {
        this.users = [];
    },
    ready() {
        this.$$('#valid1').validate = this.passwordValidator.bind(this);
        this.$$('#valid2').validate = this.passwordRepeatValidator.bind(this);
    },
    onFormChange(e) {
        this.submitBtnDisabled = !e.target.form.validate();
    },
    registerUser(e) {
        e.preventDefault();
        this.users.push(e.target.serialize());
        this.$$('#users').save();
        this.registerSuccess();
        e.target.reset();
    },
    passwordValidator(value) {
        for (var validator of this.validators) {
            if (!value.match(new RegExp(validator.regexp, 'g'))) {
                this.$$('#reg-password').errorMessage = validator.message;
                return false;
            }
        }
        return true;
    },
    passwordRepeatValidator(value) {
        return value === this.$$('#reg-password').value;
    },
    submitForm(e) {
        this.$$('#register-form').submit();
    },
    registerSuccess() {
        this.$$('#toastRegisterSuccess').open();
        setTimeout(function() {
            if (document.location.pathname === '/register') {
                document.location.href = '/login';
            } else {
                document.querySelector('#login-register-pages').selected = 0;
            }
        }, 3000);
    }
});

Polymer({
    is: 'custom-validator',
    behaviors: [
        Polymer.IronValidatorBehavior
    ]
});
