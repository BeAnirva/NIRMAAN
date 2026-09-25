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

// English is the source of truth: every other language must have
// exactly the same keys (TypeScript will complain if one is missing).

const en = {
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
    tagline: "LEARN • BUILD • BECOME",
    toggleMenu: "Toggle menu",
  },

  language: {
    select: "Language",
    choose: "Choose language",
  },

  hero: {
    eyebrow: "Your future starts here",
    titleLine1: "Your next chapter,",
    titleLine2: "written by you.",
    description:
      "A place to start where you are, discover what you're capable of, and take your next step with someone beside you.",
    primaryCta: "Start Your Journey",
    secondaryCta: "Explore Nirmaan",
    trust: ["100% Free", "Practical Learning", "Mentorship"],
    imageAlt: "A young person beginning their journey",
    cardText: "Start where you are. Take the next step.",
  },

  about: {
    label: "What is Nirmaan?",
    title: "A place to discover your strengths, build your skills and create a future",
    titleEmphasis: " you can be proud of.",
    description:
      "Nirmaan gives you access to free learning, practical guidance and people who believe in your potential — whether you're looking for a career or want to build something of your own.",
    link: "See how Nirmaan works",
  },

  paths: {
    label: "Your possibilities",
    titleLine1: "Start where you are.",
    titleLine2: "Go where you want.",
    description:
      "Whether you want to learn, find a career or build something of your own, Nirmaan gives you a place to start.",
    explore: "Explore →",
    items: [
      { title: "Learn", description: "Build practical skills for the real world." },
      { title: "Work", description: "Become job-ready and discover opportunities." },
      { title: "Build", description: "Turn your ideas into something of your own." },
    ],
  },

  howItWorks: {
    label: "How it works",
    title: "One step at a time.",
    description:
      "You don't need to have everything figured out. Nirmaan helps you take the next step.",
    steps: [
      { title: "Discover", description: "Understand your strengths and possibilities." },
      { title: "Learn", description: "Build practical skills through free learning." },
      { title: "Grow", description: "Practice with guidance, projects and mentorship." },
      { title: "Build", description: "Take your next step with confidence." },
    ],
  },

  cta: {
    label: "Your next chapter",
    titleLine1: "Ready to build",
    titleLine2: "your ",
    titleEmphasis: "future?",
    description:
      "You don't need to have everything figured out. Tell us where you are today, and we'll help you explore where you could go next.",
    cardLabel: "Start with a conversation",
    cardTitle: "Take the first step. We'll help you figure out the rest.",
    cardDescription:
      "Registration is free. Share a little about yourself, what you'd like to learn and where you'd like to go.",
    button: "Start Your Journey →",
    trust: ["Free to register", "Learn at your pace", "Career & entrepreneurship support"],
  },

  footer: {
    tagline: "A space to learn, grow, build and create your own path.",
    motto: "Learn • Build • Become",
    exploreHeading: "Explore",
    explore: {
      about: "About Nirmaan",
      programs: "Programs",
      journey: "Your Journey",
      learning: "Learning",
    },
    opportunitiesHeading: "Opportunities",
    opportunities: {
      career: "Career Support",
      ventures: "Nirmaan Ventures",
    },
    contribute: "Want to contribute?",
    becomeMentor: "Become a Mentor",
    readyHeading: "Ready?",
    readyText: "Your next chapter can start with one small step.",
    startJourney: "Start Your Journey →",
    statementLine1: "Your story isn't defined",
    statementLine2: "by where you ",
    statementEmphasis: "started.",
    rights: "All rights reserved.",
    privacy: "Privacy",
    terms: "Terms",
    contact: "Contact",
  },
};

export type Translation = typeof en;

