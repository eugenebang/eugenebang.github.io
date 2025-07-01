// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "(*) denote for equal contribution.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-news",
          title: "news",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/news/";
          },
        },{id: "nav-vitae",
          title: "vitae",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "Materials for courses you taught. Replace this text with your description.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "post-arc-s-virtual-cell-challenge-accelerating-drug-discovery-with-ai-models",
        
          title: "🚀 Arc’s Virtual Cell Challenge: Accelerating Drug Discovery with AI Models",
        
        description: "The Arc Institute is taking a major step toward this vision with the launch of the inaugural Virtual Cell Challenge, a public competition offering $100,000+ in prizes for the best machine learning models predicting cellular responses to genetic perturbations.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/virtual-cell-ark-institue/";
          
        },
      },{id: "post-deepmind-releases-alphagenome-a-new-ai-model-for-decoding-the-genome",
        
          title: "🧬 DeepMind releases AlphaGenome, a New AI Model for Decoding the Genome",
        
        description: "DeepMind releases AlphaGenome, a unifying DNA sequence model that advances regulatory variant-effect prediction, promising to shed fresh light on how the genome orchestrates life.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/alphagenome/";
          
        },
      },{id: "post-introducing-txgemma-open-models-to-improve-therapeutics-development-google-developers-blog",
        
          title: 'Introducing TxGemma: Open models to improve therapeutics development
            
            
            - Google Developers Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "TxGemma is a collection of open models designed to improve efficiency of therapeutic development using language models.",
        section: "Posts",
        handler: () => {
          
            window.open("https://developers.googleblog.com/en/introducing-txgemma-open-models-improving-therapeutics-development/", "_blank");
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-our-work-on-computational-drug-repurposing-has-been-accepted-to-nature-communications",
          title: '🎉 Our work on computational drug repurposing has been accepted to Nature Communications!...',
          description: "",
          section: "News",},{id: "news-reached-100-citations-on-google-scholar-today",
          title: '🎉 Reached 100 citations on Google Scholar Today! 📈',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_post_100citation/";
            },},{id: "news-two-papers-on-multi-modal-molecular-representation-learning-accepted",
          title: '🎉 Two Papers on Multi-modal Molecular Representation Learning Accepted!',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_1%20copy/";
            },},{id: "news-two-ismb-eccb-2025-papers-accepted-a-small-win-for-ai-x-drug-discovery",
          title: '🎉 Two ISMB/ECCB 2025 Papers Accepted! A Small Win for AI x Drug...',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-one-paper-accepted-to-icml-2025",
          title: '🎉 One paper accepted to ICML 2025! 🚀🧠',
          description: "",
          section: "News",},{id: "news-successfully-defended-my-dissertation-entitled-modeling-multi-scale-biomedical-interactions-via-transfer-learning-and-knowledge-integration-for-personalized-medicine",
          title: '🎓 Successfully defended my dissertation entitled: “Modeling Multi-Scale Biomedical Interactions via Transfer Learning...',
          description: "",
          section: "News",},{id: "news-redefining-drug-likeness-with-ai-icml-amp-ismb-presentations-coming-up",
          title: '🚀 Redefining Drug-Likeness with AI: ICML &amp;amp; ISMB Presentations Coming Up! 💊',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_5/";
            },},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%79%6F%75@%65%78%61%6D%70%6C%65.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/eugene_dongmin_bang", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=9ROmnIAAAAAJ", "_blank");
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
