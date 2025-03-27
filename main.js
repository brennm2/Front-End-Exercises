
function getTime()
{
	fetch('https://timeapi.io/api/time/current/zone?timeZone=Europe%2FLisbon')
	.then(response => response.json())
	.then(data => {
		const element = document.getElementById("example")
		element.innerHTML = "Current time: " + data.hour + ":" + data.minute + " - "
	})
	.catch(error => console.error('Error fetching data:', error));
}
getTime()