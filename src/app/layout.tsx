import "@mantine/core/styles.css";
import {
  mantineHtmlProps,
  ColorSchemeScript,
  MantineProvider,
} from "@mantine/core";
import { theme } from "../../theme";
import { ResponsiveLayout } from "@/components/responsive-layout";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="ja" {...mantineHtmlProps}>
        <head>
          <ColorSchemeScript />
          <link rel="shortcut icon" href="/favicon.svg" />
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
          />
        </head>
        <body>
          <MantineProvider theme={theme}>
            <ResponsiveLayout>{children}</ResponsiveLayout>
          </MantineProvider>
        </body>
      </html>
    </>
  );
}
