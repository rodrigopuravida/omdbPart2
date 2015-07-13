document.addEventListener('DOMContentLoaded',function(){

document.querySelector('#ConverterForm')
  .addEventListener('submit',function(e){
  	e.preventDefault();
  	// var inputText = document.getElementById('Enter_Celsius');
  	var inputText = document.querySelector('#Enter_Celsius').value;
  	// var input = inputText.innerText;
     //alert("Does this work " +  inputText);

     convertMe(inputText);
    
  });

  document.querySelector('#ResetForm')
  .addEventListener('submit',function(e){
  	e.preventDefault();
  	// var inputText = document.getElementById('Enter_Celsius');
  	document.querySelector('#Enter_Celsius').value='';

    
  });


  var convertMe = function(num){
    // console.log('clicked',this);
    num = parseInt(num);
    var celsius = (num -32) / 1.8
    //alert("Celsius is " +  celsius);
    document.querySelector('#Enter_Celsius').value=celsius;

    // Setting the background based on temperature indicator
    if (celsius > 0) {
    	// 202	225	255
    	// document.querySelector('#Enter_Celsius').style.backgroundColor = 'blue';
    }
  }

  document.querySelector('#RadioSelectorForm')
  .addEventListener('click',function(e){
  	e.preventDefault();
    check(document.querySelector('#Enter_Celsius').value);

    var selector = document.getElementById("answer").value;
    console.log(selector);
  	
  	alert("Radio button" + selector);


    
  });

  function check(temperature) {
    document.getElementById("answer").value=temperature;
}

})