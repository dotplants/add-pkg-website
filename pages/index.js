import React, { useState } from 'react';
import Head from 'next/head';
import { Container } from 'reactstrap';

import '../scss/index.scss';

const commands = ['npm install --save', 'yarn add', 'pnpm add'];

const Index = () => {
  const [command, setCommand] = useState(0);

  const Changer = time =>
    setTimeout(
      () =>
        setCommand(prev => {
          let next = prev + 1;
          if (!commands[next]) {
            next = 0;
          }
          return next;
        }),
      time
    );

  const changer = () => Changer(1500);
  const firstChanger = () => Changer(1000);

  return (
    <>
      <Head>
        <title>add-pkg: Install the package with your package manager</title>
        <meta property="og:title" content="add-pkg" />
        <meta
          property="og:description"
          content="Install the package with your package manager"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://add-pkg.dotplants.net/" />
        <meta
          property="og:image"
          content="https://add-pkg.dotplants.net/static/hero.png"
        />
      </Head>

      <Container>
        <main>
          <img src="/static/box.svg" alt="box.svg" className="logo" />
          <div className="my-1">
            <h1>add-pkg</h1>
            <h4>Install the package with your package manager</h4>
          </div>

          <div className="my-3">
            <code className="add-pkg">
              npx <b>add-pkg</b> [your-package]
            </code>

            <div className="my-2">
              <img
                src="/static/down-arrow.svg"
                alt="arrow"
                height="38px"
                className="animation"
              />
            </div>

            <code
              className="manager animation"
              onAnimationIteration={changer}
              onAnimationStart={firstChanger}
            >
              {commands[command]} [your-package]
            </code>
          </div>

          <hr />
          <div className="mt-2 links">
            <a href="https://npm.im/add-pkg">
              add-pkg<span className="text-muted">@npm</span>
            </a>
            <a href="https://github.com/dotplants/add-pkg">
              dotplants/add-pkg<span className="text-muted">@github</span>
            </a>
          </div>
        </main>
      </Container>

      <footer>
        <div className="my-1">
          Icons made by
          <a
            href="https://www.flaticon.com/authors/freepik"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-1"
          >
            Freepik
          </a>
          from
          <a
            href="https://www.flaticon.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-1"
          >
            www.flaticon.com
          </a>
        </div>
        <div className="my-1">
          <b>add-pkg</b> by
          <a
            href="https://dotplants.net/"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-1"
          >
            .Plants (dotPlants)
          </a>
        </div>
      </footer>
    </>
  );
};

export default Index;
