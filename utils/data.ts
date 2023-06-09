import House1 from '../public/images/houses/house1.png';
import House2 from '../public/images/houses/house2.png';
import House3 from '../public/images/houses/house3.png';
import House4 from '../public/images/houses/house4.png';
import House5 from '../public/images/houses/house5.png';
import House6 from '../public/images/houses/house6.png';
import House7 from '../public/images/houses/house7.png';
import House8 from '../public/images/houses/house8.png';
import House9 from '../public/images/houses/house9.png';
import House10 from '../public/images/houses/house10.png';
import House11 from '../public/images/houses/house11.png';
import House12 from '../public/images/houses/house12.png';
// import house large images
import House1Lg from '../public/images/houses/house1lg.png';
import House2Lg from '../public/images/houses/house2lg.png';
import House3Lg from '../public/images/houses/house3lg.png';
import House4Lg from '../public/images/houses/house4lg.png';
import House5Lg from '../public/images/houses/house5lg.png';
import House6Lg from '../public/images/houses/house6lg.png';
import House7Lg from '../public/images/houses/house7lg.png';
import House8Lg from '../public/images/houses/house8lg.png';
import House9Lg from '../public/images/houses/house9lg.png';
import House10Lg from '../public/images/houses/house10lg.png';
import House11Lg from '../public/images/houses/house11lg.png';
import House12Lg from '../public/images/houses/house12lg.png';

// import apartments images
import Apartment1 from '../public/images/apartments/a1.png';
import Apartment2 from '../public/images/apartments/a2.png';
import Apartment3 from '../public/images/apartments/a3.png';
import Apartment4 from '../public/images/apartments/a4.png';
import Apartment5 from '../public/images/apartments/a5.png';
import Apartment6 from '../public/images/apartments/a6.png';
// import apartments large images
import Apartment1Lg from '../public/images/apartments/a1lg.png';
import Apartment2Lg from '../public/images/apartments/a2lg.png';
import Apartment3Lg from '../public/images/apartments/a3lg.png';
import Apartment4Lg from '../public/images/apartments/a4lg.png';
import Apartment5Lg from '../public/images/apartments/a5lg.png';
import Apartment6Lg from '../public/images/apartments/a6lg.png';

