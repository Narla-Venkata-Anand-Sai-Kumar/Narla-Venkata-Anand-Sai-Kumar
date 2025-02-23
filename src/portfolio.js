// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Venkata Anand Sai Kumar Narla",
  description:
    "Aspiring Software Engineer with expertise in machine learning and deep learning techniques.",
  og: {
    title: "Venkata Anand Sai Kumar Narla",
    type: "website",
    url: "https://narla-venkata-anand-sai-kumar.github.io/",
  },
};

//Home Page
const greeting = {
  title: "Venkata Anand Sai Kumar Narla",
  logo_name: "Venkata Anand Sai Kumar Narla",
  nickname: "Venny",
  subTitle:
    "Aspiring Software Engineer with expertise in machine learning and deep learning techniques.",
  resumeLink:
    "https://drive.google.com/file/d/13L1dHqJVJpN9i8cNmsIIi6isaC8RvSlP/view",
  portfolio_repository: "https://drive.google.com/file/d/13L1dHqJVJpN9i8cNmsIIi6isaC8RvSlP/view",
  githubProfile: "https://github.com/Narla-Venkata-Anand-Sai-Kumar",
};

const socialMediaLinks = [

  {
    name: "Github",
    link: "https://github.com/Narla-Venkata-Anand-Sai-Kumar",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/Narla-Venkata-Anand-Sai-Kumar",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:venkatnarla0@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "X-Twitter",
    link: "https://twitter.com/NVAnandSaiKumar",
    fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
    backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/__.__111101110__._____/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Computer Vision & Gen AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Expertise in developing and deploying AI solutions for education and healthcare sectors",
        "⚡ Proficient in Computer Vision, NLP, and Recommender Systems",
        "⚡ Specialized in working with Large Language Models (LLMs) for tasks like text generation and summarization",
        "⚡ Building scalable machine learning pipelines for actionable insights and decision-making"
      ],
      
      
      softwareSkills: [
        {
          skillName: "TensorFlow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "OpenCV",
          fontAwesomeClassname: "simple-icons:opencv",
          style: {
            backgroundColor: "transparent",
            color: "#5C3EE8",
          },
        },
        {
          skillName: "Scikit-Learn",
          fontAwesomeClassname: "simple-icons:scikitlearn",
          style: {
            backgroundColor: "transparent",
            color: "#F7931E",
          },
        },
        {
          skillName: "NumPy",
          fontAwesomeClassname: "logos-numpy",
          style: {
            backgroundColor: "transparent",
            color: "#013243",
          },
        },
        {
          skillName: "polars",
          fontAwesomeClassname: "simple-icons:polars",
          style: {
            backgroundColor: "transparent",
            color: "#150458",
          },
        },
        {
          skillName: "Hugging Face",
          fontAwesomeClassname: "simple-icons:huggingface",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "LangChain",
          fontAwesomeClassname: "simple-icons:langchain",
          style: {
            backgroundColor: "transparent",
            color: "#2B61C4",
          },
        },
        {
          skillName: "ONNX",
          fontAwesomeClassname: "simple-icons:onnx",
          style: {
            backgroundColor: "transparent",
            color: "#005CED",
          },
        },
        {
          skillName: "FastAPI",
          fontAwesomeClassname: "simple-icons:fastapi",
          style: {
            backgroundColor: "transparent",
            color: "#009688",
          },
        },
        {
          skillName: "YOLO",
          fontAwesomeClassname: "simple-icons:yolo",
          style: {
            backgroundColor: "transparent",
            color: "#FF9900",
          },
        },
        {
          skillName: "MLflow",
          fontAwesomeClassname: "simple-icons:mlflow",
          style: {
            backgroundColor: "transparent",
            color: "#0194E0",
          },
        },        
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive front-end designs and applications using modern frameworks",
        "⚡ Developing cross-platform mobile applications with Flutter",
        "⚡ Creating robust back-end systems with Flask/Fast-API and integrating them with APIs",
        "⚡ Implementing scalable full-stack applications with seamless user experiences",
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
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
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
          skillName: "GitHub Actions",
          fontAwesomeClassname: "simple-icons:githubactions",
          style: {
            color: "#2088FF",
          },
        },
        {
          skillName: "Pydantic",
          fontAwesomeClassname: "simple-icons:pydantic",
          style: {
            color: "#00B0FF",
          },
        },
        {
          skillName: "Celery",
          fontAwesomeClassname: "simple-icons:celery",
          style: {
            color: "#37814A",
          },
        },
        {
          skillName: "Redis",
          fontAwesomeClassname: "simple-icons:redis",
          style: {
            color: "#DC382D",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },
        {
          skillName: "Kotlin",
          fontAwesomeClassname: "simple-icons:kotlin",
          style: {
            color: "#43eb34",
          },
        },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "",
          },
        },
        {
          skillName: "Flask",
          fontAwesomeClassname: "simple-icons:flask",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "Django",
          fontAwesomeClassname: "simple-icons:django",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "Flask",
          fontAwesomeClassname: "simple-icons:fastapi",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "REST APIs",
          fontAwesomeClassname: "simple-icons:postman",
          style: {
            color: "#FF6C37",
          },
        },
      ],
    },
  {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Expertise in working with multiple cloud platforms for scalable infrastructure",
        "⚡ Hosting, deploying, and maintaining AI models and web applications on cloud environments",
        "⚡ Experience in designing and implementing CI/CD pipelines for automation",
        "⚡ Proficient in containerization and orchestration using Docker and Kubernetes",
      ],
      softwareSkills: [
        {
          skillName: "Google Cloud Platform (GCP)",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "Amazon Web Services (AWS)",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Microsoft Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
      ],
    },
    
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/narla-venkata-anand-sai-kumar/", // Replace with your LeetCode profile link
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/NVAnandSaiKumar", // Replace with your HackerRank profile link
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/nvask", // Replace with your Codechef profile link
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "https://codeforces.com/profile/111101110", // Replace with your Codeforces profile link
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/venkataanandsaikumar", // Replace with your Kaggle profile link
    },
  ],
};


