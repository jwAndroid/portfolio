import { ReactNode } from 'react';

export interface ContentEntity {
  text: string;
  devYear: string;
  published: boolean;
  publishedUrl: string;
  isCompany: boolean;
  createdAt: string;
  videoUrl: string;
}
export interface ProjectEntity {
  src: string;
  title: ReactNode;
  text: ReactNode;
  github: string;
  route: string;
  stack: string[];
  content: ContentEntity;
}

export interface RouteEntity {
  routeName: string;
  name: string;
}
