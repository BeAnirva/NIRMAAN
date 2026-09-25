import type { Language } from "@/lib/translations";

// Values saved to Google Sheets. Kept in English so the sheet stays
// consistent; the matching labels below are in the same order.

export const mentorStatusValues = ["student", "working-professional", "own-venture"];

export const contributionValues = [
  "1:1 Mentoring",
  "Career Guidance",
  "Workshops",
  "Skill Sessions",
  "Project Guidance",
  "Community Sessions",
  "Other",
];

export const experienceValues = ["0-1", "1-3", "3-5", "5-10", "10+"];

const en = {
  label: "Become a Mentor",
  titleLine1: "Heroes don't always",
  titleEmphasis: "wear capes.",
  intro:
    "You've learned things that someone else is just beginning to figure out. Nirmaan gives you a space to share your experience, guide young people and contribute to someone's next step.",
  communityLabel: "The Nirmaan Community",
  messagePart1: "You don't need to have all the answers.",
  messagePart2:
    "Sometimes, sharing what you've already learned is enough to help someone move forward.",
  tagline: "Share • Guide • Inspire",
  formLabel: "Mentor Application",
  formTitle: "Tell us a little about yourself.",
  formText:
    "This helps us understand who you are and how you would like to contribute to the Nirmaan community.",
  email: "Email",
  cityPlaceholder: "e.g. Bhubaneswar",
  statusLabel: "You are a",
  statusPlaceholder: "Select your current status",
  statusLabels: ["Student", "Working Professional", "Own Venture / Entrepreneur"],
  field: "Your Field",
  fieldPlaceholder: "e.g. Agriculture, Technology, HR, Design, Finance...",
  fieldHelp: "Tell us the field, industry, subject or area you know best.",
  role: "Current Role / Profession",
  rolePlaceholder: "e.g. HR Manager, Student, Founder, Designer...",
  organization: "Organization",
  organizationPlaceholder: "Company / Organization / College",
  contribute: "HOW YOU'D LIKE TO CONTRIBUTE",
  contributeHelp: "Select all that apply.",
  contributionLabels: contributionValues,
  contributeRequired: "Please select at least one option.",
  experience: "Years of Experience",
  experiencePlaceholder: "Select experience",
  experienceLabels: ["Less than 1 year", "1–3 years", "3–5 years", "5–10 years", "10+ years"],
  about: "Tell us about yourself",
  aboutPlaceholder:
    "Anything else you'd like us to know about your journey, experience or interests...",
  linkedin: "LinkedIn / Portfolio",
  submit: "Submit Mentor Application",
  submitNote: "We'll review your application and get back to you.",
  successLabel: "Application received",
  successTitle: "Thank you for stepping forward.",
  successText:
    "We've received your mentor application. Our team will review your information and get back to you soon.",
  submitError:
    "Something went wrong while submitting your application. Please try again.",
};

