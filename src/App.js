import { Header } from './components/header/Header';
import { Main } from './components/main/Main';
import { BrowserRouter } from 'react-router-dom';
import { Footer } from './components/footer/Footer';

function App() {
    return (
        <>
        <BrowserRouter>
            <Header />
            <Main /> 
            <Footer />
        </BrowserRouter>
        </>
    )
}

export default App;
