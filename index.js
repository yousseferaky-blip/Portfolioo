
let bars = document.querySelector(".fa-bars")
let navList = document.querySelector("nav ul")

bars.addEventListener('click',()=>{
    navList.classList.toggle('active')
})

// ++++++++++++

let dev = document.querySelector(".dev")
let ChangeText = () =>{
    setTimeout(()=>{
        dev.innerHTML = 'developer'
    },0)
    setTimeout(()=>{
        dev.innerHTML = 'freelancer'
    },4000)
    setTimeout(()=>{
        dev.innerHTML = 'UI Designer'
    },8000)
    setInterval(()=>{
        ChangeText()
    },12000)

}
ChangeText()

// +++++++++++++

let darklight= document.querySelector(".darklight")

darklight.addEventListener("click",()=>{
    darklight.classList.toggle("active")
    document.body.classList.toggle("dark")
})



// +++++++++++++

let ClickUp = document.querySelector(".ClickUp")
console.log(ClickUp);
onscroll = () =>{
    if(scrollY >= 100){
        ClickUp.style.visibility = 'visible';
    }else{
        ClickUp.style.visibility = 'hidden';
    }
}

ClickUp.addEventListener("click",()=>{
    scroll({
        top:0,
        behavior:"smooth"
    })
})

