import { Link } from "react-router-dom";

export default function NotAuthorized() {
    return (
        <div>
            <h1>Error 403: User not authorized to see this page</h1>
            <Link to={"/"}>Please login first</Link>
        </div>
    );
}