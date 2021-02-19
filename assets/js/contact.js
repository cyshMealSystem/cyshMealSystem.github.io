function submit(){
    var subject= document.getElementById("subject").value;
    var body= document.getElementById("message").value;
    mailto.href ="mailto:cysh.meal.system@gmail.com?" + "subject=" + subject + "&body=" + body;
    mailto.click();
    document.getElementById("subject").value="";
    document.getElementById("message").value="";
    location.hash="";
}