const degrees = {
  degrees: [
    {
      title: "Kalasalingam Academy of Research and Education",
      subtitle: "B.Tech in Computer Science and Engineering (Specialization in Artificial Intelligence and Machine Learning)",
      logo_path: "Kalasalingam_Academy_of_Research_and_Education_logo.png", // Replace with the actual logo file name if available
      alt_name: "Kalasalingam University",
      duration: "September 2021 - May 2025",
      descriptions: [
        "⚡ Pursuing a B.Tech in Computer Science and Engineering with a specialization in Artificial Intelligence and Machine Learning.",
        "⚡ Studied core subjects like Data Structures, Algorithms, DBMS, Operating Systems, Computer Architecture, and Artificial Intelligence.",
        "⚡ Completed additional courses in Deep Learning, Data Science, IoT, and Full Stack Development.",
        "⚡ Secured the winning spot in the Code-Rush National Level Hackathon conducted by IBM.",
        "⚡ Developed skills in Algorithms, Image Analysis, Deep Learning, TensorFlow, Python, Machine Learning, Intelligent Systems, Linux, Neural Machine Translation (NMT), Business Analysis, Generative AI, Django, and Computer Vision."
      ],
      website_link: "https://kalasalingam.ac.in/",
    },
    {
      title: "Narayana Junior College - India",
      subtitle: "Intermediate in MPC (Mathematics, Physics, and Chemistry)",
      logo_path: "narayana_logo.png", // Replace with the actual logo file name if available
      alt_name: "Narayana Junior College",
      duration: "June 2019 - May 2021",
      grade: "95%",
      descriptions: [
        "⚡ Completed 11th and 12th grade focusing on core subjects: Mathematics, Physics, and Chemistry.",
        "⚡ Strengthened analytical and problem-solving skills essential for technical pursuits.",
        "⚡ Developed proficiency in English, Chemistry, Leadership, Mathematics, and Physics."
      ],
      website_link: "https://www.narayanagroup.com/",
    },
  ],
};



