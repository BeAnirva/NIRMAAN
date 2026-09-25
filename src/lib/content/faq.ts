import type { Language } from "@/lib/translations";

const en = {
  label: "Questions",
  titleLine1: "Before you",
  titleEmphasis: "register.",
  description:
    "A few things you might want to know before taking your first step with Nirmaan.",
  faqs: [
    {
      question: "Is Nirmaan really free?",
      answer:
        "Yes. Registration and access to Nirmaan's core learning, guidance and support are completely free.",
    },
    {
      question: "Who can register?",
      answer:
        "Anyone who wants to learn, develop practical skills, explore career opportunities or work towards building something of their own can register.",
    },
    {
      question: "What if I don't know what I want to do yet?",
      answer:
        "That's completely okay. You don't need to have a clear career or business plan before joining. Nirmaan is designed to help you understand your options and figure out your next step.",
    },
    {
      question: "What kind of support will I get?",
      answer:
        "Depending on your goals, Nirmaan can help you explore learning resources, practical skills, career opportunities, mentorship and entrepreneurship.",
    },
    {
      question: "Do I need any prior experience or qualifications?",
      answer:
        "No. You can start from where you are. Your current experience, education and skills will help us understand how best to guide you.",
    },
    {
      question: "How does registration work?",
      answer:
        "You'll answer a few simple questions about yourself, your current situation and what you'd like to achieve. Once you register, we'll use that information to understand how Nirmaan can support you.",
    },
    {
      question: "How soon will someone contact me?",
      answer:
        "After registration, our team will review your information and reach out regarding the next steps.",
    },
    {
      question: "Can I register if I'm still studying?",
      answer:
        "Yes. Students are welcome to register and explore learning, career and skill-building opportunities.",
    },
  ],
  stillUnsure: "Still unsure?",
  bottomTitle: "You don't need to have all the answers.",
  bottomText: "Start where you are. We'll help you figure out the next step.",
  button: "Start Your Journey →",
};

