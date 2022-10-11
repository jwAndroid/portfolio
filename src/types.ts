import { ReactNode } from 'react';

export interface ProjectEntity {
  src: string;
  title: ReactNode;
  text: ReactNode;
  github: string;
  route: string;
  stack: string[];
  content: string;
  video: string;
}
