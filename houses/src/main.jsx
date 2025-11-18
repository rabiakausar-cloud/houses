import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute.jsx";

import { Base } from "./components/Base.jsx";
import { Home } from "./components/Home.jsx";
import { Listing } from "./components/Listing.jsx";
import { Agents } from "./components/Agents.jsx";
import { Property } from "./components/Property.jsx";
import { Blog } from "./components/Blog.jsx";
import Login from "./components/Login.jsx";
import Signup from "./components/Signup.jsx";
import { Provider } from "react-redux";
import { store } from "./store"
import { PropertyDetail } from "./components/PropertyDetailpage.jsx";
import { EditProperty } from "./components/EditProperty.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>

    <BrowserRouter>
      <Routes>
        {/* Public Route (no protection) */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Protected routes (wrapped in ProtectedRoute) */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Base />
            </ProtectedRoute>
          }
        >
          <Route index element={<Home />} />
          <Route path="listing" element={<Listing />} />
          <Route path="agents" element={<Agents />} />
          <Route path="property" element={<Property />} />
          <Route path="/property/:id" element={<PropertyDetail />} />
          <Route path="/properties/:id/edit" element={<EditProperty />} />
          <Route path="/agent/:id" element={<Blog />} />

          <Route path="blog" element={<Blog />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </Provider>
  </StrictMode>
);
