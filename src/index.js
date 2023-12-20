import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import { useGlobalState, Context } from './Components/Uitlities/utils'

// const Index = () => {
// 	const store = useGlobalState();
// 	return (
// 		<Context.Provider value={store}>
// 			<App />
// 		</Context.Provider>
// 	)
// }

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
);

 
reportWebVitals();
