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
      <Card h={adjustedHeight} style={{ justifyContent: "center" }} p="xl">
        <Stack gap="md" align="center">
          <NextImage
            src="/logo-black.svg"
            alt="naoshi"
            height="50"
            width="200"
            unoptimized
          />
          <Text mt="md">
            教育とテクノロジーを軸に活動するWebエンジニア。atama
            plus株式会社でWebアプリケーション開発を担当しています。
            <br />
            プライベートでは、緊急避妊薬へのアクセスを向上させる「アフターピル検索」サービスの開発運営と、多様な視点を共有する対話イベント「INSPIRING
            NIGHT」の主催に取り組んでいます。
          </Text>
          <_SNSLinks />
        </Stack>
      </Card>
      {CONTENTS.map((content) => (
        <ContentCard key={content.title} {...content} />
      ))}
    </Stack>
  );
}

const _SNSLinks = () => (
  <Flex wrap="wrap" gap="xs">
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
);
