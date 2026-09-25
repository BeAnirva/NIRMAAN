import type { Language } from "@/lib/translations";

const en = {
  label: "Learn & upskill",
  titleLine1: "Skills that",
  titleEmphasis: "move you forward.",
  description:
    "Learn practical skills that can help you in education, employment, entrepreneurship and everyday life.",
  areas: [
    {
      title: "Digital Skills",
      description:
        "Build confidence with the digital tools used in education, work and everyday life.",
      tags: ["Computer Basics", "Google Workspace", "Digital Tools"],
    },
    {
      title: "Professional Skills",
      description:
        "Develop the communication and workplace skills that help you work with confidence.",
      tags: ["Communication", "English", "Professional Etiquette"],
    },
    {
      title: "Career Skills",
      description:
        "Learn how to present yourself, search for opportunities and prepare for the workplace.",
      tags: ["Resume", "Interviews", "Job Search"],
    },
    {
      title: "Technology & AI",
      description:
        "Explore modern technology and AI tools that can make you more productive and future-ready.",
      tags: ["AI Tools", "Technology", "Productivity"],
    },
    {
      title: "Financial Skills",
      description:
        "Understand the basics of managing money and making informed financial decisions.",
      tags: ["Money Basics", "Saving", "Planning"],
    },
    {
      title: "Entrepreneurship",
      description:
        "Learn the fundamentals of turning an idea into something people can use and value.",
      tags: ["Business Ideas", "Marketing", "Business Basics"],
    },
  ],
  messageLabel: "Learning at Nirmaan",
  messageTitle: "You don't need to be an expert. You just need to be willing to learn.",
  launchingSoon: "Launching Soon",
};

