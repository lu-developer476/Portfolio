type Props = {
  id?: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
};

export default function Section({ id, title, subtitle, children }: Props) {
  return (
    <section
      id={id}
      className="scroll-mt-28 border-t border-white/5 pt-16 first:border-none first:pt-0"
    >
      <div className="mb-8 max-w-2xl">
        <h2 className="text-2xl font-semibold tracking-tight text-white">
          <span className="text-cyber-gold font-bold">
            {title}
          </span>
        </h2>

        {subtitle && (
          <p className="mt-3 text-sm leading-relaxed text-white/70">
            {subtitle}
          </p>
        )}
      </div>
      
      {children}
    </section>
  );
}
