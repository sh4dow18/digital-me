// Project Docs Component Stylesheets
import "@/stylesheets/components/ProjectDocs.css";
// Project Docs Component Requirements
import Markdown, { Components } from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import rehypeSanitize from "rehype-sanitize";
// React is added explicity, because the code needs it in that way
import React from "react";
// Project Docs Component Libs
import { GetProjectDocs } from "@/lib/markdown-utils";
// Custom Types
type Props = {
  name: string;
};
type GithubAlertInfo = {
  type: string;
  title: string;
  command: string;
};
// Constant Values
const NOTE_SETTINGS: GithubAlertInfo = {
  type: "note",
  title: "Note",
  command: "[!NOTE]",
};
const TIP_SETTINGS: GithubAlertInfo = {
  type: "tip",
  title: "Tip",
  command: "[!TIP]",
};
const IMPORNTANT_SETTINGS: GithubAlertInfo = {
  type: "important",
  title: "Important",
  command: "[!IMPORTANT]",
};
// Github Alerts Custom Component to Add in React-Markdown
const GITHUB_ALERTS: Components = {
  // Alter Blockquote Tag
  blockquote: ({ children }) => {
    // Verifies if "children" exists and it is an array
    if (children && Array.isArray(children)) {
      // Init Alert Settings
      let alert_settings: GithubAlertInfo = {
        type: "blank",
        title: "",
        command: "",
      };
      // Get Information from children variable, filtering the \n
      let info = children.filter((item) => item !== "\n");
      // Copy the First Element of Info Variable
      let first_element: { props: { children: any } } = { ...info[0] };
      // Get First Element Content, if it is a string, get it, if it is an array, get the First Element
      let content =
        typeof first_element.props.children === "string"
          ? first_element.props.children
          : first_element.props.children[0];
      // If the content starts with some Github Alert Command, change the alert settings
      if (content.startsWith(NOTE_SETTINGS.command)) {
        alert_settings = NOTE_SETTINGS;
      } else if (content.startsWith(TIP_SETTINGS.command)) {
        alert_settings = TIP_SETTINGS;
      } else if (content.startsWith(IMPORNTANT_SETTINGS.command)) {
        alert_settings = IMPORNTANT_SETTINGS;
      }
      // Remove the Alert Command from the Content String
      content = content.replace(alert_settings.command, "");
      // Edit the First Element Props with the New Content
      first_element.props = {
        // Add the Original Props
        ...first_element.props,
        // If the original content was a string, put it as a String, if was an array, put it as the first element
        children:
          typeof first_element.props.children === "string"
            ? content
            : [content, ...first_element.props.children.slice(1)],
      };
      // Add the First Element to Original Info
      info[0] = first_element;
      // Return the New Blockquote Tag
      return (
        <blockquote className={alert_settings.type}>
          {alert_settings.type === "blank" ? (
            children
          ) : (
            <>
              <strong>{alert_settings.title}</strong>
              {info}
            </>
          )}
        </blockquote>
      );
    }
  },
};

async function ProjectDocs({ name }: Props) {
  const FILE = await GetProjectDocs(name);
  return (
    <Markdown
      className="markdown-body"
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw, rehypeSanitize, rehypeHighlight]}
      components={GITHUB_ALERTS}
    >
      {FILE}
    </Markdown>
  );
}

export default ProjectDocs;
