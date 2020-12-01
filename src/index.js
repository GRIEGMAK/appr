import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './state'

let rerenderEntireTree = (state) => {
	ReactDOM.render(
		<div>
			<App state={state}
				 getState={store.getState()}/>
		</div>,
		document.getElementById('root')
	);
}

rerenderEntireTree(store.getState());
