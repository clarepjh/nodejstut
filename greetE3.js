function Greetr() {
    this.greeting = "Hello World!!!!";
    this.greet = function() {
        console.log(this.greeting);
    }
}
//replacing empty modules.exports with own object
module.exports = new Greetr();
