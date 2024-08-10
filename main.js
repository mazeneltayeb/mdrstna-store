let navLinks = document.querySelectorAll(".nav-link")
navLinks.forEach(e=>{
  if(e.href.includes(window.location.pathname)){
    navLinks.forEach((el)=>{
           el.classList.remove("active")
          })
    e.classList.add("active")
  }
})
