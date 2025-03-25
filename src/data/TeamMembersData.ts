import SabhapatiImage from "../assets/images/sabhapati.jpeg";
import KosaadakshyaImage from "../assets/images/Kosaadakshya.jpeg";
import SachivImage from "../assets/images/sachib.jpeg";
import SekharSadasya from "../assets/images/SekharSadasya.jpeg";
import LokeshSadasya from "../assets/images/LokeshSadasya.jpeg";
import RavinSadasya from "../assets/images/RavinSadasya.jpeg";
import HimendraSadasya from "../assets/images/HimendraSadasya.jpg";
import PreranaSadasya from "../assets/images/PrenanaSadasya.jpeg";
import SangitaSadasya from "../assets/images/SangitaSadasya.jpg";
import BishalSadasya from "../assets/images/BishalSadasya.jpg";
import BasantaSadasya from "../assets/images/BasantaSadasya.jpg";

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

export const teamMembers: TeamMember[] = [
  { name: "अञ्जन बस्नेत", role: "सचिव", image: SachivImage },
  { name: "विनोद राज जोशी", role: "अध्यक्ष", image: SabhapatiImage },
  { name: "शारदा पौडेल (सिमा)", role: "कोषाध्यक्ष", image: KosaadakshyaImage },
  {
    name: "हिमेन्द्र नाथ शर्मा (विशाल)",
    role: "सदस्य",
    image: HimendraSadasya,
  },
  { name: "शेखर रोकाया", role: "सदस्य", image: SekharSadasya },
  { name: "प्रेरणा शाही", role: "सदस्य", image: PreranaSadasya },
  { name: "संगिता खत्री", role: "सदस्य", image: SangitaSadasya },
  { name: "लोकेश बुढा", role: "सदस्य", image: LokeshSadasya },
  { name: "विशाल पौडेल उपाध्याय", role: "सदस्य", image: BishalSadasya },
  { name: "बसन्त थिङ", role: "सदस्य", image: BasantaSadasya },
  { name: "रविन राज खत्री", role: "सदस्य", image: RavinSadasya },
];
