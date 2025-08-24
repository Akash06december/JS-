//Singleton
// object.create



//const tinderUser = new Object()   // singleton object

const tinderUser ={}
tinderUser.id = "abc123";
tinderUser.name="sammy"
tinderUser.age = 32
tinderUser.loggedin = "false"

// console.log(tinderUser);

const regularuser ={
    email : "abc@google.com",
    fullname: {
        username : {
            firstname:"rio",
            lastname:"morata"
        }
    }
}

// console.log(regularuser.fullname.username.lastname);


const obj1 = {1:'a', 2:'b'}
const obj2 = {3:'c', 4:'d'}
const obj3 = {5:'e', 6:'f'}

// const obj4 = Object.assign(obj1,obj2,obj3);   // assign operator

// console.log(obj4);

const obj4 = {...obj1,...obj2,...obj3}   // spread operator(most commonly used)
// console.log(obj4);

const users = [    //array containing multiple objects
    {
        id:1,
        email:"a@gmail.com"
    },
    {
        id:1,
        email:"a@gmail.com"
    },
    {
        id:1,
        email:"a@gmail.com"
    },
    {
        id:1,
        email:"a@gmail.com"
    }
]

// users[1].email   //access the first element of the array i.e first object

// console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty("id"));     // to check if this property exists in an object
