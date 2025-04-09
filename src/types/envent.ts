export interface Event {
  date: string;
  name: string;
  location: {
    name: string;
    src: string;
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
  }
}