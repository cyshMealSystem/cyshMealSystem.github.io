var send=Math.floor(Math.random()*3);
var profile;
var toLogin=0;
    var Url=[ "https://script.google.com/macros/s/AKfycbyAdyKxhbWrM-Gi2tXG9LvtNcRzdJVc6WrnbtrqfVkpeHrErvs7waGU/exec", "https://script.google.com/macros/s/AKfycbzYGrDHbd4lIgmQdtHHGAqWGTJMyzGv33vIoIt_pIXWR7CsOKGlQIHEfQ/exec", "https://script.google.com/macros/s/AKfycbzPa8wVqSnXYRwqHUneMmYolSc6VoPjlll7LQKkOl0y7trYDappRCBZ/exec"];

function register(){
    location.href= "/register.html";
}

function password(status){
    if(status){
        IDnumber.type= "text";
    }
    else{
        IDnumber.type= "password";
    }
}

function loginConfirm(){
    var name= document.getElementById("Number").value;
    var IDnumber= document.getElementById("IDnumber").value;
    
    if(name=="" ){
        alert("請輸入學號");
    }
    else if( IDnumber==""){
        alert("請輸入身份證字號");
    }
    else{
        if(IDnumber[0]<'A' || IDnumber[0]>'z'){
            alert("身分證字號輸入錯誤!!!");
            document.getElementById("IDnumber").value="";
        }
        else if(IDnumber[0]>'Z'){
            IDnumber= IDnumber.toUpperCase();
            Send(name, IDnumber);
        }
        else{
            Send(name, IDnumber);
        }
    }
}

function Send(name, IDnumber){
    $.ajax({
        type:'get',
        cache: false,
        timeout: 5000,
        url: Url[send],
        data:  {
            'name' : name,
            'idnumber': IDnumber
        },
        datatype:'json',
        success: function(respond){
            if(respond=="fail"){
                alert("資料輸入錯誤，請重新填寫");
                document.getElementById("Number").value="";
                document.getElementById("IDnumber").value="";
            }
            else{
                alert("登入成功");
                indexBtn1.innerHTML= '<a href="#stores">瀏覽商品</a>';
                indexBtn2.innerHTML= '<a href="#settleAccount" id="mainSettleAccount">我要結帳</a>';
                data.value= respond;
                setStatus();
            }
        },
        error: function(XMLHttpRequest, textStatus, errorThrown){
            send++;
            loginConfirm();
            alert("登入逾時\n將自動幫您重新傳送資料");
        }
    });
}

function setStatus(){
    document.getElementById("status").textContent="歡迎使用本系統";
    setTimeout( function (){
    if(toLogin==0)            //login straightly
        location.hash= '';
    else if(toLogin==1)     //browsed commodity then login yet haven't selected
        location.hash= 'stores';
    else                            //browsed commodity then login and have selected
        location.hash= 'settleAccount';
    }, 500);
}
