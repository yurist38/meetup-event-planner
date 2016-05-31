Polymer({
    is: 'login-register',
    properties: {
        userLogged: {
            type: String
        }
    },
    initializeDefaultUser() {
        this.userLogged = '';
    },
    onLoginClicked(e) {
        if(window.innerWidth > 600) {
            e.preventDefault();
            document.querySelector('#login-popup').toggle();
        }
    },
    switchPage(e) {
        e.preventDefault();
        document.querySelector('#login-register-pages').selected =
            e.target.getAttribute('data-switchto');
    },
    logout(e) {
        e.preventDefault();
        this.userLogged = '';
        this.$$('#userLoggedToolbar').save();
        var els = document.querySelectorAll('iron-localstorage[name="userLogged"]');
        [].forEach.call(els, el => el.reload());
    }
});
