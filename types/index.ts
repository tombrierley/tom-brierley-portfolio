export type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  url?: string | '';
};

export type Content = {
  name: string;
  contactEmail: string;
  location: string;
  intro: string;
  about: string;
  interests: string[];
  projects: Project[];
  metaTitle: string;
  metaDescription: string;
  howIWork: string;
};
