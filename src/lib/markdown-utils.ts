// Markdown Utils Requirements
import fs from "fs";
import path from "path";
// Get Projects Directory Path
const DIRECTORY = path.join(process.cwd(), "src/markdown");
// Get Project Docs Function
export function GetProjectDocs(fileName: string) {
  // Get Project Path
  const PROJECT = path.join(DIRECTORY, `${fileName}.md`);
  // If the Project does not exists in the Project Directory Path, shows an error
  if (!fs.existsSync(PROJECT)) {
    throw new Error(`El archivo ${fileName} no existe.`);
  }
  // Return Project File Information
  return fs.readFileSync(PROJECT, 'utf8');
}