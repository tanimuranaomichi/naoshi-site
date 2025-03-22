"use client";

import { Text, Stack, Card, Anchor, Flex } from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";
import NextImage from "next/image";
import { CONTENTS, SNS_LINKS } from "./constants";
import { ContentCard } from "@/components/content-card";

export default function Home() {
  const { height } = useViewportSize();
  const adjustedHeight = height - 4 * 2;

  return (
    <Stack gap="4">
      <Card h={adjustedHeight} style={{ justifyContent: "center" }}>
        <Stack gap="md" align="center">
          <NextImage
            src="/logo-black.svg"
            alt="naoshi"
            height="50"
            width="200"
            unoptimized
          />

          <Text>WEB ENGINEER / CIVIC TECH / 3DCG / MOTION GRAPHICS</Text>
          <Flex gap="xs">
            {SNS_LINKS.map((sns) => (
              <Anchor
                key={sns.name}
                href={sns.url}
                target="_blank"
                style={{ color: "green", whiteSpace: "nowrap" }}
              >
                {sns.name}
              </Anchor>
            ))}
          </Flex>
        </Stack>
      </Card>
      {CONTENTS.map((content) => (
        <ContentCard key={content.title} {...content} />
      ))}
    </Stack>
  );
}
