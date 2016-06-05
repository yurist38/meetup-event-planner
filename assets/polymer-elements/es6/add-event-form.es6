Polymer({
    is: 'add-event-form',
    properties: {
        userLogged: {
            type: String
        },
        startDateTime: {
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
        startTime: {
            type: String
        },
        endTime: {
            type: String
        },
        guests: {
            type: Array
        }
    },
    timeSelected(event) {
        var el = event.target.getAttribute('data-element');
        this[el] = this.$$('#' + el + 'Picker').time;
    },
    onChangeType() {
        this.eventType = this.types[this.eventTypeNumber];
        this.isHideCustomType = (this.eventTypeNumber !== 3);
    },
    onSubmit(e) {
        e.preventDefault();
        var eventData = this.$$('#newEventForm').serialize();
        eventData.organizer = this.organizers[this.$$('#organizer').selected];
        eventData.type = this.isHideCustomType ?
            this.types[this.eventTypeNumber] : eventData.customType;
        delete eventData.customType;
        eventData.guests = this.guests;
    }
});
