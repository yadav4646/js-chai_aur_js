//**Immediately Invoked Function Expression (IIFE) */

(function chai() {
    //? Named IIFE
    console.log(`DB connected`);
})();   //**SO WHEN WE USE IIFE WE HAVE TO END THAT FUNCTION (;)BECAUSE THE FUNCTION doesn't KNOW WHEN TO STOP */

//** first is used to incapsulate () the function and second  () is used to invoke it*//*

//**The reason why we use IIFE is because sometimes because of the global scope pollution can happen so to stop that we use IIFE */

//... We can use arrow functions too () ()
((name) => { //? Unamed IIFE
    console.log(`DB is connected2 ${name}`);
})("Kuldeep")

