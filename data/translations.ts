export type SupportedLanguage = 'en' | 'ga' | 'es' | 'pl' | 'de' | 'ru';

export interface TranslationDictionary {
  // Navigation
  navHome: string;
  navEvents: string;
  navGallery: string;
  navLeaders: string;
  navContact: string;
  selectLanguage: string;
  selectTheme: string;
  toggleDarkMode: string;

  // Themes
  themeSea: string;
  themeCoral: string;
  themeBlue: string;
  themeRed: string;
  themeOrange: string;
  themeYellow: string;
  themeLavender: string;

  // Home Page
  heroTitle: string;
  heroSubtitle: string;
  heroBadge: string;
  heroCtaPrimary: string;
  heroCtaSecondary: string;

  aboutTitle: string;
  aboutSubtitle: string;
  aboutDesc: string;

  pillarsTitle: string;
  pillar1Title: string;
  pillar1Desc: string;
  pillar2Title: string;
  pillar2Desc: string;
  pillar3Title: string;
  pillar3Desc: string;
  pillar4Title: string;
  pillar4Desc: string;

  sectionsTitle: string;
  sectionsSubtitle: string;
  beaversTitle: string;
  beaversAge: string;
  beaversDesc: string;
  cubsTitle: string;
  cubsAge: string;
  cubsDesc: string;
  scoutsTitle: string;
  scoutsAge: string;
  scoutsDesc: string;
  venturersTitle: string;
  venturersAge: string;
  venturersDesc: string;

  statsTitle: string;
  statMembers: string;
  statVolunteers: string;
  statBoats: string;
  statYears: string;

  nextEventTitle: string;
  nextEventSubtitle: string;
  viewAllEvents: string;

  isaSailing: string;
  coastalKayaking: string;
  overnightCamps: string;
  beaversMeetingTime: string;
  cubsMeetingTime: string;
  scoutsMeetingTime: string;
  venturersMeetingTime: string;
  tbcLabel: string;

  // Events Page
  eventsPageTitle: string;
  eventsPageSubtitle: string;
  filterAll: string;
  filterWater: string;
  filterCamp: string;
  filterHike: string;
  filterCeremony: string;
  filterTraining: string;
  filterPlanning: string;
  statusPlanning: string;
  statusConfirmed: string;
  dateTBD: string;
  planningNotice: string;
  searchEventsPlaceholder: string;
  noEventsFound: string;

  countdownTitle: string;
  countdownDays: string;
  countdownHours: string;
  countdownMinutes: string;
  countdownSeconds: string;
  eventStarted: string;

  eventDetailsBtn: string;
  eventLocation: string;
  eventType: string;
  eventSections: string;
  eventPlan: string;
  eventRoute: string;
  eventGearRequired: string;
  eventNotes: string;
  eventLeaderContact: string;
  closeModal: string;

  // Gallery Page
  galleryTitle: string;
  gallerySubtitle: string;
  galleryFilterAll: string;
  galleryCategoryWater: string;
  galleryCategoryCamp: string;
  galleryCategoryHike: string;
  galleryCategoryInvestiture: string;
  galleryCategoryLeaders: string;
  galleryCategoryGroup: string;
  searchGalleryPlaceholder: string;
  photoCount: string;
  noPhotosFound: string;
  viewFullscreen: string;
  imageDetails: string;
  album: string;

  albumLgTitle: string;
  albumLgDesc: string;
  albumInvestitureTitle: string;
  albumInvestitureDesc: string;
  albumCampTitle: string;
  albumCampDesc: string;
  albumHikeTitle: string;
  albumHikeDesc: string;
  albumWaterTitle: string;
  albumWaterDesc: string;
  albumLeadersTitle: string;
  albumLeadersDesc: string;

  // Photo Titles
  photoInvestiture1: string;
  photoInvestiture2: string;
  photoInvestiture3: string;
  photoInvestiture4: string;
  photoInvestiture5: string;
  photoCamp1: string;
  photoCamp2: string;
  photoCamp3: string;
  photoHike1: string;
  photoHike2: string;
  photoHike3: string;
  photoHike4: string;
  photoHike5: string;
  photoWater1: string;
  photoWater2: string;
  photoWater3: string;
  photoLg1: string;
  photoLg2: string;
  photoLg3: string;
  photoLg4: string;
  photoLg5: string;
  photoLg6: string;
  photoLg7: string;
  photoLg8: string;
  photoLg9: string;
  photoLideres1: string;

  ariaPrevImage: string;
  ariaNextImage: string;

  // Leaders Page
  leadersTitle: string;
  leadersSubtitle: string;
  tabAllLeaders: string;
  tabAdultLeaders: string;
  tabPatrolLeaders: string;
  tabAssistantPatrolLeaders: string;
  roleLeader: string;
  rolePL: string;
  roleAPL: string;
  bioLabel: string;
  skillsLabel: string;
  noLeadersFound: string;

  leaderFrankBio: string;
  leaderFiachraBio: string;
  leaderAelaBio: string;
  leaderJoshBio: string;
  leaderTaidghBio: string;
  leaderSophiaBio: string;
  leaderAlannahBio: string;
  leaderMateuszBio: string;
  titleSkipper: string;
  titleScoutLeader: string;
  titlePL: string;
  titleAPL: string;
  patrolOtter: string;
  patrolCurlew: string;
  certSkipper: string;
  certSailingInstructor: string;
  certScoutLeader: string;
  certSafetyOfficer: string;
  certEventCoordinator: string;
  certOutdoorSkills: string;
  certPatrolWarrant: string;
  certTeaMaster: string;
  certAPL: string;
  cert10Years: string;

  // Events Dynamic Content
  event1Title: string;
  event1Desc: string;
  event1Loc: string;
  event1Plan1: string;
  event1Plan2: string;
  event1Plan3: string;
  event1Plan4: string;
  event1Plan5: string;
  event1Route: string;
  event1Gear1: string;
  event1Gear2: string;
  event1Gear3: string;
  event1Gear4: string;
  event1Gear5: string;
  event1Notes: string;
  event2Title: string;
  event2Desc: string;
  event2Loc: string;
  event2Plan1: string;
  event2Plan2: string;
  event2Plan3: string;
  event2Plan4: string;
  event2Plan5: string;
  event2Route: string;
  event2Gear1: string;
  event2Gear2: string;
  event2Gear3: string;
  event2Gear4: string;
  event2Gear5: string;
  event2Notes: string;
  event3Title: string;
  event3Desc: string;
  event3Loc: string;
  event3Plan1: string;
  event3Plan2: string;
  event3Plan3: string;
  event3Plan4: string;
  event3Route: string;
  event3Gear1: string;
  event3Gear2: string;
  event3Gear3: string;
  event3Notes: string;
  eventContactSkipperFrank: string;
  eventContactFiachra: string;
  typeCamp: string;
  typeWater: string;
  typeCeremony: string;
  secBeavers: string;
  secCubs: string;
  secScouts: string;
  secVenturers: string;

  // Contact Page
  contactTitle: string;
  contactSubtitle: string;
  contactNoticeSubtitle: string;
  contactFrankTitle: string;
  contactFrankDesc: string;
  contactInPersonTitle: string;
  contactInPersonDesc: string;
  callFrankButton: string;
  whatsappFrankButton: string;
  youthFormTitle: string;
  youthFormDesc: string;
  youthFormDisclaimer: string;
  youthFormButton: string;
  volunteerFormTitle: string;
  volunteerFormDesc: string;
  volunteerFormButton: string;
  emailInquiryDesc: string;
  contactInfoTitle: string;
  addressLabel: string;
  emailLabel: string;
  phoneLabel: string;
  meetingTimesTitle: string;
  formTitle: string;
  formSubtitleDesc: string;
  formNameLabel: string;
  formNamePlaceholder: string;
  formEmailLabel: string;
  formEmailPlaceholder: string;
  formSectionLabel: string;
  formSectionSelect: string;
  formSubjectLabel: string;
  formSubjectPlaceholder: string;
  formMessageLabel: string;
  formMessagePlaceholder: string;
  formSubmitBtn: string;
  formSubmitting: string;
  formSuccessTitle: string;
  formSuccessMsg: string;
  formSendAnother: string;
  formDisabledNoticeTitle: string;
  formDisabledNoticeDesc: string;
  optBeavers: string;
  optCubs: string;
  optScouts: string;
  optVenturers: string;
  optLeadership: string;
  optGeneral: string;
  denBadge: string;

  // Footer
  footerDesc: string;
  footerQuickLinks: string;
  footerMeetingDen: string;
  footerCopyright: string;
  footerScoutingIreland: string;
  footerLocation: string;
}

