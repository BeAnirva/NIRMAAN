import type { Language } from "@/lib/translations";

const en = {
  label: "Career readiness",
  titleLine1: "From learning",
  titleLine2: "to ",
  titleEmphasis: "earning.",
  description:
    "Learning a skill is only the beginning. We help you turn what you learn into something you can demonstrate, communicate and use to pursue real opportunities.",
  journeyLabel: "Your career journey",
  journeyTitle: "Learn → Prepare → Apply → Grow",
  journeyNote: "One step at a time.",
  steps: [
    {
      title: "Build Skills",
      description:
        "Develop practical skills that match the kind of work you want to pursue.",
    },
    {
      title: "Build Your Profile",
      description:
        "Create a strong resume, portfolio and professional profile that represent what you can do.",
    },
    {
      title: "Practice",
      description:
        "Work on projects, practice interviews and build the confidence to perform in real situations.",
    },
    {
      title: "Find Opportunities",
      description:
        "Discover internships, jobs, apprenticeships and other opportunities that can help you take your next step.",
    },
  ],
  profileLabel: "Build your profile",
  profileTitle: "Show the world what you can do.",
  profileItems: ["Resume building", "Portfolio development", "Interview preparation"],
  opportunitiesLabel: "Find opportunities",
  opportunitiesTitle: "Your first opportunity can change what's possible.",
  opportunitiesDescription:
    "We'll help you prepare for and discover opportunities that match your skills, interests and goals.",
  opportunityTags: ["Internships", "Jobs", "Apprenticeships", "Freelancing"],
  bottomText: "You don't need to be job-ready today. Nirmaan can help you become ready.",
  launchingSoon: "Launching Soon",
};

