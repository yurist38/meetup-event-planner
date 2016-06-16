Polymer({
    is: 'events-list',
    properties: {
        userLogged: {
            type: String,
            observer: 'userChanged'
        },
        events: {
            type: Object
        },
        eventsList: {
            type: Array,
            observer: 'eventsListChanged'
        },
        isEventsEmpty: {
            type: Boolean
        }
    },
    initializeDefaultEvents() {
        this.events = {};
    },
    initializeEvents() {
        this.eventsList = (this.userLogged.length && this.events.hasOwnProperty(this.userLogged) ) ?
            this.events[this.userLogged] : [];
        this.isEventsEmpty = !this.eventsList.length;
    },
    userChanged() {
        this.$$('iron-localstorage[name="userLogged"]').reload();
        if (this.events) this.initializeEvents();
    },
    eventsListChanged() {
        this.$$('#eventsList').render();
    },
    onLoginClicked(e) {
        if(window.innerWidth > 600) {
            e.preventDefault();
            document.querySelector('#login-popup').toggle();
        }
    },
    deleteEvent(e) {
        
    },
    _date: PolymerFilters._date
});
