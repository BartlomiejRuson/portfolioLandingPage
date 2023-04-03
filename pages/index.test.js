import {screen,render} from '@testing-library/react'
import Home from './index'
import '@testing-library/jest-dom'

test('header is visible',()=>{
    render(<Home/>)
    const title = screen.getByText(`It's just landing page`);
    expect(title).toBeInTheDocument()
})