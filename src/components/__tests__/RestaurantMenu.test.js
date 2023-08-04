import { StaticRouter } from "react-router-dom/server"
import RestaurantMenu from "../RestaurantMenu"
import { Provider } from "react-redux"
import store from "../../utils/Redux/Store"
import { RESTAURANT_MENU } from "../../../mocks/data"
import { fireEvent, render, waitFor } from "@testing-library/react"
import Header from "../Header"


global.fetch = jest.fn(() => {
    return Promise.resolve({
        json : () => Promise.resolve(RESTAURANT_MENU)
    })
})

test("Add items to cart",async() => {
    const menu = render(
        <StaticRouter>
            <Provider store={store}>
                <Header />
                <RestaurantMenu />
            </Provider>
        </StaticRouter>
        )

        await waitFor(() => expect(menu.getByTestId('menu')))
        const addBtn = menu.getAllByTestId('addBtn')
        fireEvent.click(addBtn[0])
        fireEvent.click(addBtn[0])
        const cart = menu.getByTestId('cart')
        expect(cart.innerHTML).toBe('Cart-2')
})