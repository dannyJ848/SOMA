export interface ChildAdolescentLevelContent {
  level: number;
  title: string;
  summary: string;
  content: string;
}

export interface ChildAdolescentContent {
  title: string;
  category: string;
  subcategory: string;
  levels: ChildAdolescentLevelContent[];
}
