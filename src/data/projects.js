const data = [
  {
    image: "/images/roaddy-hero.png",
    alt: "Roaddy",
    name: "Roaddy",
    description:
      "Vehicle Rental Web App.",
    stack: "Reactjs, TailwindCSS, Firebase",
    link: "https://roaddy.vercel.app",
    github: "https://github.com/segunajibola/roaddy",
    status: "ongoing",
  },
  {
    image: "/images/etherchannel.png",
    alt: "Etherchanel solution service",
    name: "Etherchanel solution service",
    description:
      "Computer based services and corporate trainings online/offline.",
    stack: "Nextjs, TailwindCSS, Framer Motion",
    link: "https://ether-channels-business.vercel.app",
    github: "",
    status: "ongoing",
  },
  {
    image: "/images/picbot.png",
    alt: "Picbot",
    name: "Picbot",
    description: "A website to search and download images from Unsplash with just one click.",
    stack: "HTML, TailwindCSS, React, Unsplash API",
    link: "https://picbot.vercel.app",
    github: "https://github.com/segunajibola/picbot",
    status: "completed",
  },
  {
    image: "/images/tourcation.png",
    alt: "Tourcation App",
    name: "Tourcation",
    description:
      "Tourism project - explore popular centers in Nigeria, book a seat, travel, have fun.",
    stack: "HTML, TailwindCSS & React",
    link: "https://tourcation.vercel.app",
    github: "https://github.com/segunajibola/tourcation",
    status: "ongoing",
  },
  {
    image: "/images/t-pro.png",
    alt: "T-Pro",
    name: "T-Pro Signature",
    description:
      "Beauty, makeup and event decoration website.",
    stack: "Nextjs, TailwindCSS, Framer Motion",
    link: "https://tprosignature.vercel.app",
    github: "https://github.com/segunajibola/t-pro",
    status: "ongoing",
  },
  {
    image: "/images/trenp.png",
    alt: "Trenp",
    name: "Trenp",
    description:
      "A web project to display the list of trending people in the entertainment industry and their biography.",
    stack: "Nextjs, TailwindCSS & Movie DB",
    link: "https://trenp.vercel.app",
    github: "https://github.com/segunajibola/trenp",
    status: "completed",
  },
  {
    image: "/images/windowwidth.png",
    alt: "Window-width",
    name: "Windowwidth",
    description:
      "A simple web app to show your current window width dynamically",
    stack: "React, TailwindCSS, Vitejs",
    link: "https://windowwidth.vercel.app",
    github: "https://github.com/segunajibola/window-width",
    status: "completed",
  },
  {
    image: "/images/dannyThompson.png",
    alt: "Danny Thompson's Twitter Portfolio",
    name: "Danny Thompson's Twitter",
    description:
      "A simple web page to how valuable Danny Thompson has been to the Twitter tech community",
    stack: "HTML, CSS & Widget.js",
    link: "https://dannythompson-twitterportfolio.vercel.app",
    github: "https://github.com/segunajibola/twitter-portfolio",
    status: "completed",
  },
  {
    image: "/images/savelinks.png",
    alt: "Savelinks",
    name: "Savelinks",
    description:
      "Save links in seconds. A light-weight Chrome extension to paste and save important links quickly.",
    stack: "HTML, CSS & JavaScript",
    link: "https://savelinks.vercel.app",
    github: "https://github.com/segunajibola/savelinks-chrome-extension",
    status: "completed",
  },
  {
    image: "/images/boredombot.png",
    alt: "BoredomBot",
    name: "BoredomBot",
    description:
      "Tap on a button to get suggestions of what to do when you are alone and bored.",
    stack: "HTML, CSS & JavaScript",
    link: "https://boredombot.vercel.app",
    github: "https://github.com/segunajibola/boredombot",
    status: "completed",
  },
  {
    image: "/images/foodarena.png",
    alt: "Foodarena",
    name: "Foodarena",
    description:
      "Browse and order the latest recipies from foodarena's kitchen.",
    stack: "HTML, TailwindCSS & JavaScript",
    link: "https://foodarena.vercel.app",
    github: "https://github.com/segunajibola/foodarena",
    status: "completed",
  },
  {
    image: "/images/tailwindplates.png",
    alt: "Tailwindplates",
    name: "Tailwindplates",
    description:
      "Download free & premium Tailwind website templates in minutes. Free for personal use and commercials.",
    stack: "HTML, TailwindCSS & React",
    link: "https://tailwindplates.vercel.app",
    github: "https://github.com/segunajibola/tailwindplates",
    status: "ongoing",
  },
  {
    image: "/images/SFA.png",
    alt: "SFA",
    name: "SFA",
    description:
      "Seguns's Food Arcade is a simple restaurant website showing the different Nigerian dishes and their prices.",
    stack: "HTML, CSS & JavaScript",
    link: "https://segunajibola.github.io/segunsfoodarcade/index.html",
    github: "https://github.com/segunajibola/segunsfoodarcade",
    status: "completed",
  },
  {
    image: "/images/vfl.png",
    alt: "Videva Fashion Line",
    name: "Videva Fashion Line",
    description:
      "A portfolio website to showcase the beauties of fashion design from Videva Fashion Line.",
    stack: "HTML, TailwindCSS & Vanilla JavaScript",
    link: "https://videvafashionline.vercel.app",
    github: "https://github.com/segunajibola/VidevaFashionLine",
    status: "ongoing",
  },
  {
    image: "/images/interior-decoration.png",
    alt: "Inner Lux",
    name: "Inner Lux",
    description: "Designing the beautiful decoration in your homes.",
    stack: "HTML, CSS, JavaScript, Fullpage.js",
    link: "https://segunajibola.github.io/Interior-Decoration/index.html",
    github: "https://github.com/segunajibola/Interior-Decoration",
    status: "ongoing",
  },
];

const updatedData = data.map((item, index) => ({
  ...item,
  id: index + 1
}));

export default updatedData;
