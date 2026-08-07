import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export type NavigationPath = "/" | "/events" | "/about" | "/contact" | "#";

export const handleNavigation = (
  router: AppRouterInstance,
  path: NavigationPath,
) => {
  router.push(path);
};
