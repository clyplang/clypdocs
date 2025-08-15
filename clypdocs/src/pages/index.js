import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>

        <p style={{maxWidth: 720, margin: '0 auto 1.5rem'}}>
          Clyp is a small, practical scripting language and toolkit focused on
          readable syntax and approachable tooling. Start with the quickstart
          below, explore the standard library, or try the examples.
        </p>

        <div className={styles.buttons}>
          <Link
            className="button button--primary button--lg"
            to="/docs/welcome/">
            Get Started
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="/docs/stdlib/">
            Stdlib
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="/docs/examples">
            Examples
          </Link>
        </div>
      </div>
    </header>
  );
}

function QuickLinks() {
  return (
    <section className="padding-vert--lg">
      <div className="container">
        <div className="row">
          <div className="col col--4">
            <div className={styles.quickCard} aria-labelledby="ql-docs">
              <h3 id="ql-docs">Documentation</h3>
              <p>
                Read the user guide and language reference. Start with
                "Getting Started" to run your first Clyp script.
              </p>
              <Link className="button button--outline" to="/docs/welcome/" aria-label="Getting started with Clyp">
                Getting started
              </Link>
            </div>
          </div>
          <div className="col col--4">
            <div className={styles.quickCard} aria-labelledby="ql-stdlib">
              <h3 id="ql-stdlib">Standard Library</h3>
              <p>
                Discover small, useful helpers provided by the standard
                library. Examples and API docs live under "stdlib".
              </p>
              <Link className="button button--outline" to="/docs/stdlib/" aria-label="Stdlib reference">
                Stdlib reference
              </Link>
            </div>
          </div>
          <div className="col col--4">
            <div className={styles.quickCard} aria-labelledby="ql-examples">
              <h3 id="ql-examples">Examples & Tooling</h3>
              <p>
                See runnable examples and learn how to use the CLI and
                integrations with the `clyp` package.
              </p>
              <Link className="button button--outline" to="/docs/examples" aria-label="Examples and tooling">
                Examples
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Clyp — a tiny scripting language and standard library">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <QuickLinks />
      </main>
    </Layout>
  );
}
