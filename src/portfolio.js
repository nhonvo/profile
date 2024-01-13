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
    "Software developer, tech blogger, C# lover, a passion for open source and crafting innovative apps. Beyond the code, I'm an avid fan of anime."
  ),
  resumeLink: "https://github.com/nhonvo/profile/blob/main/src/assets/cv.pdf", // Set to empty to hide the button
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
  subTitle: "Passionate Software Developer with a Focus on Backend (C#/.NET) and Cloud (AWS)",
  skills: [
    emoji("⚡ Develop robust and scalable backend solutions using C# and .NET"),
    emoji("⚡ Implement efficient Web APIs for seamless communication in your applications"),
    emoji("⚡ Utilize AWS services for cloud-based solutions and scalability")
  ],

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
      duration: "September 2020 - April 2024",
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
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Facebook",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "June 2018 – Present",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      role: "Front-End Developer",
      company: "Quora",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "May 2017 – May 2018",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      role: "Software Engineer Intern",
      company: "Airbnb",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "Jan 2015 – Sep 2015",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
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
      "title": "Google Project Management",
      "subtitle": null,
      "image": null,
      "imageAlt": null,
      "footerLink": [
        {
          "name": "Show Credential",
          "url": "https://chat.openai.com/c/6af6cf3a-33b2-4c7d-a10c-dfd9851ebb3a#"
        }
      ]
    },
    {
      "title": "Cloud Developer",
      "subtitle": null,
      "image": null,
      "imageAlt": null,
      "footerLink": [
        {
          "name": "Show Credential",
          "url": "https://chat.openai.com/c/6af6cf3a-33b2-4c7d-a10c-dfd9851ebb3a#"
        }
      ]
    },
    {
      "title": "Google Data Analytics",
      "subtitle": null,
      "image": null,
      "imageAlt": null,
      "footerLink": [
        {
          "name": "Show Credential",
          "url": "https://chat.openai.com/c/6af6cf3a-33b2-4c7d-a10c-dfd9851ebb3a#"
        }
      ]
    },
    {
      "title": "Student of 5 Merits Level School",
      "subtitle": "Acknowledged as a student of 5 merits level school in 2023.",
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
      "title": "Student of 5 Merits Level Faculty",
      "subtitle": "Acknowledged as a student of 5 merits level faculty in 2023.",
      "image": null,
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
          "name": "Link Article",
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
      "subtitle": null,
      "image": null,
      "imageAlt": null,
      "footerLink": [
        {
          "name": "Link",
          "url": "null"
        },
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
          "name": "Link",
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
          "name": "Link",
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
          "name": "Link",
          "url": "https://www.hutech.edu.vn/khoacntt/tin-tuc/tin-tuc-su-kien/14608074-chung-ket-cuoc-thi-tim-kiem-tai-nang-cntt-2022-hutech-it-got-talent-2022"
        },
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
          "name": "Link",
          "url": "https://www.hutech.edu.vn/khoacntt/tin-tuc/tin-tuc-su-kien/14608074-chung-ket-cuoc-thi-tim-kiem-tai-nang-cntt-2022-hutech-it-got-talent-2022"
        },
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
          "name": "Link",
          "url": "https://www.hutech.edu.vn/khoacntt/tin-tuc/tin-tuc-su-kien/14608074-chung-ket-cuoc-thi-tim-kiem-tai-nang-cntt-2022-hutech-it-got-talent-2022"
        },
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
          "name": "Link",
          "url": "https://www.hutech.edu.vn/khoacntt/tin-tuc/tin-tuc-su-kien/14608074-chung-ket-cuoc-thi-tim-kiem-tai-nang-cntt-2022-hutech-it-got-talent-2022"
        },
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
          "name": "Link",
          "url": "https://www.hutech.edu.vn/khoacntt/tin-tuc/tin-tuc-su-kien/14608074-chung-ket-cuoc-thi-tim-kiem-tai-nang-cntt-2022-hutech-it-got-talent-2022"
        },
        {
          "name": "2022",
          "url": null
        }
      ]
    },
    {
      "title": "English B1 certificate",
      "subtitle": "440 TOEIC points",
      "image": null,
      "imageAlt": null,
      "footerLink": [
        {
          "name": "Link",
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
          "name": "Link",
          "url": "https://www.hutech.edu.vn/khoacntt/tin-tuc/tin-tuc-su-kien/14608074-chung-ket-cuoc-thi-tim-kiem-tai-nang-cntt-2022-hutech-it-got-talent-2022"
        },
        {
          "name": "2021",
          "url": null
        }
      ]
    },
    {
      "title": "Student of 5 Merits Level School 2021",
      "subtitle": "Acknowledged as a student of 5 merits level school in 2021.",
      "image": require("./assets/images/Competition/sv5t2021.jpg"),
      "imageAlt": null,
      "footerLink": [
        {
          "name": "Link",
          "url": "https://www.hutech.edu.vn/khoacntt/tin-tuc/tin-tuc-su-kien/14608074-chung-ket-cuoc-thi-tim-kiem-tai-nang-cntt-2022-hutech-it-got-talent-2022"
        },
        {
          "name": "2021",
          "url": null
        }
      ]
    },
    {
      "title": "Student of 5 Merits Faculty Level 2021",
      "subtitle": "Acknowledged as a student of 5 merits level faculty in 2021.",
      "image": require("./assets/images/Competition/sv5t-2023.jpg"),
      "imageAlt": null,
      "footerLink": [
        {
          "name": "Link",
          "url": "https://www.hutech.edu.vn/khoacntt/tin-tuc/tin-tuc-su-kien/14608074-chung-ket-cuoc-thi-tim-kiem-tai-nang-cntt-2022-hutech-it-got-talent-2022"
        },
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
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
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
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-0000000000",
  email_address: "saadpasta70@gmail.com"
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