const certifications = {
  certifications: [
    {
      title: "Machine Learning",
      subtitle: "- Andrew Ng",
      logo_path: "stanford_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/AJ8X3VEDH9AF",
      alt_name: "Stanford University",
      color_code: "#8C151599",
    },
    {
      title: "A deep understanding of deep learning",
      subtitle: "- Mike X Cohen",
      logo_path: "udemy-logo.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-f7fafcda-c837-41d9-bda0-1a8e888d9a73/",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "Data Structures and Algorithms",
      subtitle: "- Elshad Karimov",
      logo_path: "udemy-logo.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-51e60286-4ab5-4a68-bf90-fe458ab7c3df/",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have worked with many evolving startups as ML and DL Developer, Designer and Software Architect. I have also worked with some well established companies mostly as AI Developer. I love organising events and that is why I am also involved with many opensource communities as a representative.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Current Employeer",
      work : true,
      experiences: [
        {
          title: "Software Developer Intern ( AI )",
          company: "Everstage Technologies Inc.",
          company_url: "https://www.everstage.com/",
          logo_path: "everstage_logo.png",
          duration: "Feb 2025 - Present",
          location: "Coimbatore, Tamil Nadu, India",
          description: "In my role as a Software Developer Intern at Everstage Technologies, I focused on developing and optimizing large language models to enhance productivity and efficiency. By leveraging advanced machine learning and natural language processing techniques, I automated tasks and drove innovation within the company. Additionally, I collaborated with my GenAI team to brainstorm innovative LLM applications and fine-tune retrieval-augmented generation (RAG) pipelines, pushing the boundaries of AI capabilities.",
          color: "#000000"
        }
      ]
    },
    
    {
        title: "Internships",
        work : true,
        experiences: [
          {
            title: "Generative AI Intern",
            company: "Diebold Nixdorf",
            company_url: "https://www.dieboldnixdorf.com/",
            logo_path: "dn_logo.png",
            duration: "Dec 2024 - Feb 2025",
            location: "Mumbai, Maharashtra, India",
            description: "In my role as a Generative AI Intern at Diebold Nixdorf, I focused on developing and optimizing large language models to enhance productivity and efficiency. By leveraging advanced machine learning and natural language processing techniques, I automated tasks and drove innovation within the company. Additionally, I collaborated with my GenAI team to brainstorm innovative LLM applications and fine-tune retrieval-augmented generation (RAG) pipelines, pushing the boundaries of AI capabilities.",
            color: "#000000"
          },
          {
            title: "Junior Engineer Intern",
            company: "MulticoreWare Inc",
            company_url: "https://www.multicorewareinc.com/",
            logo_path: "mcw_logo.png",
            duration: "May 2024 - Nov 2024",
            location: "Coimbatore, Tamil Nadu, India",
            description: "Integrated LiDAR and camera data with OpenPose for digital twin applications, achieving 87% accuracy in 2D-to-3D keypoint conversion. Streamed real-time data via HTTP IP calls and asynchronous TCP/UDP sockets for seamless transmission of 3D keypoints to Unity. Leveraging SLAM techniques in the Mobi-SLAM project, I developed a custom implementation of ORB-SLAM3, integrating camera and IMU data with GPS for accurate real-time 3D mapping and localization. Optimized the CRFNet algorithm using multi-sensor fusion, enhancing object detection reliability by 18% in dynamic environments.",
            color: "#0879bf"
          },
          {
            title: "Research Student",
            company: "MulticoreWare Inc",
            company_url: "https://www.multicorewareinc.com/",
            logo_path: "mcw_logo.png",
            duration: "Sep 2022 - May 2024",
            location: "Remote",
            description: "Spearheaded the automation of 3D reconstruction from 2D images, enhancing processing efficiency. Developed deep learning-based models for synthetic data generation, improving data diversity. Refined algorithms and streamlined workflows for smooth integration into production environments.",
            color: "#9b1578"
          },
          {
            title: "AI Research Intern",
            company: "IBM",
            company_url: "https://www.ibm.com/",
            logo_path: "ibm.png",
            duration: "May 2023 - Oct 2023",
            location: "Remote",
            description: "Developed a graphology analysis system using ResNet-50, achieving 76% accuracy in handwriting extraction. Deployed the system in a cross-platform Flutter app with TensorFlow Lite for efficient on-device inference. Designed a pothole detection system using YOLOv8n with RGB-D camera integration, increasing detection accuracy by 42%. Achieved 47+ FPS real-time processing on edge devices via Flask API.",
            color: "#fc1f20"
          }
        ]
      },
      

    {
      title: "Leaderships",
      experiences: [
        {
          title: "President of Kare-OSS",
          company: "Kare Open Source Society",
          company_url: "#",
          logo_path: "kareoss.png",
          duration: "May 2023 - May 2024",
          location: "Madurai, Tamil Nadu",
          description:
          "Kare Open Source Society focuses on open-source contributions and helps students gain skills to develop and deploy software solutions. As President, I led initiatives that enhanced student engagement with open-source technologies. Under my leadership, the core team secured first place in CodeRush 2023, a national-level hackathon organized by IBM. I successfully organized the episodic event 'Software Freedom Festival,' which progressed from Ideathon to Product Showcase within two months. Additionally, I coordinated the 'DeployML' workshop, enabling students to learn how to deploy their machine learning models.",
          color: "#FF6F00",
        },
        {
          title: "Co-Chair",
          company: "IEEE Robotics and Automation Society",
          company_url: "#",
          logo_path: "IEEERAS.png",
          duration: "May 2024 - Present",
          location: "Madurai, Tamil Nadu",
          description:
          "As the Co-Chair of KARE IEEE Robotics & Automation Society, I foster innovation and collaboration among members, organize technical workshops, and promote research in robotics and automation. I have led initiatives for hands-on sessions, guest lectures, and hackathons while mentoring students in developing projects and participating in competitions. Additionally, I have strengthened industry-academia connections by coordinating with experts to provide members with industry insights.",
          color: "#0071BC",
        },
        {
          title: "Technical Lead",
          company: "Vishaka Cultural Club",
          company_url: "#",
          logo_path: "Vishaka.png",
          duration: "Jan 2024 - Present",
          location: "Madurai, Tamil Nadu",
          description:
          "As the Technical Lead of the Vishaka Club, I managed the club's web infrastructure and developed a mobile application for efficient event management. This initiative enhanced accessibility and streamlined operations for cultural initiatives. I also implemented a QR code-based event management system, making event registration and participation more efficient and seamless.",
          color: "#D32F2F",
        },
      ],
    }
    
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
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
      id: "Sentiment and Context-Aware Recurrent Convolutional Neural Network for Sentiment Analysis",
      name: "Sentiment and Context-Aware Recurrent Convolutional Neural Network for Sentiment Analysis",
      createdAt: "2023-10-10",
      description: "Paper published in IEEE ASIANCON 2023",
      url: "https://ieeexplore.ieee.org/abstract/document/10270289",
    },
    {
      id: "FlowerBot: A Deep Learning aided Robotic Process to detect and pluck flowers",
      name: "FlowerBot: A Deep Learning aided Robotic Process to detect and pluck flowers",
      createdAt: "2023-01-16",
      description: "Paper published in IEEE ICECA 2023",
      url: "https://ieeexplore.ieee.org/abstract/document/10009077",
    },

  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "MyImage.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Android, Cloud and Opensource Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
    link: "https://medium.com/@venkatnarla0",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Eluru , Andhra Pradesh , India",
    locality: "ELuru",
    country: "India",
    region: "Andhra Pradesh",
    postalCode: "534450",
    streetAddress: "",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/sN7HtcUSfcyFxkQ16",
  },
  phoneSection: {
    title: "+91 630XXX XXX99",
    subtitle: "venkatnarla0@gmail.com",
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
