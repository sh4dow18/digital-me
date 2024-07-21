// Nirit Page Requirements
import ProjectDocs from "@/components/ProjectDocs";
import { Metadata } from "next";
// Nirit Page Metadata
export const metadata: Metadata = {
  title: "Nirit Docs",
  description: "Nirit Project Main Documentation Page",
};
// Nirit Page Function
function Nirit() {
  // Return the Nirit Projects Docs from Markdown to HTML
  return <ProjectDocs name="nirit" />;
}

export default Nirit;
