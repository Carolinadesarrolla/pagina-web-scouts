/**
 * Site Configuration for 2nd Louth Blackrock Sea Scouts
 */

export const siteConfig = {
  name: "2nd Louth Blackrock Sea Scouts",
  shortName: "2nd Louth Sea Scouts",
  location: "Blackrock, Co. Louth, Ireland",
  denAddress: "St Francis National School, Blackrock, Co. Louth, A91 NH0V, Ireland",
  email: "secondlouthscoutgroup@gmail.com",
  phone: "+353 868 22 55 22",
  youthFormUrl: "https://forms.gle/LeRXn1ZPB61n4zVY7",
  volunteerFormUrl: "https://forms.gle/f9ZWDFZnNF95bdzX6",
  scoutsIrelandGroupNumber: "2nd Louth",
  
  /**
   * MANUAL CONTACT FORM TOGGLE FLAG
   * Set to `true` to show the interactive contact form on the contact page.
   * Set to `false` to disable and hide the contact form, displaying direct contact info only.
   */
  ENABLE_CONTACT_FORM: false,

  socialLinks: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    twitter: "https://twitter.com",
  },

  sections: [
    {
      id: "beavers",
      nameKey: "beaversTitle",
      ageRange: "6 - 8 yrs",
      meetingDay: "Wednesdays (TBC)",
    },
    {
      id: "cubs",
      nameKey: "cubsTitle",
      ageRange: "8 - 11 yrs",
      meetingDay: "Wednesdays (TBC)",
    },
    {
      id: "scouts",
      nameKey: "scoutsTitle",
      ageRange: "11 - 15 yrs",
      meetingDay: "Wednesdays 19:30 @ St Francis National School",
    },
    {
      id: "venturers",
      nameKey: "venturersTitle",
      ageRange: "15 - 18 yrs",
      meetingDay: "Saturdays (TBC)",
    },
  ],
};
