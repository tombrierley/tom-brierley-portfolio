export interface ServiceItem {
  title: string;
  description: string;
  details: string[];
}

export interface WorkStep {
  title: string;
  description: string;
}

export interface Technology {
  category: string;
  items: string[];
}

export interface Client {
  name: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  url?: string | '';
}

export interface Content {
  name: string;
  contactEmail: string;
  location: string;
  introduction: string;
  introText: string;
  services: ServiceItem[];
  workProcess: WorkStep[];
  technologies: Technology[];
  clients: Client[];
  metaTitle: string;
  metaDescription: string;
  startProjectText: string;
  // Legacy props for backward compatibility
  intro?: string;
  about?: string;
  projects?: Project[];
  interests?: string[];
  howIWork?: string;
}
