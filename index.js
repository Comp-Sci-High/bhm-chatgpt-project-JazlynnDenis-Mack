
const express = require('express')
const app = express()

app.use((req, res, next) => {
  console.log(req.method + " " + req.path)
  next()
})

app.use(express.static(__dirname + "/public"))

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html")
})

// Wait for the DOM to be fully loaded before attaching event listeners

  // Get the images and the paragraphs by their IDs
  // const image1 = document.getElementById("feeding");

  // const image2 = document.getElementById("line");
  
  // const image3 = document.getElementById("guns");

  // // Add event listener to the first image
  // image1.addEventListener('click', () => {
  //  console.log("The Black Panther Party (BPP) created the Free Breakfast for Children Program in 1969, as part of their community-based efforts to address social inequality. They recognized that many African American children in impoverished neighborhoods were starting their school days without a proper meal, which affected their health and ability to learn. The BPP set up breakfast programs in various cities, serving nutritious meals to children at no cost.")
  // });

  // // Add event listener to the second image
  // image2.addEventListener('click', () => {
  // console.log("The Black Panther Party (BPP) protested through a variety of direct and impactful actions. Their protests were often loud, visible, and confrontational, aimed at challenging systemic oppression and raising awareness about issues affecting African Americans.")  
  // });

  // image3.addEventListener('click', () => {
  //   console.log("The Black Panther Party (BPP) used guns as a form of self-defense and protest against police brutality and systemic oppression. Their use of firearms was rooted in their belief in the constitutional right to bear arms, as well as their need to protect themselves and their communities from what they saw as hostile and violent law enforcement.")  
  //   });
  




app.listen(3000, ()=>{
  console.log("Server started...")
})