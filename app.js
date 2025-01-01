function add(){
    const input = document.getElementById("user-value");
    const div = document.getElementById("todo");
    
    if(input.value !== ""){
        const createDiv =document.createElement("div");
        createDiv.classList.add("flex");

        const liElement = document.createElement("li");
        liElement.innerText = input.value;

        const createDone =document.createElement("button");
        
        createDone.innerText="✓";
        createDone.style.backgroundColor="red";
        createDone.style.marginRight="20px";
        
        const createSpan = document.createElement("button");
        
        createSpan.innerText = "✘";
        createSpan.style.marginLeft="200px"
        createSpan.style.backgroundColor="green";
        
        
        
        div.append(createDiv);
        createDiv.append(liElement);
         createDiv.append(createSpan);
         createDiv.append(createDone);
        input.value = "";
        createSpan.addEventListener("click",()=>{
        
            createDiv.removeChild(liElement);
            createDiv.removeChild(createSpan);
            createDiv.removeChild(createDone)
        })
        createDone.addEventListener("click", () => {
           liElement.classList.toggle('checked')
          });
        
    }


else{
    alert("please enter a value")
}
}