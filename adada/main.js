let scrolling= document.querySelector(".scrolling");
let stickyNav= document.querySelector(".stickybar")
let body= document.querySelector("html,body")
window.addEventListener("scroll" , ()=>{
if(body.scrollTop >= 100){
    scrolling.style.display= "block"
    scrolling.addEventListener("click" , ()=>{
        window.scrollTo(0 , 0)
    })
}else{
    scrolling.style.display= "none"
}
})
// ---------stickybar--------
window.addEventListener("scroll" , ()=>{
    if(body.scrollTop >= 100){
        stickyNav.style.display= "block"
        if(stickyNav.classList.contains("animate__fadeOutUp")){
            stickyNav.classList.remove("animate__animated","animate__fadeOutUp")
        }
        stickyNav.classList.add("animate__animated","animate__fadeInDown")
        
    }else{
        stickyNav.style.display= "block"
        if(stickyNav.classList.contains("animate__fadeInDown")){
            stickyNav.classList.remove("animate__animated","animate__fadeInDown")
        }
        stickyNav.classList.remove("animate__animated","animate__fadeInDown")
        stickyNav.classList.add("animate__animated","animate__fadeOutUp")
        
    }
})
// add active class
let linkItem= document.querySelectorAll(".nav-link")
for (let index = 0; index < linkItem.length; index++) {
    linkItem[index].addEventListener("click" , ()=>{
        // loop for removing class
        for (let i = 0; i < linkItem.length; i++) {
        linkItem[i].classList.remove("active")
            
        }
linkItem[index].classList.add("active")
    });
}



// dark mode ligth mode


let moonIcon = document.querySelector(".dark-theme")
let sunIcon = document.querySelector(".light-theme")
let stylesheet = document.querySelector("#skin")
moonIcon.addEventListener("click" , ()=>{
    stylesheet.setAttribute("href" , "css/style - dark.css")
    localStorage.setItem("dark-theme" , "css/style - dark.css")
})

// local storage if  to save dark them settings 
if(localStorage.getItem("dark-theme")){
    stylesheet.setAttribute("href" , "css/style - dark.css")
}

sunIcon.addEventListener("click" , ()=>{
    stylesheet.setAttribute("href" , "css/style.css")
    localStorage.removeItem("dark-theme")
})


// showmore button and images-----------------------------------------
let showImages= document.querySelectorAll(".show-more-images")
let showButton= document.querySelector(".btn-show-more")
let showLessButton= document.querySelector(".btn-show-less")
      showButton.addEventListener("click" , ()=>{
    for (let index = 0; index < showImages.length; index++) {
      
            showImages[index].style.display="block";
        }
        showButton.style.display="none"
        showLessButton.style.display="block"

    });
    showLessButton.addEventListener("click" , ()=>{
        for (let index = 0; index < showImages.length; index++) {
          
                showImages[index].style.display="none";
            }
            showButton.style.display="block"
            showLessButton.style.display="none"
    
        });
// contact form----------------------
let formData= document.querySelectorAll(".form-data")
let subjects= document.querySelector(".subjects")
let emails= document.querySelector(".emails")
let textArea= document.querySelector("textarea")
textArea.disabled= true;
for (let index = 0; index < formData.length; index++) {
              formData[index].addEventListener("blur" , ()=>{
                  if(subjects.value == "" || emails.value == ""){
                    textArea.disabled= true;
                  }else{
                    textArea.disabled= false;
                  }
              });
    
}

