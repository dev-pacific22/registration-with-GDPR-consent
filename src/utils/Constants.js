export const CONSTANTS = {
  REGEX: {
    EMAIL_REGEX: "",
    PASSWORD_REGEX: /^(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
  }
};
export const CONSENT_ARRAY = [
  {
    consentId: 0,
    consentTitle: "Store Data",
    consentDescription: "Our organisation will store and use you personal data."
  },
  {
    consentId: 1,
    consentTitle: "Access to COpy of Data",
    consentDescription:
      "Individual will have a access to copy of the data held by the organisation."
  },
  {
    consentId: 2,
    consentTitle: "Can ask to correct inaccuracy",
    consentDescription:
      "Individual have ability to ask organisation to correct any inaccuracy in their data held by the organisation."
  },
  {
    consentId: 3,
    consentTitle: "Can ask to Delete data",
    consentDescription:
      "Individual should be able to ask organisation to completely delete his data held by the organisation."
  }
];