const hi: Translation = {
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
    tagline: "सीखें • बनाएँ • बनें",
    toggleMenu: "मेनू खोलें/बंद करें",
  },

  language: {
    select: "भाषा",
    choose: "भाषा चुनें",
  },

  hero: {
    eyebrow: "आपका भविष्य यहीं से शुरू होता है",
    titleLine1: "आपका अगला अध्याय,",
    titleLine2: "जिसे आप खुद लिखेंगे।",
    description:
      "जहाँ आप हैं, वहीं से शुरुआत करें, जानें कि आप क्या-क्या कर सकते हैं, और किसी साथी के साथ अपना अगला कदम उठाएँ।",
    primaryCta: "अपनी यात्रा शुरू करें",
    secondaryCta: "निर्माण को जानें",
    trust: ["100% निःशुल्क", "व्यावहारिक शिक्षा", "मेंटरशिप"],
    imageAlt: "अपनी यात्रा शुरू करता एक युवा",
    cardText: "जहाँ हैं, वहीं से शुरू करें। अगला कदम उठाएँ।",
  },

  about: {
    label: "निर्माण क्या है?",
    title: "अपनी ताकत पहचानने, अपने कौशल निखारने और एक ऐसा भविष्य बनाने की जगह",
    titleEmphasis: " जिस पर आपको गर्व हो।",
    description:
      "निर्माण आपको निःशुल्क शिक्षा, व्यावहारिक मार्गदर्शन और ऐसे लोगों तक पहुँच देता है जो आपकी क्षमता में विश्वास करते हैं — चाहे आप नौकरी ढूँढ रहे हों या अपना कुछ शुरू करना चाहते हों।",
    link: "देखें निर्माण कैसे काम करता है",
  },

  paths: {
    label: "आपकी संभावनाएँ",
    titleLine1: "जहाँ हैं, वहीं से शुरू करें।",
    titleLine2: "जहाँ चाहें, वहाँ पहुँचें।",
    description:
      "चाहे आप सीखना चाहें, करियर बनाना चाहें या अपना कुछ शुरू करना चाहें, निर्माण आपको शुरुआत करने की जगह देता है।",
    explore: "जानें →",
    items: [
      { title: "सीखें", description: "असल दुनिया के लिए व्यावहारिक कौशल विकसित करें।" },
      { title: "काम करें", description: "नौकरी के लिए तैयार हों और नए अवसर खोजें।" },
      { title: "बनाएँ", description: "अपने विचारों को अपने खुद के काम में बदलें।" },
    ],
  },

  howItWorks: {
    label: "यह कैसे काम करता है",
    title: "एक-एक कदम करके।",
    description:
      "आपको सब कुछ पहले से तय करने की ज़रूरत नहीं है। निर्माण आपको अगला कदम उठाने में मदद करता है।",
    steps: [
      { title: "खोजें", description: "अपनी ताकत और संभावनाओं को समझें।" },
      { title: "सीखें", description: "निःशुल्क शिक्षा से व्यावहारिक कौशल विकसित करें।" },
      { title: "आगे बढ़ें", description: "मार्गदर्शन, प्रोजेक्ट और मेंटरशिप के साथ अभ्यास करें।" },
      { title: "बनाएँ", description: "आत्मविश्वास के साथ अपना अगला कदम उठाएँ।" },
    ],
  },

  cta: {
    label: "आपका अगला अध्याय",
    titleLine1: "अपना भविष्य",
    titleLine2: "बनाने के लिए ",
    titleEmphasis: "तैयार हैं?",
    description:
      "आपको सब कुछ पहले से तय करने की ज़रूरत नहीं है। हमें बताइए कि आज आप कहाँ हैं, और हम आपको यह जानने में मदद करेंगे कि आगे आप कहाँ जा सकते हैं।",
    cardLabel: "एक बातचीत से शुरुआत करें",
    cardTitle: "पहला कदम उठाइए। बाकी हम मिलकर तय करेंगे।",
    cardDescription:
      "पंजीकरण निःशुल्क है। अपने बारे में, आप क्या सीखना चाहते हैं और कहाँ पहुँचना चाहते हैं, इसके बारे में थोड़ा बताइए।",
    button: "अपनी यात्रा शुरू करें →",
    trust: ["पंजीकरण निःशुल्क", "अपनी गति से सीखें", "करियर और उद्यमिता सहायता"],
  },

  footer: {
    tagline: "सीखने, आगे बढ़ने, बनाने और अपना रास्ता खुद गढ़ने की जगह।",
    motto: "सीखें • बनाएँ • बनें",
    exploreHeading: "एक्सप्लोर",
    explore: {
      about: "निर्माण के बारे में",
      programs: "कार्यक्रम",
      journey: "आपकी यात्रा",
      learning: "लर्निंग",
    },
    opportunitiesHeading: "अवसर",
    opportunities: {
      career: "करियर सहायता",
      ventures: "निर्माण वेंचर्स",
    },
    contribute: "योगदान देना चाहते हैं?",
    becomeMentor: "मेंटर बनें",
    readyHeading: "तैयार हैं?",
    readyText: "आपका अगला अध्याय एक छोटे कदम से शुरू हो सकता है।",
    startJourney: "अपनी यात्रा शुरू करें →",
    statementLine1: "आपकी कहानी इससे तय नहीं होती",
    statementLine2: "कि आपने ",
    statementEmphasis: "कहाँ से शुरुआत की।",
    rights: "सर्वाधिकार सुरक्षित।",
    privacy: "गोपनीयता",
    terms: "नियम व शर्तें",
    contact: "संपर्क",
  },
};

