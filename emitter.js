function Emitter() {
    this.events = {};
    prop: [];
}

Emitter.prototype.on = function(type,listener) { // listener -- code that responds to an event
    this.events[type] = this.events[type] || []; // check if property exist, if property does not exist, make a new array
    this.events[type].push(listener); // pushing the listener function to the array -- adding a function to the array
};

{ 
    gotSomethingFromInternet: [function() {}]; // everytime i push a new function, it will be added to the array
}

Emitter.prototype.emit = function(type) { // e.g. function = file was saved (Event in application)
    // In layman terms, it's just to emit an event for people to respond 
     if (this.event[type]) { // check if file saved is a property name on the object. 
        this.events[type].forEach(function(listener) { // if it is, it would be an array. Code will then invoke the function.
            listener();
        })
     }
}

module.exports = Emitter;