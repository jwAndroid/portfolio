import { ReactNode } from "react";

import { useCardLoadEffect, useProjectLoadEffect } from "./hooks";

interface Props {
  children: ReactNode;
}

function AppInitializer({ children }: Props) {
  useProjectLoadEffect();
  useCardLoadEffect();

  return children;
}

export default AppInitializer;
