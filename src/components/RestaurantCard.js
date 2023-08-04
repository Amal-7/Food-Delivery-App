import { IMG_CDN } from "../config";

const RestuarantList = ({ name, cloudinaryImageId, cuisines, avgRating }) => (
    <div className="cards ">
      
      <img
        
        src={
           IMG_CDN+
          cloudinaryImageId
        }
        alt=""
      />
      <div className="p-1" >
      <h3>{name}</h3>
      <h6>{avgRating}</h6>
      <h5>{cuisines?.join(",")}</h5>
      </div>
    </div>
  );
  

export default RestuarantList