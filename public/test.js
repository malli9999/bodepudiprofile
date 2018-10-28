
function done() {

    alert('Succesfully Submitted')
}

function large() {

    alert("You selected the large pizza of $20");
}
function medium() {

    alert("you selected the medium pizza of $15");

}
function small() {

    alert("you selected the small pizza of $10");
}
function formSubmit() {
    let form = new FormData(document.querySelector('form[name="myForm"]'))
    document.getElementById('resname').innerHTML = 'Name: ' + form.get('fname') +" " + form.get('lname')
    document.getElementById('respizzatype').innerHTML = 'Pizza type: ' + form.get('pizzatype')
    switch(form.get('pizzatype')) {
        case 'medium pizza': document.getElementById('amount').innerHTML = `Amount = $15`; break;
        case 'small pizza': document.getElementById('amount').innerHTML = `Amount = $10`; break;
        case 'large pizza': document.getElementById('amount').innerHTML = `Amount = $20`; break;        
    }
    // document.getElementsByName('myForm').reset()
    // return false

}