export const becomeMentorContent: Record<Language, typeof en> = {
  en,

  hi: {
    label: "मेंटर बनें",
    titleLine1: "हर हीरो",
    titleEmphasis: "केप नहीं पहनता।",
    intro:
      "आपने वो बातें सीखी हैं जिन्हें कोई और अभी समझना शुरू कर रहा है। निर्माण आपको अपना अनुभव साझा करने, युवाओं का मार्गदर्शन करने और किसी के अगले कदम में योगदान देने की जगह देता है।",
    communityLabel: "निर्माण समुदाय",
    messagePart1: "आपके पास हर सवाल का जवाब होना ज़रूरी नहीं है।",
    messagePart2:
      "कभी-कभी, जो आप पहले से सीख चुके हैं, उसे साझा करना ही किसी को आगे बढ़ने में मदद के लिए काफ़ी होता है।",
    tagline: "साझा करें • मार्गदर्शन करें • प्रेरित करें",
    formLabel: "मेंटर आवेदन",
    formTitle: "अपने बारे में थोड़ा बताइए।",
    formText:
      "इससे हमें समझने में मदद मिलती है कि आप कौन हैं और निर्माण समुदाय में आप कैसे योगदान देना चाहते हैं।",
    email: "ईमेल",
    cityPlaceholder: "जैसे: भुवनेश्वर",
    statusLabel: "आप हैं",
    statusPlaceholder: "अपनी मौजूदा स्थिति चुनें",
    statusLabels: ["विद्यार्थी", "कामकाजी पेशेवर", "अपना वेंचर / उद्यमी"],
    field: "आपका क्षेत्र",
    fieldPlaceholder: "जैसे: कृषि, टेक्नोलॉजी, HR, डिज़ाइन, वित्त...",
    fieldHelp: "वह क्षेत्र, उद्योग या विषय बताइए जिसे आप सबसे अच्छी तरह जानते हैं।",
    role: "मौजूदा भूमिका / पेशा",
    rolePlaceholder: "जैसे: HR मैनेजर, विद्यार्थी, संस्थापक, डिज़ाइनर...",
    organization: "संस्था",
    organizationPlaceholder: "कंपनी / संस्था / कॉलेज",
    contribute: "आप कैसे योगदान देना चाहेंगे",
    contributeHelp: "जो भी लागू हों, सभी चुनें।",
    contributionLabels: [
      "1:1 मेंटरिंग",
      "करियर मार्गदर्शन",
      "वर्कशॉप",
      "कौशल सेशन",
      "प्रोजेक्ट मार्गदर्शन",
      "सामुदायिक सेशन",
      "अन्य",
    ],
    contributeRequired: "कृपया कम से कम एक विकल्प चुनें।",
    experience: "अनुभव के वर्ष",
    experiencePlaceholder: "अनुभव चुनें",
    experienceLabels: ["1 वर्ष से कम", "1–3 वर्ष", "3–5 वर्ष", "5–10 वर्ष", "10+ वर्ष"],
    about: "अपने बारे में बताइए",
    aboutPlaceholder:
      "अपनी यात्रा, अनुभव या रुचियों के बारे में कुछ और जो आप हमें बताना चाहें...",
    linkedin: "LinkedIn / पोर्टफ़ोलियो",
    submit: "मेंटर आवेदन भेजें",
    submitNote: "हम आपके आवेदन की समीक्षा करके आपसे संपर्क करेंगे।",
    successLabel: "आवेदन प्राप्त हुआ",
    successTitle: "आगे आने के लिए धन्यवाद।",
    successText:
      "हमें आपका मेंटर आवेदन मिल गया है। हमारी टीम आपकी जानकारी की समीक्षा करेगी और जल्द ही आपसे संपर्क करेगी।",
    submitError:
      "आपका आवेदन भेजते समय कुछ गड़बड़ हो गई। कृपया फिर से प्रयास करें।",
  },

  or: {
    label: "ମେଣ୍ଟର୍ ହୁଅନ୍ତୁ",
    titleLine1: "ସବୁ ନାୟକ",
    titleEmphasis: "କେପ୍ ପିନ୍ଧନ୍ତି ନାହିଁ।",
    intro:
      "ଆପଣ ଏପରି କଥା ଶିଖିଛନ୍ତି ଯାହା ଅନ୍ୟ କେହି ଏବେ ବୁଝିବା ଆରମ୍ଭ କରୁଛନ୍ତି। ନିର୍ମାଣ ଆପଣଙ୍କୁ ନିଜ ଅଭିଜ୍ଞତା ବାଣ୍ଟିବା, ଯୁବକଯୁବତୀଙ୍କୁ ମାର୍ଗଦର୍ଶନ କରିବା ଏବଂ କାହାର ପରବର୍ତ୍ତୀ ପଦକ୍ଷେପରେ ଯୋଗଦାନ ଦେବାର ସ୍ଥାନ ଦିଏ।",
    communityLabel: "ନିର୍ମାଣ ସମୁଦାୟ",
    messagePart1: "ଆପଣଙ୍କ ପାଖରେ ସବୁ ପ୍ରଶ୍ନର ଉତ୍ତର ଥିବା ଜରୁରୀ ନୁହେଁ।",
    messagePart2:
      "ବେଳେବେଳେ, ଆପଣ ଯାହା ଶିଖିସାରିଛନ୍ତି ତାହା ବାଣ୍ଟିବା ହିଁ କାହାକୁ ଆଗକୁ ବଢ଼ିବାରେ ସାହାଯ୍ୟ କରିବା ପାଇଁ ଯଥେଷ୍ଟ।",
    tagline: "ବାଣ୍ଟନ୍ତୁ • ମାର୍ଗଦର୍ଶନ କରନ୍ତୁ • ପ୍ରେରଣା ଦିଅନ୍ତୁ",
    formLabel: "ମେଣ୍ଟର୍ ଆବେଦନ",
    formTitle: "ନିଜ ବିଷୟରେ ଟିକେ କୁହନ୍ତୁ।",
    formText:
      "ଆପଣ କିଏ ଏବଂ ନିର୍ମାଣ ସମୁଦାୟରେ କିପରି ଯୋଗଦାନ ଦେବାକୁ ଚାହାଁନ୍ତି ତାହା ବୁଝିବାରେ ଏହା ଆମକୁ ସାହାଯ୍ୟ କରେ।",
    email: "ଇମେଲ୍",
    cityPlaceholder: "ଯେପରି: ଭୁବନେଶ୍ୱର",
    statusLabel: "ଆପଣ ଜଣେ",
    statusPlaceholder: "ଆପଣଙ୍କ ବର୍ତ୍ତମାନ ସ୍ଥିତି ବାଛନ୍ତୁ",
    statusLabels: ["ଛାତ୍ର/ଛାତ୍ରୀ", "କର୍ମରତ ବୃତ୍ତିଜୀବୀ", "ନିଜ ଉଦ୍ୟୋଗ / ଉଦ୍ୟୋଗୀ"],
    field: "ଆପଣଙ୍କ କ୍ଷେତ୍ର",
    fieldPlaceholder: "ଯେପରି: କୃଷି, ଟେକ୍ନୋଲୋଜି, HR, ଡିଜାଇନ୍, ଅର୍ଥ...",
    fieldHelp: "ଆପଣ ସବୁଠାରୁ ଭଲ ଜାଣିଥିବା କ୍ଷେତ୍ର, ଶିଳ୍ପ କିମ୍ବା ବିଷୟ କୁହନ୍ତୁ।",
    role: "ବର୍ତ୍ତମାନ ଭୂମିକା / ବୃତ୍ତି",
    rolePlaceholder: "ଯେପରି: HR ମ୍ୟାନେଜର, ଛାତ୍ର, ପ୍ରତିଷ୍ଠାତା, ଡିଜାଇନର...",
    organization: "ସଂସ୍ଥା",
    organizationPlaceholder: "କମ୍ପାନୀ / ସଂସ୍ଥା / କଲେଜ",
    contribute: "ଆପଣ କିପରି ଯୋଗଦାନ ଦେବାକୁ ଚାହାଁନ୍ତି",
    contributeHelp: "ପ୍ରଯୁଜ୍ୟ ସବୁଗୁଡ଼ିକ ବାଛନ୍ତୁ।",
    contributionLabels: [
      "1:1 ମେଣ୍ଟରିଂ",
      "କ୍ୟାରିୟର ମାର୍ଗଦର୍ଶନ",
      "କର୍ମଶାଳା",
      "ଦକ୍ଷତା ସେସନ୍",
      "ପ୍ରୋଜେକ୍ଟ ମାର୍ଗଦର୍ଶନ",
      "ସାମୁଦାୟିକ ସେସନ୍",
      "ଅନ୍ୟ",
    ],
    contributeRequired: "ଦୟାକରି ଅତି କମରେ ଗୋଟିଏ ବିକଳ୍ପ ବାଛନ୍ତୁ।",
    experience: "ଅଭିଜ୍ଞତାର ବର୍ଷ",
    experiencePlaceholder: "ଅଭିଜ୍ଞତା ବାଛନ୍ତୁ",
    experienceLabels: ["1 ବର୍ଷରୁ କମ୍", "1–3 ବର୍ଷ", "3–5 ବର୍ଷ", "5–10 ବର୍ଷ", "10+ ବର୍ଷ"],
    about: "ନିଜ ବିଷୟରେ କୁହନ୍ତୁ",
    aboutPlaceholder:
      "ଆପଣଙ୍କ ଯାତ୍ରା, ଅଭିଜ୍ଞତା କିମ୍ବା ଆଗ୍ରହ ବିଷୟରେ ଆଉ କିଛି ଯାହା ଆପଣ ଆମକୁ ଜଣାଇବାକୁ ଚାହାଁନ୍ତି...",
    linkedin: "LinkedIn / ପୋର୍ଟଫୋଲିଓ",
    submit: "ମେଣ୍ଟର୍ ଆବେଦନ ପଠାନ୍ତୁ",
    submitNote: "ଆମେ ଆପଣଙ୍କ ଆବେଦନ ସମୀକ୍ଷା କରି ଆପଣଙ୍କ ସହ ଯୋଗାଯୋଗ କରିବୁ।",
    successLabel: "ଆବେଦନ ମିଳିଛି",
    successTitle: "ଆଗକୁ ଆସିଥିବାରୁ ଧନ୍ୟବାଦ।",
    successText:
      "ଆମେ ଆପଣଙ୍କ ମେଣ୍ଟର୍ ଆବେଦନ ପାଇଛୁ। ଆମ ଦଳ ଆପଣଙ୍କ ତଥ୍ୟ ସମୀକ୍ଷା କରି ଶୀଘ୍ର ଆପଣଙ୍କ ସହ ଯୋଗାଯୋଗ କରିବ।",
    submitError:
      "ଆପଣଙ୍କ ଆବେଦନ ପଠାଇବା ସମୟରେ କିଛି ତ୍ରୁଟି ହେଲା। ଦୟାକରି ପୁଣି ଚେଷ୍ଟା କରନ୍ତୁ।",
  },
};
