import "./App.css";
import { MainContainer } from "./components/MainContainer";
import { Provider } from "react-redux";
import store from "./utils/store";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import { WatchPage } from "./components/WatchPage";

function App() {
  // const routes = createBrowserRouter([
  //   { path: "/", element: <MainContainer /> },
  //   { path: "/watch", element: <WatchPage /> },
  // ]);

  return (
    <>
      <Provider store={store}>
        {/* <RouterProvider router={routes}></RouterProvider> */}
        <MainContainer />
      </Provider>
    </>
  );
}

export default App;
