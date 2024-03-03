import { AvatarColor } from "@/components/common/avatar/avatar.component";

type Testimonial = {
  name: string;
  position: string;
  company: string;
  description: string;
  avatarColor: AvatarColor;
};

export const testimonials: Testimonial[] = [
  {
    name: "Alice Smith",
    position: "CEO",
    company: "Tech Innovations Inc.",
    description:
      "Working with summit was a game-changer for us. Their solutions not only enabled us to focus on our core business but also alleviated the burden of handling technical complexities. Their commitment to sustainability is truly inspiring and aligns perfectly with our company's values. We look forward to continuing our partnership with summit for future projects.",
    avatarColor: "red",
  },
  {
    name: "David Johnson",
    position: "Product Manager",
    company: "Innovate Co.",
    description:
      "As a product manager, I deeply appreciated summit's holistic approach to solving our tech challenges. They didn't just deliver a product; they delivered a sustainable solution that grows with our business. Their expertise and professionalism set them apart in the industry, and I would highly recommend summit to any company in need of innovative tech solutions.",
    avatarColor: "gray",
  },
  {
    name: "Emily Brown",
    position: "Marketing Specialist",
    company: "NextGen Enterprises",
    description:
      "summit's expertise in technology allowed us to execute our marketing strategies seamlessly. Their sustainable solutions aligned perfectly with our brand values, enabling us to deliver impactful campaigns while minimizing our environmental footprint. Working with summit was a pleasure, and I look forward to future collaborations to drive even greater success for our company.",
    avatarColor: "purple",
  },
];
