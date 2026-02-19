type Props = {
  id?: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
};

export default function Section({ id, title, subtitle, children }: Props) {
  return (
    <section id={id} className="scroll-mt-28">
      <div className="mb-6">
        <h2 className="text-2xl font-bold tracking-tight">
          <span className="text-cyber-gold">/</span> {title}
        </h2>
        {subtitle ? <p className="mt-2 text-white/70">{subtitle}</p> : null}
      </div>
      {children}
    </section>
  );
}
