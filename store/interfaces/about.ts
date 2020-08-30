import { image } from './index';

interface advisors {
  name: string;
  image: image;
  whatsapp: string;
  phone: string;
  email: string;
}

export default interface aboutState {
  data: {
    imagem_who_we_are: image;
    who_we_are: string;
    imagem_our_story: image;
    advisors: advisors[];
    companies: {
      image: image;
      name: string;
      description: string;
    };
    seo_title: string;
    seo_description: string;
    seo_image: image;
    partners: advisors[];
  };
  loading: boolean;
  error: boolean;
}
