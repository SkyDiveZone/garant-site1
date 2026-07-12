export interface ServiceSellingHighlight {
  title: string;
  description: string;
  icon: string;
}

export interface ServiceSellingWhenItem {
  title: string;
  description?: string;
  icon?: string;
}

export interface ServiceSellingContent {
  badge: string;
  about: {
    title: string;
    subtitle?: string;
    intro: string;
    introSecondary?: string;
    highlights?: readonly ServiceSellingHighlight[];
  };
  workTypes: {
    title: string;
    subtitle?: string;
    items: readonly string[];
  };
  problems: {
    title: string;
    subtitle?: string;
    items: readonly string[];
  };
  whenToCall: {
    title: string;
    subtitle?: string;
    items: readonly ServiceSellingWhenItem[];
  };
}
