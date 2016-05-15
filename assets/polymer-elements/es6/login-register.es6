Polymer({
    is: 'login-register',
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
        }
    },
    ready() {
    },
    initializeDefaultUser() {
        this.userLogged = '';
    },
    initializeDefaultUsers() {
        this.users = [];
    },
    onPopupOpen() {
        this.$$('#valid1').validate = this.passwordValidator.bind(this);
        this.$$('#valid2').validate = this.passwordRepeatValidator.bind(this);
    },
    toggleLoginPopup(e) {
        document.querySelector('#login-popup').toggle();
    },
    switchPage(e) {
        e.preventDefault();
        document.querySelector('#login-register-pages').selected =
            e.target.getAttribute('data-switchto');
    },
    onFormChange(e) {
        e.target.form.querySelector('paper-button').disabled =
            !e.target.form.validate();
    },
    loginUser(e) {
        e.preventDefault();
        var data  = e.target.serialize();
        for (var user of this.users) {
            if (user.email === data.email && user.password === data.password) {
                this.userLogged = user.username;
            }
        }
    },
    logout() {
        this.userLogged = '';
    },
    registerUser(e) {
        e.preventDefault();
        this.users.push(e.target.serialize());
        e.target.reset();
        document.querySelector('#login-register-pages').selected = 0;
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
    }
});

Polymer({
    is: 'custom-validator',
    behaviors: [
        Polymer.IronValidatorBehavior
    ]
});
