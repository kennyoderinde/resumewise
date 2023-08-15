

import creative from "../../../assets/creative-cv-template.png"
import basic from "../../../assets/basic-cv-template.png"
import combined from "../../../assets/combined-cv-template.png"
import minimalist from "../../../assets/minimalist-cv-template.png"
import hybrid from "../../../assets/hybrid-cv-template.png"
import traditional from "../../../assets/traditional-cv-template.png"
import general from "../../../assets/general-cv-template.png"
import modern from "../../../assets/modern-cv-template.png"
import executive from "../../../assets/executive-resume-template.png"
import it from "../../../assets/it-resume-template.png"
import simple from "../../../assets/simple-resume-template.png"
import functional from "../../../assets/functional-resume-template.png"

// magnifier icon
import * as BsMagnifier   from "react-icons/bs";
import * as BsStar   from "react-icons/bs";


const resumeSamplesData_ = [
  {
    id: 1,
    name: "Creative",
    icon1: <BsMagnifier.BsZoomIn/>,
    icon2: < BsStar.BsFillStarFill/>,
    rating: null,
    img: (
      <img src = {creative} alt="creative1"/>
    ),
    link: '/creative',
    content: "Land your dream job in the creative industries by using this creative resume template, which will make your application stand out.",
  },

  {
    id: 2,
    name: "Basic",
    icon1: <BsMagnifier.BsZoomIn/>,
    icon2: < BsStar.BsFillStarFill/>,
    rating: null,
    img: (
      <img src = {basic} alt="basic1"/>
    ),
    link: '/basic',
    content: "Easily personalize this basic resume layout that can be completed in under ten minutes through our intuitive process.",
  },

  {
    id: 3,
    name: "Combined",
    icon1: <BsMagnifier.BsZoomIn/>,
    icon2: < BsStar.BsFillStarFill/>,
    rating: "Premium",
    img: (
      <img src = {combined} alt="combined1"/>
    ),
    link: '/combined',
    content: "This template combines two professional resume formats. It’s a mix of the reverse-chronological resume and the functional resume format.",
  },
  {
    id: 4,
    name: "Minimalist",
    icon1: <BsMagnifier.BsZoomIn/>,
    icon2: <BsStar.BsFillStarFill/>,
    rating: "Premium",
    img: (
      <img src = {minimalist} alt="minimalist"/>
    ),
    link: '/minimalist',
    content: "A simple and easy to follow resume template. Perfect for more conservative industries which prefer less flashy templates.",
  },
  {
    id: 5,
    name: "Hybrid",
    icon1: <BsMagnifier.BsZoomIn/>,
    icon2: <BsStar.BsFillStarFill/>,
    rating: "Premium",
    img: (
      <img src = {hybrid} alt="hybrid"/>
    ),
    link: '/hybrid',
    content: "A simple and easy to follow resume template. Perfect for more conservative industries which prefer less flashy templates.",
  },

  {
    id: 6,
    name: "Traditional",
    icon1: <BsMagnifier.BsZoomIn/>,
    icon2: <BsStar.BsFillStarFill/>,
    rating: "Premium",
    img: (
      <img src = {traditional} alt="traditional"/>
    ),
    link: '/traditional',
    content: "A straightforward format that gives equal importance to all resume sections, emphasising skills and work experience.",
  },

  {
    id: 7,
    name: "General",
    icon1: <BsMagnifier.BsZoomIn/>,
    icon2: <BsStar.BsFillStarFill/>,
    rating: "Premium",
    img: (
      <img src = {general} alt="general"/>
    ),
    link: '/general',
    content: "This general format can be tailored according to your personality and skills to apply for jobs in most industries.",
  },
  {
    id: 8,
    name: "Modern",
    icon1: <BsMagnifier.BsZoomIn/>,
    icon2: <BsStar.BsFillStarFill/>,
    rating: "Premium",
    img: (
      <img src = {modern} alt="modern"/>
    ),
    link: '/modern',
    content: "It can be hard to stand out from the crowd, but this modern resume sample will take care of this.",
  },
  {
    id: 9,
    name: "Executive",
    icon1: <BsMagnifier.BsZoomIn/>,
    icon2: <BsStar.BsFillStarFill/>,
    rating: null,
    img: (
      <img src = {executive} alt="executive"/>
    ),
    link: '/executive',
    content: "A simple and easy to follow resume template. Perfect for more conservative industries which prefer less flashy templates.",
  },
  {
    id: 10,
    name: "IT",
    icon1: <BsMagnifier.BsZoomIn/>,
    icon2: <BsStar.BsFillStarFill/>,
    rating: null,
    img: (
      <img src = {it} alt="it"/>
    ),
    link: '/it',
    content: "One of the best resume layouts to choose when you wish to showcase your IT expertise.",
  },
  {
    id: 11,
    name: "Simple",
    icon1: <BsMagnifier.BsZoomIn/>,
    icon2: <BsStar.BsFillStarFill/>,
    rating: null,
    img: (
      <img src = {simple} alt="simple"/>
    ),
    link: '/simple',
    content: "Simple resume layout for conservative industries, which is a minimalistic upgrade from the traditional resumes.",
  },
  {
    id: 12,
    name: "Functional",
    icon1: <BsMagnifier.BsZoomIn/>,
    icon2: <BsStar.BsFillStarFill/>,
    rating: "Premium",
    img: (
      <img src = {functional} alt="functional"/>
    ),
    link: '/functional',
    content: "A functional resume template that works for all industries and will emphasize your strengths & work experience.",
  }
]
export default resumeSamplesData_