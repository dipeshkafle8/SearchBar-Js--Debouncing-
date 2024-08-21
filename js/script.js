const inputValue=document.getElementById("inputValue");
const output=document.getElementById("output");
let intervalId;

//displaying data on UI
function displayOnUI(data){
    output.innerText="";   
    data.products.forEach((el)=>{
        const div=document.createElement('div');
        div.innerText=el.title;
        output.append(div);
    })
    //after append add the class to display suggestion
    output.classList.add("displaydiv");
}


//fetching data from api
async function fetchDataFromAPI(){
   let data=await fetch(`https://dummyjson.com/products/search?q=${inputValue.value}`);
   data=await data.json();
   displayOnUI(data);
}


//on typing something on inputbox
inputValue.addEventListener('keyup',()=>{
    if(intervalId){
        clearTimeout(intervalId);
    }
    if(inputValue.value.trim()!=""){
   intervalId=setTimeout(fetchDataFromAPI,1000);
    }
    else{
        output.innerText="";
        //if no value in input box remove search suggestion
        output.classList.remove("displaydiv");
    }
})