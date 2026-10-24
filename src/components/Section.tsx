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
      className="scroll-mt-24 min-w-0 border-t border-white/5 pt-10 first:border-none first:pt-0 sm:scroll-mt-28 sm:pt-14 md:pt-16"
    >
      <div className="mb-6 max-w-7xl sm:mb-8">
        <h2 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
          <span className="text-cyber-gold font-bold">
            {title}
          </span>
        </h2>

        {subtitle && (
          <p className="mt-2 text-sm leading-relaxed text-white/100 sm:mt-3">
            {subtitle}
          </p>
        )}
      </div>
      
      {children}
    </section>
  );
}
