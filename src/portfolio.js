/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: false, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Truong Nhon",
  title: "Hi all, I'm Vo Thuong Truong Nhon",
  subTitle: emoji(
    "Passionate software developer and tech blogger with a love for C# and open source. Beyond the code, I'm an avid fan of anime."
  ),
  resumeLink: "https://drive.google.com/file/d/1zIavbbfYSVhGRyWzcnnCz9fiUxfwFrC5/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/nhonvo",
  linkedin: "https://www.linkedin.com/in/truongnhon/",
  gmail: "vothuongtruongnhon2002@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Software developer crafting useful applications for personal and community use, driven by a love for exploring and learning new technologies.",
  skills: [
    emoji("🛠️ Build innovative applications."),
    emoji("📝 Share insights through technical blogs."),
    emoji("🌐 Explore and learn new technologies.")],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "csharp",
      fontAwesomeClassname: "fab fa-cuttlefish"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "cloud",
      fontAwesomeClassname: "fas fa-cloud"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "event-sourcing",
      fontAwesomeClassname: "fas fa-cogs"
    },
    {
      skillName: "sql-server",
      fontAwesomeClassname: "fas fa-server",
      displayName: "SQL Server"
    },
    {
      skillName: "postgresql",
      fontAwesomeClassname: "fas fa-database",
      displayName: "PostgreSQL"
    },
    {
      skillName: "mongo",
      fontAwesomeClassname: "fas fa-cube",
      displayName: "MongoDB"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Ho Chi Minh of technology University - HUTECH",
      logo: require("./assets/images/hutech-logo.png"),
      subHeader: "Software Engineering",
      duration: "September 2020 - September 2024",
      desc: "",
      descBullets: [
        "GPA: 3.76/4.0"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "C#", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Python",
      progressPercentage: "50%"
    },
    {
      Stack: "Javascript",
      progressPercentage: "50%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Fresher .NET Developer",
      company: "FPT Software Academy",
      companylogo: require("./assets/images/fpt-academy-logo.png"),
      date: "February 2023 - August 2023",
      desc: "Joined as a fresher, undergoing intensive training and hands-on projects to build expertise in .NET development. Gained valuable skills and knowledge in software development practices.",
      descBullets: [
        "Participated in hands-on training programs, learning about .NET development",
        "Completed practical projects to put theoretical knowledge into practice.",
        "Achieved graduation with the second-highest performance in 12 people in 3 month"
      ]
    },
    {
      role: "Software Developer",
      company: "FPT Software",
      companylogo: require("./assets/images/fpt-software-logo.jpg"),
      date: "August 2023 - Present",
      desc: "Developed a logistics system featuring a specialized quoting app for a US client. Worked closely with customers and analysts to plan and implement new features.",
      descBullets: [
        "Built a microservices architecture with C#, .NET Core, PostgreSQL, DynamoDB, SNS, SQS, GraphQL, Hangfire, Splunk, and New Relic.",
        "Followed Gitflow for code management and hosted the system on AWS.",
        "Implemented Agile methodology and utilized Rally for effective project management."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "PERSONAL PROJECTS",
  projects: [
    {
      image: require("./assets/images/Project/e-form.png"),
      projectName: "E-Forms",
      projectDesc: "A platform for easy creation and sharing of forms. techStack: PHP, Laravel, PostgreSQL, Vue.js",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://e-forms.vn/"
        }
      ]
    },
    {
      image: require("./assets/images/Project/nobita.png"),
      projectName: "Nobita - Happy digital bank",
      projectDesc: "Won first prize HDBank hackathon competition, Integrate with api of Hdbank build electronic wallet with api .net core and flutter mobile app",
      footerLink: [
        {
          name: "API Project",
          url: "https://github.com/nhonvo/nobita-server"
        },
        {
          name: "Mobile Project",
          url: "https://github.com/nhonvo/nobita-mobi"
        },
        {
          name: "Check demo",
          url: "drive-link"
        }
      ]
    },
    {
      image: require("./assets/images/Project/fake-news.png"),
      projectName: "Owl trust - Fake news filter",
      projectDesc: "Reading news app help user access reliable news which app build api by .net core and flutter mobile app",
      footerLink: [
        {
          name: "API Project",
          url: "https://github.com/nhonvo/fake-news-filter-server"
        },
        {
          name: "Mobile Project",
          url: "https://github.com/nhonvo/fake-news-filter-mobi"
        },
        {
          name: "Check demo",
          url: "drive-link"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      "title": "MongoDB Certified Associate Developer",
      "subtitle": "Mongo",
      "image": require("./assets/images/Certificate/mongo-cert.jpg"),
      "imageAlt": null,
      "footerLink": [
        {
          "name": "nosql",
          "url": null
        },
        {
          "name": "mongo",
          "url": null
        },
        {
          "name": "2024",
          "url": null
        },
        {
          "name": "Show Credential",
          "url": "https://learn.mongodb.com/c/G5hEeS7nRIaWzcVDQkCQFA"
        }
      ]
    },
    {
      "title": "SQL",
      "subtitle": "Udacity SQL",
      "image": require("./assets/images/Certificate/udacity-sql.jpg"),
      "imageAlt": null,
      "footerLink": [
        {
          "name": "sql",
          "url": null
        },
        {
          "name": "postgresql",
          "url": null
        },
        {
          "name": "sql server",
          "url": null
        },
        {
          "name": "2024",
          "url": null
        },
        {
          "name": "Show Credential",
          "url": "https://confirm.udacity.com/e/382c1482-bb86-11ee-9bdf-ebd6686d311a"
        }
      ]
    },
    {
      "title": "Google Project Management",
      "subtitle": "Project Management with Google's Project Management Certification",
      "image": require("./assets/images/Certificate/gg-project.png"),
      "imageAlt": null,
      "footerLink": [
        {
          "name": "management",
          "url": null
        },
        {
          "name": "agile/scrum",
          "url": null
        },
        {
          "name": "2023",
          "url": null
        },
        {
          "name": "Show Credential",
          "url": "https://www.coursera.org/account/accomplishments/specialization/certificate/3W96LMQHX3WT"
        }
      ]
    },
    {
      "title": "Cloud Developer",
      "subtitle": "Udacity's Cloud Developer about vps, IAM, EC2, ECS, S3",
      "image": require("./assets/images/Certificate/cloud-dev-udacity.png"),
      "imageAlt": null,
      "footerLink": [
        {
          "name": "aws",
          "url": null
        },
        {
          "name": "cloud",
          "url": null
        },
        {
          "name": "2023",
          "url": null
        },
        {
          "name": "Show Credential",
          "url": "https://confirm.udacity.com/e/f5009d0c-3b21-11ee-b039-dfe669e63fdd"
        }
      ]
    },
    {
      "title": "Google Data Analytics",
      "subtitle": null,
      "image": require("./assets/images/Certificate/gg-data.png"),
      "imageAlt": null,
      "footerLink": [
        {
          "name": "data",
          "url": null
        },
        {
          "name": "2023",
          "url": null
        },
        {
          "name": "Show Credential",
          "url": "https://www.coursera.org/account/accomplishments/specialization/certificate/Z96HB9FWF83T"
        }
      ]
    },
    {
      "title": "Student of 5 Merits Level School",
      "subtitle": "Acknowledged as a student of 5 merits level school in 2023.",
      "image": require("./assets/images/Competition/sv5t-2023-school.jpg"),
      "imageAlt": "School Merit Logo",
      "footerLink": [
        {
          "name": "2023",
          "url": null
        }
      ]
    },
    {
      "title": "Student of 5 Merits Level Faculty",
      "subtitle": "Acknowledged as a student of 5 merits level faculty in 2023.",
      "image": require("./assets/images/Competition/sv5t-2023.jpg"),
      "imageAlt": "School Merit Logo",
      "footerLink": [
        {
          "name": "2023",
          "url": null
        }
      ]
    },
    {
      "title": "Code Your Future Competition 2023",
      "subtitle": "Achieved the second prize in Code Your Future 2023 - “Portfolio - Logistics”.",
      "image": require("./assets/images/Competition/code-your-future.jpg"),
      "imageAlt": null,
      "footerLink": [
        {
          "name": "Show Credential",
          "url": "https://www.hutech.edu.vn/khoacntt/tin-tuc/tin-tuc-su-kien/14613378-cuoc-thi-code-your-future-2023"
        },
        {
          "name": "2023",
          "url": null
        }
      ]
    },
    {
      "title": "Work at FPT Software - Software Developer",
      "subtitle": "Start career at FPT Software Academy - Fresh dotnet developer at Year 3 University",
      "image": require("./assets/images/Certificate/working.jpg"),
      "imageAlt": null,
      "footerLink": [
        {
          "name": "2023",
          "url": null
        }
      ]
    },
    {
      "title": "IT Got Talent 2022 - Table B",
      "subtitle": "Achieved the first prize in IT Got Talent 2022 - Table B with the project \"Smart Device & Desktop Application - Nobita Smart Bank\".",
      "image": require("./assets/images/Competition/it-got-talent.jpg"),
      "imageAlt": null,
      "footerLink": [
        {
          "name": "Show Credential",
          "url": "https://www.hutech.edu.vn/khoacntt/tin-tuc/tin-tuc-su-kien/14608074-chung-ket-cuoc-thi-tim-kiem-tai-nang-cntt-2022-hutech-it-got-talent-2022"
        },
        {
          "name": "2022",
          "url": null
        }
      ]
    },
    {
      "title": "HDBank Hackthon 2022",
      "subtitle": "Achieved the first prize in HDBank Hackthon 2022.",
      "image": require("./assets/images/Competition/hdbank.jpg"),
      "imageAlt": null,
      "footerLink": [
        {
          "name": "Show Credential",
          "url": "https://www.hutech.edu.vn/homepage/tin-tuc/hoat-dong-sinh-vien/14607882-khoa-cong-nghe-thong-tin-to-chuc-vong-chung-ket-va-le-trao-giai-cuoc-thi-hdbank-hackathon-2022"
        },
        {
          "name": "2022",
          "url": null
        }
      ]
    },
    {
      "title": "Student of 5 Merits Level School 2022",
      "subtitle": "Recognized as a student of 5 merits level school in 2022.",
      "image": require("./assets/images/Competition/sv5t2021.jpg"),
      "imageAlt": null,
      "footerLink": [
        {
          "name": "2022",
          "url": null
        }
      ]
    },
    {
      "title": "Student of 5 Merits Faculty 2022",
      "subtitle": "Recognized as a student of 5 merits level faculty in 2022.",
      "image": require("./assets/images/Competition/sv5t-faculty-2022.jpg"),
      "imageAlt": null,
      "footerLink": [
        {
          "name": "2022",
          "url": null
        }
      ]
    },
    {
      "title": "HUTECH Talent Scholarship 2022",
      "subtitle": "Achieved the top GPA and gained HUTECH Talent Scholarship in 2020.",
      "image": require("./assets/images/Competition/scholarship2021-2022.jpg"),
      "imageAlt": null,
      "footerLink": [
        {
          "name": "2022",
          "url": null
        }
      ]
    },
    {
      "title": "AI Challenge 2022",
      "subtitle": "Awarded a consolation prize in AI Challenge 2022.",
      "image": require("./assets/images/Competition/AI-Challenge.png"),
      "imageAlt": null,
      "footerLink": [
        {
          "name": "2022",
          "url": null
        }
      ]
    },
    {
      "title": "My First Website Competition 2022",
      "subtitle": "Received a consolation prize in the My First Website Competition.",
      "image": require("./assets/images/Competition/my-first-website.jpg"),
      "imageAlt": null,
      "footerLink": [
        {
          "name": "2022",
          "url": null
        }
      ]
    },
    {
      "title": "English B1 certificate",
      "subtitle": "440 TOEIC points",
      "image": require("./assets/images/Certificate/b1-cert.jpg"),
      "imageAlt": null,
      "footerLink": [
        {
          "name": "2022",
          "url": null
        }
      ]
    },
    {
      "title": "HUTECH Talent Scholarship 2021",
      "subtitle": "Attained the top 3 GPA and received HUTECH Talent Scholarship in 2021.",
      "image": require("./assets/images/Competition/scholarship2020-2021.jpg"),
      "imageAlt": null,
      "footerLink": [
        {
          "name": "2021",
          "url": null
        }
      ]
    },
    {
      "title": "Student of 5 Merits Level School 2021",
      "subtitle": "Acknowledged as a student of 5 merits level school in 2021.",
      "image": require("./assets/images/Competition/sv5t-faculty-2021.jpg"),
      "imageAlt": null,
      "footerLink": [
        {
          "name": "2021",
          "url": null
        }
      ]
    },
    {
      "title": "Student of 5 Merits Faculty Level 2021",
      "subtitle": "Acknowledged as a student of 5 merits level faculty in 2021.",
      "image": require("./assets/images/Competition/sv5t2021.jpg"),
      "imageAlt": null,
      "footerLink": [
        {
          "name": "2021",
          "url": null
        }
      ]
    },
    {
      "title": "Top typical students semester 1 2021",
      "subtitle": "Acknowledged as Top typical students semester 1 2021 with GPA 4.0",
      "image": require("./assets/images/Competition/svtb-hk1-2021.jpg"),
      "imageAlt": null,
      "footerLink": [
        {
          "name": "2021",
          "url": null
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://nhonvo.github.io/2023/12/31/gitflow-and-githubflow/",
      title: "Gitflow and Github flow",
      description:
        "Version Control Workflow Analysis: Gitflow vs GitHub Flow"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Contact me via gmail.",
  number: null,
  email_address: "vothuongtruongnhon2002@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
