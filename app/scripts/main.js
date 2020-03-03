	  
	const timeContainer = document.querySelector('#time');
	const weatherContainer = document.querySelector('#weather');
	const loader = document.querySelector('.lds-ring');

	checkTime()
	checkWeather()
	setInterval(checkTime, 1000)
	// setInterval(checkWeather, 30000)

	function checkTime() {
		const today = new Date();
		const hour = today.getHours() < 10 ? '0'+today.getHours() : today.getHours();
		const minutes = today.getMinutes() < 10 ? '0'+today.getMinutes() : today.getMinutes();
		 
		const time = '<div>' + hour + '.' + minutes + '</div>';
		
		timeContainer.innerHTML = time;
		return timeContainer
	}

	function checkWeather() {
		console.log('Checking weather...')
		loader.style.display = 'block';

		const proxy = 'https://cors-anywhere.herokuapp.com/';
		const url = 'api.openweathermap.org/data/2.5/weather?lat=-25.4277&lon=-49.2730&appid=585de6c217c0301b6dcaecbaf4f69e95&units=metric&lang=pt_br'

		fetch(proxy + url)
		.then(res => res.json())
		.then(data => {
			console.log(data)
			const temp = Math.floor(data.main.temp);
			const summary = data.weather[0].description;
			const icon = data.weather[0].icon
			let iconImg;

			switch (icon) {
				case 'clear-day':
					console.log('clear day')
					iconImg = 'wi-day-sunny.svg';
					break
				case 'night':
					console.log('clear night')
					iconImg = 'wi-night-clear.svg';
					break
				case 'rain':
					console.log('rain')
					iconImg = 'wi-rain.svg';
					break
				case 'snow':
					console.log('snow')
					iconImg = 'wi-snow.svg';
					break
				case 'sleet':
					console.log('sleet')
					iconImg = 'wi-sleet.svg';
					break
				case 'wind':
					console.log('wind')
					iconImg = 'wi-windy.svg';
					break
				case 'fog':
					console.log('fog')
					iconImg = 'wi-fog.svg';
					break
				case '04n':
					console.log('cloudy')
					iconImg = 'wi-cloudy.svg';
					break
				case 'partly-cloudy-day':
					console.log('partly-cloudy-day')
					iconImg = 'wi-day-cloudy.svg';
					break
				case 'partly-cloudy-night':
					console.log('partly-cloudy-night')
					iconImg = 'wi-night-cloudy.svg';
					break
			}

			const weatherContent = `
			<div class='temp'>${temp}&deg;C</div>
			<div class='summary'>${summary}</div>
			<div class='icon'><img src="images/weather/${iconImg}" /></div>
			`
			
			weatherContainer.innerHTML = weatherContent;
			loader.style.display = 'none';
		})
	}

// ICONS : clear-day, clear-night, rain, snow, sleet, wind, fog, cloudy, partly-cloudy-day, or partly-cloudy-night