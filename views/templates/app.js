var getacctitles = document.getElementsByClassName("acctitle");
console.log(getacctitles[2]); //HTML collection
var getacccontent=document.querySelectorAll(".acccontent");
console.log(getacccontent); //NodeList

for(var x=0; x < getacctitles.length; x++){
	// console.log(x);

	getacctitles[x].addEventListener('click',function(){
		// console.log(e.target);
		// console.log(this);

		this.classList.toggle("active");

		var getcontent=this.nextElementSibling;
		console.log(getcontent);
		// console.log(x);

		if(getcontent.style.height){
			getcontent.style.height=null; //beware can't set 0
		}else{
			// getcontent.style.height="50px";
			// console.log(getcontent.scrollHeight);
			getcontent.style.height=getcontent.scrollHeight+"px";
		}
	});

	if(getacctitles[x].classList.contains('active')){
		getacccontent[x].style.height=getacccontent[x].scrollHeight+"px";
	}
}