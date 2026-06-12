/* research-data.js — English content model.
   The thesis dashboard copy, translated to English. Field keys keep the
   *Ka suffix only so the existing render in research.html needs no change;
   every value here is the English version of the diploma thesis. */

window.RESEARCH = {

  meta: {
    titleKa: "From Institutional Communication to Personalized PR: The Transformation of Customer-Centric Brand Communication in the Banking Sector",
    subtitleKa: "The transformation of customer-centric brand communication in the banking sector",
    author: "Anna Chikhiashvili",
    supervisor: "Nino Kalandia",
    org: "GIPA",
    schoolKa: "Caucasus School of Journalism and Media Management",
    programKa: "Bachelor's Programme in Digital Media and Communication",
    year: "2026",
    pages: 28,
    pdf: "anna-chikhiashvili-diploma-2026.pdf"
  },

  hero: {
    formalLabelKa: "Traditionally, financial institutions are characterized by high formality, bureaucratic language, and a clear distance from the customer.",
    personalExamplesKa: [
      "You can do this",
      "Don't stop",
      "Success is closer than you think",
      "Show others what only you can see",
      "You are not alone, and you can overcome these challenges"
    ]
  },

  facts: [
    { n: 28, labelKa: "Pages" },
    { n: 4,  labelKa: "Hypotheses" },
    { n: 8,  labelKa: "Interviews" },
    { n: 2,  labelKa: "Banks" },
    { n: 5,  labelKa: "Methods" }
  ],

  sections: [
    {
      id: "intro",
      titleKa: "Introduction",
      excerpts: [
        "Where formal, institutional language once dominated, brands today are trying to make their communication more human and emotional, placing the individual customer's experience at the center of attention.",
        "The aim of this research is to study how banking communication shifts from an institutional model to personalized PR, and how this change is reflected in customer perception and trust.",
        "Personalized PR plays a significant role in this process: it means tailoring communication to the individual and creating the impression that the brand is addressing a specific customer personally."
      ]
    },
    {
      id: "findings",
      titleKa: "Key Research Findings",
      excerpts: [
        "The research revealed a clear age-based and social divide in how the humanization of banks is perceived.",
        "The surveyed customers' responses show that personalization by a bank is perceived on two completely different levels: a digital dimension and a product dimension.",
        "The first dimension is digital and visual personalization, which successfully creates in customers a sense of their own unique, personal space.",
        "On the other hand, when it comes directly to product offers, the research revealed a serious crisis of so-called mass personalization.",
        "The central conclusion of the research is that any personalized PR communication loses its meaning if it is not grounded in operational honesty and transparency."
      ]
    },
    {
      id: "social",
      titleKa: "Social Media Analysis Results",
      excerpts: [
        "The social media analysis revealed that Bank of Georgia actively uses Facebook, Instagram and YouTube not only to spread information, but to build an emotional and direct relationship with the customer.",
        "The social media analysis also showed that the highest emotional engagement is tied to content that goes beyond directly advertising banking services and touches on social, personal or values-based themes.",
        "The lowest customer engagement, by contrast, is seen on posts that are purely informational or product-oriented in nature.",
        "The social media analysis revealed that TBC Bank's digital communication is built on a more minimalist, structured and functional model."
      ]
    }
  ],

  streams: [
    {
      kind: "ok", accent: "green",
      titleKa: "A sense of personal space",
      bodyKa: "The first dimension is digital and visual personalization, which successfully creates in customers a sense of their own unique, personal space.",
      detailKa: "Here, customizing designs and backgrounds in the mobile bank, as well as giving individual names to deposits, proved especially effective."
    },
    {
      kind: "bad", accent: "pink",
      titleKa: "A serious crisis of mass personalization",
      bodyKa: "On the other hand, when it comes directly to product offers, the research revealed a serious crisis of so-called mass personalization.",
      detailKa: "Respondent 4 sharply criticizes this, noting that the bank lumps people earning 3,000 and 30,000 GEL into one category and sends them completely irrelevant offers."
    }
  ],

  hypotheses: [
    { id: "H1", textKa: "Personalized PR increases the customer's emotional connection with the brand." },
    { id: "H2", textKa: "A human, friendly communication tone increases trust toward financial institutions." },
    { id: "H3", textKa: "Customers respond more to communication that speaks to their individual experience." },
    { id: "H4", textKa: "Personalized PR creates an “illusion of personal dialogue” within mass communication." }
  ],

  methods: [
    {
      n: "01",
      titleKa: "Discourse analysis",
      descKa: "Discourse analysis was used within the research to study the communicative language, tone and narrative of the banking brands."
    },
    {
      n: "02",
      titleKa: "Social media analysis",
      descKa: "Within the research, the social media communication of Bank of Georgia and TBC Bank was analyzed across the Facebook, Instagram and YouTube platforms."
    },
    {
      n: "03",
      titleKa: "Case study — Bank of Georgia and TBC Bank",
      descKa: "The research is based on a comparative case study of Bank of Georgia and TBC Bank, examining brand transformation, communication style, customer-oriented strategies and the practice of personalized PR."
    },
    {
      n: "04",
      titleKa: "In-depth interviews with customers",
      descKa: "In-depth interviews were conducted with bank customers, focused on customer experience, emotional perception, the sense of personalization and the relationship with the brand."
    },
    {
      n: "05",
      titleKa: "Expert interviews",
      descKa: "An expert interview was conducted with a PR communications expert, covering personalized communication strategy, the goals of customer-oriented PR, the role of data and AI, and the transformation of banking communication."
    }
  ],

  segments: [
    {
      labelKa: "First segment · 18–25",
      bodyKa: "The first segment brought together students and young customers aged 18–25 who are daily users of the mobile bank and express particular affinity for the brand's communication tone, visual side and emotional messaging."
    },
    {
      labelKa: "Second segment · 25–34",
      bodyKa: "The second segment consisted of employed customers aged 25–34 who regularly use a variety of banking products and critically assess personalized offers."
    },
    {
      labelKa: "Third segment · 30–45",
      bodyKa: "The third segment included financially stable customers aged 30–45 with family responsibilities, who view the bank through the lens of institutional reliability and long-term practical needs."
    },
    {
      labelKa: "Fourth segment · 25–45",
      bodyKa: "The fourth segment comprised digitally active people aged 25–45 who are strongly negative toward excessive marketing communication."
    }
  ],

  banks: [
    {
      name: "Bank of Georgia",
      sloganKa: "Dare what seems impossible to you",
      tones: ["Emotional", "Motivational", "Human", "Friendly"],
      excerpts: [
        "Discourse analysis revealed that Bank of Georgia's communication style has shifted toward a more human, emotional and customer-oriented communicative model.",
        "One of the key findings is a change in forms of address: the bank actively uses the second-person pronoun (“you”), which creates an effect of individual address and reduces the sense of institutional distance.",
        "The first direction is dramatic, image-driven storytelling, a prime case of which is the New Year video campaign “Dare what seems impossible to you,” based on the real biography of the Georgian inventor Grigol Kobakhidze (George Kobi).",
        "Bank of Georgia places its emphasis on energetic, inspiring storytelling, motivation and personal growth, offering the public a big idea and inspiration rather than a financial product."
      ],
      accent: "orange"
    },
    {
      name: "TBC Bank",
      sloganKa: "What matters is that you believe",
      tones: ["Minimalist", "Neutral", "Technological"],
      excerpts: [
        "Discourse analysis showed that, unlike Bank of Georgia, TBC Bank's communication is oriented toward a minimalist, functional and relatively neutral style.",
        "Although direct motivational appeals rarely appear in its communication, its slogan “What matters is that you believe” still carries a sense of personalization that the customer takes personally.",
        "TBC Bank's campaign “Love Returns” is built on the theme of emigration and family ties; it focuses on the emotions of longing, distance and family warmth, which is relevant for Georgian society, where emigration is a daily reality for many families.",
        "TBC Bank maintains a minimalist and neutral style where the priority is technology and simplicity of processes, while personalization is mainly expressed on a functional level."
      ],
      accent: "cyan"
    }
  ],

  quotes: [
    {
      textKa: "Bank of Georgia had a feature where I could set a photo I wanted, and when I logged into the internet bank I would immediately see a photo of my dream car. Every time I looked at it, I had the feeling that I was getting closer to my goal — I felt that I could do it. And in 5 months I bought my dream car. I still remember this case, because it felt as if Bank of Georgia and I were moving toward our shared goal together.",
      sourceKa: "Respondent 2"
    },
    {
      textKa: "Whether you give me 5% off on a Porsche now or not makes absolutely no difference to me personally, because I can't afford a Porsche anyway.",
      sourceKa: "Respondent 4"
    },
    {
      textKa: "They manipulate my excitement and emotions: “wow, how great,” they suddenly show me something — a post appears that I can take out a loan at 12%, and then it turns out the rate goes up to 35%.",
      sourceKa: "Respondent 6"
    },
    {
      textKa: "As a customer, I want you not to deceive me — don't tell me I have to pay 12% when in reality it's 35%. At times like that I feel terrible distrust toward the bank. I would rather you told me from the start that it will be 35% and let me decide for myself whether it's worth it.",
      sourceKa: "Respondent 4"
    },
    {
      textKa: "A bank should just be a bank... Ilia Topuria appearing creates no emotional attachment between me and the bank personally... I was far more satisfied by simply having my problem solved quickly.",
      sourceKa: "Respondent 7"
    }
  ],

  generations: [
    {
      labelKa: "Gen Z · 18–25",
      bodyKa: "The digitally oriented Gen Z generation needs interactive, friendly, informal approaches based on visual storytelling, which drives identification with the brand and long-term loyalty."
    },
    {
      labelKa: "Millennials & 45+",
      bodyKa: "Conversely, for Millennials and the 45+ category, informality is unacceptable; for them communication must be grounded in institutional stability, operational transparency and personal assistance (for example, the “Solo” and “Concept” lounge models)."
    }
  ],

  conclusionKa: "The research conducted in this thesis confirmed that the shift in Georgia's banking sector — from formal, institutional language to customer-centric personalized PR strategies — is a natural process. … Real loyalty is built not by manipulating emotions, but by reducing this communicative gap, through informational transparency and operational honesty.",

  references: [
    "McKinsey & Company. (2021, November 12). The value of getting personalization right—or wrong—is multiplying.",
    "McKinsey & Company. (2023). What is personalization? McKinsey Explainers.",
    "Casaca, J. A., & Miguel, L. P. (2024). The Influence of Personalization on Consumer Satisfaction: Trends and Challenges. In Trends and Challenges in Digital Marketing (pp. 256–278). IGI Global",
    "Petrucci, I. P. (2022). The Impact of Consumer Perceptions of Personalised Advertising on Purchase Intention. [Master's thesis, Utrecht University]. Utrecht University Repository.",
    "Yeo, T. E. D., Chu, T. H., & Li, Q. (2025). How persuasive is personalized advertising? A meta-analytic review of experimental evidence of the effects of personalization on ad effectiveness. Journal of Advertising Research, 65(4), 616–631.",
    "Zwayyed, Z. (2025). Building Brands That Feel Human: Strategies for Authentic Corporate and Personal Branding. [Independent Research Paper, University of Windsor]. Figshare.",
    "Chaturvedi, P. (2025). Personalization in Banking: The Key to Customer Retention. International Journal of Management and Humanities (IJMH), 11(8).",
    "Mogaji, E. (2018). Emotional Appeals in Advertising Banking Services. Emerald Publishing Limited.",
    "Aguirre, E., Mahr, D., Grewal, D., de Ruyter, K., & Wetzels, M. (2015). Unraveling the Personalization Paradox: The Effect of Information Transparency and Choice on the Persuasiveness of Personalized Advertising. Journal of Retailing, 91(1), 34–49."
  ]

};
