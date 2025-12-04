import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div>
      <h1>Home Page</h1>
      <br />
      <Link to="/register">Go to Register Page</Link>
      <br />
      <Link to="/login">Go to Login Page</Link>
    </div>
  );
}