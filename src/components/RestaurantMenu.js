import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { IMG_CDN,Menu_img_cdn } from "../config"
import Shimmer from "./Shimmer"
import useRestaurant from "../utils/useRestaurant"
import { addItem } from "../utils/Redux/cartSlice"
import { useDispatch } from "react-redux"

const RestaurantMenu = () => {
   
    const [isLoading,setIsLoading] = useState(true)
    const {resId} = useParams()
    const dispatch = useDispatch()

    const [menuDetails,restaurantDetails] = useRestaurant(resId,setIsLoading)
    const handleAddItem = (item) => {
        dispatch(addItem(item))
    }

    return (
        isLoading? <Shimmer /> :
        <div className="restaurantMenu">
        <div className="restaurantCard">
          
            <img src={IMG_CDN+restaurantDetails?.cloudinaryImageId} alt="" />
           
            <div>
            <h1 style={{padding:'1rem'}}>{restaurantDetails?.name}</h1>
            <h3>{restaurantDetails?.avgRating} Stars</h3>
            <h3>{restaurantDetails?.cuisines?.join(',')}</h3>
            <h3>{restaurantDetails?.areaName} , {restaurantDetails?.city}</h3>
            </div>
        </div>

        <h2 className="text-3xl pb-2    " style={{padding:'1rem'}} >Menu Details</h2>

        <div className="menu" data-testid="menu">
        

            {
                menuDetails?.map((item)=>(
        
                    <div key={item?.card?.info?.id} className="menu-card">
                        <div style={{width:'70%'}}  >
                            <h2 style={{paddingLeft:'1rem'}}>{item?.card?.info?.name}</h2>
                            <h3>{item?.card?.info?.price/100}</h3>
                            <h3>{item?.card?.info?.category}</h3>
                            <h3>{item?.card?.info?.description}</h3>

                        </div>
                 <div className="menu-img">
                    <img src={Menu_img_cdn+item?.card?.info?.imageId} alt="" />
                    <button data-testid="addBtn" onClick={() => handleAddItem(item?.card?.info)} className="addItem">Add Item</button>
                 </div>
                 
                   
                    </div>
                    
                    
                ))

            }
        </div>

    
        </div>


    )
}


export default RestaurantMenu