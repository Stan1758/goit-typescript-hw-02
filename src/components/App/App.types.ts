export interface UnsplashImage {
  id: string;
  alt_description: string | null;
  description: string | null;
  likes: number;
  urls: {
    thumb: string;
    small: string;
    regular: string;
    full: string;
  };
  user: {
    name: string;
    links?: {
      html?: string;
    };
  };
}

export interface UnsplashResponse {
  results: UnsplashImage[];
  total_pages: number;
}
