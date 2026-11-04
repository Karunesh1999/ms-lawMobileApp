interface SectionHeaderProps {
  title: string;
  subtitle: string;
}

export function SectionHeader({ title, subtitle }: SectionHeaderProps) {
  return (
    <section className="page-title">
      <p className="eyebrow">MS LAW CLIENT PORTAL</p>
      <h1>{title}</h1>
      <p className="muted">{subtitle}</p>
    </section>
  );
}
