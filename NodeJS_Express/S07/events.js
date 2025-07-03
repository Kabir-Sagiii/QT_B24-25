const EventEmitter = require("events");

const myEventEmitter = new EventEmitter();

//listen
myEventEmitter.on("myevent", (data) => {
  console.log(data);
});

//emit the event
myEventEmitter.emit("myevent", "Hello I am event data");
