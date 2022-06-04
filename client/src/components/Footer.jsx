import { Route } from 'react-router';
import { Link } from 'react-router-dom';

import './Footer.css';
export default function Footer() {
  return (
    <footer>
      <section className='footer-links'>
        <Link to='/about' className="footer-link">About</Link>
        <Link to='/contact' className="footer-link">Contact</Link>
        <Link to='/blog' className="footer-link">Blog</Link>
      </section>
    </footer>
  );
}

{/* <Blog />
<About />
<Contact /> */}

{/* <Route path=":id" element={<UserProfile />} /> */}