import React from 'react';
import ReactDOM from 'react-dom';
import Map from './components/Map';

class App extends React.Component 
{
	render() 
	{
		return(
		<div>
			<div className='container'>
				<div className='row'>
					<Map/>
				</div>
			</div>
		</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('app'));