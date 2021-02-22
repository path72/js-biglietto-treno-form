//###################################################### 
//

const priceUnit = 0.21; // €/Km
var usrNameValue, usrKmValue, usrAgeValue;

var usrName = document.getElementById('name_surname');
var usrKm   = document.getElementById('distance');
var usrAge  = document.getElementById('age_range');

var generateBtn = document.getElementById('generate');
generateBtn.addEventListener('click', 
function() {

  // if (usrNameValue == '' || usrKmValue == '') {
  //   alert('compila nome e distanza!');
  // } else {

    usrNameValue = usrName.value;
    usrKmValue   = usrKm.value;
    usrAgeValue  = usrAge.value;    
    console.log(   'usrNameValue = ' + usrNameValue + '\n'
                 + 'usrKmValue   = ' + usrKmValue   + '\n'
                 + 'usrAgeValue  = ' + usrAgeValue  + '\n' );


    var ticketPrice = priceUnit * usrKmValue;    
    var ticketRange = 'Tariffa standard';
    if      (usrAgeValue == 'age_1') { ticketPrice *= 0.8; ticketRange = 'Sconto minorenne'; }
    else if (usrAgeValue == 'age_2') { ticketPrice *= 0.6; ticketRange = 'Sconto over 65'; }
    ticketPrice = (Math.round(ticketPrice*100)/100).toFixed(2);

    var coachNumber = Math.floor(Math.random()*10)+1;
    var trainCode = Math.floor(Math.random()*10000)+90000;
    
    document.getElementById('usr_name').innerHTML   = usrNameValue;
    document.getElementById('tkt_range').innerHTML  = ticketRange;  
    document.getElementById('coach_num').innerHTML  = coachNumber;  
    document.getElementById('train_code').innerHTML = trainCode;  
    document.getElementById('tkt_price').innerHTML  = '€' + ticketPrice;  

    document.getElementById('output_ticket').style.display = 'block';

  // }
} 
);

var eraseBtn = document.getElementById('erase');
eraseBtn.addEventListener('click', 
  function() {
    document.getElementById('output_ticket').style.display = 'none';
    usrName.value = '';
    usrKm.value   = '';
    usrAge.value  = '';
    document.getElementById('usr_name').innerHTML   = '';
    document.getElementById('tkt_range').innerHTML  = '';  
    document.getElementById('coach_num').innerHTML  = '';  
    document.getElementById('train_code').innerHTML = '';  
    document.getElementById('tkt_price').innerHTML  = ''; 
    }
);


//###################################################### 
//

