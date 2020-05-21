import React from 'react';
import ReactDOM from 'react-dom';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1Ijoic3RlYWx0aDk2IiwiYSI6ImNrOHdpZXJzeTAybG4zZm83c3Bhem1ieXEifQ.QLDnXvW8CNXiWXFOtxrN_Q';

class Application extends React.Component 
{
	constructor(props) {
	super(props);
		this.state = {
			lng: 5,
			lat: 34,
			zoom: 2
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