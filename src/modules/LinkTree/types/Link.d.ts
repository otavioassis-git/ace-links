type Link = {
  id: string;
  title: string;
  url: string;
  rank: number;
  background?: string;
  icon?: string;
  description?: string;
};

type LinksResponse = {
  id: string;
  name: string;
  username: string;
  avatar: string;
  description: string;
  links: Link[];
};
