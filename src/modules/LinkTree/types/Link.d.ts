type Link = {
  id: string;
  title: string;
  url: string;
  rank: number;
  background?: string | null;
  icon?: string | null;
  description?: string;
  delete?: boolean;
};

type LinksResponse = {
  id: string;
  name: string;
  username: string;
  avatar: string;
  description: string;
  links: Link[];
};

type UpdateUserLinksRequestLinks = Omit<Link, "id"> & {
  id: string | null;
};

type UpdateUserLinksRequest = {
  description: string;
  links: UpdateUserLinksRequestLinks[];
};
