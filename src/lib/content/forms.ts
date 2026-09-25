import type { Language } from "@/lib/translations";

// Text shared by the Register and Become-a-Mentor forms.

const en = {
  backLink: "← Back to Nirmaan",
  backButton: "Back to Nirmaan",
  backFooter: "Back to Nirmaan →",
  submitting: "Submitting...",
  optional: "Optional",
  fullName: "Full Name",
  fullNamePlaceholder: "Your full name",
  mobile: "Mobile Number",
  city: "City",
  state: "State",
  selectState: "Select your state",
};

export const formsContent: Record<Language, typeof en> = {
  en,

  hi: {
    backLink: "← निर्माण पर वापस जाएँ",
    backButton: "निर्माण पर वापस जाएँ",
    backFooter: "निर्माण पर वापस जाएँ →",
    submitting: "भेजा जा रहा है...",
    optional: "वैकल्पिक",
    fullName: "पूरा नाम",
    fullNamePlaceholder: "आपका पूरा नाम",
    mobile: "मोबाइल नंबर",
    city: "शहर",
    state: "राज्य",
    selectState: "अपना राज्य चुनें",
  },

  or: {
    backLink: "← ନିର୍ମାଣକୁ ଫେରନ୍ତୁ",
    backButton: "ନିର୍ମାଣକୁ ଫେରନ୍ତୁ",
    backFooter: "ନିର୍ମାଣକୁ ଫେରନ୍ତୁ →",
    submitting: "ପଠାଯାଉଛି...",
    optional: "ଇଚ୍ଛାଧୀନ",
    fullName: "ପୂରା ନାମ",
    fullNamePlaceholder: "ଆପଣଙ୍କ ପୂରା ନାମ",
    mobile: "ମୋବାଇଲ୍ ନମ୍ବର",
    city: "ସହର",
    state: "ରାଜ୍ୟ",
    selectState: "ଆପଣଙ୍କ ରାଜ୍ୟ ବାଛନ୍ତୁ",
  },
};

// `value` is what gets saved to Google Sheets, so it stays in English
// whatever language the visitor is using. Only the label is translated.

