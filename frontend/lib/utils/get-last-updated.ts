import { execSync } from "child_process";

export function getLastUpdated(): string {
  try {
    const date = execSync("git log -1 --format=%cI", { encoding: "utf-8" }).trim();
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  } catch {
    return new Date().toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }
}
