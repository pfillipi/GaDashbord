import { Stack } from "@chakra-ui/react";
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from "react-icons/ri";

import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

export function SidebarNav() {
  return (
    <Stack spacing="12" align="flex-start">
      <NavSection title="GENERELL">
        <NavLink icon={RiDashboardLine} href="/dashboard">Dashbord</NavLink>
        <NavLink icon={RiContactsLine} href="/users">Brukerne</NavLink>
      </NavSection>
      <NavSection title="AUTOMASJON">
        <NavLink icon={RiInputMethodLine} href="/forms">Skjemaene</NavLink>
        <NavLink icon={RiGitMergeLine} href="/automation">Automasjon</NavLink>
      </NavSection>
    </Stack>
  );
}