import type { Heading } from '../i18n/types';

interface SectionTitleProps {
  title: string | Heading;
  className: string;
}

export default function SectionTitle({ title, className }: SectionTitleProps) {
  if (typeof title === 'string') return <h2 className={className}>{title}</h2>;
  return (
    <h2 className={className}>
      {title.lead}
      <br />
      <em>{title.emphasis}</em>
    </h2>
  );
}
