export const
  LOGO =  "logo.png"

export const
    PHOTO = "https://cdn.openart.ai/stable_diffusion/554ba8635f8930a93702f1f8ace22de9c8a1dbed_2000x2000.webp";

export const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: "Bearer " + process.env.REACT_APP_TMDB_KEY,
  }
};

export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY;
export const GROQ_API_KEY = process.env.REACT_APP_GROQ_API_KEY;

export const IMG_CDN = "https://image.tmdb.org/t/p/w500";

export const BG_URL = 'https://assets.nflxext.com/ffe/siteui/vlv3/9d3533b2-0e2b-40b2-95e0-ecd7979cc88b/a3873901-5b7c-46eb-b9fa-12fea5197bd3/IN-en-20240311-popsignuptwoweeks-perspective_alpha_website_large.jpg';

export const SUPPORTED_LANG = [
  { identifier: "en", name: "English" },
  { identifier: "hindi", name: "Hindi" },
  { identifier: "kannada", name: "Kannada" },
];
