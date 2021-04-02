//selecting all elements 
let section=document.querySelector('section');
let div1=document.getElementById("div1");
let div2=document.getElementById("div2");
let div3=document.getElementById("div3");
let div4=document.getElementById("div4");
let div5=document.getElementById("div5");
// accessing json file in local 
fetch("products.json")
.then(function(resp){
    return resp.json();
})
.then(function(data){
    appendData(data);// calling appendData function
});

function appendData(data){

    for(let i=0;i<data.length;i++){
        var h2=document.createElement("h2");
            let img=document.createElement("img");
            let p1=document.createElement("p");
            let p2=document.createElement("p");
            let list1=document.createElement("li");
            let list2=document.createElement("li");
            let list3=document.createElement("li");
            let list4=document.createElement("li");
        
        if(i==0)
        {
            let headerH4=document.createElement("h4");
            h2.textContent="Name: "+data[i].productName;
            p1.textContent="Price: $"+data[i].price;
            p2.textContent="Description: "+data[i].description;
            list1.textContent="Color: "+data[i].features.color;
            list2.textContent="Brand: "+data[i].features.brand;
            list3.textContent="Weight: "+data[i].features.weight;
            img.setAttribute("src","image/"+data[i].image); 
            div1.appendChild(h2);
            div1.appendChild(p1);
            div1.appendChild(p2);
            div1.appendChild(list1);
            div1.appendChild(list2);
            div1.appendChild(list3);
            div1.appendChild(img);
        }
        if(i==1)
        {
            let headerH4=document.createElement("h4");
            h2.textContent="Name: "+data[i].productName;
            p1.textContent="Price: $"+data[i].price;
            p2.textContent="Description: "+data[i].description;
            list1.textContent="Brand: "+data[i].features.brand;
            list2.textContent="Material: "+data[i].features.material;
            img.setAttribute("src","image/"+data[i].image); 
            div2.appendChild(h2);
            div2.appendChild(p1);
            div2.appendChild(p2);
            div2.appendChild(list1);
            div2.appendChild(list2);
            div2.appendChild(img);
        }
        if(i==2)
        {
            let headerH4=document.createElement("h4");
            h2.textContent="Name: "+data[i].productName;
            p1.textContent="Price: $"+data[i].price;
            p2.textContent="Description: "+data[i].description;
            list1.textContent="Color: "+data[i].features.color;
            list2.textContent="Brand: "+data[i].features.brand;
            list3.textContent="Size: "+data[i].features.size;
            img.setAttribute("src","image/"+data[i].image); 
            div3.appendChild(h2);
            div3.appendChild(p1);
            div3.appendChild(p2);
            div3.appendChild(list1);
            div3.appendChild(list2);
            div3.appendChild(list3);
            div3.appendChild(img);
        }
        if(i==3){
            let headerH4=document.createElement("h4");
            h2.textContent="Name: "+data[i].productName;
            p1.textContent="Price: $"+data[i].price;
            p2.textContent="Description: "+data[i].description;
            list1.textContent="Color: "+data[i].features.color;
            list2.textContent="Brand: "+data[i].features.brand;
            list3.textContent="Weight: "+data[i].features.weight;
            img.setAttribute("src","image/"+data[i].image); 
            div4.appendChild(h2);
            div4.appendChild(p1);
            div4.appendChild(p2);
            div4.appendChild(list1);
            div4.appendChild(list2);
            div4.appendChild(list3);
            div4.appendChild(img);
        }
        if(i==4){
            let headerH4=document.createElement("h4");
            h2.textContent="Name: "+data[i].productName;
            p1.textContent="Price: $"+data[i].price;
            p2.textContent="Description: "+data[i].description;
            list1.textContent="Color: "+data[i].features.color;
            list2.textContent="Brand: "+data[i].features.brand;
            list3.textContent="Weight: "+data[i].features.weight;
            img.setAttribute("src","image/"+data[i].image); 
            div5.appendChild(h2);
            div5.appendChild(p1);
            div5.appendChild(p2);
            div5.appendChild(list1);
            div5.appendChild(list2);
            div5.appendChild(list3);
            div5.appendChild(img);
        }
    }
}
/*
let requestURL="http://15.222.122.223/~Jaskaran200447873/product.json";

let request=new XMLHttpRequest();

request.open("GET",requestURL);
request.responseType="json";
request.send();

request.onload=function(){
    iScreamInc=request.response;
    console.log(iScreamInc);
    appendData(iScreamInc);
};
*/