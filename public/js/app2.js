const $fullname = document.querySelector('#fullname');
const $email = document.querySelector('#email');
const $username = document.querySelector('#user_name');
const $mobileno = document.querySelector('#mobileno');
const $enrolment = document.querySelector('#enrolment');
const publication = require("./publication");
fetch("http://localhost:5000/userdata", {
    method: "POST",
    crossDomain: true,
    headers: {
        "Content-type": "application/json; charset=UTF-8",
        "Access-Control-Allow-Origin" : "*",
    },
    body: JSON.stringify({
        token : window.localStorage.getItem("token"),
    }),
})
.then((res)=> res.json())
.then((data)=>{
    console.log(data);
    $fullname.innerHTML = '';
    $username.innerHTML = '';
    $mobileno.innerHTML = '';
    $enrolment.innerHTML = '';
    $email.innerHTML = '';
    $fullname.innerHTML = data.data.Fullname;
    $email.innerHTML = data.data.Email;
    $enrolment.innerHTML = data.data.Enrollment;
    $mobileno.innerHTML = data.data.MobileNum;
    $username.innerHTML = data.data.Username;
    $pub_data1.innerHTML = curr_user_data[0];
    $pub_data2.innerHTML = curr_user_data[1];
});
run();
async function run(){
    const curr_user_data = await publication.findOne({author: $fullname}); 
}