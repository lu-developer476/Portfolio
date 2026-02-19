import Link from "next/link";

type Variant = "red" | "green" | "gold";

const styles: Record<Variant, string> = {
  red: "border-cyber-neonRed/70 shadow-neonRed hover:bg-cyber-neonRed/10",
  green: "border-cyber-neonGreen/70 shadow-neonGreen hover:bg-cyber-neonGreen/10",
  gold: "border-cyber-gold/70 hover:bg-cyber-gold/10"
};

export default function CyberButton({
  href,
  children,
  variant = "gold",
  external,
  className
}: {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  external?: boolean;
  className?: string;
}) {
  const cn =
    "inline-flex items-center justify-center gap-2 rounded-lg border bg-black/70 px-4 py-2 text-sm font-semibold " +
    "transition will-change-transform hover:-translate-y-[1px] active:translate-y-0 " +
    styles[variant] +
    " " +
    (className ?? "");

  if (external) {
    return (
      <a className={cn} href={href} target="_blank" rel="noreferrer">
        {children}
      </a>
    );
  }

  return (
    <Link className={cn} href={href}>
      {children}
    </Link>
  );
}
