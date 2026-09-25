import type { Language } from "@/lib/translations";

// Values saved to Google Sheets for "Where are you right now?".
// Kept in English so the sheet stays consistent; labels come from
// `statusLabels` below, in the same order.

export const currentStatusValues = [
  "I'm studying",
  "I'm looking for work",
  "I'm currently working",
  "I want to start something of my own",
  "I'm not sure yet",
];

const en = {
  startLabel: "Start your journey",
  titleLine1: "Let's get to know",
  titleEmphasis: "you.",
  intro:
    "There are no right or wrong answers. Tell us a little about yourself so we can understand how Nirmaan can support you.",
  progress: ["About You", "Your Direction", "Your Goals"],
  step: "Step",
  step1Title: "Tell us about yourself",
  age: "Age",
  agePlaceholder: "Your age",
  mobilePlaceholder: "10-digit mobile number",
  email: "Email Address",
  cityPlaceholder: "Where are you based?",
  step2Title: "Where are you right now?",
  step2Text: "Choose the option that feels closest to where you are today.",
  statusLabels: currentStatusValues,
  interests: "What are you most interested in?",
  interestsPlaceholder:
    "Tell us about your interests, skills or things you'd like to learn...",
  step3Title: "Where would you like to go?",
  step3Text:
    "You don't need to have a perfect plan. Just tell us what you're hoping to work towards.",
  goal: "What would you like to achieve?",
  goalPlaceholder:
    "For example: get a job, learn a new skill, start a business, become financially independent...",
  rememberLabel: "Remember:",
  rememberText:
    "You don't need to know exactly where you're going. Nirmaan is here to help you figure out the next step.",
  back: "← Back",
  continue: "Continue →",
  complete: "Complete Registration →",
  footnote:
    "Your information will only be used to understand how Nirmaan can support your journey.",
  successLabel: "Registration complete",
  successTitle: "You're on your way.",
  successText:
    "Thank you for registering with Nirmaan. We've received your information and will be in touch with you soon.",
  submitError:
    "Something went wrong while submitting your registration. Please try again.",
  errors: {
    nameRequired: "Please enter your full name.",
    ageRequired: "Please enter your age.",
    ageInvalid: "Please enter a valid age.",
    mobileRequired: "Please enter your mobile number.",
    mobileInvalid: "Mobile number must contain exactly 10 digits.",
    emailRequired: "Please enter your email address.",
    emailInvalid: "Please enter a valid email address.",
    cityRequired: "Please enter your city.",
    stateRequired: "Please select your state.",
    statusRequired: "Please select where you are right now.",
    interestsRequired: "Please tell us a little about your interests.",
    goalRequired: "Please tell us what you would like to achieve.",
  },
};

export type RegisterErrorKey = keyof typeof en.errors;

