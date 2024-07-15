
import { RouterProvider } from "react-router-dom";
import { router } from "./modules/core/router.jsx";

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

