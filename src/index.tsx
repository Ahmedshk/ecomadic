import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-calendar/dist/Calendar.css';
import { ChakraProvider } from '@chakra-ui/react';
import "react-image-gallery/styles/css/image-gallery.css";
import App from './App';

const app = (
    <ChakraProvider>
        <App />
    </ChakraProvider>
)

ReactDOM.render(
    app,
  document.getElementById('root')
);
