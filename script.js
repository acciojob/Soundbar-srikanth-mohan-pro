//your JS code here. If required.
const buttons=document.querySelectorAll(".btn");
const stop=document.querySelector(".stop");
let currentAudio=null;

buttons.forEach((button)=>{
	button.addEventListener("click",function(){
		if(currentAudio){
			currentAudio.pause();
			currentAudio.remove();
		}

		const SoundName=button.textContent.trim();
		
		const audio=document.createElement("audio");
		audio.src="sounds/"+SoundName+".mp3";
		audio.autoplay=true;

		document.body.appendChild(audio);

		currentAudio=audio;
	});
});

stop.addEventListener("click",function(){
	if(currentAudio){
		currentAudio.pause();
		currentAudio.remove();
		currentAudio=null;
	}
});

