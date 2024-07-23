// Braitec Requirements
import ProjectDocs from "@/components/ProjectDocs"
import { Metadata } from "next";
// Braitec Metadata
export const metadata: Metadata = {
  title: "Braitec Docs",
  description: "Braitec Project Main Documentation Page",
};
// Braitec Page Function
function Braitec() {
  return (
    // Return the Braitec Projects Docs from Markdown to HTML
    <ProjectDocs name="braitec" />
  )
}

export default Braitec