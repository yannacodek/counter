const btns=document.querySelectorAll('.btn');
const showNumber=document.getElementById('number');
let count=0;

btns.forEach(function(btn){
	btn.addEventListener('click', function(e){
		let takeEvent=e.currentTarget.classList;
		if(takeEvent.contains('increase')){
			count++;
			showNumber.innerHTML=count;
		}else if(takeEvent.contains('decrease')){
			count--;
			showNumber.innerHTML=count;
		}else{
			count=0;
			showNumber.innerHTML=count;
		}

		if(count>0){
			showNumber.style.color='green';
		}
		if(count<0){
			showNumber.style.color='red';
		}
		if(count==0){
			showNumber.style.color='black';
		}
	})
})
