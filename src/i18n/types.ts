import type { et } from './et';

export type Dictionary = typeof et;

export type Lang = 'et' | 'en' | 'de';

export type Heading = { lead: string; emphasis: string };

export type Segment = string | { em: string } | { strong: string };

export type Paragraph = string | Segment[];

export type ImageText = { caption: string; alt: string };
