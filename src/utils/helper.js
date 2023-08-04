export const filterData = (input,list) =>{
    const updatedData =   list.filter((restaurant) => restaurant?.info?.name?.toLowerCase()?.includes(input.toLowerCase()))
     return updatedData
}
