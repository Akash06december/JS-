


//OBJECT LITERALS
const mysym = Symbol("key1");  //Symbol is a primitive data-type

const JsUser={
    name : "Akash",
    age : 21,
    [mysym] : "mykey1",
    location : "Pune",
    email: "akash@google.com",
    isLoggedin : false,
    lastlogin: ["Moday" , "Tuesday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser[mysym]);

JsUser.email = "akash@chatgpt.com";  //update the value of email

// console.log(JsUser);

// Object.freeze(JsUser);  // freeze will not allow u to make further changes in object

JsUser.greeting = function() {
    console.log("hello akash");
}

// JsUser.greeting();

JsUser.greeting2 = function()
{
    console.log("Hello" ,`${this.name}`);
    console.log("My age is", `${this.age}`);
    
}

JsUser.greeting2();



























































































































