// import agents images
import Agent1 from '../public/images/people/agent1.png';
import Agent2 from '../public/images/people/agent2.png';
import Agent3 from '../public/images/people/agent3.png';
import Agent4 from '../public/images/people/agent4.png';
import Agent5 from '../public/images/people/agent5.png';
import Agent6 from '../public/images/people/agent6.png';
import Agent7 from '../public/images/people/agent7.png';
import Agent8 from '../public/images/people/agent8.png';
import Agent9 from '../public/images/people/agent9.png';
import Agent10 from '../public/images/people/agent10.png';
import Agent11 from '../public/images/people/agent11.png';
import Agent12 from '../public/images/people/agent12.png';
import { HouseData, ContactFormData, HeaderLink, Accordion, Contact } from '@/typings';
import { TbTargetArrow } from 'react-icons/tb';
import { MdEmail, MdLocalOffer, MdOutlineWorkHistory } from 'react-icons/md';
import { RiTeamFill } from 'react-icons/ri';
import { BsFillCameraVideoFill, BsFillChatLeftDotsFill, BsFillTelephoneFill } from 'react-icons/bs';
export const housesData: Array<HouseData> = [
  {
    id: 1,
    type: 'House',
    name: 'House 1',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: House1,
    imageLg: House1Lg,
    country: 'United States',
    address: '7240C Argyle St. Lawndale, CA 90260',
    bedrooms: '6',
    bathrooms: '3',
    surface: '4200 sq ft',
    year: '2016',
    price: '110000',
    agent: {
      image: Agent1,
      name: 'Patricia Tullert',
      phone: '0123 456 78910',
    },
    rentable: false,
    data: null,
  },
  {
    id: 2,
    type: 'House',
    name: 'House 2',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: House2,
    imageLg: House2Lg,
    country: 'Canada',
    address: '798 Talbot St. Bridgewater, NJ 08807',
    bedrooms: '6',
    bathrooms: '3',
    surface: '4200 sq ft',
    year: '2016',
    price: '140000',
    agent: {
      image: Agent2,
      name: 'Daryl Hawker',
      phone: '0123 456 78910',
    },
    rentable: true,
    data: null,
  },
  {
    id: 3,
    type: 'House',
    name: 'House 3',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: House3,
    imageLg: House3Lg,
    country: 'United States',
    address: '2 Glen Creek St. Alexandria, VA 22304',
    bedrooms: '6',
    bathrooms: '3',
    surface: '4200 sq ft',
    year: '2016',
    price: '170000',
    agent: {
      image: Agent3,
      name: 'Amado Smith',
      phone: '0123 456 78910',
    },
    rentable: true,
    data: null,
  },
  {
    id: 4,
    type: 'House',
    name: 'House 4',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: House4,
    imageLg: House4Lg,
    country: 'Canada',
    address: '84 Woodland St. Cocoa, FL 32927',
    bedrooms: '6',
    bathrooms: '3',
    surface: '4200 sq ft',
    year: '2016',
    price: '200000',
    agent: {
      image: Agent4,
      name: 'Kaitlyn Gonzalez',
      phone: '0123 456 78910',
    },
    rentable: false,
    data: null,
  },
  {
    id: 5,
    type: 'House',
    name: 'House 5',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: House5,
    imageLg: House5Lg,
    country: 'United States',
    address: '28 Westport Dr. Warminster, PA 18974',
    bedrooms: '5',
    bathrooms: '3',
    surface: '4200 sq ft',
    year: '2015',
    price: '210000',
    agent: {
      image: Agent5,
      name: 'Grover Robinson',
      phone: '0123 456 78910',
    },
    rentable: true,
    data: null,
  },
  {
    id: 6,
    type: 'House',
    name: 'House 6',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: House6,
    imageLg: House6Lg,
    country: 'Canada',
    address: '32 Pawnee Street Butte, MT 59701',
    bedrooms: '6',
    bathrooms: '3',
    surface: '6200 sq ft',
    year: '2014',
    price: '220000',
    agent: {
      image: Agent6,
      name: 'Karen Sorensen',
      phone: '0123 456 78910',
    },
    rentable: true,
    data: null,
  },
  {
    id: 7,
    type: 'Apartament',
    name: 'Apartament 1',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: Apartment1,
    imageLg: Apartment1Lg,
    country: 'Canada',
    address: '32 Pawnee Street Butte, MT 59701',
    bedrooms: '2',
    bathrooms: '1',
    surface: '1200 sq ft',
    year: '2012',
    price: '20000',
    agent: {
      image: Agent7,
      name: 'Jawhar Shamil Naser',
      phone: '0123 456 78910',
    },
    rentable: true,
    data: null,
  },
  {
    id: 8,
    type: 'Apartament',
    name: 'Apartament 2',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: Apartment2,
    imageLg: Apartment2Lg,
    country: 'United States',
    address: '28 Westport Dr. Warminster, PA 18974',
    bedrooms: '3',
    bathrooms: '1',
    surface: '1000 sq ft',
    year: '2011',
    price: '30000',
    agent: {
      image: Agent8,
      name: 'Juana Douglass',
      phone: '0123 456 78910',
    },
    rentable: true,
    data: null,
  },
  {
    id: 9,
    type: 'Apartament',
    name: 'Apartament 3',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: Apartment3,
    imageLg: Apartment3Lg,
    country: 'United States',
    address: '84 Woodland St. Cocoa, FL 32927',
    bedrooms: '2',
    bathrooms: '1',
    surface: '1100 sq ft',
    year: '2011',
    price: '40000',
    agent: {
      image: Agent9,
      name: 'Jerry Schenck',
      phone: '0123 456 78910',
    },
    rentable: true,
    data: null,
  },
  {
    id: 10,
    type: 'House',
    name: 'House 7',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: House7,
    imageLg: House7Lg,
    country: 'Canada',
    address: '7240C Argyle St. Lawndale, CA 90260',
    bedrooms: '5',
    bathrooms: '3',
    surface: '3200 sq ft',
    year: '2015',
    price: '117000',
    agent: {
      image: Agent10,
      name: 'Vera Levesque',
      phone: '0123 456 78910',
    },
    rentable: true,
    data: null,
  },
  {
    id: 11,
    type: 'House',
    name: 'House 8',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: House8,
    imageLg: House8Lg,
    country: 'Canada',
    address: '798 Talbot St. Bridgewater, NJ 08807',
    bedrooms: '7',
    bathrooms: '2',
    surface: '2200 sq ft',
    year: '2019',
    price: '145000',
    agent: {
      image: Agent11,
      name: 'Sofia Gomes',
      phone: '0123 456 78910',
    },
    rentable: false,
    data: null,
  },
  {
    id: 12,
    type: 'House',
    name: 'House 9',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: House9,
    imageLg: House9Lg,
    country: 'United States',
    address: '2 Glen Creek St. Alexandria, VA 22304',
    bedrooms: '4',
    bathrooms: '4',
    surface: '4600 sq ft',
    year: '2015',
    price: '139000',
    agent: {
      image: Agent12,
      name: 'Raymond Hood',
      phone: '0123 456 78910',
    },
    rentable: false,
    data: null,
  },
  {
    id: 13,
    type: 'House',
    name: 'House 10',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: House10,
    imageLg: House10Lg,
    country: 'Canada',
    address: '84 Woodland St. Cocoa, FL 32927',
    bedrooms: '5',
    bathrooms: '2',
    surface: '5200 sq ft',
    year: '2014',
    price: '180000',
    agent: {
      image: Agent1,
      name: 'Patricia Tullert',
      phone: '0123 456 78910',
    },
    rentable: false,
    data: null,
  },
  {
    id: 14,
    type: 'House',
    name: 'House 11',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: House11,
    imageLg: House11Lg,
    country: 'United States',
    address: '28 Westport Dr. Warminster, PA 18974',
    bedrooms: '5',
    bathrooms: '2',
    surface: '3200 sq ft',
    year: '2011',
    price: '213000',
    agent: {
      image: Agent2,
      name: 'Daryl Hawker',
      phone: '0123 456 78910',
    },
    rentable: false,
    data: null,
  },
  {
    id: 15,
    type: 'House',
    name: 'House 12',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: House12,
    imageLg: House12Lg,
    country: 'Canada',
    address: '32 Pawnee Street Butte, MT 59701',
    bedrooms: '4',
    bathrooms: '3',
    surface: '5200 sq ft',
    year: '2013',
    price: '221000',
    agent: {
      image: Agent3,
      name: 'Amado Smith',
      phone: '0123 456 78910',
    },
    rentable: false,
    data: null,
  },
  {
    id: 16,
    type: 'Apartament',
    name: 'Apartament 16',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: Apartment4,
    imageLg: Apartment4Lg,
    country: 'Canada',
    address: '32 Pawnee Street Butte, MT 59701',
    bedrooms: '2',
    bathrooms: '1',
    surface: '1300 sq ft',
    year: '2011',
    price: '21000',
    agent: {
      image: Agent4,
      name: 'Kaitlyn Gonzalez',
      phone: '0123 456 78910',
    },
    rentable: true,
    data: null,
  },
  {
    id: 17,
    type: 'Apartament',
    name: 'Apartament 17',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: Apartment5,
    imageLg: Apartment5Lg,
    country: 'United States',
    address: '28 Westport Dr. Warminster, PA 18974',
    bedrooms: '3',
    bathrooms: '1',
    surface: '1000 sq ft',
    year: '2012',
    price: '32000',
    agent: {
      image: Agent5,
      name: 'Grover Robinson',
      phone: '0123 456 78910',
    },
    rentable: true,
    data: null,
  },
  {
    id: 18,
    type: 'Apartament',
    name: 'Apartament 18',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: Apartment6,
    imageLg: Apartment6Lg,
    country: 'Canada',
    address: '84 Woodland St. Cocoa, FL 32927',
    bedrooms: '3',
    bathrooms: '1',
    surface: '1200 sq ft',
    year: '2010',
    price: '38000',
    agent: {
      image: Agent6,
      name: 'Karen Sorensen',
      phone: '0123 456 78910',
    },
    rentable: false,
    data: null,
  },
];

