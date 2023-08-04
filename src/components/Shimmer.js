import React from 'react'

const Shimmer = () => {
 
 
    return (
       
      <>
        <div className='restaurantList' data-testid="shimmer">
          {Array(10).fill('').map((e,index)=> 
            
                  <div key={index} className='shimmer'>

                  </div>
            )}
  
      </div>
       
      </>
    );
  
}

export default Shimmer