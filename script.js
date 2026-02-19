let btnLoad = document.getElementById("btnLoad");
btnLoad.addEventListener("click", () => {
  // console.log("btnLoad clicked");
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => {
      // console.log(data);
      let card = document.getElementById("card");
      card.innerHTML = '';
      for (d of data) {
        // console.log(d);

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
      // console.log(user.firstName);
    });
  })

fetch("https://dummyjson.com/carts")
  .then(res => res.json())
  .then(data => {
    // console.log(data.carts);
    // displayPost(data.carts)
    displayPost(data.carts)

  })

const displayPost = (posts) => {
  posts.forEach((post) => {
    console.log(post.total);
  })
}
// Dummy Json fake data code end here;
console.log("don first api code");
