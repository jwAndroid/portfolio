import { ReactNode } from 'react';

interface IPublishedUrl {
  android: string;
  ios: string;
}
export interface IContent {
  text: string;
  devYear: string;
  published: boolean;
  publishedUrl: IPublishedUrl;
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
  content: IContent;
  index: number;
}

export interface RouteEntity {
  routeName: string;
  name: string;
}
