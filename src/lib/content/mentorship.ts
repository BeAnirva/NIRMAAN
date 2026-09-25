import type { Language } from "@/lib/translations";

const en = {
  label: "Become a Mentor",
  titleLine1: "Your experience",
  titleLine2: "could become",
  titleEmphasis: "someone's beginning.",
  description:
    "You've learned things that someone else is just beginning to figure out. Nirmaan gives you a space to share your experience, guide young people and contribute to someone's next step.",
  communityLabel: "The Nirmaan Community",
  arrowLabel: "Become a mentor",
  message:
    "You don't need to have all the answers. Sometimes, sharing what you've already learned is enough to help someone move forward.",
  tagline: "Share • Guide • Inspire",
  waysLabel: "How you can contribute",
  ways: [
    {
      title: "Share your experience",
      description:
        "Share what you've learned through your own journey and help someone understand the path ahead with greater clarity.",
    },
    {
      title: "Guide someone forward",
      description:
        "Offer practical advice around careers, skills, education, entrepreneurship or the challenges you've already experienced.",
    },
    {
      title: "Host a session",
      description:
        "Conduct a workshop, conversation or learning session around something you know and believe others can benefit from.",
    },
  ],
  fieldsLabel: "Your field doesn't matter",
  fieldsTitleLine1: "Bring what you",
  fieldsTitleLine2: "already know.",
  fieldsDescription:
    "Nirmaan is built around different perspectives. Whatever your field or experience, there may be someone who can learn from you.",
  fields: [
    "Technology",
    "HR & Recruitment",
    "Marketing & Sales",
    "Finance",
    "Agriculture",
    "Design",
    "Entrepreneurship",
    "Education",
    "Healthcare",
    "And more",
  ],
  bottomTitle: "You don't have to change someone's life.",
  bottomEmphasis: "Just help them see what's possible.",
  bottomDescription:
    "Whether you can spare an hour for a conversation, share your expertise through a session, or simply answer questions from someone starting out — your contribution can make a difference.",
  ctaText: "Have something valuable to share? We'd love to hear from you.",
  ctaButton: "Become a Mentor →",
};

