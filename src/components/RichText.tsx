import type { Paragraph, Segment } from '../i18n/types';

function renderSegment(segment: Segment, key: number) {
  if (typeof segment === 'string') return segment;
  if ('em' in segment) return <em key={key}>{segment.em}</em>;
  return <strong key={key}>{segment.strong}</strong>;
}

export default function RichText({ text }: { text: Paragraph }) {
  if (typeof text === 'string') return <>{text}</>;
  return <>{text.map((segment, index) => renderSegment(segment, index))}</>;
}
