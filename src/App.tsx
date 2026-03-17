function App() {
  return (
    <div className="page-shell">
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />

      <header className="topbar">
        <a href="#home" className="brand">mydevsandbox.com</a>
        <a href="https://github.com/mydevsandbox-com" target="_blank" rel="noreferrer" className="nav-link">
          GitHub
        </a>
      </header>

      <main id="home">
        <section className="hero reveal">
          <p className="kicker">Personal sandbox</p>
          <h1>Simple place for code experiments.</h1>
          <p className="hero-copy">
            I use this site to test ideas and play with tooling.
          </p>
        </section>

        <section className="code-card reveal">
          <p className="kicker" />
          <pre>
            <code>{`#!/bin/bash

perfect=no

if [[ \${perfect} == yes ]] ; then
  state='perfect'
else
  state='fine'
fi

echo "This is \${state}."`}</code>
          </pre>
        </section>

      </main>

      <footer className="footer reveal">
        <p>Built with React, TypeScript, and GitHub Pages.</p>
      </footer>
    </div>
  );
}

export default App;
