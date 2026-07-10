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
            window.location.href = "/featured-posts/";
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
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "dropdown-lazy-v-39-s-blog",
              title: "Lazy_V&#39;s Blog",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/blog/";
              },
            },{id: "dropdown-vcg-profile",
              title: "VCG Profile",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "https://vcg.leeds.ac.uk/profiles/kexuan-zhang/";
              },
            },{id: "dropdown-faculty-profile",
              title: "Faculty Profile",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "https://eps.leeds.ac.uk/computing/pgr/15430/kexuan-zhang";
              },
            },{id: "post-a-little-secret-of-tracy-profiler",
      
        title: "A Little Secret of Tracy Profiler",
      
      description: "Possible Memory Leak of Tracy? Not exactly...",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/featured-posts/2025/a-little-secret-of-tracy-profiler/";
        
      },
    },{id: "post-giscus-enabled",
      
        title: "Giscus enabled!",
      
      description: "an example of a blog post with giscus comments",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/featured-posts/2025/giscus-enabled/";
        
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
          description: "The troll platformer CatMario, rebuilt for the Game Boy with GB Studio — playable on itch.io or any GB emulator.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/catmario_gb/";
            },},{id: "projects-cells-of-division",
          title: 'Cells of Division',
          description: "A top-down bullet hell roguelike on Steam — fight alongside clones of your past runs inside the immune system. Free demo out now! Co-founder of High Path Games; programming lead.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/cells_of_division/";
            },},{id: "projects-gold-miner-rebirth",
          title: 'Gold Miner Rebirth',
          description: "A faithful remake of the classic Flash game, built with LÖVE2D for GameShell, Trimui, and other retro gaming handhelds.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/gold_minder_rebirth/";
            },},{id: "projects-lazy-100",
          title: 'Lazy-100',
          description: "A fantasy game console in the spirit of PICO-8 / TIC-80 — built to prove VRI can carry a complete product, and because retro games are great.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/lazy_100/";
            },},{id: "projects-omnilyrics",
          title: 'OmniLyrics',
          description: "The lyric tool I always wanted — CLI, GUI, and status-bar modes, cross-platform, built with .NET 8 and Avalonia.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/omnilyrics/";
            },},{id: "projects-snow-leopard-engine",
          title: 'Snow Leopard Engine',
          description: "A C++ / OpenGL 4.6 game engine built by a 7-person MSc team at Leeds — where the Vultra story began.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/snow_leopard_engine/";
            },},{id: "projects-vultra-ecosystem",
          title: 'Vultra Ecosystem',
          description: "A modular family of C++ libraries for real-time rendering, XR research, and game development — from foundation utilities to a multi-backend RHI and a modern engine.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/vultra_ecosystem/";
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
