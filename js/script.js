const inputValue=document.getElementById("inputValue");
const displayOutput=document.getElementById("displayOutput");

function displayOnUI(data){
    console.log(data);
    data.products.forEach((el)=>{
        const div=document.createElement('div');
        div.innerText=el.title;
        displayOutput.append(div);
    })
}


async function fetchDataFromAPI(){
   let data=await fetch(`https://dummyjson.com/products/search?q=${inputValue.value}`);
   data=await data.json();
   displayOnUI(data);
}



inputValue.addEventListener('keyup',()=>{
    setTimeout(fetchDataFromAPI,1000);
})