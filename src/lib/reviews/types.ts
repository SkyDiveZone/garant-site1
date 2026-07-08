export type ReviewStatus = "pending" | "approved" | "rejected";

export interface Review {
  id: string;
  name: string;
  phone?: string;
  rating: number;
  service: string;
  district: string;
  text: string;
  photos: string[];
  status: ReviewStatus;
  createdAt: string;
  /** Отображаемая дата, например «12 января 2025» */
  date: string;
}

export interface ReviewInput {
  name: string;
  phone?: string;
  rating: number;
  service: string;
  district: string;
  text: string;
  photos?: string[];
}
