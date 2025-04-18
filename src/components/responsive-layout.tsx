"use client";

import {
  AppShell,
  Group,
  SimpleGrid,
  Box,
  useMantineTheme,
  MantineSize,
} from "@mantine/core";
import Image from "next/image";

import { MainVisual } from "./main-visual";

// const MENU_ITEMS = [
//   { label: "HOME", href: "/" },
//   { label: "DEVELOPMENT", href: "/development" },
//   { label: "CREATIONS", href: "/creations" },
//   { label: "ACTIVITIES", href: "/activities" },
//   { label: "PROFILE", href: "/profile" },
// ];

export const MOBILE_BREAKPOINT: MantineSize = "sm";

export function ResponsiveLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const theme = useMantineTheme();

  return (
    <AppShell header={{ height: 60, offset: false }}>
      <AppShell.Header
        bg="transparent"
        style={{ borderBottom: "none" }}
        visibleFrom={MOBILE_BREAKPOINT}
      >
        <Group h="100%" px="md">
          <Group justify="space-between" style={{ flex: 1 }}>
            <Image
              src="/logo-white.svg"
              alt="naoshi"
              height="25"
              width="100"
              unoptimized
            />
            {/* TODO: 各種ページが実装されたらコメントアウトを外す */}
            {/* <Group ml="xl" gap="xs">
              {MENU_ITEMS.map((item) => (
                <Button
                  key={item.label}
                  component={Link}
                  href={item.href}
                  bg="black"
                  radius="xl"
                >
                  {item.label}
                </Button>
              ))}
            </Group> */}
          </Group>
        </Group>
      </AppShell.Header>

      <AppShell.Main>
        <SimpleGrid
          cols={{ base: 1, [MOBILE_BREAKPOINT]: 2 }}
          bg="black"
          spacing="4"
        >
          <Box p="4" hiddenFrom={MOBILE_BREAKPOINT}>
            <Group
              px="md"
              h="60"
              bg="white"
              style={{ borderRadius: theme.radius.sm }}
              justify="space-between"
            >
              <Image
                src="/logo-black.svg"
                alt="naoshi"
                height="25"
                width="100"
                unoptimized
              />
              {/* TODO: 各種ページが実装されたらコメントアウトを外す */}
              {/* <BurgerMenu /> */}
            </Group>
          </Box>
          <MainVisual />
          <Box p="4">{children}</Box>
        </SimpleGrid>
      </AppShell.Main>
    </AppShell>
  );
}

// const BurgerMenu = () => {
//   const [opened, { toggle }] = useDisclosure();

//   return (
//     <Menu shadow="md" width={200}>
//       <Menu.Target>
//         <Burger opened={opened} onClick={toggle} size="sm" />
//       </Menu.Target>

//       <Menu.Dropdown>
//         {MENU_ITEMS.map((item) => (
//           <Menu.Item key={item.label} onClick={toggle}>
//             <Link href={item.href}>{item.label}</Link>
//           </Menu.Item>
//         ))}
//       </Menu.Dropdown>
//     </Menu>
//   );
// };
