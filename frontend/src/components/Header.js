import { Link } from 'react-router-dom';
import { FaEnvelope } from 'react-icons/fa'; // Add this package if not added

const Header = () => {
  return (
    <header style={styles.header}>
      <div style={styles.logo}>Hitesh Trading</div>
      <nav>
        <ul style={styles.navLinks}>
          <li style={styles.navItem}><Link to="/" style={styles.link}>Home</Link></li>
          <li style={styles.navItem}><Link to="/products" style={styles.link}>Products</Link></li>
          <li style={styles.navItem}><Link to="/colors" style={styles.link}>Spec/Colors</Link></li>
          <li style={styles.navItem}><Link to="/about" style={styles.link}>About Us</Link></li>
          <li style={styles.navItem}><Link to="/faq" style={styles.link}>FAQ</Link></li>
          <li style={styles.navItem}><Link to="/contact" style={styles.link}>Contact Us</Link></li>
        </ul>
      </nav>
      <div style={styles.email}>
        <FaEnvelope style={{ marginRight: '8px' }} />
        info@gmail.com
      </div>
    </header>
  );
};
const styles = {
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#fff',
      padding: '15px 30px',
      color: '#000',
      borderBottom: '1px solid #ddd',
      boxShadow: '0 2px 5px rgba(0,0,0,0.05)',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
    },
    logo: {
      fontSize: '1.8em',
      fontWeight: 'bold',
      color: '#000',
    },
    navLinks: {
      display: 'flex',
      listStyleType: 'none',
      margin: 0,
      padding: 0,
    },
    navItem: {
      marginLeft: '25px',
    },
    link: {
      textDecoration: 'none',
      color: '#000',
      fontSize: '1.1em',
      fontWeight: '500',
      transition: 'color 0.3s ease',
    },
    email: {
      display: 'flex',
      alignItems: 'center',
      fontSize: '1em',
      color: '#000',
    },
  };
  export default Header;

  