import "@testing-library/jest-dom"
import { fireEvent, render, waitFor } from "@testing-library/react"
import { Provider } from "react-redux"
import Body from "../Body"
import { StaticRouter } from "react-router-dom/server"
import store from "../../utils/Redux/Store"
import { RESTAURANT_DATA } from "../../../mocks/data"


global.fetch = jest.fn(() => {
   return Promise.resolve({
        json : () =>  Promise.resolve(RESTAURANT_DATA)
    })
})

test('Shimmer should load on Homepage',() => {
    const body = render(
     <StaticRouter>
         <Provider store={store}>
             <Body />
         </Provider>
     </StaticRouter>
     )
 
     const shimmer = body.getByTestId('shimmer')
        
     expect(shimmer.children.length).toBe(10)
 
 })

 test('Restaurants should load on Homepage',async() => {
    const body = render(
     <StaticRouter>
         <Provider store={store}>
             <Body />
         </Provider>
     </StaticRouter>
     )
        await waitFor(() => expect(body.getByTestId('search-btn')))
     const restaurants = body.getByTestId('rest-list')
     expect(restaurants.children.length).toBe(9)
        
    
 
 })


test('Search result on Homepage',async() => {
   const body = render(
    <StaticRouter>
        <Provider store={store}>
            <Body />
        </Provider>
    </StaticRouter>
    )

    await waitFor(() => expect(body.getByTestId('search-btn')))
    const input = body.getByTestId('search-input')
    const searchBtn = body.getByTestId('search-btn')
    fireEvent.change(input,{
        target : {
            value : "king"
        }
    })

    fireEvent.click(searchBtn)

    const resList = body.getByTestId('rest-list')
    expect(resList.children.length).toBe(1)

})