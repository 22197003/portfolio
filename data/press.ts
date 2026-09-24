export interface PressItem {
  publication: string;
  title: string;
  date?: string;
  externalUrl?: string;
  verified: boolean;
}

export const press: PressItem[] = [
  {
    publication: "Nari Magazine",
    title: "Featured profile",
    verified: true,
    // externalUrl intentionally omitted — add once the article link is confirmed
  },
];
