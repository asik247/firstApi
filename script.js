let btnLoad = document.getElementById("btnLoad");
btnLoad.addEventListener("click", () => {
  // console.log("btnLoad clicked");
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => {
      // console.log(data);
      for (d of data) {
        // console.log(d);
        let card = document.getElementById("card");
        // card.innerHTML = '';
        let div = document.createElement("div")
        div.innerHTML = `
          
          <div id="child">
          <h2>${d.name}</h2>
          <h3>${d.id}</h3>
          <p>${d.email}</p>
         </div>
        
        `
        card.appendChild(div)
      }
    })
})
// Dummy Json fake data code start here;
fetch("https://dummyjson.com/users")
  .then(res => res.json())
  .then(data => {
    data.users.forEach(user => {
        console.log(user.firstName);
    });
  })

fetch("https://dummyjson.com/carts")
  .then(res=>res.json())
  .then(data=>{
    console.log(data.carts);
    data.carts.forEach(ele=>{
      console.log(ele.total);
    })
  })
// Dummy Json fake data code end here;

