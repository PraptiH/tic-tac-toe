let btns = document.querySelectorAll('.btn')
let valueO=true
btns.forEach(btn=>{
    btn.addEventListener('click',()=>{
    // console.log("clicked")
    if(valueO){
        btn.innerHTML="X"
        valueO=false
    }
    else{
        btn.innerHTML="O"
        valueO=true
    }
    btn.disabled="true"
})
})