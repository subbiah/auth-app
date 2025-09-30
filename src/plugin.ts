import type { PluginMeta } from "../../host/src/app/plugin-types"; // or duplicate the minimal types
const meta: PluginMeta = {
  name: "Auth",
  scope: "auth_app",
  routes: [
    {
      path: "/auth/login",
      scope: "auth_app",
      module: "./Login",
      title: "Login",
      hiddenInMenu: true,
      permissions: "public",
      group: "Auth",
    },
    {
      path: "/auth/profile",
      scope: "auth_app",
      module: "./UserProfile",
      title: "Profile",
      permissions: ["User", "Admin"],
      group: "Auth",
    },
  ],
};
export default meta;