export const faqContent: Record<Language, typeof en> = {
  en,

  hi: {
    label: "सवाल",
    titleLine1: "पंजीकरण से",
    titleEmphasis: "पहले।",
    description:
      "निर्माण के साथ अपना पहला कदम उठाने से पहले कुछ बातें जो आप जानना चाहेंगे।",
    faqs: [
      {
        question: "क्या निर्माण सच में निःशुल्क है?",
        answer:
          "हाँ। पंजीकरण और निर्माण की मुख्य शिक्षा, मार्गदर्शन और सहायता पूरी तरह निःशुल्क हैं।",
      },
      {
        question: "कौन पंजीकरण कर सकता है?",
        answer:
          "कोई भी व्यक्ति जो सीखना चाहता है, व्यावहारिक कौशल विकसित करना चाहता है, करियर के अवसर तलाशना चाहता है या अपना कुछ बनाने की दिशा में काम करना चाहता है, पंजीकरण कर सकता है।",
      },
      {
        question: "अगर अभी यह तय नहीं है कि मुझे क्या करना है, तो?",
        answer:
          "यह बिल्कुल ठीक है। जुड़ने से पहले आपके पास कोई स्पष्ट करियर या बिज़नेस योजना होना ज़रूरी नहीं है। निर्माण इसी लिए बना है कि आप अपने विकल्पों को समझ सकें और अपना अगला कदम तय कर सकें।",
      },
      {
        question: "मुझे किस तरह की सहायता मिलेगी?",
        answer:
          "आपके लक्ष्यों के अनुसार, निर्माण आपको सीखने के संसाधन, व्यावहारिक कौशल, करियर के अवसर, मेंटरशिप और उद्यमिता को तलाशने में मदद कर सकता है।",
      },
      {
        question: "क्या मुझे किसी पूर्व अनुभव या योग्यता की ज़रूरत है?",
        answer:
          "नहीं। आप जहाँ हैं, वहीं से शुरू कर सकते हैं। आपका मौजूदा अनुभव, शिक्षा और कौशल हमें यह समझने में मदद करेंगे कि आपका सबसे अच्छा मार्गदर्शन कैसे करें।",
      },
      {
        question: "पंजीकरण कैसे होता है?",
        answer:
          "आप अपने बारे में, अपनी मौजूदा स्थिति और आप क्या हासिल करना चाहते हैं, इस पर कुछ आसान सवालों के जवाब देंगे। पंजीकरण के बाद, हम उस जानकारी से समझेंगे कि निर्माण आपकी कैसे मदद कर सकता है।",
      },
      {
        question: "मुझसे कितनी जल्दी संपर्क किया जाएगा?",
        answer:
          "पंजीकरण के बाद, हमारी टीम आपकी जानकारी देखेगी और अगले कदमों के बारे में आपसे संपर्क करेगी।",
      },
      {
        question: "क्या पढ़ाई के दौरान पंजीकरण किया जा सकता है?",
        answer:
          "हाँ। विद्यार्थी पंजीकरण करके सीखने, करियर और कौशल विकास के अवसरों को तलाश सकते हैं।",
      },
    ],
    stillUnsure: "अब भी तय नहीं कर पा रहे?",
    bottomTitle: "आपके पास हर सवाल का जवाब होना ज़रूरी नहीं है।",
    bottomText: "जहाँ हैं, वहीं से शुरू करें। अगला कदम तय करने में हम आपकी मदद करेंगे।",
    button: "अपनी यात्रा शुरू करें →",
  },

  or: {
    label: "ପ୍ରଶ୍ନ",
    titleLine1: "ପଞ୍ଜୀକରଣ",
    titleEmphasis: "ପୂର୍ବରୁ।",
    description:
      "ନିର୍ମାଣ ସହ ପ୍ରଥମ ପଦକ୍ଷେପ ନେବା ପୂର୍ବରୁ ଆପଣ ଜାଣିବାକୁ ଚାହୁଁଥିବା କିଛି କଥା।",
    faqs: [
      {
        question: "ନିର୍ମାଣ ପ୍ରକୃତରେ ମାଗଣା କି?",
        answer:
          "ହଁ। ପଞ୍ଜୀକରଣ ଏବଂ ନିର୍ମାଣର ମୁଖ୍ୟ ଶିକ୍ଷା, ମାର୍ଗଦର୍ଶନ ଓ ସହାୟତା ସମ୍ପୂର୍ଣ୍ଣ ମାଗଣା।",
      },
      {
        question: "କିଏ ପଞ୍ଜୀକରଣ କରିପାରିବେ?",
        answer:
          "ଯେକେହି ଶିଖିବାକୁ, ବ୍ୟାବହାରିକ ଦକ୍ଷତା ବିକାଶ କରିବାକୁ, କ୍ୟାରିୟର ସୁଯୋଗ ଖୋଜିବାକୁ କିମ୍ବା ନିଜର କିଛି ଗଢ଼ିବା ଦିଗରେ କାମ କରିବାକୁ ଚାହାଁନ୍ତି, ସେମାନେ ପଞ୍ଜୀକରଣ କରିପାରିବେ।",
      },
      {
        question: "ଯଦି ମୁଁ କ'ଣ କରିବାକୁ ଚାହେଁ ତାହା ଏବେ ଜାଣି ନାହିଁ, ତେବେ?",
        answer:
          "ଏହା ସମ୍ପୂର୍ଣ୍ଣ ଠିକ୍ ଅଛି। ଯୋଗଦେବା ପୂର୍ବରୁ ଆପଣଙ୍କ ପାଖରେ ସ୍ପଷ୍ଟ କ୍ୟାରିୟର କିମ୍ବା ବ୍ୟବସାୟ ଯୋଜନା ଥିବା ଆବଶ୍ୟକ ନୁହେଁ। ଆପଣଙ୍କ ବିକଳ୍ପଗୁଡ଼ିକୁ ବୁଝିବା ଓ ପରବର୍ତ୍ତୀ ପଦକ୍ଷେପ ସ୍ଥିର କରିବାରେ ସାହାଯ୍ୟ କରିବା ପାଇଁ ହିଁ ନିର୍ମାଣ ଗଢ଼ାଯାଇଛି।",
      },
      {
        question: "ମୋତେ କେଉଁ ପ୍ରକାର ସହାୟତା ମିଳିବ?",
        answer:
          "ଆପଣଙ୍କ ଲକ୍ଷ୍ୟ ଅନୁସାରେ, ନିର୍ମାଣ ଆପଣଙ୍କୁ ଶିକ୍ଷଣ ସମ୍ବଳ, ବ୍ୟାବହାରିକ ଦକ୍ଷତା, କ୍ୟାରିୟର ସୁଯୋଗ, ମେଣ୍ଟରସିପ୍ ଓ ଉଦ୍ୟୋଗ ଖୋଜିବାରେ ସାହାଯ୍ୟ କରିପାରେ।",
      },
      {
        question: "ମୋର କୌଣସି ପୂର୍ବ ଅଭିଜ୍ଞତା କିମ୍ବା ଯୋଗ୍ୟତା ଦରକାର କି?",
        answer:
          "ନା। ଆପଣ ଯେଉଁଠି ଅଛନ୍ତି ସେଠାରୁ ଆରମ୍ଭ କରିପାରିବେ। ଆପଣଙ୍କ ବର୍ତ୍ତମାନର ଅଭିଜ୍ଞତା, ଶିକ୍ଷା ଓ ଦକ୍ଷତା ଆପଣଙ୍କୁ କିପରି ଭଲ ଭାବେ ମାର୍ଗଦର୍ଶନ କରିବୁ ତାହା ବୁଝିବାରେ ଆମକୁ ସାହାଯ୍ୟ କରିବ।",
      },
      {
        question: "ପଞ୍ଜୀକରଣ କିପରି ହୁଏ?",
        answer:
          "ଆପଣ ନିଜ ବିଷୟରେ, ବର୍ତ୍ତମାନ ପରିସ୍ଥିତି ଏବଂ କ'ଣ ହାସଲ କରିବାକୁ ଚାହାଁନ୍ତି ସେ ବିଷୟରେ କିଛି ସରଳ ପ୍ରଶ୍ନର ଉତ୍ତର ଦେବେ। ପଞ୍ଜୀକରଣ ପରେ, ନିର୍ମାଣ ଆପଣଙ୍କୁ କିପରି ସହାୟତା କରିପାରିବ ତାହା ବୁଝିବା ପାଇଁ ଆମେ ସେହି ତଥ୍ୟ ବ୍ୟବହାର କରିବୁ।",
      },
      {
        question: "କେତେ ଶୀଘ୍ର ମୋ ସହ ଯୋଗାଯୋଗ କରାଯିବ?",
        answer:
          "ପଞ୍ଜୀକରଣ ପରେ, ଆମ ଦଳ ଆପଣଙ୍କ ତଥ୍ୟ ସମୀକ୍ଷା କରିବ ଏବଂ ପରବର୍ତ୍ତୀ ପଦକ୍ଷେପ ବିଷୟରେ ଆପଣଙ୍କ ସହ ଯୋଗାଯୋଗ କରିବ।",
      },
      {
        question: "ମୁଁ ଏବେ ବି ପଢ଼ୁଥିଲେ ପଞ୍ଜୀକରଣ କରିପାରିବି କି?",
        answer:
          "ହଁ। ଛାତ୍ରଛାତ୍ରୀମାନେ ପଞ୍ଜୀକରଣ କରି ଶିକ୍ଷା, କ୍ୟାରିୟର ଓ ଦକ୍ଷତା ବିକାଶ ସୁଯୋଗ ଖୋଜିପାରିବେ।",
      },
    ],
    stillUnsure: "ଏବେ ବି ନିଶ୍ଚିତ ନୁହଁନ୍ତି କି?",
    bottomTitle: "ଆପଣଙ୍କ ପାଖରେ ସବୁ ପ୍ରଶ୍ନର ଉତ୍ତର ଥିବା ଜରୁରୀ ନୁହେଁ।",
    bottomText: "ଯେଉଁଠି ଅଛନ୍ତି, ସେଠାରୁ ଆରମ୍ଭ କରନ୍ତୁ। ପରବର୍ତ୍ତୀ ପଦକ୍ଷେପ ସ୍ଥିର କରିବାରେ ଆମେ ସାହାଯ୍ୟ କରିବୁ।",
    button: "ଆପଣଙ୍କ ଯାତ୍ରା ଆରମ୍ଭ କରନ୍ତୁ →",
  },
};
