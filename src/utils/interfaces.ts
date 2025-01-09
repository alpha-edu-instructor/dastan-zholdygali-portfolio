export interface IAppRoute {
  path: string;
  element: React.FC;
  authOnly: boolean;
}

export interface ICategory {
  id: string;
  title: string;
  link: string;
  imageUrl: string;
  isWhite: boolean;
}
