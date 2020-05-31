king = document.getElementById("king");
king.addEventListener("click",function(){
    if(king.textContent == "Virat")
    {
        king.classList.add("gold");
        king.textContent = "King";
    }
    else
    {
        king.textContent = "Virat";
    }
})