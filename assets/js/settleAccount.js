function checkStatus(){
    var hasSelect= 0;
    for(var i=0;i<product.length;i++)
        for(var j=0;j<product[i].length;j++)
            if(product[i][j].amount){
                hasSelect++;
                break;
            }
    
    if(indexBtn2.innerHTML== '<a href="#settleAccount" id="mainSettleAccount">我要結帳</a>'){
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