console.log("hi api");
document.getElementById("heading").addEventListener("click",()=>{
    let head = document.getElementById("head");
    head.style.color = "green";
})

let jsonData = {
  "name": "Asik",
  "age": 25,
  "skills": ["JS", "HTML", "CSS"]
};
const personJSON = JSON.stringify(jsonData)
console.log(personJSON);
const personObj = JSON.parse(personJSON);
console.log(personObj);
let json2 =[
{
"id": 1,
"name": "Leanne Graham",
"username": "Bret",
"email": "Sincere@april.biz",
"address": {},
"phone": "1-770-736-8031 x56442",
"website": "hildegard.org",
"company": {}
},]
console.log(json2,typeof json2);

// fetch("https://jsonplaceholder.typicode.com/users").then(res=>res.json()).then(data=>{
//     console.log(data);
// })
// fetch("https://jsonplaceholder.typicode.com/users")
//     .then(res=>{
//         console.log(res);
//         let jsonPromise = res.json();
//         console.log(jsonPromise);
//         return jsonPromise
//     }).then(data=>{
//         console.log(data.length);
//     })
// fetch("https://jsonplaceholder.typicode.com/posts")
//     .then(res=>res.json())
//     .then(data=>{
//         console.log(data.length);
//     })
 async function getData(){
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    // if(!response.ok){
    //     console.log("error");
    // }
    const data = await response.json();
    // console.log(data);
    
}
getData()