export const headerLinks:  Array<HeaderLink> = [
  {
    id: '1',
    href: "#hero",
    offset: '100',
    children: "Início"
  },
  {
    id: '2',
    href: "#history",
    offset: '100',
    children: "Sobre Nós"
  },
  {
    id: '3',
    href: "#houses",
    offset: '300',
    children: "Casas"
  },
  {
    id: '4',
    href: "#contato",
    offset: '50',
    children: "Contato"
  }
];

export const accordions: Array<Accordion> = [
  {
    id: 1,
    content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio minima eum fuga unde, veniam odio praesentium nemo voluptas sit, possimus porro reprehenderit hic ea eveniet assumenda aspernatur quidem autem eos?",
    title: "Nossa missão",
    icon: TbTargetArrow,
    focused: false,
  },
  {
    id: 2,
    content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio minima eum fuga unde, veniam odio praesentium nemo voluptas sit, possimus porro reprehenderit hic ea eveniet assumenda aspernatur quidem autem eos?",
    title: "Nossa história",
    icon: MdOutlineWorkHistory,
    focused: false,
  },
  {
    id: 3,
    content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio minima eum fuga unde, veniam odio praesentium nemo voluptas sit, possimus porro reprehenderit hic ea eveniet assumenda aspernatur quidem autem eos?",
    title: "O que oferecemos",
    icon: MdLocalOffer,
    focused: false,
  },
  {
    id: 4,
    content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio minima eum fuga unde, veniam odio praesentium nemo voluptas sit, possimus porro reprehenderit hic ea eveniet assumenda aspernatur quidem autem eos?",
    title: "Quer fazer parte do nosso time?",
    icon: RiTeamFill,
    focused: false,
  }
];

export const contacts: Array<Contact> = [
  {
    id: '1',
    icon: BsFillTelephoneFill,
    title: "Telefone",
    info: "(32) 9 9846-8722",
    button: "Ligar agora"
  },
  {
    id: '2',
    icon: BsFillChatLeftDotsFill,
    title: "Mensagem",
    info: "",
    button: "Enviar uma mensagem"
  },
  {
    id: '3',
    icon: BsFillCameraVideoFill,
    title: "Agendar ligação",
    info: "",
    button: "Enviar solicitação"
  },
  {
    id: '4',
    icon: MdEmail,
    title: "Enviar email",
    info: "augustodpmenezes @gmail.com",
    button: "Enviar email"
  }
]

