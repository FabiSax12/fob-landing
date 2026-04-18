export interface Event {
  date: string;
  name: string;
  location: {
    name: string;
    src: string;
    address?: string;
    latitude?: number;
    longitude?: number;
  };
  website?: string;
  description?: string;
  type: "Publico" | "Privado";
  image?: string;
  time?: {
    start: string;
    concert: string;
    end?: string;
  },
  ticket: {
    presale?: {
      price: string;
      link?: string;
    };
    regular: {
      price: string;
      link?: string;
    };
    type: "Entrada Libre" | "Preventa" | "Taquilla";
  },
  seo?: {
    title?: string;
    description?: string;
    ogImage?: string;
    keywords?: string[];
    canonical?: string;
    og?: {
      type?: string;
      locale?: string;
      site_name?: string;
    }
  }

  social: {
    hashtags: string[];
  }
}