import foodSvg from "../assets/food.svg";
import otherSvg from "../assets/others.svg";
import servicesSvg from "../assets/services.svg";
import transportSvg from "../assets/transport.svg";
import accommodationSvg from "../assets/accommodation.svg";

export const CATEGORIES = {
  food: {
    name: "Alimentação",
    icon: foodSvg,
  },
  services: {
    name: "Serviços",
    icon: servicesSvg,
  },
  transport: {
    name: "Transporte",
    icon: transportSvg,
  },
  accomodation: {
    name: "Hospedagem",
    icon: accommodationSvg,
  },
  others: {
    name: "Outros",
    icon: otherSvg,
  },
};

export const CATEGORIES_KEYS = Object.keys(CATEGORIES) as Array<
  keyof typeof CATEGORIES
>;
