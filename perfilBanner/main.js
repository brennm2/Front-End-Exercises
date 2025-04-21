
const secretAudio = new Audio('audio/secretAudio.mp3');
const secretAudio2 = new Audio('audio/fireinhole.ogg');


function getTime()
{
	fetch('https://timeapi.io/api/time/current/zone?timeZone=Europe%2FLisbon')
	.then(response => response.json())
	.then(data => {

		const element = document.getElementById("time")
		const hour = String(data.hour).padStart(2, '0')
		const minute = String(data.minute).padStart(2, '0')

		element.textContent = "Current time: " + hour + ":" + minute + " - "
	})
	.catch(error => console.error('Error fetching data:', error));
}

function playSecret()
{
	const newBG = document.querySelector('.bgImg');
	const time = document.querySelector('.profileTime')
	const middleDiv = document.querySelector('.middleDiv')
	
	if (secretAudio.paused){
		secretAudio2.volume = 0.2
		secretAudio2.play()
		console.log(newBG)
		setTimeout(() => {
			secretAudio.play();
			time.textContent = "Current time: Rush B - "
			newBG.style.backgroundImage = "url('images/backgroundSecret.jpeg')";
			newBG.style.backgroundColor = "black"
			newBG.style.backgroundSize = "contain";
			middleDiv.style.backdropFilter = 'none';
			middleDiv.style.boxShadow = 'none';
		}, 1200);
	}
}

function changeProfile(newUsername, newQuote)
{
	document.querySelector('.userQuote').textContent = newQuote;
	document.querySelector('.userName').textContent = '@' + newUsername;
	document.querySelector('.profileTime').textContent = 'Getting current time...'
	getTime()
}

function clickButton()
{
	document.querySelector('.boxButton').addEventListener('click', () => {
		const newUsername = document.querySelector('.inputNick').value;
		const newQuote = document.querySelector('.inputQuote').value;

		if (newQuote && newUsername){
			if (newUsername == "cs" && newQuote == "1.6"){
				playSecret()
			}
			else{
				changeProfile(newUsername, newQuote)
			}
		}
	});
}
getTime()
clickButton();

