function send(){
    event.preventDefault();
    
    var name = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
    var email =  document.getElementById('email').value;

    //check có rỗng không
    if(name =="" || email =="" || phone==""){
        alert("Please fill all fields");
        return
    }

    var user = {
        name : name, 
        phone : phone ,
        email : email,
    }
    var json = JSON.stringify(user);
    localStorage.setItem(name, json);
    //xác nhận lại thông tin
    var choice =confirm('Confirm your information\n' + name +"\n"+ phone +"\n"+ email);
    if(choice){
        alert('Information sent');
    }
}

function checkEmail() { 
    var email = document.getElementById('Email'); 
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/; 
    if (!filter.test(email.value)) { 
             alert('Hay nhap dia chi email hop le.\nExample@gmail.com');
             email.focus; 
             return; 
    }
} 

function is_phonenumber() {
    var phone = document.getElementById('phone');
  var filter = /^\+?([0-9]{2})\)?[-.]?([0-9]{4})[-.]?([0-9]{4})$/;
//   /^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/;
  if(!filter.test(phone.value)) {
    alert('Nhap sai sdt');
    phone.focus;
    return;
  }  
}

