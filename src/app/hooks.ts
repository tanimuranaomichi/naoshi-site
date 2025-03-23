import { MOBILE_BREAKPOINT } from "@/components/responsive-layout";
import { useMantineTheme } from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";

export const useIsMobile = () => {
  const { width } = useViewportSize();
  const theme = useMantineTheme();
  const breakpointValue = theme.breakpoints[MOBILE_BREAKPOINT];
  const breakpointPixels = parseFloat(breakpointValue) * 16;
  const isMobile = width < breakpointPixels;

  return isMobile;
};
