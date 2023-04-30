//Events Module
// Node.js has a built-in module,called "events",
//where you can create-,fire-,and listen for- your own events.

//Example1-Registering for the event to be fired only one time using once

//Example2-Create an event emitter instance and register a couple callbacks

//Example3-Registering for the event with callback parameters


//here we create class
const EventEmitter=require("events");

//make an object
const event=new EventEmitter();
event.on('sayMyName', () => {
    console.log("my name is aditi");
});
event.emit("sayMyName");
//when we emit events it will go to event.on where it passes like callbacks

//The concept is quite simple:emitter objects emit named events that cause the event
//previously registered listeners to be called.so,an emitter object basically has two main features.

//Emitting name events.
//registering and unregistering listeners functions

event.on('checkpage',(sc,msg)=>{
    console.log(`status code is ${sc} and the page is ${msg}`);
});
event.emit("checkpage",200,"ok");

