
export const info = {
  baseUrl: "https://astro-portfolio-uzair.vercel.app",
  name: "Patrick Chapple",
  jobDescription: "Software Engineer",
  about: `I am an innovative and results-driven Software Engineer with 4+ years of experience in developing custom client solutions and transforming applications to increase efficiency. Proven expertise in React, Angular, Node.js, and C#. An exceptional track record of creating impactful projects. Dedicated to delivering high-quality, scalable solutions as a Software Engineer.
  `,

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
            "Led cross-functional collaboration with product managers, resulting in the development of custom client solutions that improved client satisfaction and retention.",
            "Redesigned an ASP.NET Web Forms application that previously required manual updates of packages and files for each update, and transformed it into a single-page application seamlessly embedded within other applications, significantly decreasing the time and resources required for updates.",
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
            "Developed and maintained the front-end of the application using React, Redux, and TypeScript.",
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
            "Produced comprehensive financial, operational, and ad hoc reports, facilitating informed decision-making",
            "Improved report functionality by designing, testing, and implementing queries in order to automate procedures and reporting data",
            "Created and implemented forecasting models, utilizing current and past operational data, to help improve forecast projections.",
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
        details:[],
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
        details:[],
        skills: [],
      },
    ]
    },
    projects: [
      {
        name: "Wedding Website",
        description: "Wedding Website description",
        longDescription: [
        "This is a long description",
        "This is a long description2",
      ],
        thumbnail: "/images/wedding-project.png",
        githubUrl: "", 
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


