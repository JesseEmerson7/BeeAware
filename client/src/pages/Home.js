import React from "react";
import { Link } from "react-router-dom";
import Video from "../assets/img/Bees.mp4";
import "./Home.css";

const Home = () => {
  return (
    <main className="home-page">
      <section className="home-hero">
        <div className="home-hero__overlay" />
        <div className="home-hero__content">
          <p className="home-kicker">Florida Pollinator Resource</p>
          <h1>Welcome to BeeAware</h1>
          <p className="home-hero__lead">
            Learn which local bees support your ecosystem, why they matter, and
            how your garden and community can help them thrive.
          </p>
          <div className="home-hero__actions">
            <Link to="/Info" className="home-btn home-btn--solid">
              Learn About Bees
            </Link>
            <Link to="/blog" className="home-btn home-btn--outline">
              Explore Bee Blog
            </Link>
          </div>
        </div>
      </section>

      <section className="home-highlights">
        <article className="highlight-card">
          <h3>Native Bee Guides</h3>
          <p>Identify common Florida bee species with visuals and facts.</p>
        </article>
        <article className="highlight-card">
          <h3>Pollinator Impact</h3>
          <p>See how bee health directly supports food systems and habitats.</p>
        </article>
        <article className="highlight-card">
          <h3>Community Updates</h3>
          <p>Read local posts and discoveries from the BeeAware community.</p>
        </article>
      </section>

      <section className="home-about">
        <div className="home-about__text">
          <h2>
            About <span>BeeAware</span>
          </h2>
          <p>
            BeeAware is a community-first platform focused on local pollinators
            in Florida. We combine practical bee education, timely blog content,
            and conservation awareness so more people can protect pollinator
            populations where they live.
          </p>
          <p>
            Join the hive to share observations, learn from local experts, and
            support pollinator-friendly habits in your neighborhood.
          </p>
          <Link to="/signup" className="home-btn home-btn--solid">
            Join the Hive
          </Link>
        </div>

        <div className="home-about__media">
          <video src={Video} muted autoPlay loop playsInline />
        </div>
      </section>

      <section className="home-blog-cta">
        <h3>Check Out The Bee Blog</h3>
        <p>
          Dive into recent pollinator stories, community updates, and practical
          tips for supporting bees in Florida.
        </p>
        <Link to="/blog" className="home-btn home-btn--outline">
          Read Recent Posts
        </Link>
      </section>
    </main>
  );
};

export default Home;
