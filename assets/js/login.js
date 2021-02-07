var send=Math.floor(Math.random()*3);
var profile;
function register(){
    location.href= "/register.html";
}

function check(status){
    if(status){
        document.getElementById("IDnumber").type= "text";
    }
    else{
        document.getElementById("IDnumber").type= "password";
    }
}

function Confirm(){
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
    var Url=["https://script.google.com/macros/s/AKfycbxzPg5Z5FuVDCKlR1ubd1bTw8xW9qsWMOWkC2coDQMZl9uzbOE/exec","https://script.google.com/macros/s/AKfycbxIorsdeoWya2MxK2tTXI1FH52Hv-mXB7cPNys3uBGvBmWjcVUP/exec", "https://script.google.com/macros/s/AKfycbyhJ7HkojoNaII0CTqrVO4Fmmpi4uPSsNJzf4nkNsvHaY5UtxWZ/exec"];
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
                document.getElementById("Number").value="";
                document.getElementById("IDnumber").value="";
                document.getElementById("IDnumber").type="password";
                document.getElementById("showPassword").checked= false;
                document.getElementById("mainLogin").style.display="none";
                document.getElementById("mainSettleAccount").style.display="block";
                document.getElementById("data").value= respond;
                location.hash = '';
                setStatus();
            }
        },
        error: function(XMLHttpRequest, textStatus, errorThrown){
            send++;
            //Confirm();
            alert("登入逾時\n將自動幫您重新傳送資料");
        }
    });
}

function setStatus(){
    document.getElementById("status").textContent="歡迎使用本系統";
    
}