import React from 'react';
import ReactDOM from 'react-dom';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1Ijoic3RlYWx0aDk2IiwiYSI6ImNrOHdpZXJzeTAybG4zZm83c3Bhem1ieXEifQ.QLDnXvW8CNXiWXFOtxrN_Q';

var unirest = require('unirest');
var express = require('express');
var app = express();

app.get('/', function(req, res){
unirest.get("https://community-open-weather-map.p.rapidapi.com/weather")
  .header("X-RapidAPI-Key", <27eb9c758emshe4450f6d1a50d2bp19dd82jsnea9b14c47f1c>)
  .header("x-rapidapi-host", "community-open-weather-map.p.rapidapi.com")
  .query({
      'appid': <YOUR_APP_ID>,
      'lon': '12.4924',
      'lat': '41.8902',
      'units': 'metric',
      'mode': 'html'
  })
  .end(function (result) {
      res.writeHead(200, {"Content-Type": "text/html"});
      res.write(result.body);
      console.log('Colosseum, I am coming!');
  });
})
app.listen(8081, function(){
  console.log('Server running at https://127.0.0.1:8081/');
})

class Application extends React.Component 
{
	constructor(props) {
	super(props);
		this.state = {
			lng: -2.5495,
			lat: 51.5009,
			zoom: 15.5
			};
	}
	 
	componentDidMount() {
		const map = new mapboxgl.Map({
			container: this.mapContainer,
			style: 'mapbox://styles/stealth96/ckaddkt490d1y1iqd7vqd4p5a',
			center: [this.state.lng, this.state.lat],
			zoom: this.state.zoom
			});
			
			map.on('move', () => {
				this.setState({
					lng: map.getCenter().lng.toFixed(4),
					lat: map.getCenter().lat.toFixed(4),
					zoom: map.getZoom().toFixed(2)
					});
				});
		}
		
	render() {
		return (
		<div>
			<div className='sidebarStyle'>
				<div>Longitude: {this.state.lng} | Latitude: {this.state.lat} | Zoom: {this.state.zoom}</div>
			</div>
			<div ref={el => this.mapContainer = el} className="mapContainer" />
		</div>
		)
	}
}
 
ReactDOM.render(<Application />, document.getElementById('app'));