import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { FaFacebook, FaInstagram, FaLinkedin, FaBusinessTime, FaGithub, FaReact, FaJava, FaLaptop } from 'react-icons/fa';
import styles from '@/styles/Home.module.css'
import React, { useEffect, useState} from 'react';

export default function Home() {

  function scrollToNextDiv(event) {
    event.preventDefault();
    const targetDiv = document.querySelector(event.target.getAttribute('href'));
    targetDiv.scrollIntoView({
      behavior: 'smooth'
    });
  }
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseClick = () => {
    setSelectedProject(null);
  };

  const workExperience = [
{
id: 1,
company: 'JP Morgan & Chase (current)',
position: 'Software Engineer Intern',
startDate: 'June 2023',
endDate: 'August 2023',
description: 'Currently working as a software engineer intern, contributing to the development of various projects. Collaborating with the team to implement new features, write code, and perform testing. Gaining valuable industry experience and expanding knowledge in software engineering practices.'
},
{
id: 2,
company: 'Manchester NH Chicken Spot',
position: 'Fullstack Web Developer',
startDate: 'January 2023',
endDate: 'June 2023',
description: 'As a full stack developer, I collaborated with another developer to design and develop a dynamic website using Next.js, Stripe, Mongoose, and AWS. Our focus was on optimizing the user experience and ensuring secure online transactions. I implemented versatile APIs for seamless communication, developed a robust authentication system, and leveraged cutting-edge technology to establish an online store for USAChicken, resulting in a remarkable 25% increase in sales.'
},
{
id: 3,
company: 'Apple',
position: 'Software Engineer',
startDate: 'October 2022',
endDate: 'May 2023',
description: 'Worked as a Technical Specialist at Apple, contributing to the learning and Selling the cutting-edge software products.'
},
{
id: 4,
company: 'Southern New Hampshire University',
position: 'Technical Desk',
startDate: 'September 2020',
endDate: 'May 2023',
description: 'Worked at Southern New Hampshire University as a technical desk employee, providing technical support to students, faculty, and staff. Assisted with troubleshooting hardware and software issues, maintaining computer systems, and ensuring a smooth user experience. Developed strong problem-solving and communication skills while working in a fast-paced environment.'
},
{
id: 5,
company: 'Sudanese Youth Community',
position: 'Web Development Tutor',
startDate: 'October 2021',
endDate: 'December 2021',
description: 'Volunteered as a web development tutor for the Sudanese Youth Community, teaching and assisting students in building websites. Guided students through the process of designing and developing websites using various technologies. Provided mentorship and support to help students achieve their goals in web development.'
}
];

  const projectData = [
    {
      id: 1,
      image: '/project1.jpg',
      name: 'USA-Chicken Fullstack Website',
      description: 'Collaborated on a dynamic website using Next.js, Stripe, Mongoose, and AWS, focusing on user experience and secure transactions. Created efficient APIs for seamless communication between frontend and backend, ensuring optimal performance. Implemented a robust authentication system with utmost privacy and data security. Leveraged cutting-edge tech and a full stack website to launch an online store for USAChicken, resulting in a 25% sales increase.',
    },
    {
      id: 2,
      image: '/project1.jpg',
      name: 'My Online Journal',
      description: 'Utilized Java and Spring Boot to develop a robust backend with REST APIs for seamless communication. Employed SQL to manage the database efficiently, storing and retrieving journal entries, to-do lists, and custom lists. Implemented Axios for secure and efficient frontend-backend communication. Created a responsive and visually appealing user interface with React, delivering an intuitive and engaging journaling experience.',
    },
    {
      id: 3,
      image: '/project1.jpg',
      name: 'Pear Store Application',
      description: 'Created a pear store application similar to the Apple Store, using C# and MySQL. Implemented features for users to browse pear products, sign up, add products to cart, and proceed with checkout to calculate the subtotal.',
    },
    {
      id: 4,
      image: '/project1.jpg',
      name: 'OSAC Training Website',
      description: 'Collaborated in a highly efficient 5-person team to create an engaging and interactive website within a challenging 24-hour deadline. Implemented the MERN stack (MongoDB, Express.js, React, Node.js) to deliver a seamless user experience. Developed a comprehensive training program featuring videos and quizzes for advocates. Recognized with a prestigious prize and selected as the top pick at the hackathon hosted by the Ohio State Advocate Center.',
    },
    {
      id: 5,
      image: '/project1.jpg',
      name: 'Eat Runner Game',
      description: 'Crafted an exhilarating game that pushes players to new heights, utilizing C++ within the powerful Unity game engine. Designed immersive levels where players control a dynamic character running to conquer challenges. Introduced thrilling gameplay elements, such as strategically placed fruits that grant healing and special powers to enhance the characters abilities. Embark on an electrifying journey filled with excitement and adventure.',
    },
    {
      id: 6,
      image: '/project1.jpg',
      name: 'House Hunter',
      description: 'Developed a simple game using Python. In this game, players navigate a character through a house while encountering and fighting against zombies. The objective is to survive and progress through the levels by defeating the undead enemies. It is a straightforward game that provides an entertaining experience for Python enthusiasts.',
    }
  ];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch('/api/submitForm', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        console.log('Form submitted successfully');
        // Add any success handling logic here
        window.location.reload();
      } else {
        console.log('Failed to subsmit form');
        // Add any error handling logic here
      }
    } catch (error) {
      console.log('An error occurred while submitting the form:', error);
      // Add any error handling logic here
    }
  };
  

  
  return (
    <div className={styles.container}>
      <div  id="home" className={styles.home}>
        <div className={styles.links}>
        
          <a href="https://www.instagram.com/yxngmoe/">
          <ul className={styles.link}>
            <FaInstagram/>
          </ul>
          </a>
          <a href="https://www.linkedin.com/in/mohamed-babiker-302550221">
          <ul className={styles.link}>
            <FaLinkedin/>
          </ul>
          </a>
          <a href="https://github.com/yxngmoe">
          <ul className={styles.link}>
            <FaGithub/>
          </ul>
          </a>
          <a href="">
          <ul className={styles.link}>
            <FaBusinessTime/>
          </ul>
          </a>
        </div>


        <h1 className={styles.intro}><span className={styles.hand}>👋🏽&nbsp; </span>Hi, Im Mohamed Babiker</h1>
        <h2 className={styles.intoJob}>I'm a software engineering student with a strong focus in full-stack development, proficient in both frontend and backend technologies. I enjoy building dynamic websites and web applications that deliver exceptional user experiences.</h2>
        <a href="#about" className={styles.introArrow} onClick={scrollToNextDiv}>▽</a>
        
      </div>

      <div id="about"  className={styles.about}>
        <div className={styles.aboutCard}>
          <h1 className={styles.aboutTitle}>A Little bit About Me</h1>
          <img className={styles.aboutImg} src="/moeAi.png" alt="" width={150} height={150}/>
          <p className={styles.aboutP}>
          Hey there! I'm Mohamed, a junior <b>Software Engineering Student</b> at <b>Southern New Hampshire University</b>. With a strong focus on full stack development, I excel in both frontend and backend technologies, bringing a comprehensive skill set to the table. My passion lies in building full stack applications that combine creativity and problem-solving. Currently in my third year of college, I'm excited to leverage my skills and knowledge gained from my coursework and personal projects. If you're looking for a motivated software engineering student with expertise in <b>Full Stack Development</b>, I'm ready to take on new challenges and make a difference with meaningful solutions and engaging experiences.
          </p>

          <p>
          In addition to my passion for software engineering, I enjoy engaging in various hobbies such as going to the gym, playing basketball, and reading.          </p>

          </div>
          <a href="#skills" className={styles.aboutArrow} onClick={scrollToNextDiv}>▽</a>

      </div>

      <div className={styles.skills}  id="skills">
        <div className={styles.left}>
  <div className={styles.technicalSkills}>
    <h2 className={styles.skillsHeading}>TECHNICAL SKILLS</h2>
    <h3 className={styles.skillsSubheading}><FaReact/> Frontend Skills</h3>
    <ul className={styles.skillList}>
    <li className={styles.skillItem}>HTML</li>
  <li className={styles.skillItem}>CSS</li>
  <li className={styles.skillItem}>JavaScript</li>
  <li className={styles.skillItem}>React</li>
  <li className={styles.skillItem}>Next.js</li>
  <li className={styles.skillItem}>Performance Testing/Optimization</li>
  <li className={styles.skillItem}>Responsive Web Design</li>
  <li className={styles.skillItem}>UI/UX Design</li>
    </ul>
    <h3 className={styles.skillsSubheading}><FaJava/> Backend Skills</h3>
    <ul className={styles.skillList}>
    <li className={styles.skillItem}>Node.js</li>
  <li className={styles.skillItem}>Java</li>
  <li className={styles.skillItem}>Spring Boot</li>
  <li className={styles.skillItem}>C#</li>
  <li className={styles.skillItem}>Python</li>
  <li className={styles.skillItem}>.NET</li>
  <li className={styles.skillItem}>MongoDB</li>
  <li className={styles.skillItem}>MySQL</li>
  <li className={styles.skillItem}>T-SQL</li>
  <li className={styles.skillItem}>C++</li>
  <li className={styles.skillItem}>Swift</li>
    </ul>
  </div>
        </div>
        <div className={styles.right}>
  <div className={styles.behavioralSkills}>
    <h2 className={styles.skillsHeading}><FaLaptop/> Relevant Coursework</h2>
    <ul className={styles.workList}>
      <li className={styles.work}>Software Engineering 1,2</li>
      <li className={styles.work}>Programming Languages</li>
      <li className={styles.work}>Operating Systems</li>
      <li className={styles.work}>Computer Architecture</li>
      <li className={styles.work}>Data Structures & Algorithms</li>
      <li className={styles.work}>Database Systems</li>
    {/* <li className={styles.work}>J.P Morgan - Software Engineer Intern</li>
      <li className={styles.work}>Apple - Technical Specialist</li>
      <li className={styles.work}>SNHU - Technical Desk</li>
      <li className={styles.work}>SC - HTML Instructor</li> */}
    </ul>
  </div>
  </div>
  </div>
  <div className={styles.skillsArrowContainer}>
  <a href="#projects" className={styles.skillsArrow} onClick={scrollToNextDiv}>▽</a>
  </div>





<div id="projects">
  <h1 className={styles.projectsTitle} >MY PROJECTS</h1>
  <div className={styles.projects}>
      <div className={styles.projectsSlider}>
        <div className={styles.projectsList}>
          {projectData.map((project) => (
            <div className={styles.projectItem} onClick={() => handleProjectClick(project)} key={project.id}>
              {/* <Image src={project.image} alt={project.name} width={400} height={300} /> */}
              <h3 className={styles.projectName}>{project.name}</h3>
              <h3 className={styles.projectDesc}>{project.description}</h3>

              <Link href={`/projects/${project.id}`} />
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div className={styles.formContainer}>
          <button className={styles.closeButton} onClick={handleCloseClick}>
            X
          </button>
          <div className={styles.formContent}>
            <Image src={selectedProject.image} alt={selectedProject.name} width={400} height={300} />
            <h1 className={styles.stupid}>{selectedProject.name}</h1>
            <p className={styles.stupid}>{selectedProject.description}</p>
          </div>
        </div>
      )}
    </div>
    <div className={styles.projectsArrowC}>
    <a href="#works" className={styles.projectsArrow} onClick={scrollToNextDiv}>▽</a>
    </div>
    </div>



<div id="works" className={styles.workContainer}>
  <h1 className={styles.workTitle}>Work Experience<span className={styles.workScroll}> Scroll v</span></h1>
  <div className={styles.works}>
    <div className={styles.workSlider}>
      <div className={styles.worksList}>
        {workExperience.map((experience) => (
          <div className={styles.workItem} key={experience.id}>
            {/* <Image src={experience.image} alt={experience.company} width={400} height={300} /> */}
            <h3 className={styles.workCompany}>{experience.company}</h3>
            <h3 className={styles.workPosition}>{experience.position}</h3>
            <p className={styles.workDate}>
              {experience.startDate} - {experience.endDate}
            </p>
            <p className={styles.workDesc}>{experience.description}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
  <div className={styles.workArrowC}>
    <a href="#contact" className={styles.workArrow} onClick={scrollToNextDiv}>
      ▽
    </a>
  </div>
</div>


    

    <div className={styles.contact} id="contact">
        <h1>Contact Me</h1>
        <form className={styles.contactForm} onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" placeholder="Your name" value={formData.name} onChange={handleChange} />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" placeholder="Your email" value={formData.email} onChange={handleChange} />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" placeholder="Your message" value={formData.message} onChange={handleChange}></textarea>

          <p>Connect with me to collaborate on projects and I'm open to job opportunities!</p>
          <p>Email: cs.mohamedbabiker@gmail.com</p>

          <button className={styles.button} >Send Message</button>
        </form>

        <div className={styles.skillsArrowContainer}>
  <a href="#resume" className={styles.skillsArrow} onClick={scrollToNextDiv}>▽</a>
  </div>
      </div>

      <div className={styles.resumeContainer} id='resume'>
        <h1 className={styles.resumeTitle}>Grab My Resume</h1>      
        <img
      src="r.png"
      alt="Resume"
      className={styles.resumeImage}
      width={400}
      height={550}
    />
    <a
      href="r.png"
      download="r.png"
      className={styles.resumeButton}
    >
      Download Resume
    </a>
    </div>
    </div>
  )
}

