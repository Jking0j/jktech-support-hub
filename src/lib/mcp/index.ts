import { auth, defineMcp } from "@lovable.dev/mcp-js";
import listEnquiriesTool from "./tools/list-enquiries";

// The OAuth issuer must be the direct Supabase host, built from the project ref
// (VITE_SUPABASE_URL may be a .lovable.cloud proxy).
const projectRef = import.meta.env.VITE_SUPABASE_PROJECT_ID ?? "project-ref-unset";

export default defineMcp({
  name: "jktechsolutions-mcp",
  title: "JKTechSolutions MCP",
  version: "0.1.0",
  instructions:
    "Tools for JKTechSolutions. Use `list_contact_enquiries` to review recent submissions from the website contact form.",
  auth: auth.oauth.issuer({
    issuer: `https://${projectRef}.supabase.co/auth/v1`,
    acceptedAudiences: "authenticated",
  }),
  tools: [listEnquiriesTool],
});
