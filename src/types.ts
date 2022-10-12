import { ReactNode } from 'react';

export interface ProjectEntity {
  src: string;
  title: ReactNode;
  text: ReactNode;
  github: string;
  route: string;
  stack: string[];
  content: string;
  videoUrl: string;
}

export interface RouteEntity {
  routeName: string;
  name: string;
}
