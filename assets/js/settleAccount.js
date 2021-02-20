function checkStatus(){
    var hasSelect= 0;
    for(var i=0;i<product.length;i++)
        for(var j=0;j<product[i].length;j++)
            if(product[i][j].amount){
                hasSelect++;
                break;
            }
    
    if(indexBtn2.innerHTML== '<a id="mainSettleAccount">我要結帳</a>'){
        showCommodity();
        location.hash='settleAccount';
    }
    else if(hasSelect){
        toLogin=2;
        location.hash='login';
    }
    else{
        toLogin=1;
        location.hash='login';
    }
}

function showCommodity(){
    var remainder= document.getElementById("data").value.split(",");
    document.getElementById("remainder").textContent= "餘額　" + remainder[5] + "　元";
    
    if(!(document.getElementsByClassName("item").length)){
        
        //create each column title
        var Title= document.createElement('div');
        Title.className= 'title';
        var title=[];
        for(var i=0;i<4;i++){
            title.push(document.createElement('input'));
            title[i].type= 'button';
        }
        title[0].className= 'sequence';
        title[1].value= "　";
        title[1].className= 'commodityName';
        title[1].value= "商品名稱";
        title[2].className= 'commodityAmount';
        title[2].value= "購買數量";
        title[3].className= 'singalPrice';
        title[3].value= "小計";
        for(var i=0;i<title.length;i++)
            Title.appendChild(title[i]);
        commodity.appendChild(Title);
    
        //show each commodity which has been selected 
        var order=1;
        for(var i=0;i<product.length;i++)
            for(var j=0;j<product[i].length;j++)
                if(product[i][j].amount){
                    var item= document.createElement('div');
                    item.className= 'item';
                    var itemContent= [];
                    for(var k=0;k<title.length;k++){
                        itemContent.push(document.createElement('input'));
                        itemContent[k].type= 'button';
                    }
                    itemContent[0].className= 'sequence';
                    itemContent[0].value= order++;
                    itemContent[1].className= 'commodityName';
                    itemContent[1].value= product[i][j].headline;
                    itemContent[2].className= 'commodityAmount';
                    itemContent[2].value= product[i][j].amount;
                    itemContent[3].className= 'singalPrice';
                    itemContent[3].value= product[i][j].amount*product[i][j].price + '  元';
                    for(var k=0;k<itemContent.length;k++)
                        item.appendChild(itemContent[k]);
                    commodity.appendChild(item);
                }
    }
}