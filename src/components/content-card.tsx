import { Card, SimpleGrid, Flex, Anchor, Text, Image } from "@mantine/core";
import { FC } from "react";
import { BREAKPOINT } from "./responsive-layout";

type Content = {
  title: string;
  description: string;
  imagePath: string;
  url: string;
};

export const ContentCard: FC<Content> = (content) => (
  <Card key={content.title} p="xl">
    <SimpleGrid cols={{ base: 1, [BREAKPOINT]: 2 }} spacing="4">
      <Flex direction="column">
        <Text size="xl" fw="600" mb="xs">
          {content.title}
        </Text>
        <Text>{content.description}</Text>
        <Anchor href={content.url} target="_blank" style={{ color: "green" }}>
          {content.url}
        </Anchor>
      </Flex>
      <Image
        src={content.imagePath}
        alt={content.title}
        height={150}
        width="auto"
        fit="contain"
        mt={{ base: "8", [BREAKPOINT]: "0" }}
      />
    </SimpleGrid>
  </Card>
);