const or: Translation = {
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
    tagline: "ଶିଖନ୍ତୁ • ଗଢ଼ନ୍ତୁ • ହୁଅନ୍ତୁ",
    toggleMenu: "ମେନୁ ଖୋଲନ୍ତୁ/ବନ୍ଦ କରନ୍ତୁ",
  },

  language: {
    select: "ଭାଷା",
    choose: "ଭାଷା ବାଛନ୍ତୁ",
  },

  hero: {
    eyebrow: "ଆପଣଙ୍କ ଭବିଷ୍ୟତ ଏଠାରୁ ଆରମ୍ଭ",
    titleLine1: "ଆପଣଙ୍କ ପରବର୍ତ୍ତୀ ଅଧ୍ୟାୟ,",
    titleLine2: "ଯାହା ଆପଣ ନିଜେ ଲେଖିବେ।",
    description:
      "ଆପଣ ଯେଉଁଠି ଅଛନ୍ତି, ସେଠାରୁ ଆରମ୍ଭ କରନ୍ତୁ, ଆପଣ କ'ଣ କରିପାରିବେ ତାହା ଆବିଷ୍କାର କରନ୍ତୁ, ଏବଂ କାହାର ସାଥିରେ ନିଜର ପରବର୍ତ୍ତୀ ପଦକ୍ଷେପ ନିଅନ୍ତୁ।",
    primaryCta: "ଆପଣଙ୍କ ଯାତ୍ରା ଆରମ୍ଭ କରନ୍ତୁ",
    secondaryCta: "ନିର୍ମାଣ ବିଷୟରେ ଜାଣନ୍ତୁ",
    trust: ["100% ମାଗଣା", "ବ୍ୟାବହାରିକ ଶିକ୍ଷା", "ମେଣ୍ଟରସିପ୍"],
    imageAlt: "ନିଜ ଯାତ୍ରା ଆରମ୍ଭ କରୁଥିବା ଜଣେ ଯୁବ ବ୍ୟକ୍ତି",
    cardText: "ଯେଉଁଠି ଅଛନ୍ତି, ସେଠାରୁ ଆରମ୍ଭ କରନ୍ତୁ। ପରବର୍ତ୍ତୀ ପଦକ୍ଷେପ ନିଅନ୍ତୁ।",
  },

  about: {
    label: "ନିର୍ମାଣ କ'ଣ?",
    title: "ନିଜର ଶକ୍ତି ଆବିଷ୍କାର କରିବା, ଦକ୍ଷତା ଗଢ଼ିବା ଏବଂ ଏପରି ଏକ ଭବିଷ୍ୟତ ତିଆରି କରିବାର ସ୍ଥାନ",
    titleEmphasis: " ଯାହା ପାଇଁ ଆପଣ ଗର୍ବ କରିପାରିବେ।",
    description:
      "ନିର୍ମାଣ ଆପଣଙ୍କୁ ମାଗଣା ଶିକ୍ଷା, ବ୍ୟାବହାରିକ ମାର୍ଗଦର୍ଶନ ଏବଂ ଆପଣଙ୍କ ସମ୍ଭାବନାରେ ବିଶ୍ୱାସ କରୁଥିବା ଲୋକମାନଙ୍କ ସହ ଯୋଡ଼େ — ଆପଣ ଚାକିରି ଖୋଜୁଥାନ୍ତୁ କିମ୍ବା ନିଜର କିଛି ଆରମ୍ଭ କରିବାକୁ ଚାହୁଁଥାନ୍ତୁ।",
    link: "ନିର୍ମାଣ କିପରି କାମ କରେ ଦେଖନ୍ତୁ",
  },

  paths: {
    label: "ଆପଣଙ୍କ ସମ୍ଭାବନା",
    titleLine1: "ଯେଉଁଠି ଅଛନ୍ତି, ସେଠାରୁ ଆରମ୍ଭ କରନ୍ତୁ।",
    titleLine2: "ଯେଉଁଠିକୁ ଚାହାଁନ୍ତି, ସେଠାକୁ ଯାଆନ୍ତୁ।",
    description:
      "ଆପଣ ଶିଖିବାକୁ ଚାହାଁନ୍ତୁ, କ୍ୟାରିୟର ଖୋଜିବାକୁ ଚାହାଁନ୍ତୁ କିମ୍ବା ନିଜର କିଛି ଗଢ଼ିବାକୁ ଚାହାଁନ୍ତୁ, ନିର୍ମାଣ ଆପଣଙ୍କୁ ଆରମ୍ଭ କରିବାର ସ୍ଥାନ ଦିଏ।",
    explore: "ଜାଣନ୍ତୁ →",
    items: [
      { title: "ଶିଖନ୍ତୁ", description: "ବାସ୍ତବ ଦୁନିଆ ପାଇଁ ବ୍ୟାବହାରିକ ଦକ୍ଷତା ଗଢ଼ନ୍ତୁ।" },
      { title: "କାମ କରନ୍ତୁ", description: "ଚାକିରି ପାଇଁ ପ୍ରସ୍ତୁତ ହୁଅନ୍ତୁ ଏବଂ ନୂଆ ସୁଯୋଗ ଖୋଜନ୍ତୁ।" },
      { title: "ଗଢ଼ନ୍ତୁ", description: "ନିଜ ଚିନ୍ତାଧାରାକୁ ନିଜର କିଛିରେ ପରିଣତ କରନ୍ତୁ।" },
    ],
  },

  howItWorks: {
    label: "ଏହା କିପରି କାମ କରେ",
    title: "ଗୋଟିଏ ଗୋଟିଏ ପାଦ କରି।",
    description:
      "ଆପଣଙ୍କୁ ସବୁକିଛି ଆଗରୁ ସ୍ଥିର କରିବାର ଆବଶ୍ୟକତା ନାହିଁ। ନିର୍ମାଣ ଆପଣଙ୍କୁ ପରବର୍ତ୍ତୀ ପଦକ୍ଷେପ ନେବାରେ ସାହାଯ୍ୟ କରେ।",
    steps: [
      { title: "ଆବିଷ୍କାର କରନ୍ତୁ", description: "ନିଜର ଶକ୍ତି ଓ ସମ୍ଭାବନାକୁ ବୁଝନ୍ତୁ।" },
      { title: "ଶିଖନ୍ତୁ", description: "ମାଗଣା ଶିକ୍ଷା ମାଧ୍ୟମରେ ବ୍ୟାବହାରିକ ଦକ୍ଷତା ଗଢ଼ନ୍ତୁ।" },
      { title: "ଆଗକୁ ବଢ଼ନ୍ତୁ", description: "ମାର୍ଗଦର୍ଶନ, ପ୍ରୋଜେକ୍ଟ ଓ ମେଣ୍ଟରସିପ୍ ସହ ଅଭ୍ୟାସ କରନ୍ତୁ।" },
      { title: "ଗଢ଼ନ୍ତୁ", description: "ଆତ୍ମବିଶ୍ୱାସର ସହ ପରବର୍ତ୍ତୀ ପଦକ୍ଷେପ ନିଅନ୍ତୁ।" },
    ],
  },

  cta: {
    label: "ଆପଣଙ୍କ ପରବର୍ତ୍ତୀ ଅଧ୍ୟାୟ",
    titleLine1: "ନିଜ ଭବିଷ୍ୟତ",
    titleLine2: "ଗଢ଼ିବାକୁ ",
    titleEmphasis: "ପ୍ରସ୍ତୁତ କି?",
    description:
      "ଆପଣଙ୍କୁ ସବୁକିଛି ଆଗରୁ ସ୍ଥିର କରିବାର ଆବଶ୍ୟକତା ନାହିଁ। ଆଜି ଆପଣ କେଉଁଠି ଅଛନ୍ତି ଆମକୁ କୁହନ୍ତୁ, ଏବଂ ଆଗକୁ କେଉଁଠିକୁ ଯାଇପାରିବେ ତାହା ଖୋଜିବାରେ ଆମେ ସାହାଯ୍ୟ କରିବୁ।",
    cardLabel: "ଏକ ଆଲୋଚନାରୁ ଆରମ୍ଭ କରନ୍ତୁ",
    cardTitle: "ପ୍ରଥମ ପଦକ୍ଷେପ ନିଅନ୍ତୁ। ବାକି ଆମେ ମିଶି ସ୍ଥିର କରିବା।",
    cardDescription:
      "ପଞ୍ଜୀକରଣ ମାଗଣା। ନିଜ ବିଷୟରେ, ଆପଣ କ'ଣ ଶିଖିବାକୁ ଚାହାଁନ୍ତି ଏବଂ କେଉଁଠିକୁ ଯିବାକୁ ଚାହାଁନ୍ତି ସେ ବିଷୟରେ ଟିକେ କୁହନ୍ତୁ।",
    button: "ଆପଣଙ୍କ ଯାତ୍ରା ଆରମ୍ଭ କରନ୍ତୁ →",
    trust: ["ମାଗଣା ପଞ୍ଜୀକରଣ", "ନିଜ ଗତିରେ ଶିଖନ୍ତୁ", "କ୍ୟାରିୟର ଓ ଉଦ୍ୟୋଗ ସହାୟତା"],
  },

  footer: {
    tagline: "ଶିଖିବା, ଆଗକୁ ବଢ଼ିବା, ଗଢ଼ିବା ଏବଂ ନିଜର ପଥ ତିଆରି କରିବାର ସ୍ଥାନ।",
    motto: "ଶିଖନ୍ତୁ • ଗଢ଼ନ୍ତୁ • ହୁଅନ୍ତୁ",
    exploreHeading: "ଏକ୍ସପ୍ଲୋର୍",
    explore: {
      about: "ନିର୍ମାଣ ବିଷୟରେ",
      programs: "କାର୍ଯ୍ୟକ୍ରମ",
      journey: "ଆପଣଙ୍କ ଯାତ୍ରା",
      learning: "ଶିକ୍ଷା",
    },
    opportunitiesHeading: "ସୁଯୋଗ",
    opportunities: {
      career: "କ୍ୟାରିୟର ସହାୟତା",
      ventures: "ନିର୍ମାଣ ଭେଞ୍ଚର୍ସ",
    },
    contribute: "ଯୋଗଦାନ ଦେବାକୁ ଚାହାଁନ୍ତି କି?",
    becomeMentor: "ମେଣ୍ଟର୍ ହୁଅନ୍ତୁ",
    readyHeading: "ପ୍ରସ୍ତୁତ କି?",
    readyText: "ଆପଣଙ୍କ ପରବର୍ତ୍ତୀ ଅଧ୍ୟାୟ ଗୋଟିଏ ଛୋଟ ପଦକ୍ଷେପରୁ ଆରମ୍ଭ ହୋଇପାରେ।",
    startJourney: "ଆପଣଙ୍କ ଯାତ୍ରା ଆରମ୍ଭ କରନ୍ତୁ →",
    statementLine1: "ଆପଣଙ୍କ କାହାଣୀ ଏଥିରେ ସୀମିତ ନୁହେଁ",
    statementLine2: "ଯେ ଆପଣ ",
    statementEmphasis: "କେଉଁଠୁ ଆରମ୍ଭ କରିଥିଲେ।",
    rights: "ସର୍ବସ୍ୱତ୍ୱ ସଂରକ୍ଷିତ।",
    privacy: "ଗୋପନୀୟତା",
    terms: "ସର୍ତ୍ତାବଳୀ",
    contact: "ଯୋଗାଯୋଗ",
  },
};

export const translations: Record<Language, Translation> = { en, hi, or };
