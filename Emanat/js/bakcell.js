function number(value){
	
	if (input.value.length!=10)
	 {
		
    input.value+=value;

	}else{
		 hidden.style.display="block";
	}

}
// function clearThis(value){
// 	input.value=-" ";
// 	hidden.style.display="none"
// }

function succesNum() {
    if (input.value == "0555730334") {
    	  alert("Nicat Quliyev:Ödəniş uğurla yerinə yetirldi..");
    }else{
    	alert("Nomre duzgun deyil");
    }
  
}


function clearThis() {
	 var get_Value = input.value;
	 get_Value= get_Value.substring(0, get_Value.length-1);
	 input.value= get_Value;
	 hidden.style.display="none"

}

function clearThis(){
  if(input.value.length>3){
    var a = input.value.substr(0, input.value.length-1);
    input.value = a;
  } 
}