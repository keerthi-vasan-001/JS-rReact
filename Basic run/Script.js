// // function add(x,y)
// // {
// //     return x+y;
// // }
// // //console.log(add(5,19));

// // //Arrow function
// // const adarrow=(x,y)=> x+y;
// // console.log(adarrow(1,1));

// // // callback function 
// // // A callback function is a function that is passed as an argument to another function
// // function display(x,y,operation)
// // {
// //     var res=operation(x,y);
// //     console.log(res);
// // }
// // display(10,15,add);
// // // advantage : for one add it is okay for different sub,mul,div...callback is easier

// // // promises
// // const mypromise=new  Promise((resolve,reject)=>
// // {
// //     setTimeout(()=>
// //     {
// //         const randnum=Math.floor(Math.random()*10);
// //         if(randnum<5)
// //         {
// //             resolve(`Sucesss !with number ${randnum}`)
// //         }else{
// //             reject(`Error !with number ${randnum}`)
// //         }
// //     },2000);

// // })
// // mypromise
// // .then((result)=>
// // {
// //     console.log(result)
// // })
// // .catch((error)=>
// // {
// //     console.error(error);
// // })


// // JVL code
// // Prototype
// // const character={
// //     names :'sk',
// //     attack: function(){
// //         console.log("attack");
// //     }
// // }
// // const fighter={
// //     name:'Hulk',
// //     __proto__: character, // using the other object reference in this objcet
// // }
// // console.log(fighter.attack())

// // Class example
// class Character
// {
//     constructor(name)
//     {
//         this.name=name;
//     }
//     attack(name)
//     {
//         console.log(`${this.name}: swings!`)
//     }
// }
// class child extends Character
// {
//     constructor(name)
//     {
//         super(name);
//     }
//     attack()
//     {
//         console.log("childattack")
//     }
// }
// const char=new child("Keerthi");
// char.attack("keerti");

// for in loop
// let dec={
//     color:'red',
//     radius:10
// }
// for (const pop in dec){
//     console.log(dec[pop])
// }
// let arr=['hello',1,'js',true];
// for(let x in arr)
// {
//     console.log(arr[x]);
// }
// arr.forEach(function(ele)
// {
   // console.log(ele)
//})

// Try catch 
// try{
//     let res=add(10,20);
//     console.log(res)
// }catch(e)
// {
//     console.log({name:e.name,msg:e.message})
// }
// console.log('bye')

// promises with resolve
// const mypromise=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         let val={name:"user"};resolve('completed')},3000)
// })
// mypromise.then((res)=>{console.log(res)})

// Promises with reject
// const mypromise=new Promise((resolve,reject)=>{
//     setTimeout(()=>{ reject('Rejected')},10)
//    // setTimeout(()=>{resolve('Sucess')},5000)
// })
// console.log(mypromise)
// mypromise.catch((res)=>{
//     console.log(res)
// })
// console.log(mypromise)

// Promises with practical examples
function getuser()
{
    return new Promise((resolve,reject)=>{
    let users=[];
    setTimeout(()=>{
    users=[
        {username:'keerthi',email:'sk.com'},
        {username:'mukesh',email:'mkk.com'}
    ]
    resolve(users)
},1000)
  //  return users;
})
}
//const vari=getuser();
//vari.then((users)=> console.log(users))

function finduser(username)
{
    getuser().then((users)=>{
        const user=users.find((user)=> user.username==username)
        console.log(user)
    })
}
console.log(finduser('keerthi'))

function fetchdata()
{
    return new Promise(resolve=>{
        setTimeout(()=>{
            reject("Data sucessfuly fetched")
        },5000)
    })
}

// Async and await
async function processdata() {
    try{
        const data=await fetchdata();
        console.log(data)
    }catch(error){
        console.log(error)
    }
}
console.log(processdata())