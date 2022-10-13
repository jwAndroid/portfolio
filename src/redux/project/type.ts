import { ReactNode } from 'react';

import { IContent } from '../../types';

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
