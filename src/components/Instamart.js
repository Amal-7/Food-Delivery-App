import { useState } from "react"

const Section = ({heading,description,isVisible,setVisibleItem}) =>{
    return (
        <div className="Section">
        <h1>{heading}</h1>
        <button onClick={() => {
            isVisible? setVisibleItem('') : setVisibleItem(heading)
        }}>{isVisible? 'Hide' : 'Show'}</button>
       {isVisible && <p>{description}</p> }
        </div>
    )
}
const Instamart = () => {
    const [visibleItem,setVisibleItem] = useState('')
    return (
        <>
     <Section 
        isVisible={visibleItem === 'About'}
        setVisibleItem = {setVisibleItem}
        heading = {'About'}
        description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
    />
    <Section 
        isVisible={visibleItem ==='Instamart'}
        setVisibleItem = {setVisibleItem}
        heading = {'Instamart'}
        description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
    />
    <Section 
       isVisible={visibleItem === 'Careers'}
       setVisibleItem = {setVisibleItem}
        heading = {'Careers'}
        description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
    />
        </>
    )
    

}

export default Instamart