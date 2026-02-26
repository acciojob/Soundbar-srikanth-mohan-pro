//your JS code here. If required.
const buttons=document.querySelectorAll(".btn");
const stop=document.querySelector(".stop");
let currentAudio=null;

buttons.forEach(button,()=>{
	button.addEventListener("click",function(){
		if(currentAudio){
			currentAudio.pause();
			currentAudio.currentTime=0;
		}

		const SoundName=button.innerText;

			currentAudio=new Audio("sounds/"+SoundName+".mp3");

		currentAudio.play();
	});
});

stop.addEventListener("click",function(){
	if(currentAudio){
		currentAudio.pause();
		currentAudio.currentTime=0;
	}
});

