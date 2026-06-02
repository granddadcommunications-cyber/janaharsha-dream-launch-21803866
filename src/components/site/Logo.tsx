import logoAsset from "@/assets/rrp-logo.png.asset.json";

interface LogoProps {
  className?: string;
  variant?: "default" | "light";
}

export function Logo({ className = "h-10 w-auto", variant = "default" }: LogoProps) {
  return (
    <img
      src={logoAsset.url}
      alt="RRP Realty Advisors & Developers logo"
      width={1235}
      height={1235}
      className={`${className} ${variant === "light" ? "bg-white rounded-md p-1" : ""}`}
    />
  );
}
