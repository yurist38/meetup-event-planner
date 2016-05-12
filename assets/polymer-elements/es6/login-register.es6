Polymer({
    is: 'login-register',
    properties: {
        myProp: {
            type: String,
            value: 'myStr'
        }
    },
    onPopupOpen: function() {
        //this.popup = document.querySelector('#login-popup');
    },
    listeners: {
        //'login-popup.iron-overlay-opened': '_loginPopupOpened'
    },
    _loginPopupOpened: function() {
        console.log('Opened');
    },
    isLogged: function() {
        return !!localStorage.userLogged;
    },
    toggleLoginPopup: function(e) {
        document.querySelector('#login-popup').toggle();
    },
    switchPage: function(e) {
        document.querySelector('#login-register-pages').selected =
            e.target.getAttribute('data-switchto');
    },
    onLoginFormChange: function() {
        document.querySelector('#login-button').disabled =
            !document.querySelector('#login-form').validate();
    }
});

/*Polymer({
    is: 'login-form',
    ready: function() {
        console.log('Popup ready');
    },
    listeners: {
      'iron-overlay-closed':'_dialogClosed'
    },
    _dialogClosed: function(e) {
      console.log('Dialog Closed');
    }
});*/
