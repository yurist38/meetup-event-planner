Polymer({
    is: 'login-form',
    properties: {
        lastEmailLogged: {
            type: String
        },
        users: {
            type: Array
        },
        userLogged: {
            type: String
        },
        submitBtnDisabled: {
            type: Boolean,
            value: true
        }
    },
    initializeLastEmail() {
        this.lastEmailLogged = '';
    },
    initializeDefaultUser() {
        this.userLogged = '';
    },
    initializeDefaultUsers() {
        this.users = [];
    },
    loginUser(e) {
        e.preventDefault();
        var data  = e.target.serialize();
        for (var user of this.users) {
            if (user.email === data.email && user.password === data.password) {
                this.userLogged = user.username;
                this.$$('#userLogged').save();
                document.querySelector('#userLoggedToolbar').reload();
                this.loginSuccess();
                return;
            }
        }
        this.$$('#toastNotFound').open();
        return;
    },
    onFormChange(e) {
        this.submitBtnDisabled = !e.target.form.validate();
    },
    submitForm(e) {
        this.$$('#login-form').submit();
    },
    loginSuccess() {
        this.$$('#toastLoginSuccess').open();
        if (document.location.pathname === '/login') {
            setTimeout(function() {
                document.location.href = '/';
            }, 3000);
        }
    }
});
