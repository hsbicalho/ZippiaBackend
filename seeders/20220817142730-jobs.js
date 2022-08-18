'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
       await queryInterface.bulkInsert('Jobs',
       [ 
        {
          companyName: "Disney",
          jobTitle: "Software Engineer I",
          description: "Build for AWS with a variety of open source software.",
          location: "El Segundo, CA",
        },
        {
          companyName: "Disney",
          jobTitle: "Software Engineer II",
          description: "Build for AWS with a variety of open source software.",
          location: "El Segundo, CA",
        },
        {
          companyName: "Disney",
          jobTitle: "Software Engineer II",
          description: "Build for AWS with a variety of open source software.",
          location: "El Segundo, CA",
        },
        {
          companyName: "Disney",
          jobTitle: "Test Writer",
          description: "Build for AWS with a variety of open source software.",
          location: "El Segundo, CA",
        },
        {
          companyName: "eBay",
          jobTitle: "Full Stack Software Engineer",
          description: "We are looking for a motivated Software Engineer to build robust and scalable software.",
          location: "San Jose, CA",
        },
        {
          companyName: "eBay",
          jobTitle: "Frontend Software Engineer",
          description: "We are looking for a motivated Software Engineer to build robust and scalable software.",
          location: "San Jose, CA",
        },
        {
          companyName: "eBay",
          jobTitle: "Backend Software Engineer",
          description: "We are looking for a motivated Software Engineer to build robust and scalable software.",
          location: "San Jose, CA",
        },
        {
          companyName: "Boeing",
          jobTitle: "Software Engineer",
          description: "At Boeing, We are all innovators on a mission to connect, protect, explore and inspire.",
          location: "San Fernando,CA",
        },
        {
          companyName: "Boeing",
          jobTitle: "Software Engineer",
          description: "At Boeing, We are all innovators on a mission to connect, protect, explore and inspire.",
          location: "San Fernando,CA",
        },
        {
          companyName: "Boeing",
          jobTitle: "Software Engineer",
          description: "At Boeing, We are all innovators on a mission to connect, protect, explore and inspire.",
          location: "San Fernando,CA",
        },
        {
          companyName: "General Motors",
          jobTitle: "Infotainment Platform Software Engineer-SDV",
          description: "Participate in the design of a best-in-class-in-vehcicle platform for GM infotainment systems.",
          location: "Sunnyvale, CA",
        },
        {
          companyName: "Horizon Therapeutics",
          jobTitle: "Programer II",
          description: "Specifically, the programmer II, statistical programming will be expected.",
          location: "Daly City, CA",
        },
        {
          companyName: "SBS Corp",
          jobTitle: "Java Fullstack Developer",
          description: "Experience with responsive web design and targeting mobile platforms.",
          location: "Newark, CA",
        },
        {
          companyName: "Enterprise Solutions Inc.",
          jobTitle: "Java backend Developer",
          description: "Experience with Java8, Sprint Boot 2.x, Angular9, PrimeNG and Oracle 12c Able to write REST APIs.",
          location: "San Jose, CA",
        },
        {
          companyName: "Enterprise Solutions Inc.",
          jobTitle: "React Frontend Developer",
          description: "Experience with Java8, Sprint Boot 2.x, Angular9, PrimeNG and Oracle 12c Able to write REST APIs.",
          location: "San Jose, CA",
        },
        {
          companyName: "Enterprise Solutions Inc.",
          jobTitle: "Tech Lead",
          description: "Experience with Java8, Sprint Boot 2.x, Angular9, PrimeNG and Oracle 12c Able to write REST APIs.",
          location: "San Jose, CA",
        },
        {
          companyName: "Enterprise Solutions Inc.",
          jobTitle: "Cyber Security",
          description: "Experience with Java8, Sprint Boot 2.x, Angular9, PrimeNG and Oracle 12c Able to write REST APIs.",
          location: "San Jose, CA",
        },
        {
          companyName: "Enterprise Solutions Inc.",
          jobTitle: "Test writer",
          description: "Experience with Java8, Sprint Boot 2.x, Angular9, PrimeNG and Oracle 12c Able to write REST APIs.",
          location: "San Jose, CA",
        },
      ], {});
    
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.bulkDelete('Jobs', null, {});
     
  }
};
