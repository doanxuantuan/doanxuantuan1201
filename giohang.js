const btn=document.querySelectorAll("button")
//consone.log(btn)
btn.forEach(function(button,index){
    button.addEventListener("click",function(event){{
        var btnitem=event.target
        var productImg=product.querySelector("img").querySelector
        var productName=product.querySelector("H1").innerText
        var productPrice=product.querySelector("span").innerText
        //console.log(productPrice,productImg,productName)
        addcart(productPrice,productImg,productName)

    }})

})
function addcart(productPrice,productImg,productName)
{
    var addtr=document.createElement("tr")
    var trcontent=' <tr><td style="display:flex;align-items:center"><img style="width:70px" src="'+productImg+'" alt="">'+productName+'</td><td><span>'+productPrice+'</span></td><td><input style="width:30px;outline:none" type="number" value="1" min="1"></td><td style="cursor:pointer">Xóa</td> </tr>'
    addtr.innerHTML=trcontent
    var cartTable=document.querySelector("tbody")
    cartTable.append(addtr)

}