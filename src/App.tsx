import "./App.css"
import { Layout } from "./components/layout/Layout"

function App() {
    return (
        <Layout>
            <h1>Brendan<br/><span className="highlight">McGuirk</span></h1>
            <div className="home">
                Hi! My name is Brendan!
                <br/>
                I am a <span className="highlight">full-stack developer</span> working with React/Redux and many different back-ends with <span className="highlight">4+ years of experience</span>.
            </div>
        </Layout>
    )
}

export default App
