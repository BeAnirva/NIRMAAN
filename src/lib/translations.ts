export type Language = "en" | "hi" | "or";

export const languages = {
  en: {
    name: "English",
    nativeName: "English",
  },
  hi: {
    name: "Hindi",
    nativeName: "हिन्दी",
  },
  or: {
    name: "Odia",
    nativeName: "ଓଡ଼ିଆ",
  },
} as const;

export const translations = {
  en: {
    nav: {
      home: "Home",
      howItWorks: "How It Works",
      explore: "Explore",
      learning: "Learning",
      career: "Career",
      ventures: "Ventures",
      mentorship: "Become a Mentor",
      faq: "FAQ",
      startJourney: "Start Your Journey →",
    },

    language: {
      select: "Language",
    },
  },

  hi: {
    nav: {
      home: "होम",
      howItWorks: "यह कैसे काम करता है",
      explore: "एक्सप्लोर",
      learning: "लर्निंग",
      career: "करियर",
      ventures: "वेंचर्स",
      mentorship: "मेंटर बनें",
      faq: "अक्सर पूछे जाने वाले सवाल",
      startJourney: "अपनी यात्रा शुरू करें →",
    },

    language: {
      select: "भाषा",
    },
  },

  or: {
    nav: {
      home: "ମୁଖ୍ୟ ପୃଷ୍ଠା",
      howItWorks: "ଏହା କିପରି କାମ କରେ",
      explore: "ଏକ୍ସପ୍ଲୋର୍",
      learning: "ଶିକ୍ଷା",
      career: "କ୍ୟାରିୟର",
      ventures: "ଭେଞ୍ଚର୍ସ",
      mentorship: "ମେଣ୍ଟର୍ ହୁଅନ୍ତୁ",
      faq: "ସାଧାରଣ ପ୍ରଶ୍ନ",
      startJourney: "ଆପଣଙ୍କ ଯାତ୍ରା ଆରମ୍ଭ କରନ୍ତୁ →",
    },

    language: {
      select: "ଭାଷା",
    },
  },
} as const;
