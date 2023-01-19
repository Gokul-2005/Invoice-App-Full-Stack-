function openSortOption(){
    if(document.getElementById("sort-Div").style.display=="flex"){
        document.getElementById("sort-Div").style.display="none";
    }
    else{
        document.getElementById("sort-Div").style.display="flex";
    }
}

function sortInvoice(ele){
    if(ele.innerText=="All"){
        for(let i = 0 ; i<document.getElementsByClassName("sortOption").length ; i++){
            if(document.getElementsByClassName("sortOption")[i] == ele)document.getElementsByClassName("sortOption")[i].style.color="#7C5DFA";
            else document.getElementsByClassName("sortOption")[i].style.color="#1E2139";
        } 
        for(let i = 0 ; i < document.getElementsByClassName("status").length ; i++){
        document.getElementsByClassName("status")[i].parentNode.style.display="flex";
        }
    }
    else{
    for(let i = 0 ; i<document.getElementsByClassName("sortOption").length ; i++){
        if(document.getElementsByClassName("sortOption")[i] == ele)document.getElementsByClassName("sortOption")[i].style.color="#7C5DFA";
        else document.getElementsByClassName("sortOption")[i].style.color="#1E2139";
    } 
    for(let i = 0 ; i < document.getElementsByClassName("status").length ; i++){
        if(document.getElementsByClassName("status")[i].innerHTML.includes(ele.innerText)) document.getElementsByClassName("status")[i].parentNode.style.display="flex";
        else document.getElementsByClassName("status")[i].parentNode.style.display="none";
    }
    }
}

function invoiceInfo(ele){
    console.log(ele.parentNode.firstElementChild.firstElementChild.innerText);
    window.location.href= `/details?id=${ele.parentNode.firstElementChild.firstElementChild.innerText}`;
}

function CreateNewInvoice(){
    document.getElementById("newInvoiceDiv").style.transform="translateX(0px)";
}

function addNewItem(){
    document.getElementById("itemListDiv").innerHTML += (`<div class="itemDiv"> <input type="text" name="ItemName" class="clsForItemName"><input type="number" value="1" name="ItemQTY" class="clsForItemQTY" oninput="changeItemTotalPrice(this)"><input type="number" value="1" name="ItemPrice" oninput="changeItemTotalPrice(this)" class="clsForItemPrice"><div class="clsForItemTotalPrice" >1</div><button class="clsForDeleteItemButton" onclick="deleteItem(this)"><svg width="13" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.583 3.556v10.666c0 .982-.795 1.778-1.777 1.778H2.694a1.777 1.777 0 01-1.777-1.778V3.556h10.666zM8.473 0l.888.889h3.111v1.778H.028V.889h3.11L4.029 0h4.444z" fill="#888EB0" fill-rule="nonzero"/></svg></button></div>`);
}
function changeItemTotalPrice(ele){
    let quantity = ele.parentNode.querySelectorAll("input")[1].value;
    let price = ele.parentNode.querySelectorAll("input")[2].value;
    ele.parentNode.querySelectorAll("div")[0].innerText = (quantity*price).toFixed(2);
}
function deleteItem(ele){
    ele.parentNode.remove();
}