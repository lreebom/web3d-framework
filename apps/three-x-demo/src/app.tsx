import React from "react"
import "./app.scss"
import {createRoot} from "react-dom/client"
import {EventSystem} from "three-x"
import MainScene from "./scene/MainScene"

const App: React.FC = () => {

    const engineContainerRef = React.useRef<HTMLDivElement>(null)

    React.useEffect(() => {
        if (engineContainerRef.current) {
            new EventSystem(engineContainerRef.current)
            const mainScene = new MainScene();
        }
    }, [])

    return <div className={"app"}>
        <div className={"engine-container"} ref={engineContainerRef}>
            three-x-demo
        </div>
    </div>
}

const root = createRoot(document.getElementById("root")!)
root.render(<App />)
