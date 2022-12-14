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
  createdAt: string;
  videoUrl: string;
  copyright: string;
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

export interface CardEntity {
  titlye: string;
  image: string;
  shadowColor: string;
  url: string;
  proficiency: number;
}

export interface ProfileEntity {
  name: string;
  imageUrl: string;
  url: string;
}
