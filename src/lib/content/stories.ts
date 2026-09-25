import type { Language } from "@/lib/translations";

const en = {
  label: "Stories",
  titleLine1: "Every journey",
  titleEmphasis: "starts somewhere.",
  description:
    "Nirmaan is about people, not numbers. These stories will share the journeys, challenges, discoveries and possibilities of the people who choose to build their future with us.",
  featuredLabel: "A Nirmaan story",
  comingSoon: "Coming soon",
  featuredQuote:
    "Every person's journey is different. What matters is having the opportunity to take the next step.",
  nextTitle: "Your story could be next.",
  nextText: "Real stories from Nirmaan participants will appear here.",
  stories: [
    {
      category: "CAREER",
      quote:
        "I didn't know where to start. Nirmaan helped me understand what I could learn and what I could become.",
      name: "Participant Story",
      detail: "Career journey",
    },
    {
      category: "LEARNING",
      quote:
        "For the first time, learning felt connected to something I could actually build for myself.",
      name: "Participant Story",
      detail: "Learning journey",
    },
    {
      category: "VENTURE",
      quote:
        "I had an idea, but I didn't know what to do next. Having someone to guide me changed how I looked at it.",
      name: "Participant Story",
      detail: "Entrepreneurship journey",
    },
  ],
  bottomLine1: "One opportunity can change a direction.",
  bottomEmphasis: "One person can inspire another.",
};

