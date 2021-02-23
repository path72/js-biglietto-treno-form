//###################################################### 
//

const priceUnit = 0.21; // €/Km
var usrNameValue, usrKmValue, usrAgeValue;

// form sources
var usrNameForm = document.getElementById('name_surname');
var usrKmForm   = document.getElementById('distance');
var usrAgeForm  = document.getElementById('age_range');

// info display hooks
var alertHtml     = document.getElementById('alert');
var alertMsgHtml  = document.getElementById('alert_msg');
var outTicketHtml = document.getElementById('output_ticket');
var usrNameHtml   = document.getElementById('usr_name');
var tktRangeHtml  = document.getElementById('tkt_range');  
var coachNumHtml  = document.getElementById('coach_num');  
var trainCodeHtml = document.getElementById('train_code');  
var tktPriceHtml  = document.getElementById('tkt_price');  

// ** TICKET GENERATION **
var generateBtn = document.getElementById('generate_btn');
generateBtn.addEventListener('click', 
  function() {

    // data retrieving
    usrNameValue = usrNameForm.value;
    usrKmValue   = usrKmForm.value;
    usrAgeValue  = usrAgeForm.value;    
    console.log(   'usrNameValue = ' + usrNameValue + '\n'
                 + 'usrKmValue   = ' + usrKmValue   + '\n'
                 + 'usrAgeValue  = ' + usrAgeValue  + '\n' );

    // consistency check
    if (usrNameValue == '' || usrKmValue == '') {

      alertHtml.className = 'show';
      alertMsgHtml.innerHTML = 'Compila nome e distanza!';

    } else {

      // alert hiding
      alertHtml.className = 'hide';
      alertMsgHtml.innerHTML = '';

      // data generation
      var coachNumber = Math.floor(Math.random()*10)+1;
      var trainCode = Math.floor(Math.random()*10000)+90000;
      var ticketPrice = priceUnit * usrKmValue;    
      var ticketRange = 'N.A.';
      if      (usrAgeValue == 'age_1') { ticketPrice *= 0.8; ticketRange = 'Sconto minorenne'; }
      else if (usrAgeValue == 'age_2') { ticketPrice *= 0.6; ticketRange = 'Sconto over 65'; }
      ticketPrice = (Math.round(ticketPrice*100)/100).toFixed(2);

      // data injection
      usrNameHtml.innerHTML   = usrNameValue;
      tktRangeHtml.innerHTML  = ticketRange;  
      coachNumHtml.innerHTML  = coachNumber;  
      trainCodeHtml.innerHTML = trainCode;  
      tktPriceHtml.innerHTML  = '€' + ticketPrice;  

      // ticket display
      outTicketHtml.className = 'show';
    }
  } 
);

// ** TICKET ERASING **
var eraseBtn = document.getElementById('erase_btn');
eraseBtn.addEventListener('click', 
  function() {
    // ticket hiding
    outTicketHtml.className = 'hide';
    // data erasing
    usrNameForm.value       = '';
    usrKmForm.value         = '';
    usrAgeForm.value        = '';
    usrNameHtml.innerHTML   = '';
    tktRangeHtml.innerHTML  = '';  
    coachNumHtml.innerHTML  = '';  
    trainCodeHtml.innerHTML = '';  
    tktPriceHtml.innerHTML  = '';
    // alert hiding
    alertHtml.className = 'hide';
    alertMsgHtml.innerHTML = '';
  }
);

// ** TICKET RESUMING **
var resumeBtn = document.getElementById('resume_btn');
resumeBtn.addEventListener('click', 
  function() {
    // alert hiding
    alertHtml.className = 'hide';
    alertMsgHtml.innerHTML = '';
  }
);

// tre volte ripetutto alert hiding! uff...