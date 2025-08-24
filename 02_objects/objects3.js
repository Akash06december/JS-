// object de-structuring

const course ={
    coursename:"Cpp programming",
    price : 999,
    courseinstructor :"Striver"
}

// course.courseinstructor 

const {courseinstructor : instructor} = course   //de-structuring    we can use instructor in place of courseinstructor

console.log(instructor);  

//API introduction
//JSON format 
// {
//     "id":1122,
//     "name":"hose",
//     "city":"mumbai"
// }

//can also be in form of array
[
    {},
    {},
    {}
]