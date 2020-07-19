var details ={
    "name" : [],
    "phone" : [],
    "email":[],
    "description":[]
}

function add () {
    var nam = document.getElementById("t1").value;
    var phn = document.getElementById("t3").value;
    var desc = document.getElementById("t5").value;
    var email = document.getElementById("t2").value;

    details.name.push(nam);
    details.phone.push(phn);
    details.email.push(email);
    details.description.push(desc);

    console.log(details);
    alert("DATA submitted Successfully");

}