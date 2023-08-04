import { render } from "@testing-library/react"
import Header from "../Header"
import { Provider } from "react-redux"
import {StaticRouter} from "react-router-dom/server"
import store from '../../utils/Redux/Store'

test('Logo should load on rendering Header',() => {
    const header = render(
        <StaticRouter>
            <Provider store={store}>
                <Header />
            </Provider>
        </StaticRouter>
    );

    // check if logo is loaded

    const logo = header.getAllByTestId('logo')
    expect(logo[0].src).toBe('https://img.freepik.com/free-vector/detailed-chef-logo-template_23-2148986823.jpg?size=626&ext=jpg')

    // 
})

test('Cart should have zero items on rendering Header',() => {
    const header = render(
        <StaticRouter>
            <Provider store={store}>
                <Header />
            </Provider>
        </StaticRouter>
    );


    const cart = header.getByTestId('cart')
    expect(cart.innerHTML).toBe('Cart-0')
    // 
})