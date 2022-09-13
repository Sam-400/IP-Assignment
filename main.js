function myFun() {
     
    var name = document.form1.txtname.value;
    document.getElementById("firstname").innerHTML = name;
    console.log(name);

    var lastName = document.form1.lname.value;
    document.getElementById("lastname").innerHTML = lastName;

    var institute = document.form1.inst.value;
    document.getElementById("instName").innerHTML = institute;

    var batch = document.form1.bat.value;
    document.getElementById("batchInp").innerHTML = batch;

    // marks 
    var internetProg = document.form1.ip.value;
    document.getElementById("interprog").innerHTML = internetProg;

    var entrepereneur = document.form1.ebis.value;
    document.getElementById("ebusiness").innerHTML = entrepereneur;
    //console.log(entrepereneur);

    var dataManagement = document.form1.admt.value;
    document.getElementById("datamg").innerHTML = dataManagement;
    

    var computerNetwork = document.form1.cns.value;
    document.getElementById("compnet").innerHTML = computerNetwork;

    // cal
    var total = eval(parseFloat(document.form1.ip.value) + parseFloat(document.form1.ebis.value) + parseFloat(document.form1.admt.value) + parseFloat(document.form1.cns.value));
    document.getElementById("totalmark").innerHTML = total;

    // percen
    var percentage = eval(parseFloat(total * 100) / 400);
    document.getElementById("per").innerHTML = percentage.toFixed(2) + "%";
   

    //garde
    switch (true) {
        case (percentage >= 80):
            document.getElementById("grade").innerHTML = "A1";
            break;
        case (percentage >= 70):
            document.getElementById("grade").innerHTML = "A";
            break;
        case (percentage >= 60):
            document.getElementById("grade").innerHTML = "B";
            break;
        case (percentage >= 50):
            document.getElementById("grade").innerHTML = "C";
            break;
        case (percentage >= 40):
            document.getElementById("grade").innerHTML = "D";
            break;
        case (percentage < 40):
            document.getElementById("grade").innerHTML = "Fail";
            break;
    }

}