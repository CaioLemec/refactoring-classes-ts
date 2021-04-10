import { BrowserRouter as Router } from 'react-router-dom';
import { Routes } from './routes';
import GlobalStyle from './styles/global';

export function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes />
      </Router>
    </>
  );
}


// {
//   "id": 2,
//   "name": "Veggie",
//   "description": "Macarrão com pimentão, ervilha e ervas finas colhidas no himalaia.",
//   "price": "21.90",
//   "available": true,
//   "image": "https://storage.googleapis.com/golden-wind/bootcamp-gostack/desafio-food/food2.png"
// },