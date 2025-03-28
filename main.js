
function getTime()
{
	fetch('https://timeapi.io/api/time/current/zone?timeZone=Europe%2FLisbon')
	.then(response => response.json())
	.then(data => {

		const element = document.getElementById("example")
		const hour = String(data.hour).padStart(2, '0')
		const minute = String(data.minute).padStart(2, '0')
		element.innerHTML = "Current time: " + hour + ":" + minute + " - "
	})
	.catch(error => console.error('Error fetching data:', error));
}
getTime()