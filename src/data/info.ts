
export const info = {
  baseUrl: "https://astro-portfolio-uzair.vercel.app",
  name: "Patrick Chapple",
  jobDescription: "Software Engineer",
  about: `As a Software Engineer, I've gained over 3 years of experience in developing custom solutions and increased efficiency for
 clients. I specialize in React, Angular, Node.js, and C# and have a proven track record of creating impactful projects. I aim to deliver high-quality, scalable solutions that can make a real difference.`,

  socialMedia: {
    facebook: "https://www.facebook.com/profile.php?id=100022899849583",
    twitter: "https://twitter.com/Uzzii_21",
    github: "https://github.com/uzzii-21",
    email: "mailto:uzairahmed@74372gmail.com",
    linkedin: "https://www.linkedin.com/in/uzzii21/",
  },
  experiences:
  {
    title: "Experiences",
    experiences:
      [
        {
          name: "Software Engineer",
          description: "Impartner, INC.",
          startDate: "May 2021",
          endDate: "Present",
          details: [
            "I developed and implemented a microservice to streamline the configuration and synchronization of assets from various external asset libraries into Impartner's asset library. This new approach replaced the previous method, which required creating separate integrations for each customer and asset library, making the process much more efficient. With a configurable architecture, we could remove the need for code changes when customers wanted an update to their syncing logic. What used to be isolated and time-consuming updates for individual integrations are now centralized and standardized, leading to significant improvements in both efficiency and scalability. I utilized technologies such as C#, .NET Core, SQL, Docker, Kubernetes, and GitLab CI/CD in this project.",
            "Collaborating with cross-functional teams, I conceptualized and developed innovative product features to enhance the user experience. This collaborative effort not only drove customer satisfaction but also ensured system reliability. I utilized C#, Angular, and TypeScript to create these features.",
            "Created responsive, cross-browser frontends that are optimized for mobile and desktop devices. Using Angular, I was able to craft user interfaces that not only boosted engagement but also improved accessibility for a diverse range of users, ensuring a consistent user experience across different platforms.",
          ],
          skills: [
            "Angular",
            "Asp.Net Core",
            "Git",
            "SQL",
          ],
        },
        {
          name: "Software Developer Intern",
          description: "Oroville Hospital",
          startDate: "Aug 2020",
          endDate: "Dec 2020",
          details: [
            "I developed a COVID-19 dashboard using data from Oroville Hospital's Reference Lab to provide real-time visualization of trends and facilitate the generation of custom reports. This project aimed to simplify accessing and analyzing critical health data by offering a user-friendly interface, which removed the complexities associated with direct database queries.",
            "Users can effortlessly navigate various metrics related to COVID-19 cases, testing results, and hospital resources, allowing for informed decision-making and timely responses to the evolving situation. The dashboard's interactive features enable users to filter and customize the data views based on specific criteria, making it easier to identify patterns and track the pandemic's progression.",
            "The technologies employed in this project included MongoDB for data storage, Express and Node.js for the server-side framework, React for building the dynamic user interface, and Chart.js for creating visually engaging data visualizations. Overall, this dashboard not only enhances data accessibility but also empowers healthcare professionals and decision-makers with the insights needed to manage public health effectively.",
          ],
          skills: [
            "Express",
            "React",
            "MongoDB",
          ],
        },
        {
          name: "Operations Support Analyst",
          description: "C.R. ENGLAND",
          startDate: "Jul 2017",
          endDate: "May 2021",
          details: [
            "Implemented optimized queries to enhance report functionality, reducing runtime and automating data reporting procedures. In doing this, I was able to automate various data reporting tasks, allowing for quicker and more reliable access to critical business insights. I created these reports using SQL, VBA, and Excel.",
            "Developed forecasting models utilizing historical and real-time operational data, significantly improving forecast accuracy and supporting data-driven strategic business decision",
          ],
          skills: [
            "SQL",
          ],
        },
      ]
  },
  education:
  {
    title: "Education",
    experiences: [
      {
        name: "University of Utah - School of Computing",
        startDate: "Aug 2019",
        endDate: "Dec 2020",
        description: "Masters of Software Development, 4.0 GPA",
        details: [],
        skills: [
          "Java",
          "Python",
          "C++",
        ],
      },
      {
        name: "University of Utah",
        startDate: "Aug 2012",
        endDate: "May 2017",
        description: "Bachelor of Science, Operations Management",
        details: [],
        skills: [],
      },
    ]
  },
  projects: [
    {
      name: "Remote Monitor",
      description: "Tool to monitor services",
      longDescription: [
        "This is a long description",
        "This is a long description2",
      ],
      thumbnail: "/images/remote_monitor.png",
      githubUrl: "https://github.com/patrickchap/RemoteMonitor",
      liveUrl: "",
      route: "/posts/remote-monitor-project",
      skills: [
        "Go",
        "Sqlite",
      ],
    },
    {
      name: "Wedding Website",
      description: "I crafted and executed a personalized wedding website, streamlining event planning and guest management.",
      longDescription: [
        "This is a long description",
        "This is a long description2",
      ],
      thumbnail: "/images/wedding-project.png",
      githubUrl: "https://github.com/patrickchap/wpt3",
      liveUrl: "https://www.patrickandchantilwedding.com/",
      route: "/posts/wedding-project",
      skills: [
        "Next.js",
        "Vercel",
        "PlanetScale",
        "TypeScript",
        "TRPC",
      ],
    },
    {
      name: "MSD Script",
      description: "Programming launguage and interpreter written in C++.",
      longDescription: [
        "",
      ],
      thumbnail: "/images/msd-script.png",
      githubUrl: "https://github.com/patrickchap/MSDScript",
      liveUrl: "",
      route: "/posts/msd-script",
      skills: [
        "C++",
        "CMake",
      ],
    },
    {
      name: "Portfolio Website",
      description: "Website writen using Astro to display my projects and information about me.",
      longDescription: [
        "This is a long description",
        "This is a long description2",
      ],
      thumbnail: "/images/portfolio.png",
      githubUrl: "https://github.com/patrickchap/portfolio",
      liveUrl: "",
      route: "/posts/portfolio-project",
      skills: [
        "Astro",
        "Vercel",
        "TypeScript",
      ],
    },
  ],
};


