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
        },
        gmapsToken: {
            type: Object
        }
    },
    initializeDefaultEvents() {
        this.events = {};
    },
    initializeEvents() {
        this.eventsList = (this.userLogged.length && this.events.hasOwnProperty(this.userLogged) ) ?
            this.events[this.userLogged] : [];
        this.isEventsEmpty = !this.eventsList.length && !!this.userLogged;
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
        var eventName = e.target.attributes['data-event'].value;
        var userEvents = this.events[this.userLogged]
        for (var i in userEvents) {
            if (userEvents[i].name === eventName) {
                this.events[this.userLogged].splice(i, 1);
                this.set('events', this.events);
                this.$$('#eventsStorage').save();
                this.$$('iron-localstorage[name="events"]').reload();
                break;
            }
        }
    },
    getLatitude(location) {
        return location.replace(/,.+/, '');
    },
    getLongitude(location) {
        return location.replace(/.+,/, '');
    },
    _date: PolymerFilters._date,
});
