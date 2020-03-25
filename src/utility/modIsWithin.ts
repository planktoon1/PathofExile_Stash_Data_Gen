import { ModOutput } from "../models/interfaces";

export function modIsWithin(
  modData: ModOutput,
  domains: string[] = [],
  generationType: string[] = []
): boolean {
  return (
    domains.includes(modData.domain) &&
    generationType.includes(modData.generation_type)
  );
}
