import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import Provider from "./Provider/Provider";
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
		<Provider>
			<App />
		</Provider>
	</BrowserRouter>
);