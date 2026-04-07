let btns = document.querySelectorAll('.btn')
let valueO=true
btns.forEach(btn=>{
    btn.addEventListener('click',()=>{
    // console.log("clicked")
    if(valueO){
        btn.innerText="X"
        valueO=false
    }
    else{
        btn.innerText="O"
        valueO=true
    }
})
})