"use client";

import { Box } from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";

export const MainVisual = () => {
  const { height } = useViewportSize();

  // TODO: ここで3DCGモデルを表示する
  return <Box h={height} />;
};
