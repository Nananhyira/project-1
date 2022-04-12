// let human = {
//     name:"ama",
//     age:3,
//     school:"codetrain"
// }
// console.log(human.name);

// class school{
//     constructor(name, location){
//         this.name = name;
//         this.location=location;

//     }
// }

// let codetrian = new School("codetrain" , "adc");
 

 // let students =['jerry', 'elinam', 'esi', 'korkor','jamil','joseph']
 // students.forEach((person, index) => {
  
 //     console.log(index,person );
 // });
 
let user = {
    name:"kachi",
    gmail:"ka@gmail.com",
    age:"20",
    loc:"lagos",
    food:["rice","pizza"],
    login: function (a , b) 
    {
        console.log(a * b);

    },
    logblogs:function(){
        console.log(this.food);

    } 
};

//user.login(4, 8);
user.logblogs();
console.log(this)





// console.log(user.food);
// user['name'] = 'maxy'
// console.log(user['name']);

// let key ="age"
// console.log(typeof user);













 // const greet = () => "hello nana";
 // const mon =greet();
 // console.log(mon);


// const bill = (products, tax) => {
//     let total =0;
//     for(let i = 0; i <products.length;i++ ){
//         total += products[i] + products[i] * tax;
//     };
//     return total;

// };
// console.log(bill([10, 15,30], 0.2));




// greet = ()=>{
//     return 'good day gen 20'
// };

// const gen20 = greet();
// console.log(gen20);


 // function greet(){
 //    return "hello  mon nana"
 // };


 // const mond = greet();
 // console.log(mond);