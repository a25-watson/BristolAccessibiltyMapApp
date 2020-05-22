/** 
// Name: Aiden John Watson
// Date: 01/05/2020
// Application: BristolAccessibilityMapApp
// Class: index.js

// This is the index.js class for rendering react applications.
// currently only the map application but being modular more apps can be added.
// 
*/

import React from 'react';
import ReactDOM from 'react-dom';
import Map from './components/Map';

//
class App extends React.Component 
{
    // creates a new in memory DOM and compares to the previous.
    // allowing for updates to the browser.
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

// compares the html code and html element to display the specified element.
ReactDOM.render(<App />, document.getElementById('app'));