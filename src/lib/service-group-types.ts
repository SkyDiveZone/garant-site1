export interface ServiceGroupItem {
  title: string;
  description: string;
  href?: string;
}

export interface ServiceGroup {
  title: string;
  items: ServiceGroupItem[];
}

export interface ServiceGroupsConfig {
  badge: string;
  title: string;
  subtitle: string;
  groups: readonly ServiceGroup[];
}
