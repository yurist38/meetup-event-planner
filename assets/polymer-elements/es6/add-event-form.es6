Polymer({
    is: 'add-event-form',
    properties: {
        userLogged: {
            type: String
        },
        eventTypeNumber: {
            type: Number,
            observer: 'onChangeType'
        },
        eventType: {
            type: String
        },
        isHideCustomType: {
            type: Boolean,
            value: true
        },
        types: {
            type: Array,
            value: [
                'Birthday party',
                'Conference talk',
                'Wedding',
                'Other'
            ]
        },
        organizers: {
            type: Array,
            value: [
                'Individual',
                'Organization'
            ]
        },
        startDate: {
            type: String,
            observer: 'onFormChange'
        },
        endDate: {
            type: String,
            observer: 'onFormChange'
        },
        startTime: {
            type: String
        },
        endTime: {
            type: String
        },
        guests: {
            type: Array,
            observer: 'onFormChange'
        },
        submitBtnDisabled: {
            type: Boolean,
            value: true
        },
        events: {
            type: Object
        },
        gmapsToken: {
            type: Object
        },
        latitude: {
            type: String
        },
        longitude: {
            type: String
        }
    },
    initializeDefaultEvents() {
        this.events = [];
    },
    timeSelected(event) {
        var el = event.target.getAttribute('data-element'),
            picker = this.$$('#' + el + 'Picker');
        picker.notifyTimeUpdate();
        this[el] = picker.time;
        this.onFormChange();
    },
    onChangeType() {
        this.eventType = this.types[this.eventTypeNumber];
        this.isHideCustomType = (this.eventTypeNumber !== 3);
    },
    onFormChange() {
        if (this.$$('#newEventForm')) {
            this.submitBtnDisabled = !(this.$$('#newEventForm').validate() &&
                this.guests.length);
        }
    },
    onSubmit(e) {
        e.preventDefault();
        var eventData = this.$$('#newEventForm').serialize();
        eventData.organizer = this.organizers[this.$$('#organizer').selected];
        eventData.type = this.isHideCustomType ?
            this.types[this.eventTypeNumber] : eventData.customType;
        delete eventData.customType;
        eventData.guests = this.guests;
        var existEvents = this.events[this.userLogged] || [];
        existEvents.push(eventData);
        var eventsUpdated = {};
        eventsUpdated[this.userLogged] = existEvents;
        this.set('events', eventsUpdated);
        this.$$('#events').save();
        this.$$('#toastEventAdded').open();
        setTimeout(function() {
            document.location.href = '/events';
        }, 3000);
    }
});
