function submit(){
    var subject= document.getElementById("subject").value;
    var body= document.getElementById("message").value;
    document.getElementById("mailto").href ="mailto:text@gmail.com?" + "subject=" + subject + "&body=" + body;
    document.getElementById("mailto").click();
    document.getElementById("subject").value="";
    document.getElementById("message").value="";
    location.hash="";
    alert("感謝您的回覆\n收到信後我們會盡速處理");
}