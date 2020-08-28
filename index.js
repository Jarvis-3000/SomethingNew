const drp_btn=document.querySelector(".drp-btn")
const drp_list=document.querySelector(".drp-list")
const categories=document.querySelector(".categories")

var i=true;
function showDropLists(){
    if(i){
        drp_list.style.display="block"
        i=false
    }
    else{
        drp_list.style.display="none"
        i=true
    }
}
drp_btn.addEventListener("click",showDropLists)



//rebnder all the categories
function addCategories(){
    for(let i=0;i<30;i++){
        categories.innerHTML+=`<li>Nature</li>`;
    }
}

window.addEventListener("load",addCategories)