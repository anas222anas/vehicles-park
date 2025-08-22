export interface Movie {
    id: string | null;
    realName: string | null;
    displayName: string | null;
    releaseDate: Date | null;
    resolution: ResolutionType
}
export type ResolutionType = '4K' | '1080' | '2K' | '720' | null;

export const ResolutionOption = ['4K', '1080', '720'];

export const YearsOption: string[] = Array.from(
  { length: 2026 - 1970 + 1 }, // number of years
  (_, i) => (2026 - i).toString() // generate string from 2026 down
);