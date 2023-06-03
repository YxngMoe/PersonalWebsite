import styles from '@/styles/Navbar.module.css';
import Link from 'next/link';

const Navbar = () => {

  function scrollToNextDiv(event) {
    event.preventDefault();
    const targetDiv = document.querySelector(event.target.getAttribute('href'));
    targetDiv.scrollIntoView({
      behavior: 'smooth'
    });
  }

  return (
    <div className={styles.container}>
      <div className={styles.flexContainer}>
      <a href="/">
        <div className={styles.name}>
          <img className={styles.logo} src="mDesign.jpeg" alt="Logo" width={80} height={40}/>
          Mohamed Babiker
        </div>
        </a>
        <div className={styles.items}>
        <a href="#home" className={styles.item} onClick={scrollToNextDiv}>Home</a>
  <a href="#about" className={styles.item} onClick={scrollToNextDiv}>About</a>
  <a href="#skills" className={styles.item} onClick={scrollToNextDiv}>Skills</a>
  <a href="#projects" className={styles.item} onClick={scrollToNextDiv}>Projects</a>
  <a href="#contact" className={styles.item} onClick={scrollToNextDiv}>Contact</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
