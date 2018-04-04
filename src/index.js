import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App message="Hello React by JSX" />, document.getElementById('root')); // Render App component with parameter 'message'
registerServiceWorker();
