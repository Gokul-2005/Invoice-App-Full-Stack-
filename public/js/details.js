function previousPage(){
    window.location.href = "/index";
}


function markAsPaid(invoice){
    let dataId = invoice.getAttribute("data-id");
    console.log(dataId);
    fetch("/details",{
        method:"POST",
        body: JSON.stringify({
            id : dataId,
        }),
        headers:{
            "Content-Type": "application/json ; charset=utf-8",
        }
    })
    window.location.href="/index";  
}