export const storiesContent: Record<Language, typeof en> = {
  en,

  hi: {
    label: "कहानियाँ",
    titleLine1: "हर यात्रा",
    titleEmphasis: "कहीं न कहीं से शुरू होती है।",
    description:
      "निर्माण लोगों के बारे में है, आँकड़ों के बारे में नहीं। ये कहानियाँ उन लोगों की यात्राएँ, चुनौतियाँ, खोजें और संभावनाएँ साझा करेंगी जो हमारे साथ अपना भविष्य बनाना चुनते हैं।",
    featuredLabel: "निर्माण की एक कहानी",
    comingSoon: "जल्द आ रहा है",
    featuredQuote:
      "हर व्यक्ति की यात्रा अलग होती है। मायने यह रखता है कि अगला कदम उठाने का अवसर मिले।",
    nextTitle: "अगली कहानी आपकी हो सकती है।",
    nextText: "निर्माण के प्रतिभागियों की असली कहानियाँ यहाँ दिखाई देंगी।",
    stories: [
      {
        category: "करियर",
        quote:
          "मुझे नहीं पता था कि कहाँ से शुरू करूँ। निर्माण ने मुझे यह समझने में मदद की कि मेरे लिए क्या सीखना और क्या बनना संभव है।",
        name: "प्रतिभागी की कहानी",
        detail: "करियर यात्रा",
      },
      {
        category: "लर्निंग",
        quote:
          "पहली बार लगा कि सीखना किसी ऐसी चीज़ से जुड़ा है जिसे सच में अपने लिए बनाया जा सकता है।",
        name: "प्रतिभागी की कहानी",
        detail: "सीखने की यात्रा",
      },
      {
        category: "वेंचर",
        quote:
          "मेरे पास एक आइडिया था, पर आगे क्या करना है, यह पता नहीं था। किसी के मार्गदर्शन ने उसे देखने का मेरा नज़रिया बदल दिया।",
        name: "प्रतिभागी की कहानी",
        detail: "उद्यमिता की यात्रा",
      },
    ],
    bottomLine1: "एक अवसर दिशा बदल सकता है।",
    bottomEmphasis: "एक व्यक्ति दूसरे को प्रेरित कर सकता है।",
  },

  or: {
    label: "କାହାଣୀ",
    titleLine1: "ପ୍ରତ୍ୟେକ ଯାତ୍ରା",
    titleEmphasis: "କେଉଁଠାରୁ ନା କେଉଁଠାରୁ ଆରମ୍ଭ ହୁଏ।",
    description:
      "ନିର୍ମାଣ ଲୋକମାନଙ୍କ ବିଷୟରେ, ସଂଖ୍ୟା ବିଷୟରେ ନୁହେଁ। ଏହି କାହାଣୀଗୁଡ଼ିକ ଆମ ସହ ନିଜ ଭବିଷ୍ୟତ ଗଢ଼ିବାକୁ ବାଛୁଥିବା ଲୋକମାନଙ୍କ ଯାତ୍ରା, ଆହ୍ୱାନ, ଆବିଷ୍କାର ଓ ସମ୍ଭାବନାକୁ ବାଣ୍ଟିବ।",
    featuredLabel: "ନିର୍ମାଣର ଏକ କାହାଣୀ",
    comingSoon: "ଶୀଘ୍ର ଆସୁଛି",
    featuredQuote:
      "ପ୍ରତ୍ୟେକ ବ୍ୟକ୍ତିଙ୍କ ଯାତ୍ରା ଭିନ୍ନ। ଗୁରୁତ୍ୱପୂର୍ଣ୍ଣ କଥା ହେଲା ପରବର୍ତ୍ତୀ ପଦକ୍ଷେପ ନେବାର ସୁଯୋଗ ପାଇବା।",
    nextTitle: "ପରବର୍ତ୍ତୀ କାହାଣୀ ଆପଣଙ୍କର ହୋଇପାରେ।",
    nextText: "ନିର୍ମାଣ ଅଂଶଗ୍ରହଣକାରୀଙ୍କ ପ୍ରକୃତ କାହାଣୀ ଏଠାରେ ଦେଖାଯିବ।",
    stories: [
      {
        category: "କ୍ୟାରିୟର",
        quote:
          "କେଉଁଠାରୁ ଆରମ୍ଭ କରିବି ମୁଁ ଜାଣି ନଥିଲି। ମୁଁ କ'ଣ ଶିଖିପାରିବି ଏବଂ କ'ଣ ହୋଇପାରିବି ତାହା ବୁଝିବାରେ ନିର୍ମାଣ ମୋତେ ସାହାଯ୍ୟ କଲା।",
        name: "ଅଂଶଗ୍ରହଣକାରୀଙ୍କ କାହାଣୀ",
        detail: "କ୍ୟାରିୟର ଯାତ୍ରା",
      },
      {
        category: "ଶିକ୍ଷା",
        quote:
          "ପ୍ରଥମ ଥର ପାଇଁ, ଶିଖିବା ଏପରି କିଛି ସହ ଯୋଡ଼ା ଲାଗିଲା ଯାହା ମୁଁ ପ୍ରକୃତରେ ନିଜ ପାଇଁ ଗଢ଼ିପାରିବି।",
        name: "ଅଂଶଗ୍ରହଣକାରୀଙ୍କ କାହାଣୀ",
        detail: "ଶିକ୍ଷଣ ଯାତ୍ରା",
      },
      {
        category: "ଭେଞ୍ଚର୍",
        quote:
          "ମୋ ପାଖରେ ଏକ ଚିନ୍ତାଧାରା ଥିଲା, କିନ୍ତୁ ଆଗକୁ କ'ଣ କରିବି ଜାଣି ନଥିଲି। ମୋତେ ମାର୍ଗଦର୍ଶନ କରିବା ପାଇଁ କେହି ଥିବାରୁ ଏହାକୁ ଦେଖିବାର ମୋ ଦୃଷ୍ଟିକୋଣ ବଦଳିଗଲା।",
        name: "ଅଂଶଗ୍ରହଣକାରୀଙ୍କ କାହାଣୀ",
        detail: "ଉଦ୍ୟୋଗ ଯାତ୍ରା",
      },
    ],
    bottomLine1: "ଗୋଟିଏ ସୁଯୋଗ ଦିଗ ବଦଳାଇ ଦେଇପାରେ।",
    bottomEmphasis: "ଜଣେ ବ୍ୟକ୍ତି ଅନ୍ୟଜଣକୁ ପ୍ରେରଣା ଦେଇପାରନ୍ତି।",
  },
};
