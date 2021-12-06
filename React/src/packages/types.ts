export type DataItem = {
  author: string;
  comment_text: string | null;
  created_at: string;
  created_at_i: number;
  num_comments: number;
  objectID: string;
  parent_id: number | null;
  points: number;
  relevancy_score: number;
  story_id: number | null;
  story_text: string;
  story_title: string | null;
  story_url: string | null;
  title: string;
  url: string;
};

export type StateTypes = {
  data: DataItem[];
  error: boolean;
};
