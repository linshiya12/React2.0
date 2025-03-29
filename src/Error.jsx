import { useRouteError } from "react-router-dom";

const ErrorPage = () => {

    const error=useRouteError();
    console.log(error)
    return (
        <div className="error-container">
            <h1>{error.status}</h1>
            <h2>Oops! {error.statusText}</h2>
            <p>{error.data}</p>
            <a href="/" className="home-button">Go Back Home</a>
        </div>
    );
};

export default ErrorPage;