Polymer({
    is: 'events-list',
    properties: {
        userLogged: {
            type: String
        }
    },
    onLoginClicked(e) {
        if(window.innerWidth > 600) {
            e.preventDefault();
            document.querySelector('#login-popup').toggle();
        }
    }
});
