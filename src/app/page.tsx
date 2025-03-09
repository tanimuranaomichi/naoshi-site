"use client";

import { Text, useMantineTheme, Center, Stack } from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";
import Image from "next/image";

export default function Home() {
  const { height } = useViewportSize();

  const theme = useMantineTheme();
  const adjustedHeight = height - 4 * 2;

  return (
    <Center
      h={adjustedHeight}
      bg="white"
      style={{ borderRadius: theme.radius.sm }}
    >
      <Stack gap="md" align="center">
        <Image
          src="/logo-black.svg"
          alt="naoshi"
          height="50"
          width="200"
          unoptimized
        />
        <Text>WEB ENGINEER / CIVIC TECH / 3DCG / MOTION GRAPHICS</Text>
      </Stack>
    </Center>
  );
}