export const indianStates: { value: string; label: Record<Language, string> }[] = [
  { value: "Andhra Pradesh", label: { en: "Andhra Pradesh", hi: "आंध्र प्रदेश", or: "ଆନ୍ଧ୍ର ପ୍ରଦେଶ" } },
  { value: "Arunachal Pradesh", label: { en: "Arunachal Pradesh", hi: "अरुणाचल प्रदेश", or: "ଅରୁଣାଚଳ ପ୍ରଦେଶ" } },
  { value: "Assam", label: { en: "Assam", hi: "असम", or: "ଆସାମ" } },
  { value: "Bihar", label: { en: "Bihar", hi: "बिहार", or: "ବିହାର" } },
  { value: "Chhattisgarh", label: { en: "Chhattisgarh", hi: "छत्तीसगढ़", or: "ଛତିଶଗଡ଼" } },
  { value: "Goa", label: { en: "Goa", hi: "गोवा", or: "ଗୋଆ" } },
  { value: "Gujarat", label: { en: "Gujarat", hi: "गुजरात", or: "ଗୁଜୁରାଟ" } },
  { value: "Haryana", label: { en: "Haryana", hi: "हरियाणा", or: "ହରିୟାଣା" } },
  { value: "Himachal Pradesh", label: { en: "Himachal Pradesh", hi: "हिमाचल प्रदेश", or: "ହିମାଚଳ ପ୍ରଦେଶ" } },
  { value: "Jharkhand", label: { en: "Jharkhand", hi: "झारखंड", or: "ଝାଡ଼ଖଣ୍ଡ" } },
  { value: "Karnataka", label: { en: "Karnataka", hi: "कर्नाटक", or: "କର୍ଣ୍ଣାଟକ" } },
  { value: "Kerala", label: { en: "Kerala", hi: "केरल", or: "କେରଳ" } },
  { value: "Madhya Pradesh", label: { en: "Madhya Pradesh", hi: "मध्य प्रदेश", or: "ମଧ୍ୟପ୍ରଦେଶ" } },
  { value: "Maharashtra", label: { en: "Maharashtra", hi: "महाराष्ट्र", or: "ମହାରାଷ୍ଟ୍ର" } },
  { value: "Manipur", label: { en: "Manipur", hi: "मणिपुर", or: "ମଣିପୁର" } },
  { value: "Meghalaya", label: { en: "Meghalaya", hi: "मेघालय", or: "ମେଘାଳୟ" } },
  { value: "Mizoram", label: { en: "Mizoram", hi: "मिज़ोरम", or: "ମିଜୋରାମ" } },
  { value: "Nagaland", label: { en: "Nagaland", hi: "नागालैंड", or: "ନାଗାଲାଣ୍ଡ" } },
  { value: "Odisha", label: { en: "Odisha", hi: "ओडिशा", or: "ଓଡ଼ିଶା" } },
  { value: "Punjab", label: { en: "Punjab", hi: "पंजाब", or: "ପଞ୍ଜାବ" } },
  { value: "Rajasthan", label: { en: "Rajasthan", hi: "राजस्थान", or: "ରାଜସ୍ଥାନ" } },
  { value: "Sikkim", label: { en: "Sikkim", hi: "सिक्किम", or: "ସିକିମ" } },
  { value: "Tamil Nadu", label: { en: "Tamil Nadu", hi: "तमिलनाडु", or: "ତାମିଲନାଡୁ" } },
  { value: "Telangana", label: { en: "Telangana", hi: "तेलंगाना", or: "ତେଲଙ୍ଗାନା" } },
  { value: "Tripura", label: { en: "Tripura", hi: "त्रिपुरा", or: "ତ୍ରିପୁରା" } },
  { value: "Uttar Pradesh", label: { en: "Uttar Pradesh", hi: "उत्तर प्रदेश", or: "ଉତ୍ତରପ୍ରଦେଶ" } },
  { value: "Uttarakhand", label: { en: "Uttarakhand", hi: "उत्तराखंड", or: "ଉତ୍ତରାଖଣ୍ଡ" } },
  { value: "West Bengal", label: { en: "West Bengal", hi: "पश्चिम बंगाल", or: "ପଶ୍ଚିମବଙ୍ଗ" } },
  { value: "Andaman and Nicobar Islands", label: { en: "Andaman and Nicobar Islands", hi: "अंडमान और निकोबार द्वीप समूह", or: "ଆଣ୍ଡାମାନ ଓ ନିକୋବର ଦ୍ୱୀପପୁଞ୍ଜ" } },
  { value: "Chandigarh", label: { en: "Chandigarh", hi: "चंडीगढ़", or: "ଚଣ୍ଡୀଗଡ଼" } },
  { value: "Dadra and Nagar Haveli and Daman and Diu", label: { en: "Dadra and Nagar Haveli and Daman and Diu", hi: "दादरा और नगर हवेली और दमन और दीव", or: "ଦାଦ୍ରା ଓ ନଗର ହାଭେଲି ଏବଂ ଦମନ ଓ ଦିଉ" } },
  { value: "Delhi", label: { en: "Delhi", hi: "दिल्ली", or: "ଦିଲ୍ଲୀ" } },
  { value: "Jammu and Kashmir", label: { en: "Jammu and Kashmir", hi: "जम्मू और कश्मीर", or: "ଜମ୍ମୁ ଓ କାଶ୍ମୀର" } },
  { value: "Ladakh", label: { en: "Ladakh", hi: "लद्दाख", or: "ଲଦାଖ" } },
  { value: "Lakshadweep", label: { en: "Lakshadweep", hi: "लक्षद्वीप", or: "ଲକ୍ଷଦ୍ୱୀପ" } },
  { value: "Puducherry", label: { en: "Puducherry", hi: "पुडुचेरी", or: "ପୁଦୁଚେରୀ" } },
];
