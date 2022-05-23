import React from 'react';
import './Footer.css';
export default function Footer() {
  return (
    <footer>
      <div className='logo-container'>
        <h2><img id="logo-footer" alt='STARTER Logo' src={require('../images/logo2.png')}></img></h2>
        </div>
      <section className='footer-links'>
        <article>
          <h3>Links</h3>
          <ul>
            <li>
              <a href='#'>Link</a>
            </li>
            <li>
              <a href='#'>Link</a>
            </li>
            <li>
              <a href='#'>Link</a>
            </li>
            <li>
              <a href='#'>Link</a>
            </li>
          </ul>
        </article>
        <article>
          <h3>Links</h3>
          <ul>
            <li>
              <a href='#'>Link</a>
            </li>
            <li>
              <a href='#'>Link</a>
            </li>
            <li>
              <a href='#'>Link</a>
            </li>
            <li>
              <a href='#'>Link</a>
            </li>
          </ul>
        </article>
        <article>
          <h3>Links</h3>
          <ul>
            <li>
              <a href='#'>Link</a>
            </li>
            <li>
              <a href='#'>Link</a>
            </li>
            <li>
              <a href='#'>Link</a>
            </li>
            <li>
              <a href='#'>Link</a>
            </li>
          </ul>
        </article>
      </section>
    </footer>
  );
}