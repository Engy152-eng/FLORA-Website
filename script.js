let answers =document.querySelectorAll(".accordin");
answers.forEach((event) =>{
event.addEventListener("click",() =>{
if(event.classList.contains("active")){
    event.classList.remove("active");
}else{
    event.classList.add("active");
}

});
});