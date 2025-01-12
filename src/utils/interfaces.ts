import { ProjectType } from "./enums";

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

export interface IProject {
  id: string;
  title: string;
  description: string;
  previewUrl: string;
  fileUrl: string;
  type: ProjectType;
  categoryId: string;
}
