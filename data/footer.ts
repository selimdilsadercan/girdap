import { IMenuItem, ISocials } from "@/types";

export const footerDetails: {
  subheading: string;
  quickLinks: IMenuItem[];
  email: string;
  socials: ISocials;
} = {
  subheading: "",
  quickLinks: [
    {
      text: "Features",
      url: "#features",
    },
    {
      text: "Pricing",
      url: "#pricing",
    },
    {
      text: "Testimonials",
      url: "#testimonials",
    },
  ],
  email: "",
  socials: {
    instagram: "https://www.instagram.com",
    linkedin: "https://www.linkedin.com",
    twitter: "https://twitter.com/Twitter",
  },
};
