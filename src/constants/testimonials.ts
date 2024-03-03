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
      "Summit's solutions enabled us to focus on our core business while they handled the technical complexities efficiently. Their commitment to sustainability is truly inspiring.",
    avatarColor: "red",
  },
  {
    name: "David Johnson",
    position: "Product Manager",
    company: "Innovate Co.",
    description:
      "As a product manager, I appreciated Summit's holistic approach to solving our tech challenges. They didn't just deliver a product; they delivered a sustainable solution that grows with our business.",
    avatarColor: "gray",
  },
  {
    name: "Emily Brown",
    position: "Marketing Specialist",
    company: "NextGen Enterprises",
    description:
      "Summit's expertise in technology allowed us to execute our marketing strategies seamlessly. Their sustainable solutions aligned perfectly with our brand values.",
    avatarColor: "purple",
  },
];
