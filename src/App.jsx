import { Provider } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import Header from "./components/Header";
import store from "./store/store";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<ContactList />} />
            <Route path="/add" element={<ContactForm />} />
            <Route path="/edit/:id" element={<ContactForm />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
