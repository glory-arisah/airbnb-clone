window.addEventListener('load', () => {
    homePageList.style.display ="none"
})

const homePageDropDown = document.querySelector(".icon-header");
const anew = document.querySelector(".anew")
const homePageList = document.querySelector(".dropdown")

homePageDropDown.addEventListener('mouseover', () => {
  homePageList.style.display = "block"  
})

homePageDropDown.addEventListener('mouseover', () => {
    homePageList.style.display = "block"
})

homePageList.addEventListener('mouseover', () => {
  homePageList.style.display = "block"
})

homePageList.addEventListener('mouseout', () => {
  homePageList.style.display = "none"
})


homePageDropDown.addEventListener('mouseout', () => {
   homePageList.style.display= "none"
})