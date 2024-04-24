import React from "react";
import {createRoot} from "react-dom/client";

const App = () => {
    return <div>App</div>;
};

createRoot(document.getElementById("root")!).render(<App />);