export const learningContent: Record<Language, typeof en> = {
  en,

  hi: {
    label: "सीखें और कौशल बढ़ाएँ",
    titleLine1: "ऐसे कौशल जो",
    titleEmphasis: "आपको आगे बढ़ाएँ।",
    description:
      "ऐसे व्यावहारिक कौशल सीखें जो पढ़ाई, रोज़गार, उद्यमिता और रोज़मर्रा की ज़िंदगी में आपकी मदद करें।",
    areas: [
      {
        title: "डिजिटल कौशल",
        description:
          "पढ़ाई, काम और रोज़मर्रा की ज़िंदगी में इस्तेमाल होने वाले डिजिटल टूल्स को आत्मविश्वास से चलाना सीखें।",
        tags: ["कंप्यूटर की बुनियादी बातें", "Google Workspace", "डिजिटल टूल्स"],
      },
      {
        title: "प्रोफेशनल कौशल",
        description:
          "संवाद और कार्यस्थल के ऐसे कौशल विकसित करें जो आपको आत्मविश्वास से काम करने में मदद करें।",
        tags: ["संवाद", "अंग्रेज़ी", "प्रोफेशनल शिष्टाचार"],
      },
      {
        title: "करियर कौशल",
        description:
          "खुद को प्रस्तुत करना, अवसर खोजना और कार्यस्थल के लिए तैयारी करना सीखें।",
        tags: ["रिज़्यूमे", "इंटरव्यू", "नौकरी की तलाश"],
      },
      {
        title: "टेक्नोलॉजी और AI",
        description:
          "आधुनिक टेक्नोलॉजी और AI टूल्स को जानें जो आपको अधिक उत्पादक और भविष्य के लिए तैयार बना सकते हैं।",
        tags: ["AI टूल्स", "टेक्नोलॉजी", "उत्पादकता"],
      },
      {
        title: "वित्तीय कौशल",
        description:
          "पैसों के प्रबंधन और सोच-समझकर वित्तीय निर्णय लेने की बुनियादी बातें समझें।",
        tags: ["पैसों की बुनियादी बातें", "बचत", "योजना"],
      },
      {
        title: "उद्यमिता",
        description:
          "किसी विचार को ऐसी चीज़ में बदलने की बुनियादी बातें सीखें जिसे लोग इस्तेमाल करें और महत्व दें।",
        tags: ["बिज़नेस आइडिया", "मार्केटिंग", "बिज़नेस की बुनियादी बातें"],
      },
    ],
    messageLabel: "निर्माण में सीखना",
    messageTitle: "आपको विशेषज्ञ होने की ज़रूरत नहीं है। बस सीखने की इच्छा होनी चाहिए।",
    launchingSoon: "जल्द आ रहा है",
  },

  or: {
    label: "ଶିଖନ୍ତୁ ଓ ଦକ୍ଷତା ବଢ଼ାନ୍ତୁ",
    titleLine1: "ଏପରି ଦକ୍ଷତା ଯାହା",
    titleEmphasis: "ଆପଣଙ୍କୁ ଆଗକୁ ନିଏ।",
    description:
      "ଏପରି ବ୍ୟାବହାରିକ ଦକ୍ଷତା ଶିଖନ୍ତୁ ଯାହା ପାଠପଢ଼ା, ନିଯୁକ୍ତି, ଉଦ୍ୟୋଗ ଏବଂ ଦୈନନ୍ଦିନ ଜୀବନରେ ଆପଣଙ୍କୁ ସାହାଯ୍ୟ କରିବ।",
    areas: [
      {
        title: "ଡିଜିଟାଲ୍ ଦକ୍ଷତା",
        description:
          "ପାଠପଢ଼ା, କାମ ଓ ଦୈନନ୍ଦିନ ଜୀବନରେ ବ୍ୟବହୃତ ଡିଜିଟାଲ୍ ଟୁଲ୍ସକୁ ଆତ୍ମବିଶ୍ୱାସର ସହ ବ୍ୟବହାର କରିବା ଶିଖନ୍ତୁ।",
        tags: ["କମ୍ପ୍ୟୁଟର ମୌଳିକ ଜ୍ଞାନ", "Google Workspace", "ଡିଜିଟାଲ୍ ଟୁଲ୍ସ"],
      },
      {
        title: "ବୃତ୍ତିଗତ ଦକ୍ଷତା",
        description:
          "ଯୋଗାଯୋଗ ଓ କାର୍ଯ୍ୟସ୍ଥଳୀର ଦକ୍ଷତା ବିକାଶ କରନ୍ତୁ ଯାହା ଆପଣଙ୍କୁ ଆତ୍ମବିଶ୍ୱାସର ସହ କାମ କରିବାରେ ସାହାଯ୍ୟ କରେ।",
        tags: ["ଯୋଗାଯୋଗ", "ଇଂରାଜୀ", "ବୃତ୍ତିଗତ ଶିଷ୍ଟାଚାର"],
      },
      {
        title: "କ୍ୟାରିୟର ଦକ୍ଷତା",
        description:
          "ନିଜକୁ କିପରି ଉପସ୍ଥାପନ କରିବେ, ସୁଯୋଗ କିପରି ଖୋଜିବେ ଏବଂ କାର୍ଯ୍ୟସ୍ଥଳୀ ପାଇଁ କିପରି ପ୍ରସ୍ତୁତ ହେବେ ଶିଖନ୍ତୁ।",
        tags: ["ରିଜ୍ୟୁମେ", "ଇଣ୍ଟରଭ୍ୟୁ", "ଚାକିରି ଖୋଜା"],
      },
      {
        title: "ଟେକ୍ନୋଲୋଜି ଓ AI",
        description:
          "ଆଧୁନିକ ଟେକ୍ନୋଲୋଜି ଓ AI ଟୁଲ୍ସ ବିଷୟରେ ଜାଣନ୍ତୁ ଯାହା ଆପଣଙ୍କୁ ଅଧିକ ଉତ୍ପାଦନଶୀଳ ଓ ଭବିଷ୍ୟତ ପାଇଁ ପ୍ରସ୍ତୁତ କରିପାରେ।",
        tags: ["AI ଟୁଲ୍ସ", "ଟେକ୍ନୋଲୋଜି", "ଉତ୍ପାଦନଶୀଳତା"],
      },
      {
        title: "ଆର୍ଥିକ ଦକ୍ଷତା",
        description:
          "ଟଙ୍କା ପରିଚାଳନା ଓ ବୁଝିବିଚାରି ଆର୍ଥିକ ନିଷ୍ପତ୍ତି ନେବାର ମୌଳିକ କଥା ବୁଝନ୍ତୁ।",
        tags: ["ଟଙ୍କାର ମୌଳିକ କଥା", "ସଞ୍ଚୟ", "ଯୋଜନା"],
      },
      {
        title: "ଉଦ୍ୟୋଗ",
        description:
          "ଏକ ଚିନ୍ତାଧାରାକୁ ଏପରି କିଛିରେ ପରିଣତ କରିବାର ମୌଳିକ କଥା ଶିଖନ୍ତୁ ଯାହାକୁ ଲୋକେ ବ୍ୟବହାର କରିବେ ଓ ମୂଲ୍ୟ ଦେବେ।",
        tags: ["ବ୍ୟବସାୟ ଚିନ୍ତାଧାରା", "ମାର୍କେଟିଂ", "ବ୍ୟବସାୟର ମୌଳିକ କଥା"],
      },
    ],
    messageLabel: "ନିର୍ମାଣରେ ଶିକ୍ଷା",
    messageTitle: "ଆପଣଙ୍କୁ ବିଶେଷଜ୍ଞ ହେବାର ଆବଶ୍ୟକତା ନାହିଁ। କେବଳ ଶିଖିବାର ଇଚ୍ଛା ଥିବା ଦରକାର।",
    launchingSoon: "ଶୀଘ୍ର ଆସୁଛି",
  },
};
