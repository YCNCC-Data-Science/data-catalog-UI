export interface License {
  name: string;
  url?: string;
}

export interface Maintainer {
  name: string;
  email: string;
  image_url?: string;
  github?: string;
}

export interface DataAccess {
  doi: string;
  url: string;
}

export interface Publication {
  authors: string[];
  year: string;
  title: string;
  journal: string;
  volume?: string;
  article?: string;
  doi: string;
}

export interface Dataset {
  title: string;
  description: string;
  publication_date: string;
  version: string;
  tags?: string[];
  license: License;
  maintainers: Maintainer[];
  data_access: DataAccess;
  publications: Publication[];
  slug: string;
  color: string;
  thumbnail: string;
  links?: Link[];
}

export interface Model {
  title: string;
  description: string;
  publication_date: string;
  version: string;
  repository?: string;
  tags?: string[];
  license: License;
  maintainers: Maintainer[];
  data_access?: DataAccess;
  publications: Publication[];
  slug: string;
  color: string;
  thumbnail: string;
  links?: Link[];
}

export interface Link {
  label: string;
  url: string;
}
