import "./App.css";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import ContactsApp from "./Components/ContactsApp";
import LoginPage from "./Components/LoginPage";
import RegisterPage from "./Components/RegisterPage";
import PageNotFound from "./Components/PageNotFound";
import NotAuthorized from "./Components/NotAuthorized";


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />{/*LoginPage will be here*/}
          <Route path="/contacts" element={<ContactsApp />}/>
          <Route path="/register" element={<RegisterPage />} />
          <Route path ="/not-authorized" element={<NotAuthorized />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;