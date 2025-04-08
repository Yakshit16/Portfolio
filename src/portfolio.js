/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Yakshit's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Yakshit Prajapati Portfolio",
    type: "website",
    url: "http://Yakshit Prajapati.com/",
  },
};

const greeting = {
  title: "Yakshit Prajapati",
  logo_name: "Yakshit Prajapati",
  subTitle:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  resumeLink: "/resume.pdf", // ✅ Works because it's in public/
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/Yakshit 1919",
  // linkedin: "https://www.linkedin.com/in/Yakshit -hathidara-88710b138/",
  // gmail: "Yakshit Prajapati98@gmail.com",
  // gitlab: "https://gitlab.com/Yakshit Prajapati98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/Yakshit _1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "LinkedIn",
    link:
      "https://www.linkedin.com/in/yakshit-prajapati-677830215?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },

  {
    name: "Gmail",
    link: "mailto:prajapatiyakshit@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
];

const skills = {
  data: [
    // {
    //   title: "Frontend Web Development",
    //   fileName: "DataScienceImg",
    //   skills: [
    //     "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
    //     "⚡ Experience of working with Computer Vision and NLP projects",
    //     "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
    //   ],
    //   // softwareSkills: [
    //   //   {
    //   //     skillName: "Tensorflow",
    //   //     fontAwesomeClassname: "logos-tensorflow",
    //   //     style: {
    //   //       backgroundColor: "transparent",
    //   //     },
    //   //   },
    //   //   {
    //   //     skillName: "Keras",
    //   //     fontAwesomeClassname: "simple-icons:keras",
    //   //     style: {
    //   //       backgroundColor: "white",
    //   //       color: "#D00000",
    //   //     },
    //   //   },
    //   //   {
    //   //     skillName: "PyTorch",
    //   //     fontAwesomeClassname: "logos-pytorch",
    //   //     style: {
    //   //       backgroundColor: "transparent",
    //   //     },
    //   //   },
    //   //   {
    //   //     skillName: "Python",
    //   //     fontAwesomeClassname: "ion-logo-python",
    //   //     style: {
    //   //       backgroundColor: "transparent",
    //   //       color: "#3776AB",
    //   //     },
    //   //   },
    //   //   {
    //   //     skillName: "Deeplearning",
    //   //     imageSrc: "deeplearning_ai_logo.png",
    //   //   },
    //   // ],
    //   softwareSkills: [
    //     {
    //       skillName: "HTML5",
    //       fontAwesomeClassname: "simple-icons:html5",
    //       style: {
    //         color: "#E34F26",
    //       },
    //     },
    //     {
    //       skillName: "CSS3",
    //       fontAwesomeClassname: "fa-css3",
    //       style: {
    //         color: "#1572B6",
    //       },
    //     },
    //     {
    //       skillName: "JavaScript",
    //       fontAwesomeClassname: "simple-icons:javascript",
    //       style: {
    //         backgroundColor: "#000000",
    //         color: "#F7DF1E",
    //       },
    //     },
    //     {
    //       skillName: "ReactJS",
    //       fontAwesomeClassname: "simple-icons:react",
    //       style: {
    //         color: "#61DAFB",
    //       },
    //     },
    //   ]

    // },
    {
      title: "FrontEnd Web Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive and interactive user interfaces using React and Tailwind CSS",
        "⚡ Developing reusable UI components and managing state with Redux",
        "⚡ Integrating RESTful APIs and handling asynchronous operations effectively",
        // "⚡ Optimizing web performance and ensuring cross-browser compatibility",
        // "⚡ Using Git and GitHub for version control and project collaboration",
        // "⚡ Implementing pixel-perfect designs from Figma or design systems",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "Bootstrap",
          fontAwesomeClassname: "simple-icons:bootstrap",
          style: {
            color: "#7952B3",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "Angular",
          fontAwesomeClassname: "simple-icons:angular",
          style: {
            color: "#DD0031",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Tailwind CSS",
          fontAwesomeClassname: "simple-icons:tailwindcss",
          style: {
            color: "#38B2AC",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#F05032",
          },
        },
        {
          skillName: "GitHub",
          fontAwesomeClassname: "fa-github",
          style: {
            color: "#181717",
          },
        },
        {
          skillName: "VS Code",
          fontAwesomeClassname: "simple-icons:visualstudiocode",
          style: {
            color: "#007ACC",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [],
};

const degrees = {
  degrees: [
    {
      title: "Silver Oak University.",
      subtitle: "B.Tech. in Computer Engineering",
      logo_path: "sou.png",
      alt_name: "Silver Oak University",
      duration: "2020 - 2024",
      descriptions: [
        "⚡ I have studied core Computer Engineering subjects like Data Structures, Algorithms, DBMS, Operating Systems, Computer Networks, and Software Engineering.",
        "⚡ I have completed projects and coursework in Web Development using technologies like React, Node.js, and Tailwind CSS.",
        "⚡ Consistently performed well academically and worked on real-world web development projects to strengthen my practical skills.",
      ],
      website_link: "https://silveroakuni.ac.in/",
    },
    {
      title: "Vedant International School.",
      subtitle: "HSC",
      logo_path: "vedant.png",
      alt_name: "Vedant International School",
      duration: "2020",
      descriptions: [
        "⚡ I completed my Higher Secondary education (HSC) with a strong foundation in the Science stream, which sparked my interest in technology and software development.",
        "⚡ This academic background helped me build analytical thinking and problem-solving skills, which I now apply in real-world web development projects.",
        "⚡ With a passion for technology from early on, I transitioned smoothly into Computer Engineering, focusing primarily on Frontend Development.",
      ],
      website_link: "https://www.vedantinternationalschool.org/",
    },
    {
      title: "Vedant International School.",
      subtitle: "SSC",
      logo_path: "vedant.png",
      alt_name: "Vedant International School",
      duration: "2018",
      descriptions: [
        "⚡ I completed my Secondary School Certificate (SSC), where I built a strong foundation in mathematics and science, which laid the groundwork for my technical journey.",
        "⚡ My interest in technology began during school, where I enjoyed exploring computers, basic programming, and logical problem-solving.",
        "⚡ This early passion has driven me to pursue further education and hands-on experience in the field of Computer Engineering and Web Development.",
      ],
      website_link: "https://www.vedantinternationalschool.org/",
    },
  ],
};

const certifications = {
  certifications: [],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have worked with several well-established companies, primarily as a Web Developer, where I contributed to the design, development, and optimization of robust web applications. My role often involved collaborating with cross-functional teams to deliver efficient and user-friendly digital solutions.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Web Developer",
          company: "Karv Digital Media And Event Solutions",
          company_url: "https://www.linkedin.com/company/muffito-inc/about/",
          logo_path: "karv.png",
          duration: "May 2018 - Oct 2018",
          location: "Ahmedabad, Gujarat",
          description:
            "I worked as a Web Developer, where I was responsible for creating dynamic and responsive websites using PHP and React.js. My role involved developing user-friendly interfaces, integrating backend functionality, and ensuring smooth performance across various devices. I contributed to both front-end and back-end development, helping to deliver efficient and scalable web solutions tailored to client needs.",
          color: "#9b1578",
        },
        {
          title: "JavaScript Developer",
          company: "IFlair Web Technologies",
          company_url: "https://www.linkedin.com/company/freecopy/about/",
          logo_path: "iflair.png",
          duration: "Feb 2024 - Jan 2025",
          location: "Ahmedabad, Gujarat",
          description:
            "IFlair Web Technologies, based in Ahmedabad, is where I began my journey as a JavaScript Developer. During my time there, I gained hands-on experience with modern frameworks such as React.js, Node.js, and Angular. I had the opportunity to work on real-world challenges, which sharpened my problem-solving skills and deepened my understanding of front-end and back-end development. I also developed a strong sense of design thinking, focusing on creating user interfaces from the perspective of end users to enhance usability and overall user experience.",
          color: "#fc1f20",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Angular & Node-Js Intern",
          company: "IT Path Solutions",
          company_url:
            "https://opencorporates.com/companies/us_dc/EXTUID_4170286",
          logo_path: "itpath.png",
          duration: "Nov 2022 - March 2023",
          location: "Ahmedabad, Gujarat",
          description:
            "I completed my internship at IT Path Solutions, a Financial Solutions company, where I worked as a Full-Stack Developer using Angular and Node.js. During this time, I gained hands-on experience in developing responsive front-end interfaces and building RESTful APIs for financial applications. This internship enhanced my understanding of full-stack development and gave me exposure to real-world project workflows and best practices in modern web development.",
          color: "#0071C5",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects make use of a vast variety of the latest technology tools. My best experience is in building dynamic and responsive web applications using Angular and React, with version control handled through Git.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "mdp-diffusion",
      name: "MDP-Diffusion",
      createdAt: "2023-09-19T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/mdp-diffusion/",
    },
    {
      id: "consistency-models",
      name: "Consistency Models",
      createdAt: "2023-10-12T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/consistency-models/",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "Yakshit1.png",
    description:
      "I am available on Gmail and LinkedIn. Feel free to reach out — I usually reply within 24 hours. I specialize in Frontend Web Development and can assist with technologies like React, Angular, Tailwind CSS, and modern web stacks.",
  },
  blogSection: {
    //   title: "Blogs",
    //   subtitle:
    //     "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
    //   link: "https://blogs.Yakshit Prajapati.com/",
    //   avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "India",
    locality: "Ahmedabad",
    country: "India",
    region: "South Asia",
    postalCode: "382480",
    streetAddress: "Ahmedabad",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/NvYZqa34Wye4tpS17",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
