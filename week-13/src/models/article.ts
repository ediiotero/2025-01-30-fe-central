export interface Article {
    id: number;
    title: string;
    body: string;
    userId: number;
  }
  
  export interface CreateArticleData {
    title: string;
    body: string;
    userId: number;
  }