type Link = {
  id: string;
  title: string;
  url: string;
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
