import App from '../App';
import {BrowserRouter} from 'react-router-dom';
import {render, screen} from '@testing-library/react';


it('testea Home', ()=> {
    render(<BrowserRouter>
        <App/>
        </BrowserRouter>);
})