
function getdata(){
       
       var Name=document.getElementById('name').value;
       var email=document.getElementById('email').value;

       localStorage.setItem("Name",Name);
       localStorage.setItem("Email",email);
       console.getItem(Name);
}