export const careerContent: Record<Language, typeof en> = {
  en,

  hi: {
    label: "करियर की तैयारी",
    titleLine1: "सीखने से",
    titleLine2: "",
    titleEmphasis: "कमाने तक।",
    description:
      "कोई कौशल सीखना तो बस शुरुआत है। हम आपकी मदद करते हैं कि आप जो सीखें, उसे दिखा सकें, समझा सकें और असली अवसरों के लिए इस्तेमाल कर सकें।",
    journeyLabel: "आपकी करियर यात्रा",
    journeyTitle: "सीखें → तैयारी करें → आवेदन करें → आगे बढ़ें",
    journeyNote: "एक-एक कदम करके।",
    steps: [
      {
        title: "कौशल विकसित करें",
        description:
          "ऐसे व्यावहारिक कौशल विकसित करें जो आपके मनचाहे काम से मेल खाते हों।",
      },
      {
        title: "अपनी प्रोफ़ाइल बनाएँ",
        description:
          "एक मज़बूत रिज़्यूमे, पोर्टफ़ोलियो और प्रोफेशनल प्रोफ़ाइल बनाएँ जो दिखाए कि आप क्या कर सकते हैं।",
      },
      {
        title: "अभ्यास करें",
        description:
          "प्रोजेक्ट पर काम करें, इंटरव्यू का अभ्यास करें और असली परिस्थितियों में अच्छा करने का आत्मविश्वास पाएँ।",
      },
      {
        title: "अवसर खोजें",
        description:
          "इंटर्नशिप, नौकरियाँ, अप्रेंटिसशिप और ऐसे अन्य अवसर खोजें जो आपको अगला कदम उठाने में मदद करें।",
      },
    ],
    profileLabel: "अपनी प्रोफ़ाइल बनाएँ",
    profileTitle: "दुनिया को दिखाइए कि आप क्या कर सकते हैं।",
    profileItems: ["रिज़्यूमे बनाना", "पोर्टफ़ोलियो तैयार करना", "इंटरव्यू की तैयारी"],
    opportunitiesLabel: "अवसर खोजें",
    opportunitiesTitle: "आपका पहला अवसर आपकी संभावनाओं को बदल सकता है।",
    opportunitiesDescription:
      "हम आपके कौशल, रुचियों और लक्ष्यों से मेल खाने वाले अवसरों की तैयारी करने और उन्हें खोजने में आपकी मदद करेंगे।",
    opportunityTags: ["इंटर्नशिप", "नौकरियाँ", "अप्रेंटिसशिप", "फ्रीलांसिंग"],
    bottomText:
      "आपको आज ही नौकरी के लिए तैयार होने की ज़रूरत नहीं है। निर्माण आपको तैयार होने में मदद कर सकता है।",
    launchingSoon: "जल्द आ रहा है",
  },

  or: {
    label: "କ୍ୟାରିୟର ପ୍ରସ୍ତୁତି",
    titleLine1: "ଶିଖିବାରୁ",
    titleLine2: "",
    titleEmphasis: "ରୋଜଗାର ପର୍ଯ୍ୟନ୍ତ।",
    description:
      "ଏକ ଦକ୍ଷତା ଶିଖିବା କେବଳ ଆରମ୍ଭ। ଆପଣ ଯାହା ଶିଖନ୍ତି ତାହାକୁ ଦେଖାଇବା, ବୁଝାଇବା ଏବଂ ପ୍ରକୃତ ସୁଯୋଗ ପାଇଁ ବ୍ୟବହାର କରିବାରେ ଆମେ ସାହାଯ୍ୟ କରୁ।",
    journeyLabel: "ଆପଣଙ୍କ କ୍ୟାରିୟର ଯାତ୍ରା",
    journeyTitle: "ଶିଖନ୍ତୁ → ପ୍ରସ୍ତୁତ ହୁଅନ୍ତୁ → ଆବେଦନ କରନ୍ତୁ → ଆଗକୁ ବଢ଼ନ୍ତୁ",
    journeyNote: "ଗୋଟିଏ ଗୋଟିଏ ପାଦ କରି।",
    steps: [
      {
        title: "ଦକ୍ଷତା ଗଢ଼ନ୍ତୁ",
        description:
          "ଆପଣ କରିବାକୁ ଚାହୁଁଥିବା କାମ ସହ ମେଳ ଖାଉଥିବା ବ୍ୟାବହାରିକ ଦକ୍ଷତା ବିକାଶ କରନ୍ତୁ।",
      },
      {
        title: "ନିଜ ପ୍ରୋଫାଇଲ୍ ଗଢ଼ନ୍ତୁ",
        description:
          "ଏକ ମଜବୁତ ରିଜ୍ୟୁମେ, ପୋର୍ଟଫୋଲିଓ ଓ ବୃତ୍ତିଗତ ପ୍ରୋଫାଇଲ୍ ତିଆରି କରନ୍ତୁ ଯାହା ଆପଣ କ'ଣ କରିପାରିବେ ତାହା ଦର୍ଶାଏ।",
      },
      {
        title: "ଅଭ୍ୟାସ କରନ୍ତୁ",
        description:
          "ପ୍ରୋଜେକ୍ଟରେ କାମ କରନ୍ତୁ, ଇଣ୍ଟରଭ୍ୟୁ ଅଭ୍ୟାସ କରନ୍ତୁ ଏବଂ ପ୍ରକୃତ ପରିସ୍ଥିତିରେ ଭଲ କରିବାର ଆତ୍ମବିଶ୍ୱାସ ଗଢ଼ନ୍ତୁ।",
      },
      {
        title: "ସୁଯୋଗ ଖୋଜନ୍ତୁ",
        description:
          "ଇଣ୍ଟର୍ନସିପ୍, ଚାକିରି, ଆପ୍ରେଣ୍ଟିସସିପ୍ ଓ ଅନ୍ୟ ସୁଯୋଗ ଖୋଜନ୍ତୁ ଯାହା ଆପଣଙ୍କୁ ପରବର୍ତ୍ତୀ ପଦକ୍ଷେପ ନେବାରେ ସାହାଯ୍ୟ କରିପାରେ।",
      },
    ],
    profileLabel: "ନିଜ ପ୍ରୋଫାଇଲ୍ ଗଢ଼ନ୍ତୁ",
    profileTitle: "ଆପଣ କ'ଣ କରିପାରିବେ ଦୁନିଆକୁ ଦେଖାନ୍ତୁ।",
    profileItems: ["ରିଜ୍ୟୁମେ ପ୍ରସ୍ତୁତି", "ପୋର୍ଟଫୋଲିଓ ବିକାଶ", "ଇଣ୍ଟରଭ୍ୟୁ ପ୍ରସ୍ତୁତି"],
    opportunitiesLabel: "ସୁଯୋଗ ଖୋଜନ୍ତୁ",
    opportunitiesTitle: "ଆପଣଙ୍କ ପ୍ରଥମ ସୁଯୋଗ ସମ୍ଭାବନାକୁ ବଦଳାଇ ଦେଇପାରେ।",
    opportunitiesDescription:
      "ଆପଣଙ୍କ ଦକ୍ଷତା, ଆଗ୍ରହ ଓ ଲକ୍ଷ୍ୟ ସହ ମେଳ ଖାଉଥିବା ସୁଯୋଗ ପାଇଁ ପ୍ରସ୍ତୁତ ହେବା ଓ ସେଗୁଡ଼ିକୁ ଖୋଜିବାରେ ଆମେ ସାହାଯ୍ୟ କରିବୁ।",
    opportunityTags: ["ଇଣ୍ଟର୍ନସିପ୍", "ଚାକିରି", "ଆପ୍ରେଣ୍ଟିସସିପ୍", "ଫ୍ରିଲାନ୍ସିଂ"],
    bottomText:
      "ଆପଣଙ୍କୁ ଆଜି ହିଁ ଚାକିରି ପାଇଁ ପ୍ରସ୍ତୁତ ହେବାର ଆବଶ୍ୟକତା ନାହିଁ। ନିର୍ମାଣ ଆପଣଙ୍କୁ ପ୍ରସ୍ତୁତ ହେବାରେ ସାହାଯ୍ୟ କରିପାରେ।",
    launchingSoon: "ଶୀଘ୍ର ଆସୁଛି",
  },
};