export const mentorshipContent: Record<Language, typeof en> = {
  en,

  hi: {
    label: "मेंटर बनें",
    titleLine1: "आपका अनुभव",
    titleLine2: "किसी के लिए बन सकता है",
    titleEmphasis: "एक नई शुरुआत।",
    description:
      "आपने वो बातें सीखी हैं जिन्हें कोई और अभी समझना शुरू कर रहा है। निर्माण आपको अपना अनुभव साझा करने, युवाओं का मार्गदर्शन करने और किसी के अगले कदम में योगदान देने की जगह देता है।",
    communityLabel: "निर्माण समुदाय",
    arrowLabel: "मेंटर बनें",
    message:
      "आपके पास हर सवाल का जवाब होना ज़रूरी नहीं है। कभी-कभी, जो आप पहले से सीख चुके हैं, उसे साझा करना ही किसी को आगे बढ़ने में मदद के लिए काफ़ी होता है।",
    tagline: "साझा करें • मार्गदर्शन करें • प्रेरित करें",
    waysLabel: "आप कैसे योगदान दे सकते हैं",
    ways: [
      {
        title: "अपना अनुभव साझा करें",
        description:
          "अपनी यात्रा से सीखी बातें साझा करें और किसी को आगे के रास्ते को ज़्यादा स्पष्टता से समझने में मदद करें।",
      },
      {
        title: "किसी को आगे बढ़ाएँ",
        description:
          "करियर, कौशल, शिक्षा, उद्यमिता या उन चुनौतियों पर व्यावहारिक सलाह दें जिनका आप खुद सामना कर चुके हैं।",
      },
      {
        title: "एक सेशन लें",
        description:
          "किसी ऐसे विषय पर वर्कशॉप, बातचीत या लर्निंग सेशन आयोजित करें जिसे आप जानते हैं और जिससे दूसरों को फ़ायदा हो सकता है।",
      },
    ],
    fieldsLabel: "आपका क्षेत्र मायने नहीं रखता",
    fieldsTitleLine1: "जो आप पहले से जानते हैं,",
    fieldsTitleLine2: "वही लेकर आइए।",
    fieldsDescription:
      "निर्माण अलग-अलग नज़रियों पर आधारित है। आपका क्षेत्र या अनुभव चाहे जो हो, कोई न कोई आपसे सीख सकता है।",
    fields: [
      "टेक्नोलॉजी",
      "HR और भर्ती",
      "मार्केटिंग और सेल्स",
      "वित्त",
      "कृषि",
      "डिज़ाइन",
      "उद्यमिता",
      "शिक्षा",
      "स्वास्थ्य सेवा",
      "और भी बहुत कुछ",
    ],
    bottomTitle: "आपको किसी की ज़िंदगी बदलने की ज़रूरत नहीं है।",
    bottomEmphasis: "बस उन्हें दिखाइए कि क्या-क्या संभव है।",
    bottomDescription:
      "चाहे आप बातचीत के लिए एक घंटा निकाल सकें, किसी सेशन के ज़रिए अपनी विशेषज्ञता साझा कर सकें, या बस शुरुआत कर रहे किसी व्यक्ति के सवालों के जवाब दे सकें — आपका योगदान बदलाव ला सकता है।",
    ctaText: "साझा करने लायक कुछ है? हमें आपसे सुनकर खुशी होगी।",
    ctaButton: "मेंटर बनें →",
  },

  or: {
    label: "ମେଣ୍ଟର୍ ହୁଅନ୍ତୁ",
    titleLine1: "ଆପଣଙ୍କ ଅଭିଜ୍ଞତା",
    titleLine2: "କାହା ପାଇଁ ହୋଇପାରେ",
    titleEmphasis: "ଏକ ନୂଆ ଆରମ୍ଭ।",
    description:
      "ଆପଣ ଏପରି କଥା ଶିଖିଛନ୍ତି ଯାହା ଅନ୍ୟ କେହି ଏବେ ବୁଝିବା ଆରମ୍ଭ କରୁଛନ୍ତି। ନିର୍ମାଣ ଆପଣଙ୍କୁ ନିଜ ଅଭିଜ୍ଞତା ବାଣ୍ଟିବା, ଯୁବକଯୁବତୀଙ୍କୁ ମାର୍ଗଦର୍ଶନ କରିବା ଏବଂ କାହାର ପରବର୍ତ୍ତୀ ପଦକ୍ଷେପରେ ଯୋଗଦାନ ଦେବାର ସ୍ଥାନ ଦିଏ।",
    communityLabel: "ନିର୍ମାଣ ସମୁଦାୟ",
    arrowLabel: "ମେଣ୍ଟର୍ ହୁଅନ୍ତୁ",
    message:
      "ଆପଣଙ୍କ ପାଖରେ ସବୁ ପ୍ରଶ୍ନର ଉତ୍ତର ଥିବା ଜରୁରୀ ନୁହେଁ। ବେଳେବେଳେ, ଆପଣ ଯାହା ଶିଖିସାରିଛନ୍ତି ତାହା ବାଣ୍ଟିବା ହିଁ କାହାକୁ ଆଗକୁ ବଢ଼ିବାରେ ସାହାଯ୍ୟ କରିବା ପାଇଁ ଯଥେଷ୍ଟ।",
    tagline: "ବାଣ୍ଟନ୍ତୁ • ମାର୍ଗଦର୍ଶନ କରନ୍ତୁ • ପ୍ରେରଣା ଦିଅନ୍ତୁ",
    waysLabel: "ଆପଣ କିପରି ଯୋଗଦାନ ଦେଇପାରିବେ",
    ways: [
      {
        title: "ନିଜ ଅଭିଜ୍ଞତା ବାଣ୍ଟନ୍ତୁ",
        description:
          "ନିଜ ଯାତ୍ରାରୁ ଯାହା ଶିଖିଛନ୍ତି ତାହା ବାଣ୍ଟନ୍ତୁ ଏବଂ କାହାକୁ ଆଗ ପଥକୁ ଅଧିକ ସ୍ପଷ୍ଟ ଭାବେ ବୁଝିବାରେ ସାହାଯ୍ୟ କରନ୍ତୁ।",
      },
      {
        title: "କାହାକୁ ଆଗକୁ ନିଅନ୍ତୁ",
        description:
          "କ୍ୟାରିୟର, ଦକ୍ଷତା, ଶିକ୍ଷା, ଉଦ୍ୟୋଗ କିମ୍ବା ଆପଣ ନିଜେ ସାମ୍ନା କରିଥିବା ଆହ୍ୱାନ ବିଷୟରେ ବ୍ୟାବହାରିକ ପରାମର୍ଶ ଦିଅନ୍ତୁ।",
      },
      {
        title: "ଏକ ସେସନ୍ ନିଅନ୍ତୁ",
        description:
          "ଆପଣ ଜାଣିଥିବା ଏବଂ ଅନ୍ୟମାନଙ୍କ ପାଇଁ ଉପକାରୀ ହୋଇପାରିବ ବୋଲି ବିଶ୍ୱାସ କରୁଥିବା ବିଷୟରେ କର୍ମଶାଳା, ଆଲୋଚନା କିମ୍ବା ଶିକ୍ଷଣ ସେସନ୍ ପରିଚାଳନା କରନ୍ତୁ।",
      },
    ],
    fieldsLabel: "ଆପଣଙ୍କ କ୍ଷେତ୍ର କିଛି ଫରକ ପକାଏ ନାହିଁ",
    fieldsTitleLine1: "ଆପଣ ଯାହା ଜାଣନ୍ତି,",
    fieldsTitleLine2: "ତାହା ହିଁ ଆଣନ୍ତୁ।",
    fieldsDescription:
      "ନିର୍ମାଣ ଭିନ୍ନ ଭିନ୍ନ ଦୃଷ୍ଟିକୋଣ ଉପରେ ଗଢ଼ା। ଆପଣଙ୍କ କ୍ଷେତ୍ର କିମ୍ବା ଅଭିଜ୍ଞତା ଯାହା ହେଉ, କେହି ନା କେହି ଆପଣଙ୍କଠାରୁ ଶିଖିପାରନ୍ତି।",
    fields: [
      "ଟେକ୍ନୋଲୋଜି",
      "HR ଓ ନିଯୁକ୍ତି",
      "ମାର୍କେଟିଂ ଓ ବିକ୍ରୟ",
      "ଅର୍ଥ",
      "କୃଷି",
      "ଡିଜାଇନ୍",
      "ଉଦ୍ୟୋଗ",
      "ଶିକ୍ଷା",
      "ସ୍ୱାସ୍ଥ୍ୟସେବା",
      "ଏବଂ ଆହୁରି ଅନେକ",
    ],
    bottomTitle: "ଆପଣଙ୍କୁ କାହାର ଜୀବନ ବଦଳାଇବାର ଆବଶ୍ୟକତା ନାହିଁ।",
    bottomEmphasis: "କେବଳ କ'ଣ ସମ୍ଭବ ତାହା ଦେଖିବାରେ ସାହାଯ୍ୟ କରନ୍ତୁ।",
    bottomDescription:
      "ଆପଣ ଏକ ଆଲୋଚନା ପାଇଁ ଘଣ୍ଟାଏ ସମୟ ଦେଇପାରନ୍ତୁ, ଏକ ସେସନ୍ ମାଧ୍ୟମରେ ନିଜ ବିଶେଷଜ୍ଞତା ବାଣ୍ଟିପାରନ୍ତୁ, କିମ୍ବା କେବଳ ଆରମ୍ଭ କରୁଥିବା କାହାର ପ୍ରଶ୍ନର ଉତ୍ତର ଦେଇପାରନ୍ତୁ — ଆପଣଙ୍କ ଯୋଗଦାନ ପରିବର୍ତ୍ତନ ଆଣିପାରେ।",
    ctaText: "ବାଣ୍ଟିବା ଭଳି କିଛି ଅଛି କି? ଆପଣଙ୍କ କଥା ଶୁଣି ଆମେ ଖୁସି ହେବୁ।",
    ctaButton: "ମେଣ୍ଟର୍ ହୁଅନ୍ତୁ →",
  },
};
