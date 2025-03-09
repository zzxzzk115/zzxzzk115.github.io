// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-featured-posts",
          title: "Featured Posts",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/featured-posts/index.html";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-repositories",
          title: "Repositories",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-develop-openxr-native-pc-apps-without-a-headset-by-using-meta-xr-simulator-lazy-v-39-s-blog",
      
        title: 'Develop OpenXR native PC apps without a headset by using Meta XR Simulator... <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "If you don&#39;t have an XR headset but you want to develop OpenXR apps, you can use Meta XR Simulator! It&#39;s great.",
      section: "Posts",
      handler: () => {
        
          window.open("https://zzxzzk115.github.io/blog/posts/phd-life/openxr-simulator.html", "_blank");
        
      },
    },{id: "news-embarked-on-my-phd-journey-and-joined-the-vcg-group-at-the-university-of-leeds",
          title: 'Embarked on my PhD journey and joined the VCG group at the University...',
          description: "",
          section: "News",},{id: "projects-catmario-gb",
          title: 'Catmario GB',
          description: "GameBoy verion of CatMario. Made with GB Studio. You can play it online at itch.io or by GameBoy emlators.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/catmario_gb/";
            },},{id: "projects-gold-miner-rebirth",
          title: 'Gold Miner Rebirth',
          description: "The classic game remake. Build for GameShell, Trimui (Smart Pro and Brick) and other LOVE2D compatible gaming handheld devices. Made with LÖVE(11.1).",
          section: "Projects",handler: () => {
              window.location.href = "/projects/gold_minder_rebirth/";
            },},{id: "projects-snow-leopard-engine",
          title: 'Snow Leopard Engine',
          description: "Yet another game engine group project written in C++ with OpenGL 4.6",
          section: "Projects",handler: () => {
              window.location.href = "/projects/snow_leopard_engine/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%4B.%5A%68%61%6E%67@%6C%65%65%64%73.%61%63.%75%6B", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/zzxzzk115", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/kexuan-zhang-leeds", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
