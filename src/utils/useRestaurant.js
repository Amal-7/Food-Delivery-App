import { useEffect, useState } from "react"

const useRestaurant = (resId,setIsLoading) => {

    const [menuDetails,setMenudetails] = useState([])
    const [ restaurantDetails,setRestaurantDetails] = useState({})

    useEffect(()=>{
        getMenuDetails() 
    },[])

    async function getMenuDetails () {
        const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=10.046699&lng=76.329818&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`)
        const json = await data.json()
        setMenudetails(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards)
        setRestaurantDetails(json?.data?.cards[0]?.card?.card?.info)
        setIsLoading(false)
    }

    return [menuDetails,restaurantDetails]
}


export default useRestaurant