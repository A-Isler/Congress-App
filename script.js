const url = 'https://google-maps-geocoding.p.rapidapi.com/geocode/json?latlng=40.714224%2C-73.96145&language=en';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f135a1242bmshfb910d7f8d15da1p1666fajsn1a197fbcc16e',
		'X-RapidAPI-Host': 'google-maps-geocoding.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}
