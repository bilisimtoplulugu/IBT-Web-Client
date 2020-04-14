import React from "react";

import "./sidebar.styles.css";

export const Sidebar = () => (
  <aside>
    <section className="sidebar">
      <h1>Son paylaşılanlar</h1>
      <article>
        <section>
          <header>
            <div className="img"></div>
          </header>
          <footer>
            <h1>Blog Başlığı</h1>
          </footer>
        </section>
      </article>
      <article>
        <section>
          <header>
            <div className="img"></div>
          </header>
          <footer>
            <h1>Blog Başlığı</h1>
          </footer>
        </section>
      </article>
      <article>
        <section>
          <header>
            <div className="img"></div>
          </header>
          <footer>
            <h1>Blog Başlığı</h1>
          </footer>
        </section>
      </article>
      <article>
        <section>
          <header>
            <h3>Sosyal Medya</h3>
          </header>
          <section>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod consectetur adipiscing.
            </p>
            <div className="img"></div>
          </section>
          <footer>
            <div className="likes">

            </div>
            <div className="comments">
            </div>
            <button>Paylaş</button>
          </footer>
        </section>
      </article>
    </section>
  </aside>
);
