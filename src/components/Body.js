import { useEffect, useState } from "react";
import RestuarantList from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";

  const Body = () => {
    const [isLoading, setIsLoading] = useState(true);
        const [searchInput,setSearchInput] = useState('')
        const [FilteredRestaurants,setFilteredRestaurants] = useState([])
        const [restaurantList,setRestaurantList] = useState([])

        useEffect(()=>{
            getRestaurants()
        },[])

    async function getRestaurants () {
        const data =await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=10.046699&lng=76.329818&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')
        const json =await data.json()
        console.log(json)
        setFilteredRestaurants(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setRestaurantList(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setIsLoading(false)
    }
    const online = useOnline()

    if(!online){
        return <h1>Offline,Please check your internet</h1>
    }
  return  (
    <>
        <div className="search-container">
            <input data-testid ="search-input"  type="text" className="bg-orange-200  m-1 shadow-lg p-1 rounded-lg focus:bg-orange-100"  onChange={(e) => setSearchInput(e.target.value)} placeholder="Search" value={searchInput}/>
            <button data-testid="search-btn"  className="bg-gray-300 border-solid m-1 p-1 shadow-lg rounded-md hover:bg-gray-500" onClick={()=>{
                const data =filterData(searchInput,restaurantList)
                setFilteredRestaurants(data)
                }}>Search</button>
        </div>
        
        {(isLoading)? 
         <Shimmer />  :
        <div className="restaurantList" data-testid="rest-list">
         {
        (FilteredRestaurants?.length ===0) ? <h3>No result found</h3> :
        FilteredRestaurants?.map((restuarant) => (
           <Link  key={restuarant?.info?.id} style={{textDecoration:'none',color:'inherit'}} to={'/restaurant/'+restuarant.info.id}><RestuarantList {...restuarant?.info}/> </Link> 
            ))}
        </div>
    }
        

    </>
  );

        }
  export default Body