export const translations: Record<SupportedLanguage, TranslationDictionary> = {
  en: {
    navHome: "Home",
    navEvents: "Upcoming Events",
    navGallery: "Photo Gallery",
    navLeaders: "Scout Leaders",
    navContact: "Contact Us",
    selectLanguage: "Language",
    selectTheme: "Color Theme",
    toggleDarkMode: "Toggle Light/Dark",

    themeSea: "Sea Green",
    themeCoral: "Coral Coast",
    themeBlue: "Ocean Blue",
    themeRed: "Scout Red",
    themeOrange: "Sunset Amber",
    themeYellow: "Golden Sun",
    themeLavender: "Lavender Mist",

    heroTitle: "2nd Louth Blackrock Sea Scouts",
    heroSubtitle: "Navigating adventure, seamanship, and community on the Irish coastline since 1977.",
    heroBadge: "Dundalk Bay & Blackrock Sea Scouting",
    heroCtaPrimary: "Explore Events",
    heroCtaSecondary: "Our Leaders & Patrols",

    aboutTitle: "Welcome to Our Sea Scout Den",
    aboutSubtitle: "Empowering youth through watercraft skills, outdoorsmanship, and lifelong friendship.",
    aboutDesc: "Based in the seaside village of Blackrock, Co. Louth, our sea scout group blends traditional scouting values with nautical instruction. From sailing and rowing to coastal navigation and night hikes, we encourage leadership and resilience in every scout.",

    pillarsTitle: "The Sea Scouting Pillars",
    pillar1Title: "Water Safety & Navigation",
    pillar1Desc: "Mastering seamanship, tides, chart reading, and boat handling under certified leadership.",
    pillar2Title: "Coastal Camping & Wilderness",
    pillar2Desc: "Expeditions, campcraft, cooking, and environmental stewardship along Ireland's shores.",
    pillar3Title: "Patrol System & Teamwork",
    pillar3Desc: "Youth-led patrols fostered by Patrol Leaders (PL) and Assistant Patrol Leaders (APL).",
    pillar4Title: "Community & Service",
    pillar4Desc: "Active participation in marine conservation, local safety events, and civic duty.",

    sectionsTitle: "Our Scout Sections",
    sectionsSubtitle: "Programs tailored for ages 6 through 18.",
    beaversTitle: "Beaver Scouts",
    beaversAge: "Ages 6 - 8",
    beaversDesc: "To Be Decided",
    cubsTitle: "Cub Scouts",
    cubsAge: "Ages 8 - 11",
    cubsDesc: "To Be Decided",
    scoutsTitle: "Sea Scouts",
    scoutsAge: "Ages 11 - 15",
    scoutsDesc: "Sailing, rowing expeditions, chart navigation, overnight camps, and patrol leadership.",
    venturersTitle: "Venturer Scouts",
    venturersAge: "Ages 15 - 18",
    venturersDesc: "To Be Decided",

    statsTitle: "Group Achievements",
    statMembers: "Active Youth Members",
    statVolunteers: "Trained Leaders",
    statBoats: "Sailing & Kayak Fleet",
    statYears: "Years of Sea Scouting",

    nextEventTitle: "Next Highlight Event",
    nextEventSubtitle: "Countdown to our upcoming adventure on the water",
    viewAllEvents: "View All Upcoming Events",

    isaSailing: "ISA Certified Sailing",
    coastalKayaking: "Coastal Kayaking",
    overnightCamps: "Overnight Camps",
    beaversMeetingTime: "To Be Decided",
    cubsMeetingTime: "To Be Decided",
    scoutsMeetingTime: "Wednesdays 19:30 @ St Francis Den",
    venturersMeetingTime: "To Be Decided",
    tbcLabel: "To Be Decided",

    eventsPageTitle: "Group Events & Expeditions",
    eventsPageSubtitle: "Check upcoming schedules, gear requirements, route plans, and live start countdowns.",
    filterAll: "All Events",
    filterWater: "Water Activities",
    filterCamp: "Camps & Expeditions",
    filterHike: "Hikes & Navigation",
    filterCeremony: "Ceremonies",
    filterTraining: "Training Sessions",
    filterPlanning: "In Planning",
    statusPlanning: "In Planning Phase",
    statusConfirmed: "Confirmed Event",
    dateTBD: "Date To Be Decided",
    planningNotice: "This event is currently being planned. Final dates, route, and gear requirements will be published soon.",
    searchEventsPlaceholder: "Search event title or location...",
    noEventsFound: "No events match the selected criteria.",

    countdownTitle: "Time Until Event Start",
    countdownDays: "Days",
    countdownHours: "Hours",
    countdownMinutes: "Mins",
    countdownSeconds: "Secs",
    eventStarted: "This event is currently underway!",

    eventDetailsBtn: "View Complete Event Plan",
    eventLocation: "Location",
    eventType: "Event Category",
    eventSections: "Participating Sections",
    eventPlan: "Schedule & Plan",
    eventRoute: "Route & Access Instructions",
    eventGearRequired: "Required Gear Checklist",
    eventNotes: "Important Notes",
    eventLeaderContact: "Contact Leader",
    closeModal: "Close Details",

    galleryTitle: "Interactive Event Gallery",
    gallerySubtitle: "Explore photos from past camps, water activities, hikes, investitures, and group life.",
    galleryFilterAll: "All Photographs",
    galleryCategoryWater: "Water Sports & Sailing",
    galleryCategoryCamp: "Camps & Outdoors",
    galleryCategoryHike: "Hikes & Expeditions",
    galleryCategoryInvestiture: "Investitures & Ceremonies",
    galleryCategoryLeaders: "Leader Showcase",
    galleryCategoryGroup: "Group Activities",
    searchGalleryPlaceholder: "Search photos by tag or name...",
    photoCount: "Photos Available",
    noPhotosFound: "No photographs found in this folder.",
    viewFullscreen: "View High Res",
    imageDetails: "Photo Information",
    album: "Album / Folder",

    albumLgTitle: "Our trip to Clogherhead lifeguard station",
    albumLgDesc: "Scout visit to Clogherhead Lifeguard and Coast Guard Station learning coastal life saving.",
    albumInvestitureTitle: "Investiture",
    albumInvestitureDesc: "Scout promises, badge presentations, and group flag parade.",
    albumCampTitle: "Camping",
    albumCampDesc: "Outdoor camping, patrol tent setup, and campfire cooking.",
    albumHikeTitle: "Hiking",
    albumHikeDesc: "Exploring Cooley Mountains and practicing map & compass skills.",
    albumWaterTitle: "Water Sports",
    albumWaterDesc: "Kayaking, sailing regattas, and rowing practice in Dundalk Bay.",
    albumLeadersTitle: "Leaders Showcase",
    albumLeadersDesc: "Portraits of our leaders and patrol leaders.",

    photoInvestiture1: "Scout Promise Ceremony",
    photoInvestiture2: "Badge Presentation",
    photoInvestiture3: "Neckerchief Investiture",
    photoInvestiture4: "Colour Party Flag Assembly",
    photoInvestiture5: "Full Group Investiture Photo",
    photoCamp1: "Patrol Tent Setup",
    photoCamp2: "Campfire Dinner & Cooking",
    photoCamp3: "Morning Inspection",
    photoHike1: "Slieve Foye Mountain Trail",
    photoHike2: "Map & Compass Navigation",
    photoHike3: "Ridge Trail Checkpoint",
    photoHike4: "Summit Group Photo",
    photoHike5: "Descent & Sunset View",
    photoWater1: "Sailing Regatta in Dundalk Bay",
    photoWater2: "Patrol Kayaking Session",
    photoWater3: "Rowing Practice & Safety",
    photoLg1: "Clogherhead Lifeguard Station Tour",
    photoLg2: "Lifejacket Safety Fitting",
    photoLg3: "Coastguard Equipment Workshop",
    photoLg4: "Coastguard Rescue Vehicle",
    photoLg5: "Water Rescue Demonstration",
    photoLg6: "Station Briefing & Q&A",
    photoLg7: "Coastguard Team Photo",
    photoLg8: "Lifeboat Equipment Inspection",
    photoLg9: "Group Photo at Clogherhead",
    photoLideres1: "Taidgh Malone - Patrol Leader",

    ariaPrevImage: "Previous Image",
    ariaNextImage: "Next Image",

    leadersTitle: "Our Leadership Team",
    leadersSubtitle: "Dedicated adult volunteer leaders and youth patrol leaders guiding 2nd Louth.",
    tabAllLeaders: "All Leaders",
    tabAdultLeaders: "Adult Leaders",
    tabPatrolLeaders: "Patrol Leaders (PL)",
    tabAssistantPatrolLeaders: "Assistant Patrol Leaders (APL)",
    roleLeader: "Scout Leader",
    rolePL: "Patrol Leader",
    roleAPL: "Assistant Patrol Leader",
    bioLabel: "Biography",
    skillsLabel: "Scout Certifications & Skills",
    noLeadersFound: "No leaders found in this category.",

    leaderFrankBio: "Alias Skipper. Main Leader of Scouts. Likes trains.",
    leaderFiachraBio: "Funny. Calls scouts a 'democratic dictatorship'.",
    leaderAelaBio: "Very organised.",
    leaderJoshBio: "Good sense of humour. Has a lot of random skills.",
    leaderTaidghBio: "Abuses his power. Drinks a lot of tea (7+ cups a day). Great craic.",
    leaderSophiaBio: "Loves chaos.",
    leaderAlannahBio: "50% chance that she will not be here. Very kind hearted.",
    leaderMateuszBio: "Been here for a decade. Ace of Nucks.",
    titleSkipper: "Main Leader of Scouts (Skipper)",
    titleScoutLeader: "Scout Leader",
    titlePL: "Patrol Leader (PL)",
    titleAPL: "Assistant Patrol Leader (APL)",
    patrolOtter: "Otter Patrol",
    patrolCurlew: "Curlew Patrol",
    certSkipper: "Skipper",
    certSailingInstructor: "Sailing Instructor",
    certScoutLeader: "Scout Leader",
    certSafetyOfficer: "Safety Officer",
    certEventCoordinator: "Event Coordinator",
    certOutdoorSkills: "Outdoor Skills Specialist",
    certPatrolWarrant: "Patrol Leadership Warrant",
    certTeaMaster: "Tea Master",
    certAPL: "Assistant Patrol Leader",
    cert10Years: "10 Years Service",

    event1Title: "Backwoods Day & Wilderness Survival",
    event1Desc: "Currently planning a backwoods day featuring firecraft, outdoor cooking, shelter building, and survival skills.",
    event1Loc: "Cooley Forest & St Francis Den Grounds, Co. Louth",
    event1Plan1: "10:00 - Arrival & Safety Briefing",
    event1Plan2: "10:30 - Backwoods Firebuilding & Friction Fire Workshop",
    event1Plan3: "12:30 - Outdoor Backwoods Cooking Competition (Bannock & Stew)",
    event1Plan4: "14:30 - Natural Shelter Building & Knot Challenge",
    event1Plan5: "16:30 - Debrief & Closing Ceremony",
    event1Route: "Meet at St Francis National School grounds, Blackrock, Co. Louth.",
    event1Gear1: "Scout Neckerchief & Activity Uniform",
    event1Gear2: "Sturdy Outdoor Boots & Waterproof Jacket",
    event1Gear3: "Backwoods Cooking Tin & Cutlery",
    event1Gear4: "Water Bottle & High-Energy Snacks",
    event1Gear5: "Personal First Aid Kit",
    event1Notes: "Bring old clothes suitable for outdoor firecraft and cooking.",
    event2Title: "Dundalk Bay Sailing & Regatta",
    event2Desc: "Annual Sea Scout sailing regatta and rowing race across Blackrock promenade and Dundalk Bay.",
    event2Loc: "Blackrock Promenade & Sea Scout Slipway, Co. Louth",
    event2Plan1: "09:30 - Muster at Blackrock Slipway & Rigging Boats",
    event2Plan2: "10:30 - Safety Briefing & Weather Check",
    event2Plan3: "11:00 - Regatta Heats & Sailing Course",
    event2Plan4: "14:00 - Rowing Race & Patrol Navigation Challenge",
    event2Plan5: "16:30 - De-rigging & Presentation of Trophies",
    event2Route: "Access via Blackrock Main Street promenade. Park at public seaside car park adjacent to the Scout Den slipway.",
    event2Gear1: "Scout Neckerchief & Uniform",
    event2Gear2: "Certified Personal Flotation Device (PFD / Buoyancy Aid)",
    event2Gear3: "Wetsuit or Waterproof Sailing Gear",
    event2Gear4: "Neoprene Booties or Old Runners",
    event2Gear5: "Towel & Full Change of Warm Clothes",
    event2Notes: "Weather dependent.",
    event3Title: "Annual Group Investiture & Awards",
    event3Desc: "Welcoming new Beavers, Cubs, and Sea Scouts into the 2nd Louth group with badge awards.",
    event3Loc: "St Francis National School, Blackrock, Co. Louth",
    event3Plan1: "19:30 - Inspection & Colour Party Assembly",
    event3Plan2: "20:00 - Scout Promise & Investiture Ceremony",
    event3Plan3: "20:30 - Nautical Badge Presentation & Slideshow",
    event3Plan4: "21:00 - Tea, Refreshments & Social Evening",
    event3Route: "St Francis National School, Blackrock, Co. Louth A91 NH0V.",
    event3Gear1: "Full Official Scout Uniform (Clean & Ironed)",
    event3Gear2: "Polished Shoes / Dark Runners",
    event3Gear3: "Scout Neckerchief with Woggle",
    event3Notes: "All parents, guardians, and family members are cordially invited.",
    eventContactSkipperFrank: "Skipper Frank (+353 868 22 55 22)",
    eventContactFiachra: "Skipper Frank (+353 868 22 55 22)",
    typeCamp: "Camp & Expedition",
    typeWater: "Water Activity",
    typeCeremony: "Ceremony",
    secBeavers: "Beavers",
    secCubs: "Cubs",
    secScouts: "Sea Scouts",
    secVenturers: "Venturers",

    contactTitle: "Contact 2nd Louth Sea Scouts",
    contactSubtitle: "Get in touch regarding membership, leader volunteering, or general inquiries.",
    contactNoticeSubtitle: "The only ways to contact us are in person by attending a meeting or directly to Leader Frank via call or WhatsApp.",
    contactFrankTitle: "Direct Contact with Skipper Frank",
    contactFrankDesc: "Call or send a message directly to Skipper Frank (+353 868 22 55 22) on WhatsApp for any inquiries.",
    contactInPersonTitle: "Visit Us In Person",
    contactInPersonDesc: "Come meet us in person at St Francis National School during our weekly Sea Scout meetings.",
    callFrankButton: "Call Frank (+353 868 22 55 22)",
    whatsappFrankButton: "Send WhatsApp Message",
    youthFormTitle: "Youth Membership Registration",
    youthFormDesc: "If you are interested in having your child join our scout group, please complete this short form:",
    youthFormDisclaimer: "Please note: Currently, places for Beavers (ages 6 to 9) and Cubs (ages 9 to 12) are full, and availability in the Scout Group (ages 12+) is limited. However, we maintain a waiting list and will offer places as soon as possible.",
    youthFormButton: "Fill Youth Registration Form",
    volunteerFormTitle: "Adult Volunteer Leader Inquiry",
    volunteerFormDesc: "If your inquiry is regarding adult leader volunteering with the group, please complete this short form and we will reply as soon as possible with all relevant information:",
    volunteerFormButton: "Fill Volunteer Leader Form",
    emailInquiryDesc: "For email inquiries, please write to:",
    contactInfoTitle: "Group Contact Information",
    addressLabel: "Scout Den Address",
    emailLabel: "Email Address",
    phoneLabel: "Telephone",
    meetingTimesTitle: "Weekly Meeting Schedule",
    formTitle: "Send Us a Message",
    formSubtitleDesc: "Fill in the details below to contact 2nd Louth Sea Scouts leadership.",
    formNameLabel: "Your Name",
    formNamePlaceholder: "e.g., Siobhán O'Connor",
    formEmailLabel: "Email Address",
    formEmailPlaceholder: "siobhan@example.com",
    formSectionLabel: "Inquiry Section",
    formSectionSelect: "Select Scout Section...",
    formSubjectLabel: "Subject",
    formSubjectPlaceholder: "e.g., Joining Beaver Scouts",
    formMessageLabel: "Message",
    formMessagePlaceholder: "How can we help you?",
    formSubmitBtn: "Send Message",
    formSubmitting: "Sending...",
    formSuccessTitle: "Message Sent!",
    formSuccessMsg: "Thank you! Your message has been sent successfully to the group leaders.",
    formSendAnother: "Send Another Message",
    formDisabledNoticeTitle: "Online Contact Form Offline",
    formDisabledNoticeDesc: "The online contact form is currently deactivated. Please reach out to us directly via our official email or visit us at our Den during section meeting times.",
    optBeavers: "Beaver Scouts (6-8 yrs)",
    optCubs: "Cub Scouts (8-11 yrs)",
    optScouts: "Sea Scouts (11-15 yrs)",
    optVenturers: "Venturer Scouts (15-18 yrs)",
    optLeadership: "Volunteer Leader Inquiry",
    optGeneral: "General Group Inquiry",
    denBadge: "Den",

    footerDesc: "2nd Louth Blackrock Sea Scouts is a member group of Scouting Ireland, dedicated to character development and maritime skills in Blackrock, Co. Louth.",
    footerQuickLinks: "Quick Links",
    footerMeetingDen: "St Francis National School, Blackrock, Co. Louth, A91 NH0V",
    footerCopyright: "© 2026 2nd Louth Blackrock Sea Scouts. All rights reserved.",
    footerScoutingIreland: "Scouting Ireland Member Group",
    footerLocation: "Blackrock, Co. Louth, Ireland"
  },

  ga: {
    navHome: "Bhaile",
    navEvents: "Imeachtaí",
    navGallery: "Gailearaí",
    navLeaders: "Ceannairí",
    navContact: "Teagmháil",
    selectLanguage: "Teanga",
    selectTheme: "Dath an Téama",
    toggleDarkMode: "Mód Dorcha",

    themeSea: "Gorm Uaine na Farraige",
    themeCoral: "Cósta Coiréil",
    themeBlue: "Gorm an Aigéin",
    themeRed: "Dearg Scótair",
    themeOrange: "Órchloch an Fhómhair",
    themeYellow: "Grian Órga",
    themeLavender: "Ceo Laibheandair",

    heroTitle: "2ú Lú Scótaí Mara Creagacha Dubha",
    heroSubtitle: "Eachtraíocht, seoltóireacht agus pobal ar chósta na hÉireann ó 1977.",
    heroBadge: "Scótáil Mara Chuan Dhún Dealgan",
    heroCtaPrimary: "Féach ar Imeachtaí",
    heroCtaSecondary: "Ár gCeannairí",

    aboutTitle: "Fáilte go dtí ár nDún Scótaí Mara",
    aboutSubtitle: "Nurtú óige trí scileanna uisce, campáil agus cairdeas saoil.",
    aboutDesc: "Lonnaithe i sráidbhaile cois farraige Charraig Chocháin, Co. Lú, nascann ár n-amharc-ghrúpa luachanna traidisiúnta scótála le teagasc muirí.",

    pillarsTitle: "Piléir na Scótála Mara",
    pillar1Title: "Sábháilteacht Uisce & Nascleanúint",
    pillar1Desc: "Tuiscint ar sheoltóireacht, taoidí agus láimhseáil bád faoi stiúir deimhnithe.",
    pillar2Title: "Campáil Cois Farraige",
    pillar2Desc: "Eachtraí ar feadh chósta na hÉireann.",
    pillar3Title: "Córas Patróil",
    pillar3Desc: "Patróil á stiúradh ag Ceannairí Patróil (PL) agus Ceannairí Cúnta (APL).",
    pillar4Title: "Pobal & Seirbhís",
    pillar4Desc: "Rannpháirtíocht ghníomhach i gcaomhnú mara agus imeachtaí áitiúla.",

    sectionsTitle: "Ár Rannóga Scótaí",
    sectionsSubtitle: "Cláir do dhaoine óga 6 go 18 mbliana d'aois.",
    beaversTitle: "Scótaí Biobhaire",
    beaversAge: "Aoiseanna 6 - 8",
    beaversDesc: "Le socrú",
    cubsTitle: "Scótaí Cúb",
    cubsAge: "Aoiseanna 8 - 11",
    cubsDesc: "Le socrú",
    scoutsTitle: "Scótaí Mara",
    scoutsAge: "Aoiseanna 11 - 15",
    scoutsDesc: "Seoltóireacht, rámhaíocht, campáil thar oíche agus ceannaireacht.",
    venturersTitle: "Scótaí Venturer",
    venturersAge: "Aoiseanna 15 - 18",
    venturersDesc: "Le socrú",

    statsTitle: "Éachtaí an Ghrúpa",
    statMembers: "Baill Óga Gníomhacha",
    statVolunteers: "Ceannairí Oilte",
    statBoats: "Cabhlach Seolta & Cadhcanna",
    statYears: "Blianta de Scótáil Mara",

    nextEventTitle: "An Chéad Imeacht Eile",
    nextEventSubtitle: "Áireamh síos don chéad eachtra eile ar an uisce",
    viewAllEvents: "Féach ar Gach Imeacht",

    isaSailing: "Seoltóireacht Dheimhnithe ISA",
    coastalKayaking: "Cadhcáil Cósta",
    overnightCamps: "Campaí Thar Oíche",
    beaversMeetingTime: "Le socrú",
    cubsMeetingTime: "Le socrú",
    scoutsMeetingTime: "Dé Céadaoin 19:30 @ Scoil Naomh Proinsias",
    venturersMeetingTime: "Le socrú",
    tbcLabel: "Le socrú",

    eventsPageTitle: "Imeachtaí & Eachtraí",
    eventsPageSubtitle: "Céim ar chéim, trealamh riachtanach agus áireamh síos beo.",
    filterAll: "Gach Imeacht",
    filterWater: "Imeachtaí Uisce",
    filterCamp: "Campaí",
    filterHike: "Siúlóidí",
    filterCeremony: "Searmanais",
    filterTraining: "Oiliúint",
    filterPlanning: "Faoi Phleanáil",
    statusPlanning: "Faoi Phleanáil",
    statusConfirmed: "Imeacht Deimhnithe",
    dateTBD: "Dáta le Socrú",
    planningNotice: "Tá an t-imeacht seo faoi phleanáil faoi láthair. Foilseofar dátaí, bealach agus trealamh go luath.",
    searchEventsPlaceholder: "Cúiligh imeacht nó áit...",
    noEventsFound: "Ní bhfuarthas aon imeachtaí.",

    countdownTitle: "Am go dtí Tús an Imeachta",
    countdownDays: "Laethanta",
    countdownHours: "Uaireanta",
    countdownMinutes: "Nóiméid",
    countdownSeconds: "Soicindí",
    eventStarted: "Tá an t-imeacht seo ar siúl faoi láthair!",

    eventDetailsBtn: "Féach ar Phlean Iomlán",
    eventLocation: "Suíomh",
    eventType: "Cineál Imeachta",
    eventSections: "Rannóga Rannpháirteacha",
    eventPlan: "Sceideal & Plean",
    eventRoute: "Treoracha Bealaigh",
    eventGearRequired: "Trealamh Riachtanach",
    eventNotes: "Nótaí Tábhachtacha",
    eventLeaderContact: "Teagmháil leis an gCeannaire",
    closeModal: "Dún",

    galleryTitle: "Gailearaí Grianghraf",
    gallerySubtitle: "Féach ar ghrianghraif ó champaí, imeachtaí uisce agus searmanais.",
    galleryFilterAll: "Gach Grianghraf",
    galleryCategoryWater: "Spóirt Uisce & Seoltóireacht",
    galleryCategoryCamp: "Campaí",
    galleryCategoryHike: "Siúlóidí",
    galleryCategoryInvestiture: "Searmanais",
    galleryCategoryLeaders: "Ceannairí",
    galleryCategoryGroup: "Imeachtaí Grúpa",
    searchGalleryPlaceholder: "Cuardaigh grianghraif...",
    photoCount: "Grianghraif Ar Fáil",
    noPhotosFound: "Níl aon ghrianghraif sa bhfillteán seo.",
    viewFullscreen: "Mhéadaigh",
    imageDetails: "Gnéithe an Ghrianghraif",
    album: "Albam / Fillteán",

    albumLgTitle: "Ár dturas go Stáisiún Garda Trá Clocharchinn",
    albumLgDesc: "Cuairt scótaí ar Stáisiún Garda Trá Chlocharchinn ag foghlaim sábhála beatha.",
    albumInvestitureTitle: "Gabháil Scótaí",
    albumInvestitureDesc: "Gealltanais scótaí, bronnadh suaitheantais agus mórshiúl bratacha.",
    albumCampTitle: "Campáil",
    albumCampDesc: "Campáil faoin aer, puball patróil agus cócaireacht tinte cnámh.",
    albumHikeTitle: "Trekking & Siúlóid",
    albumHikeDesc: "Taiscéaladh Shléibhte Chuailgne agus scileanna léarscáile & compáis.",
    albumWaterTitle: "Spóirt Uisce",
    albumWaterDesc: "Cadhcáil, rásaí seoltóireachta agus rámhaíocht i gCuan Dhún Dealgan.",
    albumLeadersTitle: "Ceannairí",
    albumLeadersDesc: "Portráidí ár gceannairí agus ceannairí patróil.",

    photoInvestiture1: "Searmanas Gealltanais Scótaí",
    photoInvestiture2: "Bronnadh Suaitheantais",
    photoInvestiture3: "Gabháil Scarf Scótaí",
    photoInvestiture4: "Asaimbliú Bratacha",
    photoInvestiture5: "Grianghraf Grúpa Gabhála",
    photoCamp1: "Gléasadh Puball",
    photoCamp2: "Cócaireacht Tinte Cnámh",
    photoCamp3: "Cigireacht Maidine",
    photoHike1: "Conair Shliabh Fhaiche",
    photoHike2: "Nascleanúint Léarscáile & Compáis",
    photoHike3: "Pointe Seiceála Cnoc",
    photoHike4: "Grianghraf Mullaigh Grúpa",
    photoHike5: "Stuaic & Radharc an Nóna",
    photoWater1: "Regatta Seoltóireachta i gCuan Dhún Dealgan",
    photoWater2: "Seisiún Cadhcála Grúpa",
    photoWater3: "Prachtas Rámhaíochta & Sábháilteacht",
    photoLg1: "Turas Stáisiún Garda Trá Chlocharchinn",
    photoLg2: "Gléasadh Seaicéid Sábháilteachta",
    photoLg3: "Ceardlann Trealamh Garda Trá",
    photoLg4: "Feithicil Tarlaithe Garda Trá",
    photoLg5: "Taispeántas Acharr Uisce",
    photoLg6: "Briefing Stáisiúin & Ceisteanna",
    photoLg7: "Grianghraf Fhoireann Garda Trá",
    photoLg8: "Cigireacht Trealamh Báid Acharr",
    photoLg9: "Grianghraf Grúpa i gClocharchann",
    photoLideres1: "Taidgh Malone - Ceannaire Patróil",

    ariaPrevImage: "Ghailearaí Roimhe Seo",
    ariaNextImage: "Ghailearaí Ar Aghaidh",

    leadersTitle: "Ár bhFoireann Ceannaireachta",
    leadersSubtitle: "Ceannairí fásta agus ceannairí patróil a stiúrann 2ú Lú.",
    tabAllLeaders: "Gach Ceannaire",
    tabAdultLeaders: "Ceannairí Fásta",
    tabPatrolLeaders: "Ceannairí Patróil (PL)",
    tabAssistantPatrolLeaders: "Ceannairí Cúnta (APL)",
    roleLeader: "Ceannaire Scótaí",
    rolePL: "Ceannaire Patróil",
    roleAPL: "Ceannaire Patróil Cúnta",
    bioLabel: "Beathaisnéis",
    skillsLabel: "Teastas & Scileanna",
    noLeadersFound: "Ní bhfuarthas aon cheannairí sa chatagóir seo.",

    leaderFrankBio: "Skipper. Príomhcheannaire na Scótaí. Is maith leis traenacha.",
    leaderFiachraBio: "Greannmhar. Glaonn sé 'deachtóireacht daonlathach' ar na scótaí.",
    leaderAelaBio: "An-eagraithe.",
    leaderJoshBio: "Ciall mhaith ghrinn. Scileanna randamacha aige.",
    leaderTaidghBio: "Úsáideann sé a chumhacht. Ólann sé go leor tae (7+ cupán sa lá).",
    leaderSophiaBio: "Is maith léi an chaos.",
    leaderAlannahBio: "Seans 50% nach mbeidh sí anseo. An-chineálta.",
    leaderMateuszBio: "Anseo le deich mbliana. Sár-imreoir Nucks.",
    titleSkipper: "Príomhcheannaire (Skipper)",
    titleScoutLeader: "Ceannaire Scótaí",
    titlePL: "Ceannaire Patróil (PL)",
    titleAPL: "Ceannaire Cúnta Patróil (APL)",
    patrolOtter: "Patról Madra Uisce",
    patrolCurlew: "Patról Crotach",
    certSkipper: "Skipper",
    certSailingInstructor: "Oide Seoltóireachta",
    certScoutLeader: "Ceannaire Scótaí",
    certSafetyOfficer: "Oifigeach Sábháilteachta",
    certEventCoordinator: "Comhordaitheoir Imeachtaí",
    certOutdoorSkills: "Saineolaí Scileanna Lasmuigh",
    certPatrolWarrant: "Warrant Ceannaireachta Patróil",
    certTeaMaster: "Máistir Tae",
    certAPL: "Ceannaire Patróil Cúnta",
    cert10Years: "10 mBliana Seirbhíse",

    event1Title: "Lá Coille & Marthanacht Fiáin",
    event1Desc: "Ag pleanáil lá coille le tine, cócaireacht lasmuigh, foscadh a thógáil agus marthanacht.",
    event1Loc: "Coillte Chuailgne & Dún Naomh Proinsias, Co. Lú",
    event1Plan1: "10:00 - Sroichint & Briefing Sábháilteachta",
    event1Plan2: "10:30 - Ceardlann Tine Coille & Tine Frithchuimilte",
    event1Plan3: "12:30 - Comórtas Cócaireachta Coille (Bannock & Stobhach)",
    event1Plan4: "14:30 - Tógáil Foscadh Nádúrtha & Challenge Snaidhmeanna",
    event1Plan5: "16:30 - Athbhreithniú & Searmanas Deiridh",
    event1Route: "Cruinniú ag Tailte Scoil Naomh Proinsias, Carraig Chocháin.",
    event1Gear1: "Scarf Scótaí & Éadaí Gníomhaíochta",
    event1Gear2: "Bróga Láidre Lasmuigh & Seaicéad Uiscedhíonach",
    event1Gear3: "Stán Cócaireachta Coille & Sceanra",
    event1Gear4: "Buidéal Uisce & Snacks",
    event1Gear5: "Trealamh Garchabhrach Pearsanta",
    event1Notes: "Tabhair leat seanéadaí atá oiriúnach do théine agus cócaireacht.",
    event2Title: "Seoltóireacht & Regatta Chuan Dhún Dealgan",
    event2Desc: "Regatta seoltóireachta bliantúil agus rásaí rámhaíochta ag Carraig Chocháin.",
    event2Loc: "Promanáid Charraig Chocháin & Slipway Scótaí Mara",
    event2Plan1: "09:30 - Cruinniú ag Slipway & Gléasadh Bád",
    event2Plan2: "10:30 - Briefing Sábháilteachta & Seiceáil Aimsire",
    event2Plan3: "11:00 - Rásaí Regatta & Cúrsa Seoltóireachta",
    event2Plan4: "14:00 - Rása Rámhaíochta & Dúshlán Nascleanúna",
    event2Plan5: "16:30 - Díchóimeáil & Bronnadh Corn",
    event2Route: "Rochtain via Príomhsráid Charraig Chocháin.",
    event2Gear1: "Scarf Scótaí & Éide",
    event2Gear2: "Cabhair Snámhachta Deimhnithe (PFD)",
    event2Gear3: "Wetsuit nó Trealamh Seoltóireachta Uiscedhíonach",
    event2Gear4: "Bróga Neoprene nó Sean-bhróga",
    event2Gear5: "Tuáille & Éadaí Te Glana",
    event2Notes: "Ag brath ar an aimsir.",
    event3Title: "Gabháil Bhliantúil Grúpa & Gradaim",
    event3Desc: "Fáilte roimh Biobhaire, Cúib agus Scótaí Mara nua isteach i 2ú Lú.",
    event3Loc: "Scoil Naomh Proinsias, Carraig Chocháin, Co. Lú",
    event3Plan1: "19:30 - Cigireacht & Asaimbliú Bratacha",
    event3Plan2: "20:00 - Gealltanas Scótaí & Searmanas Gabhála",
    event3Plan3: "20:30 - Bronnadh Suaitheantais Mhara & Slideshow",
    event3Plan4: "21:00 - Tae, Sólaistí & Oíche Shóisialta",
    event3Route: "Scoil Naomh Proinsias, Carraig Chocháin, A91 NH0V.",
    event3Gear1: "Glan-Éide Scótaí Oifigiúil",
    event3Gear2: "Bróga Snasta / Glana",
    event3Gear3: "Scarf Scótaí le Woggle",
    event3Notes: "Tá cuireadh ó chroí ag gach tuismitheoir agus teaghlach.",
    eventContactSkipperFrank: "Skipper Frank (+353 868 22 55 22)",
    eventContactFiachra: "Skipper Frank (+353 868 22 55 22)",
    typeCamp: "Campa & Eachtra",
    typeWater: "Imeacht Uisce",
    typeCeremony: "Searmanas",
    secBeavers: "Biobhair",
    secCubs: "Cúbaigh",
    secScouts: "Scótaí Mara",
    secVenturers: "Venturers",

    contactTitle: "Teagmháil le 2ú Lú Scótaí Mara",
    contactSubtitle: "Roinn linn faoi bhallraíocht, ceannaireacht dheonach, nó ceisteanna ginearálta.",
    contactNoticeSubtitle: "Is iad na haon bhealaí le teagmháil a dhéanamh linn ná go pearsanta ag cruinniú nó go díreach chuig an gCeannaire Frank trí ghlaoch nó WhatsApp.",
    contactFrankTitle: "Teagmháil Dhíreach leis an gCeannaire Frank",
    contactFrankDesc: "Glaoigh nó seol teachtaireacht ar WhatsApp go díreach chuig an gCeannaire Frank (+353 868 22 55 22).",
    contactInPersonTitle: "Tugainn Cuairt Orainn go Pearsanta",
    contactInPersonDesc: "Bualadh linn go pearsanta i Scoil Naomh Proinsias le linn ár gcruinnithe seachtainiúla de Scótaí Mara.",
    callFrankButton: "Glaoigh ar Frank (+353 868 22 55 22)",
    whatsappFrankButton: "Seol Teachtaireacht WhatsApp",
    youthFormTitle: "Clárú Ballraíochta na nÓg",
    youthFormDesc: "Má tá suim agat go nglacfadh do pháiste páirt sna grúpaí, líon isteach an fhoirm ghearr seo:",
    youthFormDisclaimer: "Tugaigí faoi deara: Faoi láthair, tá na háiteanna do na Biobhaire (6 go 9 mbliana) agus na Cúbaigh (9 go 12 bliain) lán, agus tá infhaighteacht theoranta sa Ghrúpa Scótaí (12+ bliain). Mar sin féin, tá liosta feithimh againn agus tairgfimid áiteanna chomh luath agus is féidir.",
    youthFormButton: "Líon Foirm Chláraithe na nÓg",
    volunteerFormTitle: "Fiosrúchán faoi Obair Dheonach Ceannaire",
    volunteerFormDesc: "Má tá do cheist faoi obair dheonach mar cheannaire sa ghrúpa, líon isteach an fhoirm ghearr seo agus freagróimid chomh luath agus is féidir:",
    volunteerFormButton: "Líon Foirm Obair Dheonach",
    emailInquiryDesc: "Le haghaidh fiosrúcháin ríomhphoist, scríobh chuig:",
    contactInfoTitle: "Eolas Teagmhála",
    addressLabel: "Seoladh an Dúin",
    emailLabel: "Ríomhphost",
    phoneLabel: "Fón",
    meetingTimesTitle: "Amanta Cruinnithe",
    formTitle: "Seol Teachtaireacht",
    formSubtitleDesc: "Líon na sonraí thíos chun teagmháil a dhéanamh le ceannairí 2ú Lú.",
    formNameLabel: "D'Ainm",
    formNamePlaceholder: "m.sh., Siobhán Ní Chonaill",
    formEmailLabel: "Seoladh Ríomhphoist",
    formEmailPlaceholder: "siobhan@example.com",
    formSectionLabel: "Rannóg",
    formSectionSelect: "Roghnaigh Rannóg...",
    formSubjectLabel: "Ábhar",
    formSubjectPlaceholder: "m.sh., Clárú le Biobhaire",
    formMessageLabel: "Teachtaireacht",
    formMessagePlaceholder: "Cén chaoi ar féidir linn cabhrú leat?",
    formSubmitBtn: "Seol Teachtaireacht",
    formSubmitting: "Ag seoladh...",
    formSuccessTitle: "Teachtaireacht Seolta!",
    formSuccessMsg: "Go raibh maith agat! Seoladh do theachtaireacht go rathúil.",
    formSendAnother: "Seol Teachtaireacht Eile",
    formDisabledNoticeTitle: "Foirm Teagmhála Líne Múchta",
    formDisabledNoticeDesc: "Tá an fhoirm teagmhála ar líne díchumasaithe faoi láthair. Téigh i dteagmháil linn tríd an ríomhphost oifigiúil.",
    optBeavers: "Scótaí Biobhaire (6-8 bl)",
    optCubs: "Scótaí Cúb (8-11 bl)",
    optScouts: "Scótaí Mara (11-15 bl)",
    optVenturers: "Scótaí Venturer (15-18 bl)",
    optLeadership: "Inquiry Ceannaire Dheonach",
    optGeneral: "Inquiry Grúpa Ginearálta",
    denBadge: "Dún",

    footerDesc: "Is ball de Scótaí Éireann é 2ú Lú Scótaí Mara Charraig Chocháin.",
    footerQuickLinks: "Naisc Thapa",
    footerMeetingDen: "Scoil Naomh Proinsias, Carraig Chocháin, Co. Lú, A91 NH0V",
    footerCopyright: "© 2026 2ú Lú Scótaí Mara Charraig Chocháin.",
    footerScoutingIreland: "Grúpa Ball de Scótaí Éireann",
    footerLocation: "Carraig Chocháin, Co. Lú, Éire"
  },

  es: {
    navHome: "Inicio",
    navEvents: "Próximos Eventos",
    navGallery: "Galería de Fotos",
    navLeaders: "Líderes Scout",
    navContact: "Contacto",
    selectLanguage: "Idioma",
    selectTheme: "Tema de Color",
    toggleDarkMode: "Modo Claro/Oscuro",

    themeSea: "Verde Marino",
    themeCoral: "Costa Coral",
    themeBlue: "Azul Océano",
    themeRed: "Rojo Scout",
    themeOrange: "Ámbar Atardecer",
    themeYellow: "Sol Dorado",
    themeLavender: "Niebla Lavanda",

    heroTitle: "2º Grupo de Scouts Marinos de Blackrock (Louth)",
    heroSubtitle: "Navegación, aventura, marinería y comunidad en la costa irlandesa desde 1977.",
    heroBadge: "Grupo Scout Marino de Blackrock y Dundalk Bay",
    heroCtaPrimary: "Explorar Eventos",
    heroCtaSecondary: "Líderes y Patrullas",

    aboutTitle: "Bienvenidos a Nuestro Den Scout Marino",
    aboutSubtitle: "Empoderando a la juventud a través de deportes náuticos, vida al aire libre y amistad.",
    aboutDesc: "Ubicados en el pueblo costero de Blackrock, Co. Louth, nuestro grupo combina los valores scouts tradicionales con instrucción náutica. Desde vela y remo hasta navegación costera y campamentos.",

    pillarsTitle: "Los Pilares del Scoutismo Marino",
    pillar1Title: "Seguridad Náutica y Navegación",
    pillar1Desc: "Dominio de la náutica, mareas, lecturas de cartas y gobierno de embarcaciones.",
    pillar2Title: "Campamentos Costeros",
    pillar2Desc: "Expediciones, vida al aire libre y cuidado del medio ambiente en las costas de Irlanda.",
    pillar3Title: "Sistema de Patrullas",
    pillar3Desc: "Patrullas dirigidas por Líderes de Patrulla (PL) y Asistentes de Patrulla (APL).",
    pillar4Title: "Comunidad y Servicio",
    pillar4Desc: "Participación activa en conservación marina y eventos locales.",

    sectionsTitle: "Nuestras Secciones Scout",
    sectionsSubtitle: "Programas diseñados para edades de 6 a 18 años.",
    beaversTitle: "Beaver Scouts (Castores)",
    beaversAge: "6 a 8 años",
    beaversDesc: "Por designar",
    cubsTitle: "Cub Scouts (Lobatos)",
    cubsAge: "8 a 11 años",
    cubsDesc: "Por designar",
    scoutsTitle: "Sea Scouts (Scouts Marinos)",
    scoutsAge: "11 a 15 años",
    scoutsDesc: "Vela, expediciones de remo, navegación, campamentos de noche y liderazgo de patrulla.",
    venturersTitle: "Venturer Scouts",
    venturersAge: "15 a 18 años",
    venturersDesc: "Por designar",

    statsTitle: "Logros del Grupo",
    statMembers: "Jóvenes Activos",
    statVolunteers: "Líderes Formados",
    statBoats: "Flota de Veleros y Kayaks",
    statYears: "Años de Scoutismo Marino",

    nextEventTitle: "Próximo Evento Destacado",
    nextEventSubtitle: "Cuenta atrás para nuestra siguiente aventura en el agua",
    viewAllEvents: "Ver Todos los Próximos Eventos",

    isaSailing: "Vela Certificada por ISA",
    coastalKayaking: "Kayak Costero",
    overnightCamps: "Campamentos Nocturnos",
    beaversMeetingTime: "Por designar",
    cubsMeetingTime: "Por designar",
    scoutsMeetingTime: "Miércoles 19:30 @ Escuela St Francis",
    venturersMeetingTime: "Por designar",
    tbcLabel: "Por designar",

    eventsPageTitle: "Eventos y Expediciones",
    eventsPageSubtitle: "Consulta horarios, equipamiento necesario, rutas y contador en tiempo real.",
    filterAll: "Todos los Eventos",
    filterWater: "Actividades Acuáticas",
    filterCamp: "Campamentos",
    filterHike: "Rutas y Senderismo",
    filterCeremony: "Ceremonias",
    filterTraining: "Formaciones",
    filterPlanning: "En Planificación",
    statusPlanning: "En Proceso de Planificación",
    statusConfirmed: "Evento Confirmado",
    dateTBD: "Fecha por Determinar",
    planningNotice: "Este evento se encuentra actualmente en proceso de planificación. Las fechas definitivas, la ruta y el equipo requerido se publicarán próximamente.",
    searchEventsPlaceholder: "Buscar evento o ubicación...",
    noEventsFound: "No se encontraron eventos con los criterios seleccionados.",

    countdownTitle: "Tiempo Restante para el Comienzo",
    countdownDays: "Días",
    countdownHours: "Horas",
    countdownMinutes: "Min",
    countdownSeconds: "Seg",
    eventStarted: "¡Este evento está en marcha actualmente!",

    eventDetailsBtn: "Ver Plan Completo del Evento",
    eventLocation: "Ubicación",
    eventType: "Categoría del Evento",
    eventSections: "Secciones Participantes",
    eventPlan: "Planificación y Horario",
    eventRoute: "Instrucciones de Ruta y Acceso",
    eventGearRequired: "Lista de Equipamiento Necesario",
    eventNotes: "Notas Importantes",
    eventLeaderContact: "Líder de Contacto",
    closeModal: "Cerrar Detalles",

    galleryTitle: "Galería Interactiva de Fotos",
    gallerySubtitle: "Explora fotografías de campamentos pasados, actividades acuáticas, hikes y momentos del grupo.",
    galleryFilterAll: "Todas las Fotografías",
    galleryCategoryWater: "Deportes Náuticos y Vela",
    galleryCategoryCamp: "Campamentos y Vida Scout",
    galleryCategoryHike: "Rutas y Excursiones",
    galleryCategoryInvestiture: "Promesas y Ceremonias",
    galleryCategoryLeaders: "Fotografías de Líderes",
    galleryCategoryGroup: "Vida de Grupo",
    searchGalleryPlaceholder: "Buscar fotos por etiqueta o nombre...",
    photoCount: "Fotografías Disponibles",
    noPhotosFound: "No se encontraron fotografías en esta carpeta.",
    viewFullscreen: "Ver en Pantalla Completa",
    imageDetails: "Detalles de la Imagen",
    album: "Álbum / Carpeta",

    albumLgTitle: "Visita a la Estación de Salvamento de Clogherhead",
    albumLgDesc: "Visita de los scouts a la estación de salvamento costero de Clogherhead.",
    albumInvestitureTitle: "Promesas e Investiduras",
    albumInvestitureDesc: "Promesas scouts, entrega de insignias y desfile de banderas.",
    albumCampTitle: "Campamentos",
    albumCampDesc: "Campamentos al aire libre, montaje de tiendas de patrulla y cocina en fogata.",
    albumHikeTitle: "Senderismo y Rutas",
    albumHikeDesc: "Exploración de los Montes Cooley y práctica de mapa y brújula.",
    albumWaterTitle: "Deportes Acuáticos",
    albumWaterDesc: "Kayak, regatas de vela y prácticas de remo en Dundalk Bay.",
    albumLeadersTitle: "Presentación de Líderes",
    albumLeadersDesc: "Retratos de nuestros líderes responsables y líderes de patrulla.",

    photoInvestiture1: "Ceremonia de Promesa Scout",
    photoInvestiture2: "Entrega de Insignias",
    photoInvestiture3: "Investidura de Pañoleta",
    photoInvestiture4: "Formación de la Guardia de Bandera",
    photoInvestiture5: "Foto de Grupo de la Investidura",
    photoCamp1: "Montaje de Tiendas de Campamento",
    photoCamp2: "Cena en Fogata y Cocina",
    photoCamp3: "Inspección Matutina",
    photoHike1: "Ruta del Monte Slieve Foye",
    photoHike2: "Navegación con Mapa y Brújula",
    photoHike3: "Punto de Control en la Cresta",
    photoHike4: "Foto de Grupo en la Cumbre",
    photoHike5: "Descenso y Atardecer",
    photoWater1: "Regata de Vela en Dundalk Bay",
    photoWater2: "Sesión de Kayak en Grupo",
    photoWater3: "Práctica de Remo y Seguridad",
    photoLg1: "Visita a la Estación de Salvavidas de Clogherhead",
    photoLg2: "Ajuste de Chalecos Salvavidas",
    photoLg3: "Taller de Equipamiento del Guarda Costas",
    photoLg4: "Vehículo de Rescate del Guarda Costas",
    photoLg5: "Demostración de Rescate Acuático",
    photoLg6: "Presentación en la Estación y Preguntas",
    photoLg7: "Foto del Equipo del Guarda Costas",
    photoLg8: "Inspección del Equipo del Bote Salvavidas",
    photoLg9: "Foto de Grupo en Clogherhead",
    photoLideres1: "Taidgh Malone - Líder de Patrulla",

    ariaPrevImage: "Imagen Anterior",
    ariaNextImage: "Imagen Siguiente",

    leadersTitle: "Equipo de Líderes",
    leadersSubtitle: "Conoce a nuestros responsables adultos y líderes de patrulla (PL y APL).",
    tabAllLeaders: "Todos los Líderes",
    tabAdultLeaders: "Líderes Adultos",
    tabPatrolLeaders: "Líderes de Patrulla (PL)",
    tabAssistantPatrolLeaders: "Asistentes de Patrulla (APL)",
    roleLeader: "Líder Scout",
    rolePL: "Patrol Leader",
    roleAPL: "Assistant Patrol Leader",
    bioLabel: "Biografía",
    skillsLabel: "Certificaciones y Especialidades",
    noLeadersFound: "No se encontraron líderes en esta categoría.",

    leaderFrankBio: "Alias Skipper. Líder Principal Scout. Le encantan los trenes.",
    leaderFiachraBio: "Divertido. Llama a los scouts una «dictadura democrática».",
    leaderAelaBio: "Muy organizada.",
    leaderJoshBio: "Gran sentido del humor. Tiene muchas habilidades aleatorias.",
    leaderTaidghBio: "Abusa de su poder. Bebe muchísimo té (7+ tazas al día). Gran ambiente.",
    leaderSophiaBio: "Le encanta el caos.",
    leaderAlannahBio: "50% de probabilidad de que no esté. Muy buen corazón.",
    leaderMateuszBio: "Lleva aquí una década. As de Nucks.",
    titleSkipper: "Líder Principal Scout (Skipper)",
    titleScoutLeader: "Líder Scout",
    titlePL: "Líder de Patrulla (PL)",
    titleAPL: "Asistente de Patrulla (APL)",
    patrolOtter: "Patrulla Nutria",
    patrolCurlew: "Patrulla Zarapito",
    certSkipper: "Patrón (Skipper)",
    certSailingInstructor: "Instructor de Vela",
    certScoutLeader: "Líder Scout",
    certSafetyOfficer: "Oficial de Seguridad",
    certEventCoordinator: "Coordinador de Eventos",
    certOutdoorSkills: "Especialista en Técnicas de Aire Libre",
    certPatrolWarrant: "Nombramiento de Liderazgo de Patrulla",
    certTeaMaster: "Maestro del Té",
    certAPL: "Asistente de Líder de Patrulla",
    cert10Years: "10 Años de Servicio",

    event1Title: "Jornada de Supervivencia y acampamento",
    event1Desc: "Planificando una jornada en la naturaleza con técnicas de fuego, cocina al aire libre y refugios.",
    event1Loc: "Bosque de Cooley y Den Naomh Proinsias, Co. Louth",
    event1Plan1: "10:00 - Llegada y sesión informativa de seguridad",
    event1Plan2: "10:30 - Taller de encendido de fuego por fricción",
    event1Plan3: "12:30 - Competición de cocina scout (Bannock y guiso)",
    event1Plan4: "14:30 - Construcción de refugio natural y nudos",
    event1Plan5: "16:30 - Resumen y ceremonia de clausura",
    event1Route: "Encuentro en el terreno de la Escuela St Francis, Blackrock.",
    event1Gear1: "Pañoleta Scout y Uniforme de Actividad",
    event1Gear2: "Botas de montaña resistentes y chaqueta impermeable",
    event1Gear3: "Fuego de campamento / menaje y cubiertos",
    event1Gear4: "Cantimplora y snacks energéticos",
    event1Gear5: "Botiquín personal de primeros auxilios",
    event1Notes: "Llevar ropa usada apta para fuego al aire libre y cocina.",
    event2Title: "Regata de Vela y Remo de Dundalk Bay",
    event2Desc: "Regata anual scout de vela y carrera de remo a lo largo del paseo marítimo de Blackrock.",
    event2Loc: "Paseo Marítimo de Blackrock y Varadero Scout, Co. Louth",
    event2Plan1: "09:30 - Formación en el varadero y aparejo de barcos",
    event2Plan2: "10:30 - Briefing de seguridad y meteorología",
    event2Plan3: "11:00 - Mangas de regata y recorrido de vela",
    event2Plan4: "14:00 - Carrera de remo y navegación de patrulla",
    event2Plan5: "16:30 - Desarmado y entrega de trofeos",
    event2Route: "Acceso por la calle principal de Blackrock. Aparcamiento público junto al Den.",
    event2Gear1: "Pañoleta Scout y Uniforme",
    event2Gear2: "Chaleco salvavidas / Ayuda a la flotabilidad homologada",
    event2Gear3: "Traje de neopreno o ropa técnica de vela impermeable",
    event2Gear4: "Escarpines de neopreno o zapatillas viejas",
    event2Gear5: "Toalla y muda completa de ropa de abrigo",
    event2Notes: "Sujeto a condiciones meteorológicas.",
    event3Title: "Investidura Anual de Grupo y Entrega de Premios",
    event3Desc: "Bienvenida a nuevos Castores, Lobatos y Scouts Marinos en el grupo 2nd Louth.",
    event3Loc: "Escuela St Francis, Blackrock, Co. Louth",
    event3Plan1: "19:30 - Inspección y formación de la guardia de bandera",
    event3Plan2: "20:00 - Promesa Scout y ceremonia de investidura",
    event3Plan3: "20:30 - Entrega de insignias náuticas y proyección",
    event3Plan4: "21:00 - Té, aperitivos y convivencia social",
    event3Route: "Escuela St Francis, Blackrock, Co. Louth A91 NH0V.",
    event3Gear1: "Uniforme Scout Oficial Completo (Limpio y Planchado)",
    event3Gear2: "Zapatos limpios o zapatillas oscuras",
    event3Gear3: "Pañoleta Scout con pasador (woggle)",
    event3Notes: "Padres, madres, tutores y familiares quedan cordialmente invitados.",
    eventContactSkipperFrank: "Skipper Frank (+353 868 22 55 22)",
    eventContactFiachra: "Skipper Frank (+353 868 22 55 22)",
    typeCamp: "Campamento y Expedición",
    typeWater: "Actividad Acuática",
    typeCeremony: "Ceremonia",
    secBeavers: "Castores",
    secCubs: "Lobatos",
    secScouts: "Scouts Marinos",
    secVenturers: "Venturers",

    contactTitle: "Contacto con el 2º grupo de Scout Marinos en Louth",
    contactSubtitle: "Ponte en contacto para inscripciones, voluntariado de líderes o consultas generales.",
    contactNoticeSubtitle: "Las únicas formas de contactarnos son en persona presentándose a una reunión o directamente al Líder Frank por llamada o WhatsApp.",
    contactFrankTitle: "Contacto Directo con el Líder Frank",
    contactFrankDesc: "Llame o envíe un mensaje directamente al Líder Frank (+353 868 22 55 22) por WhatsApp para cualquier consulta.",
    contactInPersonTitle: "Visítenos en Persona",
    contactInPersonDesc: "Venga a conocernos en persona en St Francis National School durante nuestras reuniones semanales de Sea Scouts.",
    callFrankButton: "Llamar a Frank (+353 868 22 55 22)",
    whatsappFrankButton: "Enviar WhatsApp",
    youthFormTitle: "Inscripción de Jóvenes",
    youthFormDesc: "Si le interesa que su hijo/a participe en los grupos, complete este breve formulario:",
    youthFormDisclaimer: "Tenga en cuenta: Actualmente, las plazas para los Castores (de 6 a 9 años) y los Lobatos (de 9 a 12 años) están completas, y la disponibilidad en el Grupo Scout (mayores de 12 años) es limitada. Sin embargo, contamos con una lista de espera y ofreceremos las plazas lo antes posible.",
    youthFormButton: "Completar Formulario de Inscripción",
    volunteerFormTitle: "Consulta de Voluntariado para Líderes",
    volunteerFormDesc: "Si su consulta está relacionada con el voluntariado en el grupo, complete este breve formulario y le responderemos lo antes posible con toda la información relevante:",
    volunteerFormButton: "Completar Formulario de Voluntariado",
    emailInquiryDesc: "Para consultas por correo electrónico, escriba a:",
    contactInfoTitle: "Información de Contacto del Grupo",
    addressLabel: "Dirección del Den Scout",
    emailLabel: "Correo Electrónico",
    phoneLabel: "Teléfono",
    meetingTimesTitle: "Horarios de Reuniones Semanales",
    formTitle: "Enviarnos un Mensaje",
    formSubtitleDesc: "Rellena los datos a continuación para contactar con los responsables del 2º Grupo de Scouts Marinos de Blackrock (Louth).",
    formNameLabel: "Tu Nombre",
    formNamePlaceholder: "ej., Siobhán O'Connor",
    formEmailLabel: "Correo Electrónico",
    formEmailPlaceholder: "siobhan@ejemplo.com",
    formSectionLabel: "Sección de Interés",
    formSectionSelect: "Selecciona una sección...",
    formSubjectLabel: "Asunto",
    formSubjectPlaceholder: "ej., Información para ingreso en Lobatos",
    formMessageLabel: "Mensaje",
    formMessagePlaceholder: "¿En qué podemos ayudarte?",
    formSubmitBtn: "Enviar Mensaje",
    formSubmitting: "Enviando...",
    formSuccessTitle: "¡Mensaje Enviado!",
    formSuccessMsg: "¡Gracias! Tu mensaje ha sido enviado correctamente a los líderes.",
    formSendAnother: "Enviar Otro Mensaje",
    formDisabledNoticeTitle: "Formulario de Contacto Desactivado",
    formDisabledNoticeDesc: "El formulario de contacto web está desactivado temporalmente. Por favor contáctanos directamente a través del correo oficial o visitándonos en el Den.",
    optBeavers: "Beaver Scouts (6-8 años)",
    optCubs: "Cub Scouts (8-11 años)",
    optScouts: "Sea Scouts (11-15 años)",
    optVenturers: "Venturer Scouts (15-18 años)",
    optLeadership: "Consulta para Voluntariado de Líder",
    optGeneral: "Consulta General del Grupo",
    denBadge: "Den",

    footerDesc: "El 2º Grupo de Scouts Marinos de Blackrock (Louth) forma parte de Scouting Ireland, dedicado al desarrollo de jóvenes y actividades náuticas en Blackrock, Co. Louth.",
    footerQuickLinks: "Enlaces Rápidos",
    footerMeetingDen: "Blackrock Sea Scout Den, Promenade, Blackrock, Co. Louth",
    footerCopyright: "© 2026 2º Grupo de Scouts Marinos de Blackrock (Louth). Todos los derechos reservados.",
    footerScoutingIreland: "Grupo Miembro de Scouting Ireland",
    footerLocation: "Blackrock, Co. Louth, Irlanda"
  },

  pl: {
    navHome: "Strona Główna",
    navEvents: "Wydarzenia",
    navGallery: "Galeria Zdjęć",
    navLeaders: "Liderzy",
    navContact: "Kontakt",
    selectLanguage: "Język",
    selectTheme: "Motyw Kolorystyczny",
    toggleDarkMode: "Tryb Ciemny/Jasny",

    themeSea: "Morska Zieleń",
    themeCoral: "Koralowy",
    themeBlue: "Oceaniczny Błękit",
    themeRed: "Harcerska Czerwień",
    themeOrange: "Bursztynowy",
    themeYellow: "Złote Słońce",
    themeLavender: "Lawendowa Mgła",

    heroTitle: "2º Grupo de Scouts Marinos de Blackrock (Louth)",
    heroSubtitle: "Przygoda, żeglarstwo i wspólnota na irlandzkim wybrzeżu od 1977 roku.",
    heroBadge: "Morska Drużyna Harcerska z Blackrock",
    heroCtaPrimary: "Zobacz Wydarzenia",
    heroCtaSecondary: "Nasi Liderzy",

    aboutTitle: "Witaj w Naszym Harcerskim Denie Morskim",
    aboutSubtitle: "Rozwój młodzieży poprzez sporty wodne, obozownictwo i przyjaźń na całe życie.",
    aboutDesc: "Nasza grupa w nadmorskiej miejscowości Blackrock, Co. Louth, łączy tradycyjne wartości harcerskie z wyszkoleniem morskim.",

    pillarsTitle: "Filary Harcerstwa Morskiego",
    pillar1Title: "Bezpieczeństwo na Wodzie i Nawigacja",
    pillar1Desc: "Praktyka żeglarska, pływy i prowadzenie łodzi pod nadzorem wykwalifikowanej kadry.",
    pillar2Title: "Obozy Nadmorskie",
    pillar2Desc: "Wyprawy obozowe, sztuka przetrwania i ochrona środowiska morskiego.",
    pillar3Title: "System Zastępowych",
    pillar3Desc: "Zastępy prowadzone przez Zastępowych (PL) i Podzastępowych (APL).",
    pillar4Title: "Służba Społeczna",
    pillar4Desc: "Aktywny udział w ochronie przyrody i wydarzeniach lokalnych.",

    sectionsTitle: "Nasze Sekcje Wiekowe",
    sectionsSubtitle: "Programy dostosowane do wieku od 6 do 18 lat.",
    beaversTitle: "Beaver Scouts (Bóbr)",
    beaversAge: "Wiek 6 - 8 lat",
    beaversDesc: "Do ustalenia",
    cubsTitle: "Cub Scouts (Wilczki)",
    cubsAge: "Wiek 8 - 11 lat",
    cubsDesc: "Do ustalenia",
    scoutsTitle: "Sea Scouts (Harcerze Morscy)",
    scoutsAge: "Wiek 11 - 15 lat",
    scoutsDesc: "Żeglarstwo, wioślarstwo, nawigacja i obozy pod namiotami.",
    venturersTitle: "Venturer Scouts",
    venturersAge: "Wiek 15 - 18 lat",
    venturersDesc: "Do ustalenia",

    statsTitle: "Osiągnięcia Grupy",
    statMembers: "Aktywnych Harcerzy",
    statVolunteers: "Przeszkolonych Liderów",
    statBoats: "Flota Żaglówek i Kajaków",
    statYears: "Lat Harcerstwa Morskiego",

    nextEventTitle: "Najbliższe Wydarzenie",
    nextEventSubtitle: "Odliczanie do naszej kolejnej przygody na wodzie",
    viewAllEvents: "Zobacz Wszystkie Wydarzenia",

    isaSailing: "Certyfikowane Żeglarstwo ISA",
    coastalKayaking: "Kajakarstwo Morskie",
    overnightCamps: "Obozy z Noclegiem",
    beaversMeetingTime: "Do ustalenia",
    cubsMeetingTime: "Do ustalenia",
    scoutsMeetingTime: "Środy 19:30 @ Harcówka St Francis",
    venturersMeetingTime: "Do ustalenia",
    tbcLabel: "Do ustalenia",

    eventsPageTitle: "Wydarzenia i Wyprawy",
    eventsPageSubtitle: "Sprawdź harmonogram, wymagany ekwipunek, trasy i odliczanie na żywo.",
    filterAll: "Wszystkie Wydarzenia",
    filterWater: "Zajęcia Wodne",
    filterCamp: "Obozy i Biwaki",
    filterHike: "Raidy i Marsze",
    filterCeremony: "Uroczystości",
    filterTraining: "Szkolenia",
    filterPlanning: "W Planowaniu",
    statusPlanning: "W Fazie Planowania",
    statusConfirmed: "Wydarzenie Potwierdzone",
    dateTBD: "Data do Uzgodnienia",
    planningNotice: "To wydarzenie jest obecnie w fazie planowania. Ostateczne daty, trasa i sprzęt zostaną opublikowane wkrótce.",
    searchEventsPlaceholder: "Szukaj wydarzenia lub miejsca...",
    noEventsFound: "Nie znaleziono wydarzeń spełniających kryteria.",

    countdownTitle: "Czas do Rozpoczęcia Wydarzenia",
    countdownDays: "Dni",
    countdownHours: "Godz",
    countdownMinutes: "Min",
    countdownSeconds: "Sek",
    eventStarted: "To wydarzenie właśnie trwa!",

    eventDetailsBtn: "Zobacz Pełny Plan Wydarzenia",
    eventLocation: "Lokalizacja",
    eventType: "Kategoria Wydarzenia",
    eventSections: "Biorące Udział Sekcje",
    eventPlan: "Plan i Harmonogram",
    eventRoute: "Trasa i Wskazówki",
    eventGearRequired: "Lista Wymaganego Ekwipunku",
    eventNotes: "Ważne Uwagi",
    eventLeaderContact: "Kontakt do Lidera",
    closeModal: "Zamknij Szczegóły",

    galleryTitle: "Interaktywna Galeria Zdjęć",
    gallerySubtitle: "Przeglądaj zdjęcia z obozów, zajęć wodnych, rajdów i uroczystości.",
    galleryFilterAll: "Wszystkie Zdjęcia",
    galleryCategoryWater: "Sporty Wodne i Żeglarstwo",
    galleryCategoryCamp: "Obozy i Biwaki",
    galleryCategoryHike: "Rajdy i Piesze Wyprawy",
    galleryCategoryInvestiture: "Przyrzeczenia i Ceremonie",
    galleryCategoryLeaders: "Zdjęcia Liderów",
    galleryCategoryGroup: "Życie Drużyny",
    searchGalleryPlaceholder: "Szukaj zdjęć według tagu...",
    photoCount: "Dostępnych Zdjęć",
    noPhotosFound: "Brak zdjęć w tym folderze.",
    viewFullscreen: "Powiększ Zdjęcie",
    imageDetails: "Informacje o Zdjęciu",
    album: "Album / Folder",

    albumLgTitle: "Wizyta w stacji ratownictwa morskiego Clogherhead",
    albumLgDesc: "Wizyta harcerzy w stacji ratownictwa przybrzeżnego Clogherhead.",
    albumInvestitureTitle: "Przyrzeczenia i Obietnice",
    albumInvestitureDesc: "Uroczyste przyrzeczenie harcerskie i wręczenie sprawności.",
    albumCampTitle: "Obozy Harcerskie",
    albumCampDesc: "Biwaki na świeżym powietrzu, rozstawianie namiotów zastępu.",
    albumHikeTitle: "Wyprawy Górskie i Rajdy",
    albumHikeDesc: "Wyprawa w Góry Cooley oraz ćwiczenia z mapą i kompasem.",
    albumWaterTitle: "Sporty Wodne",
    albumWaterDesc: "Kajakarstwo, regaty żeglarskie i nauka wiosłowania.",
    albumLeadersTitle: "Kadra Harcerska",
    albumLeadersDesc: "Portrety naszych instruktorów i zastępowych.",

    photoInvestiture1: "Ceremonia Przyrzeczenia Harcerskiego",
    photoInvestiture2: "Wręczenie Sprawności",
    photoInvestiture3: "Przyrzeczenie Chusty",
    photoInvestiture4: "Zbiórka Pocztu Sztandarowego",
    photoInvestiture5: "Zdjęcie Grupowe z Przyrzeczenia",
    photoCamp1: "Rozstawianie Namiotów",
    photoCamp2: "Obiad przy Ognisku",
    photoCamp3: "Mundurowy Apel Poranny",
    photoHike1: "Szlak Górski Slieve Foye",
    photoHike2: "Nawigacja z Mapą i Kompasem",
    photoHike3: "Punkt Kontrolny na Grani",
    photoHike4: "Zdjęcie Grupowe na Szczycie",
    photoHike5: "Zejście i Zachód Słońca",
    photoWater1: "Regaty Żeglarskie w Dundalk Bay",
    photoWater2: "Grupowy Spływ Kajakowy",
    photoWater3: "Trening Wioślarski i Bezpieczeństwo",
    photoLg1: "Wizyta w Stacji Ratownictwa Clogherhead",
    photoLg2: "Dopasowanie Kamizelek Asekuracyjnych",
    photoLg3: "Warsztaty Sprzętu Ratowniczego",
    photoLg4: "Pojazd Ratowniczy Straży Przybrzeżnej",
    photoLg5: "Pokaz Ratownictwa Wodnego",
    photoLg6: "Odprawa w Stacji i Pytania",
    photoLg7: "Zdjęcie Zespołu Straży Przybrzeżnej",
    photoLg8: "Kontrola Sprzętu Łodzi Ratunkowej",
    photoLg9: "Zdjęcie Grupowe w Clogherhead",
    photoLideres1: "Taidgh Malone - Zastępowy",

    ariaPrevImage: "Poprzednie Zdjęcie",
    ariaNextImage: "Następne Zdjęcie",

    leadersTitle: "Zespół Liderów",
    leadersSubtitle: "Poznaj naszych instruktorów oraz zastępowych (PL i APL).",
    tabAllLeaders: "Wszyscy Liderzy",
    tabAdultLeaders: "Liderzy Dorosły",
    tabPatrolLeaders: "Zastępowi (PL)",
    tabAssistantPatrolLeaders: "Podzastępowi (APL)",
    roleLeader: "Lider Harcerski",
    rolePL: "Zastępowy (PL)",
    roleAPL: "Podzastępowy (APL)",
    bioLabel: "Biografia",
    skillsLabel: "Certyfikaty i Umiejętności",
    noLeadersFound: "Brak liderów w tej kategorii.",

    leaderFrankBio: "Pseudonim Skipper. Główny Drużynowy. Lubi pociągi.",
    leaderFiachraBio: "Zabawny. Nazywa harcerzy „demokratyczną dyktaturą”.",
    leaderAelaBio: "Bardzo zorganizowana.",
    leaderJoshBio: "Dobre poczucie humoru. Ma wiele nietypowych umiejętności.",
    leaderTaidghBio: "Nadużywa swojej władzy. Pije mnóstwo herbaty (7+ szklanek dziennie).",
    leaderSophiaBio: "Uwielbia chaos.",
    leaderAlannahBio: "50% szans, że jej nie będzie. Bardzo dobre serce.",
    leaderMateuszBio: "Jest tu od dekady. As Nucks.",
    titleSkipper: "Główny Drużynowy (Skipper)",
    titleScoutLeader: "Instruktor Harcerski",
    titlePL: "Zastępowy (PL)",
    titleAPL: "Podzastępowy (APL)",
    patrolOtter: "Zastęp Wydry",
    patrolCurlew: "Zastęp Kuliki",
    certSkipper: "Szyper",
    certSailingInstructor: "Instruktor Żeglarstwa",
    certScoutLeader: "Drużynowy",
    certSafetyOfficer: "Oficer Bezpieczeństwa",
    certEventCoordinator: "Koordynator Wydarzeń",
    certOutdoorSkills: "Specjalista Puszczaństwa",
    certPatrolWarrant: "Patent Zastępowego",
    certTeaMaster: "Mistrz Herbaty",
    certAPL: "Podzastępowy",
    cert10Years: "10 Lat Służby",

    event1Title: "Dzień Puszczaństwa i Survivalu",
    event1Desc: "Dzień z technikami rozpalania ognia, gotowaniem w terenie i budową schronień.",
    event1Loc: "Las Cooley i Harcówka St Francis, Co. Louth",
    event1Plan1: "10:00 - Zbiórka i odprawa bezpieczeństwa",
    event1Plan2: "10:30 - Warsztaty rozpalania ognia tarciem",
    event1Plan3: "12:30 - Konkurs gotowania harcerskiego (Chleb puszczański i gulasz)",
    event1Plan4: "14:30 - Budowa schronienia naturalnego i węzły",
    event1Plan5: "16:30 - Podsumowanie i apel końcowy",
    event1Route: "Zbiórka na terenie Szkoły St Francis, Blackrock.",
    event1Gear1: "Chusta Harcerska i Mundur Polowy",
    event1Gear2: "Wygodne buty terenowe i kurtka przeciwdeszczowa",
    event1Gear3: "Menażka puszczańska i sztućce",
    event1Gear4: "Bidon z wodą i przekąski",
    event1Gear5: "Osobista apteczka",
    event1Notes: "Weź stare ubrania odpowiednie do ogniska i gotowania.",
    event2Title: "Regaty Żeglarskie i Wioślarskie Dundalk Bay",
    event2Desc: "Coroczne regaty żeglarskie i wyścig wioślarski na promenadzie w Blackrock.",
    event2Loc: "Promenada w Blackrock i Przystań Harcerska, Co. Louth",
    event2Plan1: "09:30 - Zbiórka na przystani i taklowanie łodzi",
    event2Plan2: "10:30 - Odprawa bezpieczeństwa i sprawdzenie pogody",
    event2Plan3: "11:00 - Wyścigi regatowe i trasa żeglarska",
    event2Plan4: "14:00 - Wyścig wioślarski i nawigacja zastępów",
    event2Plan5: "16:30 - Klarowanie sprzętu i wręczenie pucharów",
    event2Route: "Dojazd przez główną ulicę Blackrock Promenade.",
    event2Gear1: "Chusta Harcerska i Mundur",
    event2Gear2: "Certyfikowana kamizelka asekuracyjna (PFD)",
    event2Gear3: "Pianka neoprenowa lub sztormiak",
    event2Gear4: "Buty neoprenowe lub stare trampki",
    event2Gear5: "Ręcznik i komplet ciepłych ubrań na zmianę",
    event2Notes: "Zależne od warunków pogodowych.",
    event3Title: "Roczne Przyrzeczenie i Wręczenie Wyróżnień",
    event3Desc: "Uroczyste przyjęcie nowych Zuchów i Harcerzy Morskich do drużyny 2nd Louth.",
    event3Loc: "Szkoła St Francis, Blackrock, Co. Louth",
    event3Plan1: "19:30 - Apel i musztra pocztu sztandarowego",
    event3Plan2: "20:00 - Przyrzeczenie Harcerskie i ceremonia",
    event3Plan3: "20:30 - Wręczenie sprawności morskich i pokaz slajdów",
    event3Plan4: "21:00 - Herbata, poczęstunek i spotkanie integracyjne",
    event3Route: "Szkoła St Francis, Blackrock, Co. Louth A91 NH0V.",
    event3Gear1: "Pełny Mundur Harcerski (Czysty i Wyprasowany)",
    event3Gear2: "Czyste ciemne buty",
    event3Gear3: "Chusta Harcerska z suwakiem",
    event3Notes: "Rodzice, opiekunowie i rodziny są serdecznie zaproszeni.",
    eventContactSkipperFrank: "Skipper Frank (+353 868 22 55 22)",
    eventContactFiachra: "Skipper Frank (+353 868 22 55 22)",
    typeCamp: "Obóz i Biwak",
    typeWater: "Zajęcia Wodne",
    typeCeremony: "Ceremonia",
    secBeavers: "Bobry",
    secCubs: "Wilczki",
    secScouts: "Harcerze Morscy",
    secVenturers: "Wędrownicy",

    contactTitle: "Kontakt z 2nd Louth Sea Scouts",
    contactSubtitle: "Skontaktuj się w sprawie dołączenia do drużyny lub wolontariatu.",
    contactNoticeSubtitle: "Jedynym sposobem kontaktowania się z nami jest osobiste przyjście na spotkanie lub bezpośredni kontakt z druhem Frankiem przez telefon lub WhatsApp.",
    contactFrankTitle: "Bezpośredni kontakt z Druhem Frankiem",
    contactFrankDesc: "Zadzwoń lub napisz bezpośrednio do Druha Franka (+353 868 22 55 22) na WhatsApp w jakiejkolwiek sprawie.",
    contactInPersonTitle: "Odwiedź nas osobiście",
    contactInPersonDesc: "Spotkaj się z nami osobiście w St Francis National School podczas naszych cotygodniowych zbiórek Sea Scouts.",
    callFrankButton: "Zadzwoń do Franka (+353 868 22 55 22)",
    whatsappFrankButton: "Wyślij wiadomość WhatsApp",
    youthFormTitle: "Rejestracja Młodzieży",
    youthFormDesc: "Jeśli jesteś zainteresowany dołączeniem swojego dziecka do grupy, wypełnij ten krótki formularz:",
    youthFormDisclaimer: "Uwaga: Obecnie miejsca dla Bobrów (6–9 lat) i Wilczków (9–12 lat) są pełne, a dostępność w Grupie Harcerskiej (12+ lat) jest ograniczona. Prowadzimy jednak listę oczekujących i zaoferujemy miejsca tak szybko, jak to możliwe.",
    youthFormButton: "Wypełnij Formularz Rejestracyjny",
    volunteerFormTitle: "Zapytanie dotyczące Wolontariatu",
    volunteerFormDesc: "Jeśli Twoje zapytanie dotyczy wolontariatu jako instruktor/druh w grupie, wypełnij ten krótki formularz, a odpowiemy tak szybko, jak to możliwe:",
    volunteerFormButton: "Wypełnij Formularz Wolontariatu",
    emailInquiryDesc: "W sprawach pytań e-mailowych prosimy pisać na adres:",
    contactInfoTitle: "Dane Kontaktowe Drużyny",
    addressLabel: "Adres Harcówki (Den)",
    emailLabel: "Adres E-mail",
    phoneLabel: "Telefon",
    meetingTimesTitle: "Harmonogram Zbiórek",
    formTitle: "Wyślij Wiadomość",
    formSubtitleDesc: "Wypełnij formularz, aby skontaktować się z liderami 2nd Louth.",
    formNameLabel: "Twoje Imię i Nazwisko",
    formNamePlaceholder: "np. Jan Kowalski",
    formEmailLabel: "Adres E-mail",
    formEmailPlaceholder: "jan@example.com",
    formSectionLabel: "Sekcja Wiekowa",
    formSectionSelect: "Wybierz sekcję...",
    formSubjectLabel: "Temat",
    formSubjectPlaceholder: "np. Dołączenie do Wilczków",
    formMessageLabel: "Wiadomość",
    formMessagePlaceholder: "W czym możemy pomóc?",
    formSubmitBtn: "Wyślij Wiadomość",
    formSubmitting: "Wysyłanie...",
    formSuccessTitle: "Wiadomość Wysłana!",
    formSuccessMsg: "Dziękujemy! Wiadomość została wysłana do liderów.",
    formSendAnother: "Wyślij Kolejną Wiadomość",
    formDisabledNoticeTitle: "Formularz Kontaktowy Wyłączony",
    formDisabledNoticeDesc: "Formularz kontaktowy online jest obecnie wyłączony. Prosimy o kontakt bezpośrednio przez e-mail.",
    optBeavers: "Beaver Scouts (6-8 lat)",
    optCubs: "Cub Scouts (8-11 lat)",
    optScouts: "Sea Scouts (11-15 lat)",
    optVenturers: "Venturer Scouts (15-18 lat)",
    optLeadership: "Zapytanie o Wolontariat Liderski",
    optGeneral: "Zapytanie Ogólne",
    denBadge: "Harcówka",

    footerDesc: "2nd Louth Blackrock Sea Scouts należy do Scouting Ireland, rozwijając młodzież w Blackrock, Co. Louth.",
    footerQuickLinks: "Szybkie Linki",
    footerMeetingDen: "Blackrock Sea Scout Den, Promenade, Blackrock, Co. Louth",
    footerCopyright: "© 2026 2nd Louth Blackrock Sea Scouts. Wszelkie prawa zastrzeżone.",
    footerScoutingIreland: "Grupa Członkowska Scouting Ireland",
    footerLocation: "Blackrock, Co. Louth, Irlandia"
  },

  de: {
    navHome: "Startseite",
    navEvents: "Veranstaltungen",
    navGallery: "Fotogalerie",
    navLeaders: "Leiter",
    navContact: "Kontakt",
    selectLanguage: "Sprache",
    selectTheme: "Farbthema",
    toggleDarkMode: "Dunkelmodus",

    themeSea: "Seegrün",
    themeCoral: "Korallenküste",
    themeBlue: "Ozeanblau",
    themeRed: "Pfadfinder-Rot",
    themeOrange: "Bernstein",
    themeYellow: "Sonnengelb",
    themeLavender: "Lavendel",

    heroTitle: "2nd Louth Blackrock Sea Scouts",
    heroSubtitle: "Abenteuer, Seemannschaft und Gemeinschaft an der irischen Küste seit 1977.",
    heroBadge: "Blackrock & Dundalk Bay Seepfadfinder",
    heroCtaPrimary: "Events Erkunden",
    heroCtaSecondary: "Unsere Leiter",

    aboutTitle: "Willkommen in Unserem Seepfadfinder-Den",
    aboutSubtitle: "Jugendförderung durch Wassersport, Camping und lebenslange Freundschaft.",
    aboutDesc: "Ansässig im Küstenort Blackrock, Co. Louth, verbinden wir traditionelle Pfadfinderwerte mit maritimer Ausbildung.",

    pillarsTitle: "Die Säulen der Seepfadfinder",
    pillar1Title: "Wassersicherheit & Navigation",
    pillar1Desc: "Meisterung von Seemannschaft, Gezeiten und Bootsführung unter zertifizierter Leitung.",
    pillar2Title: "Küstencamping & Natur",
    pillar2Desc: "Expeditionen und Umweltschutz an Irlands Küsten.",
    pillar3Title: "Sippensystem",
    pillar3Desc: "Jugendgeführte Patrouillen durch Patrol Leaders (PL) und Assistant Patrol Leaders (APL).",
    pillar4Title: "Gemeinschaft & Dienst",
    pillar4Desc: "Aktiver Einsatz für den Meeres- und Küstenschutz.",

    sectionsTitle: "Unsere Altersstufen",
    sectionsSubtitle: "Programme für Jugendliche im Alter von 6 bis 18 Jahren.",
    beaversTitle: "Biber-Pfadfinder",
    beaversAge: "Alter 6 - 8",
    beaversDesc: "Noch festzulegen",
    cubsTitle: "Wölflinge",
    cubsAge: "Alter 8 - 11",
    cubsDesc: "Noch festzulegen",
    scoutsTitle: "Seepfadfinder",
    scoutsAge: "Alter 11 - 15",
    scoutsDesc: "Segeln, Ruderexpeditionen, Kartennavigation und Übernachtungscamps.",
    venturersTitle: "Venturer-Pfadfinder",
    venturersAge: "Alter 15 - 18",
    venturersDesc: "Noch festzulegen",

    statsTitle: "Erfolge der Gruppe",
    statMembers: "Aktive Jugendliche",
    statVolunteers: "Ausgebildete Leiter",
    statBoats: "Segel- & Kajakflotte",
    statYears: "Jahre Seepfadfinden",

    nextEventTitle: "Nächstes Highlight-Event",
    nextEventSubtitle: "Countdown zu unserem nächsten Abenteuer auf dem Wasser",
    viewAllEvents: "Alle Events Anzeigen",

    isaSailing: "ISA-Zertifiziertes Segeln",
    coastalKayaking: "Küstenkajak",
    overnightCamps: "Übernachtungscamps",
    beaversMeetingTime: "Noch festzulegen",
    cubsMeetingTime: "Noch festzulegen",
    scoutsMeetingTime: "Mittwochs 19:30 @ St. Francis Gelände",
    venturersMeetingTime: "Noch festzulegen",
    tbcLabel: "Noch festzulegen",

    eventsPageTitle: "Veranstaltungen & Expeditionen",
    eventsPageSubtitle: "Termine, Ausrüstungslisten, Routen und Live-Countdowns.",
    filterAll: "Alle Events",
    filterWater: "Wasseraktivitäten",
    filterCamp: "Lager & Biwaks",
    filterHike: "Wanderungen",
    filterCeremony: "Zusammenkünfte",
    filterTraining: "Schulungen",
    filterPlanning: "In Planung",
    statusPlanning: "In Planung",
    statusConfirmed: "Bestätigtes Event",
    dateTBD: "Datum Noch Offen",
    planningNotice: "Dieses Event befindet sich derzeit in der Planung. Endgültige Termine, Route und Ausrüstung werden in Kürze veröffentlicht.",
    searchEventsPlaceholder: "Event oder Ort suchen...",
    noEventsFound: "Keine Veranstaltungen für diese Kriterien gefunden.",

    countdownTitle: "Zeit Bis Zum Eventstart",
    countdownDays: "Tage",
    countdownHours: "Stunden",
    countdownMinutes: "Min",
    countdownSeconds: "Sek",
    eventStarted: "Dieses Event läuft bereits!",

    eventDetailsBtn: "Vollständigen Plan Anzeigen",
    eventLocation: "Ort",
    eventType: "Event-Kategorie",
    eventSections: "Teilnehmende Stufen",
    eventPlan: "Zeitplan & Ablauf",
    eventRoute: "Routen- & Anfahrtsbeschreibung",
    eventGearRequired: "Erforderliche Ausrüstung",
    eventNotes: "Wichtige Hinweise",
    eventLeaderContact: "Kontaktperson",
    closeModal: "Schließen",

    galleryTitle: "Interaktive Fotogalerie",
    gallerySubtitle: "Bilder von Lagern, Wassersport, Wanderungen und Gruppenleben.",
    galleryFilterAll: "Alle Fotos",
    galleryCategoryWater: "Wassersport & Segeln",
    galleryCategoryCamp: "Lager & Outdoor",
    galleryCategoryHike: "Wanderungen",
    galleryCategoryInvestiture: "Versprechen & Feiern",
    galleryCategoryLeaders: "Unsere Leiter",
    galleryCategoryGroup: "Gruppenaktivitäten",
    searchGalleryPlaceholder: "Fotos nach Stichwort suchen...",
    photoCount: "Verfügbare Fotos",
    noPhotosFound: "Keine Fotos in diesem Ordner gefunden.",
    viewFullscreen: "Großansicht",
    imageDetails: "Foto-Informationen",
    album: "Album / Ordner",

    albumLgTitle: "Besuch der Rettungsstation Clogherhead",
    albumLgDesc: "Pfadfinderbesuch bei der Küstenwache in Clogherhead.",
    albumInvestitureTitle: "Versprechen & Aufnahme",
    albumInvestitureDesc: "Pfadfinderversprechen, Abzeichenübergabe und Fahnenappell.",
    albumCampTitle: "Zeltlager",
    albumCampDesc: "Outdoor-Camping, Zeltaufbau und Kochen am Lagerfeuer.",
    albumHikeTitle: "Wanderungen",
    albumHikeDesc: "Erkundung der Cooley-Berge mit Karte & Kompass.",
    albumWaterTitle: "Wassersport",
    albumWaterDesc: "Kajakfahren, Segelregatten und Rudern in der Dundalk Bay.",
    albumLeadersTitle: "Leitungsteam",
    albumLeadersDesc: "Porträts unserer Leiter und Sippenführer.",

    photoInvestiture1: "Zeremonie des Pfadfinderversprechens",
    photoInvestiture2: "Abzeichenverleihung",
    photoInvestiture3: "Halstuch-Versprechen",
    photoInvestiture4: "Fahnenkommando-Aufstellung",
    photoInvestiture5: "Gruppenfoto der Aufnahme",
    photoCamp1: "Zeltaufbau im Lager",
    photoCamp2: "Abendessen am Lagerfeuer",
    photoCamp3: "Morgeninspektion",
    photoHike1: "Wanderweg am Slieve Foye",
    photoHike2: "Karte & Kompass Navigation",
    photoHike3: "Kontrollpunkt am Grat",
    photoHike4: "Gruppenfoto am Gipfel",
    photoHike5: "Abstieg & Sonnenuntergang",
    photoWater1: "Segelregatta in der Dundalk Bay",
    photoWater2: "Gruppen-Kajaktour",
    photoWater3: "Ruderpraxis & Sicherheit",
    photoLg1: "Besichtigung der Rettungsstation Clogherhead",
    photoLg2: "Anpassung der Rettungswesten",
    photoLg3: "Workshop der Küstenwache",
    photoLg4: "Rettungsfahrzeug der Küstenwache",
    photoLg5: "Wasserrettungs-Demonstration",
    photoLg6: "Briefing in der Station & Fragen",
    photoLg7: "Teamfoto der Küstenwache",
    photoLg8: "Inspektion des Rettungsboots",
    photoLg9: "Gruppenfoto in Clogherhead",
    photoLideres1: "Taidgh Malone - Patrol Leader",

    ariaPrevImage: "Vorheriges Bild",
    ariaNextImage: "Nächstes Bild",

    leadersTitle: "Unser Leitungsteam",
    leadersSubtitle: "Lernen Sie unsere erwachsenen Leiter und Gruppenleiter kennen.",
    tabAllLeaders: "Alle Leiter",
    tabAdultLeaders: "Erwachsene Leiter",
    tabPatrolLeaders: "Patrol Leaders (PL)",
    tabAssistantPatrolLeaders: "Assistant Patrol Leaders (APL)",
    roleLeader: "Pfadfinderleiter",
    rolePL: "Patrol Leader",
    roleAPL: "Assistant Patrol Leader",
    bioLabel: "Biografie",
    skillsLabel: "Qualifikationen & Fähigkeiten",
    noLeadersFound: "Keine Leiter in dieser Kategorie gefunden.",

    leaderFrankBio: "Alias Skipper. Hauptleiter der Pfadfinder. Mag Züge.",
    leaderFiachraBio: "Lustig. Nennt Pfadfinder eine „demokratische Diktatur“.",
    leaderAelaBio: "Sehr organisiert.",
    leaderJoshBio: "Guter Humor. Hat viele zufällige Fähigkeiten.",
    leaderTaidghBio: "Nutzt seine Macht aus. Trinkt viel Tee (7+ Tassen am Tag).",
    leaderSophiaBio: "Liebt Chaos.",
    leaderAlannahBio: "50% Chance, dass sie nicht da ist. Sehr herzensgut.",
    leaderMateuszBio: "Seit einem Jahrzehnt dabei. Ass von Nucks.",
    titleSkipper: "Hauptleiter der Pfadfinder (Skipper)",
    titleScoutLeader: "Pfadfinderleiter",
    titlePL: "Patrouillenleiter (PL)",
    titleAPL: "Stellvertretender Patrouillenleiter (APL)",
    patrolOtter: "Otter-Patrouille",
    patrolCurlew: "Brachvogel-Patrouille",
    certSkipper: "Skipper",
    certSailingInstructor: "Segellehrer",
    certScoutLeader: "Pfadfinderleiter",
    certSafetyOfficer: "Sicherheitsbeauftragter",
    certEventCoordinator: "Event-Koordinator",
    certOutdoorSkills: "Outdoor-Spezialist",
    certPatrolWarrant: "Patrouillenführerschein",
    certTeaMaster: "Teemeister",
    certAPL: "Stellvertretender Patrouillenleiter",
    cert10Years: "10 Jahre Dienst",

    event1Title: "Waldtag & Wildnis-Survival",
    event1Desc: "Waldtag mit Feuerkunde, Outdoor-Kochen und Unterstandsbau.",
    event1Loc: "Cooley-Wald & St. Francis Gelände, Co. Louth",
    event1Plan1: "10:00 - Ankunft & Sicherheitseinweisung",
    event1Plan2: "10:30 - Feuerbau & Reibungsfeuer-Workshop",
    event1Plan3: "12:30 - Kochwettbewerb im Freien (Bannock & Eintopf)",
    event1Plan4: "14:30 - Unterstandsbau & Knoten-Challenge",
    event1Plan5: "16:30 - Nachbesprechung & Abschluss",
    event1Route: "Treffpunkt am Gelände der St Francis National School.",
    event1Gear1: "Pfadfindertuch & Aktionskleidung",
    event1Gear2: "Feste Wanderschuhe & Regenjacke",
    event1Gear3: "Kochgeschirr & Besteck",
    event1Gear4: "Trinkflasche & Snacks",
    event1Gear5: "Persönliches Erste-Hilfe-Set",
    event1Notes: "Alte Kleidung mitbringen, die für Feuerstellen geeignet ist.",
    event2Title: "Dundalk Bay Segel-Regatta & Rudern",
    event2Desc: "Jährliche Segelregatta und Ruderwettbewerb an der Promenade von Blackrock.",
    event2Loc: "Blackrock Promenade & Pfadfinder-Schlipf, Co. Louth",
    event2Plan1: "09:30 - Sammeln an der Schlipf & Boote takeln",
    event2Plan2: "10:30 - Briefing & Wetter-Check",
    event2Plan3: "11:00 - Regattaläufe & Segelkurs",
    event2Plan4: "14:00 - Ruderrennen & Navigations-Challenge",
    event2Plan5: "16:30 - Abtakeln & Pokalvergabe",
    event2Route: "Anfahrt über Blackrock Promenade. Parken am öffentlichen Parkplatz.",
    event2Gear1: "Pfadfindertuch & Kluft",
    event2Gear2: "Zertifizierte Schwimmweste (PFD)",
    event2Gear3: "Neoprenanzug oder wasserdichte Segelbekleidung",
    event2Gear4: "Neoprenschuhe oder alte Turnschuhe",
    event2Gear5: "Handtuch & Wechselkleidung",
    event2Notes: "Wetterabhängig.",
    event3Title: "Jährliche Aufnahme & Abzeichenverleihung",
    event3Desc: "Feierliche Aufnahme neuer Biber, Wölflinge und Seepfadfinder.",
    event3Loc: "St Francis National School, Blackrock, Co. Louth",
    event3Plan1: "19:30 - Aufstellung & Fahnenkommando",
    event3Plan2: "20:00 - Pfadfinderversprechen & Aufnahme",
    event3Plan3: "20:30 - Abzeichenübergabe & Diashow",
    event3Plan4: "21:00 - Tee, Erfrischungen & Geselligkeit",
    event3Route: "St Francis National School, Blackrock, Co. Louth A91 NH0V.",
    event3Gear1: "Vollständige Pfadfinderkluft (Sauber & Genagelt)",
    event3Gear2: "Saubere dunkle Schuhe",
    event3Gear3: "Pfadfindertuch mit Knoten",
    event3Notes: "Eltern und Familienangehörige sind herzlich eingeladen.",
    eventContactSkipperFrank: "Skipper Frank (+353 868 22 55 22)",
    eventContactFiachra: "Skipper Frank (+353 868 22 55 22)",
    typeCamp: "Lager & Expedition",
    typeWater: "Wasseraktivität",
    typeCeremony: "Feierlichkeit",
    secBeavers: "Biber",
    secCubs: "Wölflinge",
    secScouts: "Seepfadfinder",
    secVenturers: "Venturer",

    contactTitle: "Kontakt zu den 2nd Louth Sea Scouts",
    contactSubtitle: "Treten Sie mit uns in Kontakt bezüglich Mitgliedschaft oder Leitung.",
    contactNoticeSubtitle: "Die einzigen Möglichkeiten, uns zu kontaktieren, sind persönlich bei einem Treffen oder direkt bei Leiter Frank per Anruf oder WhatsApp.",
    contactFrankTitle: "Direkter Kontakt mit Leiter Frank",
    contactFrankDesc: "Rufen Sie Leiter Frank (+353 868 22 55 22) direkt an oder senden Sie ihm eine Nachricht über WhatsApp.",
    contactInPersonTitle: "Besuchen Sie uns persönlich",
    contactInPersonDesc: "Kommen Sie persönlich bei der St Francis National School während unserer wöchentlichen Sea Scout Treffen vorbei.",
    callFrankButton: "Frank anrufen (+353 868 22 55 22)",
    whatsappFrankButton: "WhatsApp Nachricht senden",
    youthFormTitle: "Anmeldung für Jugendliche",
    youthFormDesc: "Wenn Sie daran interessiert sind, dass Ihr Kind den Pfadfindern beitritt, füllen Sie bitte dieses kurze Formular aus:",
    youthFormDisclaimer: "Bitte beachten Sie: Derzeit sind die Plätze für Biber (6 bis 9 Jahre) und Wölflinge (9 bis 12 Jahre) voll, und die Verfügbarkeit in der Pfadfindergruppe (ab 12 Jahren) ist begrenzt. Wir führen jedoch eine Warteliste und bieten Plätze so schnell wie möglich an.",
    youthFormButton: "Anmeldeformular Öffnen",
    volunteerFormTitle: "Anfrage für Ehrenamtliche Leiter",
    volunteerFormDesc: "Wenn sich Ihre Anfrage auf ein Ehrenamt als Gruppenleiter bezieht, füllen Sie bitte dieses kurze Formular aus und wir antworten Ihnen schnellstmöglich:",
    volunteerFormButton: "Ehrenamtsformular Öffnen",
    emailInquiryDesc: "Für E-Mail-Anfragen schreiben Sie bitte an:",
    contactInfoTitle: "Kontaktdaten der Gruppe",
    addressLabel: "Adresse des Dens",
    emailLabel: "E-Mail-Adresse",
    phoneLabel: "Telefon",
    meetingTimesTitle: "Wöchentliche Gruppenstunden",
    formTitle: "Nachricht Senden",
    formSubtitleDesc: "Füllen Sie das Formular aus, um das Leitungsteam zu kontaktieren.",
    formNameLabel: "Ihr Name",
    formNamePlaceholder: "z.B. Anna Müller",
    formEmailLabel: "E-Mail-Adresse",
    formEmailPlaceholder: "anna@example.com",
    formSectionLabel: "Interessierte Stufe",
    formSectionSelect: "Stufe auswählen...",
    formSubjectLabel: "Betreff",
    formSubjectPlaceholder: "z.B. Beitritt bei den Wölflingen",
    formMessageLabel: "Nachricht",
    formMessagePlaceholder: "Wie können wir Ihnen helfen?",
    formSubmitBtn: "Nachricht Senden",
    formSubmitting: "Wird gesendet...",
    formSuccessTitle: "Nachricht Gesendet!",
    formSuccessMsg: "Vielen Dank! Ihre Nachricht wurde erfolgreich übermittelt.",
    formSendAnother: "Weitere Nachricht Senden",
    formDisabledNoticeTitle: "Kontaktformular Deaktiviert",
    formDisabledNoticeDesc: "Das Online-Kontaktformular ist derzeit deaktiviert. Bitte kontaktieren Sie uns direkt per E-Mail.",
    optBeavers: "Biber-Pfadfinder (6-8 J.)",
    optCubs: "Wölflinge (8-11 J.)",
    optScouts: "Seepfadfinder (11-15 J.)",
    optVenturers: "Venturer-Pfadfinder (15-18 J.)",
    optLeadership: "Anfrage zu Ehrenamtlicher Leitung",
    optGeneral: "Allgemeine Gruppenanfrage",
    denBadge: "Den",

    footerDesc: "2nd Louth Blackrock Sea Scouts ist Mitglied von Scouting Ireland in Blackrock, Co. Louth.",
    footerQuickLinks: "Schnelllinks",
    footerMeetingDen: "Blackrock Sea Scout Den, Promenade, Blackrock, Co. Louth",
    footerCopyright: "© 2026 2nd Louth Blackrock Sea Scouts. Alle Rechte vorbehalten.",
    footerScoutingIreland: "Mitgliedsgruppe von Scouting Ireland",
    footerLocation: "Blackrock, Co. Louth, Irland"
  },

  ru: {
    navHome: "Главная",
    navEvents: "Мероприятия",
    navGallery: "Галерея",
    navLeaders: "Руководители",
    navContact: "Контакты",
    selectLanguage: "Язык",
    selectTheme: "Цветовая тема",
    toggleDarkMode: "Тёмная тема",

    themeSea: "Морской зелёный",
    themeCoral: "Кораловый берег",
    themeBlue: "Океанский синий",
    themeRed: "Скаутский красный",
    themeOrange: "Янтарный",
    themeYellow: "Золотое солнце",
    themeLavender: "Лавандовый туман",

    heroTitle: "2nd Louth Blackrock Sea Scouts",
    heroSubtitle: "Морские приключения, парусное дело и дружба на побережье Ирландии с 1977 года.",
    heroBadge: "Морские скауты Блэкрока и Дандолка",
    heroCtaPrimary: "Смотреть события",
    heroCtaSecondary: "Наши руководители",

    aboutTitle: "Добро пожаловать в наш Морской Скаутский Ден",
    aboutSubtitle: "Воспитание молодёжи через водный спорт, походы и крепкую дружбу.",
    aboutDesc: "Наша группа в прибрежном посёлке Блэкрок (графство Лаут) сочетает традиционные скаутские ценности с морским обучением.",

    pillarsTitle: "Основы морского скаутинга",
    pillar1Title: "Безопасность на воде и навигация",
    pillar1Desc: "Освоение парусного дела, морских приливов и управления лодками.",
    pillar2Title: "Прибрежные лагеря",
    pillar2Desc: "Экспедиции, походная жизнь и охрана окружающей среды.",
    pillar3Title: "Патрульная система",
    pillar3Desc: "Патрули под руководством лидеров патрулей (PL) и их помощников (APL).",
    pillar4Title: "Служение обществу",
    pillar4Desc: "Активное участие в защите морской природы и местных событиях.",

    sectionsTitle: "Возрастные секции",
    sectionsSubtitle: "Программы для детей и подростков от 6 до 18 лет.",
    beaversTitle: "Бобры (Beaver Scouts)",
    beaversAge: "От 6 до 8 лет",
    beaversDesc: "Будет определено позже",
    cubsTitle: "Волчата (Cub Scouts)",
    cubsAge: "От 8 до 11 лет",
    cubsDesc: "Будет определено позже",
    scoutsTitle: "Морские скауты (Sea Scouts)",
    scoutsAge: "От 11 до 15 лет",
    scoutsDesc: "Парусный спорт, гребные походы, навигация и ночные лагеря.",
    venturersTitle: "Венчуры (Venturer Scouts)",
    venturersAge: "От 15 до 18 лет",
    venturersDesc: "Будет определено позже",

    statsTitle: "Достижения группы",
    statMembers: "Активных участников",
    statVolunteers: "Обученных лидеров",
    statBoats: "Флот яхт и каяков",
    statYears: "Лет морского скаутинга",

    nextEventTitle: "Ближайшее событие",
    nextEventSubtitle: "Обратный отсчет до следующего приключения на воде",
    viewAllEvents: "Все события",

    isaSailing: "Сертифицированный парусный спорт ISA",
    coastalKayaking: "Прибрежный каякинг",
    overnightCamps: "Ночные лагеря",
    beaversMeetingTime: "Будет определено позже",
    cubsMeetingTime: "Будет определено позже",
    scoutsMeetingTime: "Среда 19:30 @ Школа Св. Франциска",
    venturersMeetingTime: "Будет определено позже",
    tbcLabel: "Будет определено позже",

    eventsPageTitle: "Мероприятия и экспедиции",
    eventsPageSubtitle: "Расписание, необходимый снаряжение, маршруты и таймер в реальном времени.",
    filterAll: "Все события",
    filterWater: "Водные виды",
    filterCamp: "Лагеря и поход",
    filterHike: "Пешие походы",
    filterCeremony: "Церемонии",
    filterTraining: "Тренировки",
    filterPlanning: "В планировании",
    statusPlanning: "В процессе планирования",
    statusConfirmed: "Подтвержденное событие",
    dateTBD: "Дата уточняется",
    planningNotice: "Это мероприятие находится в стадии планирования. Точные даты, маршрут и список снаряжения будут опубликованы в ближайшее время.",
    searchEventsPlaceholder: "Поиск события или места...",
    noEventsFound: "Событий по заданным критериям не найдено.",

    countdownTitle: "До начала события осталось",
    countdownDays: "Дней",
    countdownHours: "Часов",
    countdownMinutes: "Мин",
    countdownSeconds: "Сек",
    eventStarted: "Это мероприятие уже проходит!",

    eventDetailsBtn: "Полный план мероприятия",
    eventLocation: "Место проведения",
    eventType: "Категория",
    eventSections: "Участвующие секции",
    eventPlan: "Расписание и план",
    eventRoute: "Маршрут и как добраться",
    eventGearRequired: "Список необходимого снаряжения",
    eventNotes: "Важные примечания",
    eventLeaderContact: "Контактный лидер",
    closeModal: "Закрыть",

    galleryTitle: "Интерактивная галерея",
    gallerySubtitle: "Фотографии из лагерей, водных соревнований, походов и жизни группы.",
    galleryFilterAll: "Все фотографии",
    galleryCategoryWater: "Водный спорт и паруса",
    galleryCategoryCamp: "Лагеря и отдых",
    galleryCategoryHike: "Походы и экскурсии",
    galleryCategoryInvestiture: "Обещания и церемонии",
    galleryCategoryLeaders: "Наши руководители",
    galleryCategoryGroup: "Жизнь группы",
    searchGalleryPlaceholder: "Поиск фото по тегам...",
    photoCount: "Доступно фото",
    noPhotosFound: "В этой папке нет фотографий.",
    viewFullscreen: "Открыть в полный экран",
    imageDetails: "Информация о фото",
    album: "Альбом / Папка",

    albumLgTitle: "Визит на спасательную станцию Клогерхед",
    albumLgDesc: "Визит скаутов на спасательную станцию Береговой охраны Клогерхед.",
    albumInvestitureTitle: "Скаутские обещания",
    albumInvestitureDesc: "Скаутские обещания, вручение нашивок и парад флагов.",
    albumCampTitle: "Походные лагеря",
    albumCampDesc: "Кемпинг на природе, установка патрульных палаток и готовка на костре.",
    albumHikeTitle: "Пешие походы",
    albumHikeDesc: "Исследование гор Кули и навыки работы с картой и компасом.",
    albumWaterTitle: "Водный спорт",
    albumWaterDesc: "Каякинг, парусные регаты и гребля в Дандолк-Бэй.",
    albumLeadersTitle: "Наши руководители",
    albumLeadersDesc: "Портреты наших руководителей и лидеров патрулей.",

    photoInvestiture1: "Церемония скаутского обещания",
    photoInvestiture2: "Вручение нашивок",
    photoInvestiture3: "Обещание галстука",
    photoInvestiture4: "Построение знаменной группы",
    photoInvestiture5: "Общее фото с обещания",
    photoCamp1: "Установка палатки",
    photoCamp2: "Ужин у костра",
    photoCamp3: "Утреннее построение",
    photoHike1: "Маршрут Слив Фой",
    photoHike2: "Навигация по карте и компасу",
    photoHike3: "Чекпоинт на хребте",
    photoHike4: "Групповое фото на вершине",
    photoHike5: "Спуск и закат",
    photoWater1: "Парусная регата в Дандолк-Бэй",
    photoWater2: "Групповой каякинг",
    photoWater3: "Тренировка по гребле и безопасность",
    photoLg1: "Экскурсия по спасательной станции Клогерхед",
    photoLg2: "Примерка спасательных жилетов",
    photoLg3: "Мастер-класс береговой охраны",
    photoLg4: "Спасательный автомобиль",
    photoLg5: "Демонстрация спасения на воде",
    photoLg6: "Инструктаж в станции и вопросы",
    photoLg7: "Командное фото береговой охраны",
    photoLg8: "Проверка спасательного катера",
    photoLg9: "Групповое фото в Клогерхед",
    photoLideres1: "Taidgh Malone - Лидер патруля",

    ariaPrevImage: "Предыдущее фото",
    ariaNextImage: "Следующее фото",

    leadersTitle: "Команда руководителей",
    leadersSubtitle: "Наши взрослые лидеры и лидеры патрулей (PL и APL).",
    tabAllLeaders: "Все лидеры",
    tabAdultLeaders: "Взрослые лидеры",
    tabPatrolLeaders: "Лидеры патрулей (PL)",
    tabAssistantPatrolLeaders: "Помощники лидеров (APL)",
    roleLeader: "Скаутский лидер",
    rolePL: "Лидер патруля",
    roleAPL: "Помощник лидера патруля",
    bioLabel: "Биография",
    skillsLabel: "Квалификации и навыки",
    noLeadersFound: "В этой категории нет лидеров.",

    leaderFrankBio: "Скиппер. Главный руководитель скаутов. Любит поезда.",
    leaderFiachraBio: "Смешной. Называет скаутов «демократической диктатурой».",
    leaderAelaBio: "Очень организованная.",
    leaderJoshBio: "Отличное чувство юмора. Обладает случайными навыками.",
    leaderTaidghBio: "Злоупотребляет властью. Пьёт много чая (7+ чашек в день).",
    leaderSophiaBio: "Любит хаос.",
    leaderAlannahBio: "50% вероятность, что её не будет. Очень доброе сердце.",
    leaderMateuszBio: "Здесь уже десять лет. Туз Nucks.",
    titleSkipper: "Главный лидер скаутов (Скиппер)",
    titleScoutLeader: "Скаутский лидер",
    titlePL: "Лидер патруля (PL)",
    titleAPL: "Помощник лидера патруля (APL)",
    patrolOtter: "Патруль Выдры",
    patrolCurlew: "Патруль Кроншнепа",
    certSkipper: "Шкипер",
    certSailingInstructor: "Инструктор по парусному спорту",
    certScoutLeader: "Скаутский лидер",
    certSafetyOfficer: "Инспектор по безопасности",
    certEventCoordinator: "Координатор мероприятий",
    certOutdoorSkills: "Специалист по выживанию",
    certPatrolWarrant: "Сертификат лидера патруля",
    certTeaMaster: "Мастер чая",
    certAPL: "Помощник лидера патруля",
    cert10Years: "10 лет службы",

    event1Title: "День лесной науки и выживание в дикой природе",
    event1Desc: "День выживания в лесу: костры, походная кулинария, постройка укрытий.",
    event1Loc: "Лес Кули и территория дена Св. Франциска, графство Лаут",
    event1Plan1: "10:00 - Сбор и инструктаж по безопасности",
    event1Plan2: "10:30 - Мастер-класс по добыче огня трением",
    event1Plan3: "12:30 - Соревнование по походной кулинарии",
    event1Plan4: "14:30 - Постройка природного укрытия и узлы",
    event1Plan5: "16:30 - Подведение итогов и закрытие",
    event1Route: "Сбор на территории школы Св. Франциска, Блэкрок.",
    event1Gear1: "Скаутский галстук и форменная одежда",
    event1Gear2: "Прочная походная обувь и куртка",
    event1Gear3: "Походная котелковая посуда и приборы",
    event1Gear4: "Бутылка воды и перекус",
    event1Gear5: "Личная аптечка",
    event1Notes: "Возьмите старую одежду, подходящую для костра.",
    event2Title: "Парусная регата и гребля в Дандолк-Бэй",
    event2Desc: "Ежегодная парусная регата морских скаутов и соревнование по гревле.",
    event2Loc: "Набережная Блэкрока и скаутский спуск, графство Лаут",
    event2Plan1: "09:30 - Сбор на спуске и оснастка лодок",
    event2Plan2: "10:30 - Инструктаж и проверка погоды",
    event2Plan3: "11:00 - Заплывы регаты и парусная дистанция",
    event2Plan4: "14:00 - Соревнование по гребле и навигации",
    event2Plan5: "16:30 - Разборка лодок и вручение кубков",
    event2Route: "Проезд через набережную Блэкрока. Парковка рядом с деном.",
    event2Gear1: "Скаутский галстук и форма",
    event2Gear2: "Сертифицированный спасательный жилет (PFD)",
    event2Gear3: "Гидрокостюм или непромокаемая одежда",
    event2Gear4: "Неопреновая обувь или старые кроссовки",
    event2Gear5: "Полотенце и комплект тёплой одежды",
    event2Notes: "Зависит от погоды.",
    event3Title: "Ежегодное скаутское обещание и награждение",
    event3Desc: "Торжественный прием новых участников в группу 2nd Louth.",
    event3Loc: "Школа Св. Франциска, Блэкрок, графство Лаут",
    event3Plan1: "19:30 - Построение и знаменная группа",
    event3Plan2: "20:00 - Скаутское обещание и церемония",
    event3Plan3: "20:30 - Вручение морских нашивок и слайд-шоу",
    event3Plan4: "21:00 - Чай, угощения и общение",
    event3Route: "Школа Св. Франциска, Блэкрок, A91 NH0V.",
    event3Gear1: "Полная официальная парадная форма",
    event3Gear2: "Чистая тёмная обувь",
    event3Gear3: "Скаутский галстук с зажимом",
    event3Notes: "Приглашаются все родители и родственники.",
    eventContactSkipperFrank: "Скиппер Фрэнк (+353 868 22 55 22)",
    eventContactFiachra: "Скиппер Фрэнк (+353 868 22 55 22)",
    typeCamp: "Лагерь и поход",
    typeWater: "Водное мероприятие",
    typeCeremony: "Церемония",
    secBeavers: "Бобры",
    secCubs: "Волчата",
    secScouts: "Морские скауты",
    secVenturers: "Венчуры",

    contactTitle: "Связаться с 2nd Louth Sea Scouts",
    contactSubtitle: "Задайте вопрос о вступлении в группу или волонтерстве.",
    contactNoticeSubtitle: "Связаться с нами можно только лично, придя на встречу, или напрямую с лидером Фрэнком по телефону или в WhatsApp.",
    contactFrankTitle: "Прямой контакт с лидером Фрэнком",
    contactFrankDesc: "Позвоните или напишите лидеру Фрэнку (+353 868 22 55 22) в WhatsApp по любым вопросам.",
    contactInPersonTitle: "Посетите нас лично",
    contactInPersonDesc: "Приходите на встречу в St Francis National School во время наших еженедельных сборов Sea Scouts.",
    callFrankButton: "Позвонить Фрэнку (+353 868 22 55 22)",
    whatsappFrankButton: "Написать в WhatsApp",
    youthFormTitle: "Запись детей в скауты",
    youthFormDesc: "Если вы хотите, чтобы ваш ребенок присоединился к скаутам, заполните эту короткую форму:",
    youthFormDisclaimer: "Обратите внимание: В настоящее время места для Бобров (6-9 лет) и Волчат (9-12 лет) заполнены, а количество мест в Скаутской группе (12+ лет) ограничено. Тем не менее, у нас есть список ожидания, и мы предложим места при первой возможности.",
    youthFormButton: "Заполнить форму регистрации",
    volunteerFormTitle: "Волонтерство для взрослых лидеров",
    volunteerFormDesc: "Если ваш вопрос касается волонтерства и лидерства в группе, заполните эту короткую форму, и мы ответим вам в кратчайшие сроки:",
    volunteerFormButton: "Заполнить форму волонтера",
    emailInquiryDesc: "Для вопросов по электронной почте пишите на:",
    contactInfoTitle: "Контактные данные",
    addressLabel: "Адрес Дена",
    emailLabel: "Электронная почта",
    phoneLabel: "Телефон",
    meetingTimesTitle: "Расписание встреч",
    formTitle: "Написать нам",
    formSubtitleDesc: "Заполните форму ниже для связи с руководителями 2nd Louth.",
    formNameLabel: "Ваше имя",
    formNamePlaceholder: "например, Анна Петрова",
    formEmailLabel: "Email",
    formEmailPlaceholder: "anna@example.com",
    formSectionLabel: "Интересующая секция",
    formSectionSelect: "Выберите секцию...",
    formSubjectLabel: "Тема",
    formSubjectPlaceholder: "например, Запись в Волчата",
    formMessageLabel: "Сообщение",
    formMessagePlaceholder: "Чем мы можем вам помочь?",
    formSubmitBtn: "Отправить сообщение",
    formSubmitting: "Отправка...",
    formSuccessTitle: "Сообщение отправлено!",
    formSuccessMsg: "Спасибо! Ваше сообщение успешно отправлено лидерам.",
    formSendAnother: "Отправить ещё одно сообщение",
    formDisabledNoticeTitle: "Форма связи отключена",
    formDisabledNoticeDesc: "Онлайн-форма временно отключена. Пожалуйста, свяжитесь с нами напрямую по электронной почте.",
    optBeavers: "Бобры (6-8 лет)",
    optCubs: "Волчата (8-11 лет)",
    optScouts: "Морские скауты (11-15 лет)",
    optVenturers: "Венчуры (15-18 лет)",
    optLeadership: "Вопрос о волонтерском лидерстве",
    optGeneral: "Общий вопрос к группе",
    denBadge: "Ден",

    footerDesc: "2nd Louth Blackrock Sea Scouts в составе Scouting Ireland воспитывает молодёжь в Блэкроке, графство Лаут.",
    footerQuickLinks: "Быстрые ссылки",
    footerMeetingDen: "Blackrock Sea Scout Den, Promenade, Blackrock, Co. Louth",
    footerCopyright: "© 2026 2nd Louth Blackrock Sea Scouts. Все права защищены.",
    footerScoutingIreland: "Член группы Scouting Ireland",
    footerLocation: "Блэкрок, графство Лаут, Ирландия"
  }
};
