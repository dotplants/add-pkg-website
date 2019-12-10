import React, { useState } from 'react';
import Head from 'next/head';
import { Container, Nav, NavLink, NavItem } from 'reactstrap';

import '../scss/index.scss';

const commands = {
  add: {
    pkg: {
      normal: 'npx add-pkg [your-package]',
      dev: 'npx add-pkg [your-package] -d',
      global: 'npx add-pkg [your-package] -g'
    },
    normal: ['npm install --save', 'yarn add', 'pnpm add'],
    dev: ['npm install --save-dev', 'yarn add --dev', 'pnpm add --dev'],
    global: ['npm install --global', 'yarn global add', 'pnpm add --global']
  }
};

const Index = () => {
  const [id, setId] = useState(0);
  const [command, setCommand] = useState('normal');

  const Changer = time =>
    setTimeout(
      () =>
        setId(prev => {
          let next = prev + 1;
          if (!commands.add[command][next]) {
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
            <Nav fill pills className="mb-2">
              <NavItem>
                <NavLink href="#" onClick={() => setCommand('normal')}>
                  add
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#" onClick={() => setCommand('dev')}>
                  dev
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#" onClick={() => setCommand('global')}>
                  global
                </NavLink>
              </NavItem>
            </Nav>

            <code className="add-pkg">{commands.add.pkg[command]}</code>

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
              {commands.add[command][id]} [your-package]
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
            className="ml-1"
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
            className="ml-1"
          >
            .Plants (dotPlants)
          </a>
        </div>
      </footer>
    </>
  );
};

export default Index;
