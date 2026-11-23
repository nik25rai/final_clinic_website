import { Anchor, Activity, Sparkles, Crown, Smile, Gem, Baby, ShieldCheck, Wind, Milk, type LucideIcon } from "lucide-react";
const map: Record<string, LucideIcon> = { Anchor, Activity, Sparkles, Crown, Smile, Gem, Baby, ShieldCheck, Wind, Milk };
export const ServiceIcon = ({ name, className }: { name: string; className?: string }) => {
  const I = map[name] ?? Smile; return <I className={className} aria-hidden />;
};
