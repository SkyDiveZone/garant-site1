export type ReviewStatus = "pending" | "approved" | "rejected";

export type ReviewCategory =
  | "santehnik"
  | "elektrik"
  | "master-na-chas"
  | "remont-kvartir";

/** Официальный ответ компании на отзыв */
export interface ReviewAdminReply {
  text: string;
  createdAt: string;
  /** Отображаемая дата, например «24.07.2026» */
  date: string;
}

export interface Review {
  id: string;
  name: string;
  phone?: string;
  rating: number;
  category: ReviewCategory;
  text: string;
  photos: string[];
  /** URL видео, загруженного администратором */
  video?: string;
  status: ReviewStatus;
  createdAt: string;
  /** Отображаемая дата, например «12 января 2025» */
  date: string;
  adminReply?: ReviewAdminReply;
}

export interface ReviewInput {
  name: string;
  phone?: string;
  rating: number;
  category: ReviewCategory;
  text: string;
  photos?: string[];
}

export interface ReviewAdminFilters {
  search?: string;
  category?: ReviewCategory | "all";
  status?: ReviewStatus | "all";
  rating?: number | "all";
  dateFrom?: string;
  dateTo?: string;
}
