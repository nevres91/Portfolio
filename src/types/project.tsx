export interface Project {
  id: string;
  title: string;
  description?: string;
  image?: string;
  githubUrl?: string;
  liveUrl: string;
  color?: string;
  key?: string;
  used_skills?: number[];
}