export const registerContent: Record<Language, typeof en> = {
  en,

  hi: {
    startLabel: "अपनी यात्रा शुरू करें",
    titleLine1: "आइए, आपको",
    titleEmphasis: "जानें।",
    intro:
      "यहाँ कोई सही या गलत जवाब नहीं है। अपने बारे में थोड़ा बताइए ताकि हम समझ सकें कि निर्माण आपकी कैसे मदद कर सकता है।",
    progress: ["आपके बारे में", "आपकी दिशा", "आपके लक्ष्य"],
    step: "चरण",
    step1Title: "अपने बारे में बताइए",
    age: "उम्र",
    agePlaceholder: "आपकी उम्र",
    mobilePlaceholder: "10 अंकों का मोबाइल नंबर",
    email: "ईमेल पता",
    cityPlaceholder: "आप कहाँ रहते हैं?",
    step2Title: "अभी आप किस स्थिति में हैं?",
    step2Text: "वह विकल्प चुनें जो आज आपकी स्थिति के सबसे करीब हो।",
    statusLabels: [
      "मैं विद्यार्थी हूँ",
      "मुझे काम की तलाश है",
      "मैं अभी कार्यरत हूँ",
      "मेरी इच्छा अपना कुछ शुरू करने की है",
      "अभी पक्का नहीं है",
    ],
    interests: "आपकी सबसे ज़्यादा रुचि किसमें है?",
    interestsPlaceholder:
      "अपनी रुचियों, कौशल या उन चीज़ों के बारे में बताइए जो आप सीखना चाहते हैं...",
    step3Title: "आप कहाँ पहुँचना चाहते हैं?",
    step3Text:
      "आपके पास एकदम सही योजना होना ज़रूरी नहीं है। बस बताइए कि आप किस दिशा में काम करना चाहते हैं।",
    goal: "आप क्या हासिल करना चाहते हैं?",
    goalPlaceholder:
      "उदाहरण: नौकरी पाना, नया कौशल सीखना, बिज़नेस शुरू करना, आर्थिक रूप से आत्मनिर्भर बनना...",
    rememberLabel: "याद रखें:",
    rememberText:
      "आपको ठीक-ठीक पता होना ज़रूरी नहीं कि आप कहाँ जा रहे हैं। निर्माण अगला कदम तय करने में आपकी मदद के लिए है।",
    back: "← पीछे",
    continue: "आगे बढ़ें →",
    complete: "पंजीकरण पूरा करें →",
    footnote:
      "आपकी जानकारी का उपयोग केवल यह समझने के लिए किया जाएगा कि निर्माण आपकी यात्रा में कैसे मदद कर सकता है।",
    successLabel: "पंजीकरण पूरा हुआ",
    successTitle: "आपकी यात्रा शुरू हो चुकी है।",
    successText:
      "निर्माण के साथ पंजीकरण करने के लिए धन्यवाद। हमें आपकी जानकारी मिल गई है और हम जल्द ही आपसे संपर्क करेंगे।",
    submitError:
      "आपका पंजीकरण भेजते समय कुछ गड़बड़ हो गई। कृपया फिर से प्रयास करें।",
    errors: {
      nameRequired: "कृपया अपना पूरा नाम लिखें।",
      ageRequired: "कृपया अपनी उम्र लिखें।",
      ageInvalid: "कृपया सही उम्र लिखें।",
      mobileRequired: "कृपया अपना मोबाइल नंबर लिखें।",
      mobileInvalid: "मोबाइल नंबर में ठीक 10 अंक होने चाहिए।",
      emailRequired: "कृपया अपना ईमेल पता लिखें।",
      emailInvalid: "कृपया सही ईमेल पता लिखें।",
      cityRequired: "कृपया अपना शहर लिखें।",
      stateRequired: "कृपया अपना राज्य चुनें।",
      statusRequired: "कृपया चुनें कि अभी आप किस स्थिति में हैं।",
      interestsRequired: "कृपया अपनी रुचियों के बारे में थोड़ा बताइए।",
      goalRequired: "कृपया बताइए कि आप क्या हासिल करना चाहते हैं।",
    },
  },

  or: {
    startLabel: "ଆପଣଙ୍କ ଯାତ୍ରା ଆରମ୍ଭ କରନ୍ତୁ",
    titleLine1: "ଆସନ୍ତୁ, ଆପଣଙ୍କୁ",
    titleEmphasis: "ଜାଣିବା।",
    intro:
      "ଏଠାରେ କୌଣସି ଠିକ୍ କିମ୍ବା ଭୁଲ ଉତ୍ତର ନାହିଁ। ନିଜ ବିଷୟରେ ଟିକେ କୁହନ୍ତୁ ଯାହାଦ୍ୱାରା ନିର୍ମାଣ ଆପଣଙ୍କୁ କିପରି ସହାୟତା କରିପାରିବ ଆମେ ବୁଝିପାରିବୁ।",
    progress: ["ଆପଣଙ୍କ ବିଷୟରେ", "ଆପଣଙ୍କ ଦିଗ", "ଆପଣଙ୍କ ଲକ୍ଷ୍ୟ"],
    step: "ପର୍ଯ୍ୟାୟ",
    step1Title: "ନିଜ ବିଷୟରେ କୁହନ୍ତୁ",
    age: "ବୟସ",
    agePlaceholder: "ଆପଣଙ୍କ ବୟସ",
    mobilePlaceholder: "10 ଅଙ୍କର ମୋବାଇଲ୍ ନମ୍ବର",
    email: "ଇମେଲ୍ ଠିକଣା",
    cityPlaceholder: "ଆପଣ କେଉଁଠି ରୁହନ୍ତି?",
    step2Title: "ଆପଣ ବର୍ତ୍ତମାନ କେଉଁ ଅବସ୍ଥାରେ ଅଛନ୍ତି?",
    step2Text: "ଆଜି ଆପଣଙ୍କ ଅବସ୍ଥା ସହ ସବୁଠାରୁ ନିକଟତର ବିକଳ୍ପଟି ବାଛନ୍ତୁ।",
    statusLabels: [
      "ମୁଁ ପଢ଼ୁଛି",
      "ମୁଁ କାମ ଖୋଜୁଛି",
      "ମୁଁ ବର୍ତ୍ତମାନ କାମ କରୁଛି",
      "ମୁଁ ନିଜର କିଛି ଆରମ୍ଭ କରିବାକୁ ଚାହେଁ",
      "ମୁଁ ଏବେ ନିଶ୍ଚିତ ନୁହେଁ",
    ],
    interests: "ଆପଣଙ୍କର ସବୁଠାରୁ ଅଧିକ ଆଗ୍ରହ କେଉଁଥିରେ?",
    interestsPlaceholder:
      "ଆପଣଙ୍କ ଆଗ୍ରହ, ଦକ୍ଷତା କିମ୍ବା ଶିଖିବାକୁ ଚାହୁଁଥିବା ବିଷୟରେ କୁହନ୍ତୁ...",
    step3Title: "ଆପଣ କେଉଁଠିକୁ ଯିବାକୁ ଚାହାଁନ୍ତି?",
    step3Text:
      "ଆପଣଙ୍କ ପାଖରେ ନିଖୁଣ ଯୋଜନା ଥିବା ଆବଶ୍ୟକ ନୁହେଁ। କେବଳ କୁହନ୍ତୁ ଆପଣ କେଉଁ ଦିଗରେ କାମ କରିବାକୁ ଆଶା କରୁଛନ୍ତି।",
    goal: "ଆପଣ କ'ଣ ହାସଲ କରିବାକୁ ଚାହାଁନ୍ତି?",
    goalPlaceholder:
      "ଉଦାହରଣ: ଚାକିରି ପାଇବା, ନୂଆ ଦକ୍ଷତା ଶିଖିବା, ବ୍ୟବସାୟ ଆରମ୍ଭ କରିବା, ଆର୍ଥିକ ଭାବେ ଆତ୍ମନିର୍ଭରଶୀଳ ହେବା...",
    rememberLabel: "ମନେରଖନ୍ତୁ:",
    rememberText:
      "ଆପଣ ଠିକ୍ କେଉଁଠିକୁ ଯାଉଛନ୍ତି ତାହା ଜାଣିବା ଆବଶ୍ୟକ ନୁହେଁ। ପରବର୍ତ୍ତୀ ପଦକ୍ଷେପ ସ୍ଥିର କରିବାରେ ସାହାଯ୍ୟ କରିବା ପାଇଁ ନିର୍ମାଣ ଅଛି।",
    back: "← ପଛକୁ",
    continue: "ଆଗକୁ →",
    complete: "ପଞ୍ଜୀକରଣ ସମ୍ପୂର୍ଣ୍ଣ କରନ୍ତୁ →",
    footnote:
      "ଆପଣଙ୍କ ତଥ୍ୟ କେବଳ ନିର୍ମାଣ ଆପଣଙ୍କ ଯାତ୍ରାରେ କିପରି ସହାୟତା କରିପାରିବ ତାହା ବୁଝିବା ପାଇଁ ବ୍ୟବହାର କରାଯିବ।",
    successLabel: "ପଞ୍ଜୀକରଣ ସମ୍ପୂର୍ଣ୍ଣ",
    successTitle: "ଆପଣଙ୍କ ଯାତ୍ରା ଆରମ୍ଭ ହୋଇସାରିଛି।",
    successText:
      "ନିର୍ମାଣରେ ପଞ୍ଜୀକରଣ କରିଥିବାରୁ ଧନ୍ୟବାଦ। ଆମେ ଆପଣଙ୍କ ତଥ୍ୟ ପାଇଛୁ ଏବଂ ଶୀଘ୍ର ଆପଣଙ୍କ ସହ ଯୋଗାଯୋଗ କରିବୁ।",
    submitError:
      "ଆପଣଙ୍କ ପଞ୍ଜୀକରଣ ପଠାଇବା ସମୟରେ କିଛି ତ୍ରୁଟି ହେଲା। ଦୟାକରି ପୁଣି ଚେଷ୍ଟା କରନ୍ତୁ।",
    errors: {
      nameRequired: "ଦୟାକରି ଆପଣଙ୍କ ପୂରା ନାମ ଲେଖନ୍ତୁ।",
      ageRequired: "ଦୟାକରି ଆପଣଙ୍କ ବୟସ ଲେଖନ୍ତୁ।",
      ageInvalid: "ଦୟାକରି ସଠିକ୍ ବୟସ ଲେଖନ୍ତୁ।",
      mobileRequired: "ଦୟାକରି ଆପଣଙ୍କ ମୋବାଇଲ୍ ନମ୍ବର ଲେଖନ୍ତୁ।",
      mobileInvalid: "ମୋବାଇଲ୍ ନମ୍ବରରେ ଠିକ୍ 10ଟି ଅଙ୍କ ରହିବା ଆବଶ୍ୟକ।",
      emailRequired: "ଦୟାକରି ଆପଣଙ୍କ ଇମେଲ୍ ଠିକଣା ଲେଖନ୍ତୁ।",
      emailInvalid: "ଦୟାକରି ସଠିକ୍ ଇମେଲ୍ ଠିକଣା ଲେଖନ୍ତୁ।",
      cityRequired: "ଦୟାକରି ଆପଣଙ୍କ ସହର ଲେଖନ୍ତୁ।",
      stateRequired: "ଦୟାକରି ଆପଣଙ୍କ ରାଜ୍ୟ ବାଛନ୍ତୁ।",
      statusRequired: "ଦୟାକରି ଆପଣ ବର୍ତ୍ତମାନ କେଉଁ ଅବସ୍ଥାରେ ଅଛନ୍ତି ବାଛନ୍ତୁ।",
      interestsRequired: "ଦୟାକରି ଆପଣଙ୍କ ଆଗ୍ରହ ବିଷୟରେ ଟିକେ କୁହନ୍ତୁ।",
      goalRequired: "ଦୟାକରି ଆପଣ କ'ଣ ହାସଲ କରିବାକୁ ଚାହାଁନ୍ତି କୁହନ୍ତୁ।",
    },
  },
};
