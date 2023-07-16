import "./App.css"

function App() {
    return (
        <>
            <header>
                <ul>
                    <li><a href="/about">About</a></li>
                    <li><a href="/projects">Projects</a></li>
                </ul>
            </header>
            <main>
                <h1>Brendan<br/><span className="highlight">McGuirk</span></h1>
                <div className="about">
                    Hi! My name is Brendan!<br/>I am a <span className="highlight">full-stack developer</span> working with React/Redux and many different back-ends with <span className="highlight">4+ years of experience</span>.
                </div>
            </main>
            <footer>
                <a href="https://www.linkedin.com/in/brendan-w-mcguirk/" className="fa fa-linkedin"></a>
                <a href="https://github.com/BlastMcGuirk" className="fa fa-github"></a>
            </footer>
        </>
    )
}

export default App
