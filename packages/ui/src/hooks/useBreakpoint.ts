import { useBreakpoint as useBreakpointBase } from "use-breakpoint"

const breakpoints = {
  mobile: 0,
  tablet: 768,
  desktop: 1025,
}

export default function useBreakpoint() {
  const { breakpoint } = useBreakpointBase(breakpoints)

  return breakpoint
}
