import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from "./pages/Home";
import { routeMapper } from "./routes";
import Layout from "./layout";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            index
            element={
              <Layout>
                <HomePage />
              </Layout>
            }
          />
          {routeMapper.map((itr, index) => (
            <Route
              key={index}
              path={itr.path}
              element={
                <Layout>
                  <itr.component />
                </Layout>
              }
            />
          ))}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
