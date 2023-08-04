
import { useRouteError } from "react-router"
import Header from "./Header"
import Footer from "./Footer"

const Error = () => {
    const {status,statusText} = useRouteError()
    return (
        <>
            <h1>Oooopz!!</h1>
            <h2>Something Went wrong</h2>
            <h2>{status + " " + statusText}</h2>
        </>
    )
}

export default Error