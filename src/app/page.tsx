import {
  Monitor,
  Network,
  Server,
  Shield,
  HardDrive,
  Mail,
  Settings,
  Lock,
  FileText,
  Phone,
  MapPin,
  ChevronRight,
  Printer,
  Cloud,
  KeyRound,
  Headset,
  Menu,
  X,
  ArrowUpRight,
  Zap,
  CircuitBoard,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { AnimateIn, StaggerContainer, StaggerItem } from "@/components/animate-in";
import Link from "next/link";

/* ─────────────────────────────── HEADER ─────────────────────────────── */

function Header() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link href="/" className="group flex items-center gap-3">
          <div className="relative flex h-9 w-9 items-center justify-center rounded-md bg-primary/15 ring-1 ring-primary/30 transition-all group-hover:bg-primary/25 group-hover:ring-primary/50">
            <CircuitBoard className="h-[18px] w-[18px] text-primary" />
          </div>
          <div className="flex flex-col">
            <span className="font-[family-name:var(--font-bricolage)] text-[15px] font-bold tracking-tight">
              A&R
            </span>
            <span className="font-mono text-[10px] tracking-wider text-muted-foreground">
              opravypocitacov.sk
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {[
            ["Služby", "#sluzby"],
            ["Riešenia", "#riesenia"],
            ["Tlačiarne", "#tlaciarne"],
            ["O nás", "#o-nas"],
          ].map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className="rounded-md px-3.5 py-2 text-[13px] text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
            >
              {label}
            </Link>
          ))}
          <div className="ml-3 h-5 w-px bg-border" />
          <Link href="#kontakt" className="ml-3">
            <Button size="sm" className="h-8 gap-1.5 rounded-md px-4 text-xs font-medium">
              Kontakt
              <ArrowUpRight className="h-3 w-3" />
            </Button>
          </Link>
        </nav>

        <MobileNav />
      </div>
    </header>
  );
}

function MobileNav() {
  return (
    <div className="md:hidden">
      <input type="checkbox" id="mobile-menu" className="peer hidden" />
      <label
        htmlFor="mobile-menu"
        className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-md border border-border/60 transition-colors hover:bg-accent peer-checked:hidden"
      >
        <Menu className="h-4 w-4" />
      </label>
      <label
        htmlFor="mobile-menu"
        className="hidden h-9 w-9 cursor-pointer items-center justify-center rounded-md border border-border/60 bg-accent transition-colors peer-checked:flex"
      >
        <X className="h-4 w-4" />
      </label>
      <div className="fixed inset-x-0 top-16 z-50 hidden border-b border-border/50 bg-background/95 px-5 py-6 shadow-2xl backdrop-blur-xl peer-checked:block">
        <nav className="flex flex-col gap-1">
          {[
            ["Služby", "#sluzby"],
            ["Riešenia", "#riesenia"],
            ["Tlačiarne", "#tlaciarne"],
            ["O nás", "#o-nas"],
          ].map(([label, href]) => (
            <label key={href} htmlFor="mobile-menu">
              <Link
                href={href}
                className="block rounded-md px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
              >
                {label}
              </Link>
            </label>
          ))}
          <Separator className="my-3" />
          <label htmlFor="mobile-menu">
            <Link href="#kontakt">
              <Button className="w-full" size="sm">
                Kontaktujte nás
                <ArrowUpRight className="ml-1 h-3 w-3" />
              </Button>
            </Link>
          </label>
        </nav>
      </div>
    </div>
  );
}

/* ─────────────────────────────── HERO ─────────────────────────────── */

function Hero() {
  return (
    <section className="relative min-h-[100dvh] overflow-hidden pt-16">
      {/* Gradient mesh background */}
      <div className="hero-mesh noise absolute inset-0" />

      {/* Grid pattern */}
      <div className="grid-pattern absolute inset-0" />

      {/* Floating geometric shapes */}
      <div className="absolute right-[10%] top-[20%] h-64 w-64 animate-float rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-[15%] left-[5%] h-48 w-48 animate-float rounded-full bg-primary/8 blur-3xl [animation-delay:2s]" />

      {/* Decorative lines */}
      <div className="absolute left-0 top-1/3 h-px w-1/4 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="absolute right-0 top-2/3 h-px w-1/3 bg-gradient-to-l from-transparent via-primary/15 to-transparent" />

      <div className="relative mx-auto flex min-h-[calc(100dvh-4rem)] max-w-7xl items-center px-5 sm:px-8">
        <div className="w-full py-20 lg:py-0">
          <div className="max-w-3xl">
            <AnimateIn variant="fade-up">
              <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-medium text-primary">
                <Zap className="h-3 w-3" />
                IT partner pre vašu firmu
              </div>
            </AnimateIn>

            <AnimateIn variant="fade-up" delay={0.1}>
              <h1 className="font-[family-name:var(--font-bricolage)] text-[clamp(2.5rem,6vw,4.5rem)] font-extrabold leading-[1.05] tracking-tight">
                Komplexná správa
                <br />
                <span className="bg-gradient-to-r from-primary via-primary to-[oklch(0.7_0.15_270)] bg-clip-text text-transparent">
                  IT infraštruktúry
                </span>
                <br />
                pre firmy
              </h1>
            </AnimateIn>

            <AnimateIn variant="fade-up" delay={0.2}>
              <p className="mt-7 max-w-lg text-[17px] leading-relaxed text-muted-foreground">
                SLA servisné zmluvy, IT outsourcing, licencie a cloudové
                riešenia. Staráme sa o vašu technológiu, vy sa sústreďte na
                podnikanie.
              </p>
            </AnimateIn>

            <AnimateIn variant="fade-up" delay={0.3}>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link href="#kontakt">
                  <Button
                    size="lg"
                    className="group h-12 gap-2 rounded-lg px-7 text-sm font-semibold shadow-[0_0_24px_oklch(0.72_0.14_220/0.2)] transition-shadow hover:shadow-[0_0_40px_oklch(0.72_0.14_220/0.3)]"
                  >
                    Dohodnúť konzultáciu
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </Button>
                </Link>
                <Link href="#sluzby">
                  <Button
                    variant="outline"
                    size="lg"
                    className="h-12 rounded-lg border-border/60 px-7 text-sm hover:bg-accent"
                  >
                    Preskúmať služby
                  </Button>
                </Link>
              </div>
            </AnimateIn>

            {/* Trust indicators */}
            <AnimateIn variant="fade-in" delay={0.5}>
              <div className="mt-16 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-border/40 pt-8">
                {[
                  "SLA zmluvy",
                  "Microsoft 365",
                  "Acronis Cloud",
                  "Kerio Control",
                ].map((item) => (
                  <span
                    key={item}
                    className="flex items-center gap-2 font-mono text-xs tracking-wide text-muted-foreground"
                  >
                    <span className="h-1 w-1 rounded-full bg-primary" />
                    {item}
                  </span>
                ))}
              </div>
            </AnimateIn>
          </div>

          {/* Side decoration — visible on lg */}
          <div className="pointer-events-none absolute right-8 top-1/2 hidden -translate-y-1/2 lg:block">
            <AnimateIn variant="fade-in" delay={0.6}>
              <div className="relative h-80 w-80">
                <div className="absolute inset-0 animate-pulse-glow rounded-2xl border border-primary/10 bg-primary/[0.03]" />
                <div className="absolute inset-4 rounded-xl border border-primary/8" />
                <div className="absolute inset-8 rounded-lg border border-dashed border-primary/10" />
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <CircuitBoard className="h-12 w-12 text-primary/20" />
                </div>
                {/* Corner accents */}
                <div className="absolute -left-1 -top-1 h-3 w-3 border-l-2 border-t-2 border-primary/30" />
                <div className="absolute -right-1 -top-1 h-3 w-3 border-r-2 border-t-2 border-primary/30" />
                <div className="absolute -bottom-1 -left-1 h-3 w-3 border-b-2 border-l-2 border-primary/30" />
                <div className="absolute -bottom-1 -right-1 h-3 w-3 border-b-2 border-r-2 border-primary/30" />
              </div>
            </AnimateIn>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}

/* ─────────────────────────────── SERVICES ─────────────────────────────── */

const services = [
  {
    icon: FileText,
    title: "SLA zmluvy",
    description:
      "Garantovaná doba odozvy a opravy. Pravidelná údržba, monitoring a proaktívna starostlivosť.",
  },
  {
    icon: Headset,
    title: "IT outsourcing",
    description:
      "Kompletné externé IT oddelenie. Helpdesk, správa používateľov, technická podpora.",
  },
  {
    icon: Network,
    title: "Sieťová infraštruktúra",
    description:
      "Návrh, realizácia a správa kabeláže, WiFi, sieťových zariadení a firewallov.",
  },
  {
    icon: Server,
    title: "Správa serverov",
    description:
      "Konfigurácia a údržba serverov. Zálohovanie dát, virtualizácia, disaster recovery.",
  },
  {
    icon: Lock,
    title: "VPN a vzdialený prístup",
    description:
      "Bezpečné pripojenie do firemnej siete odkiaľkoľvek. Konfigurácia VPN a bezpečnostných politík.",
  },
  {
    icon: Monitor,
    title: "Správa pracovných staníc",
    description:
      "Inštalácia, aktualizácie, antivírus a údržba firemných počítačov a notebookov.",
  },
  {
    icon: Mail,
    title: "E-mailové riešenia",
    description:
      "Nasadenie a správa e-mailových systémov, migrácia na Microsoft 365.",
  },
  {
    icon: Shield,
    title: "Kybernetická bezpečnosť",
    description:
      "Ochrana pred hrozbami, zálohovanie, šifrovanie dát a bezpečnostný audit.",
  },
];

function Services() {
  return (
    <section id="sluzby" className="relative overflow-hidden py-28 sm:py-36">
      <div className="noise absolute inset-0" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <AnimateIn variant="fade-up">
          <div className="flex items-center gap-3">
            <div className="h-px flex-1 bg-gradient-to-r from-border to-transparent" />
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              Služby
            </span>
            <div className="h-px flex-1 bg-gradient-to-l from-border to-transparent" />
          </div>
        </AnimateIn>

        <AnimateIn variant="fade-up" delay={0.1}>
          <h2 className="mt-8 text-center font-[family-name:var(--font-bricolage)] text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Chceme byť vaše
            <span className="text-primary"> IT oddelenie</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-center text-base leading-relaxed text-muted-foreground">
            Od jednorazových zásahov až po trvalú správu celej infraštruktúry.
            Komplexné IT služby prispôsobené vašim potrebám.
          </p>
        </AnimateIn>

        <StaggerContainer className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <StaggerItem key={service.title}>
              <div className="glow-border group relative h-full overflow-hidden rounded-xl border border-border/60 bg-card/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-primary/20 hover:bg-card/80">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-primary/15 bg-primary/8 text-primary transition-colors duration-300 group-hover:bg-primary/15">
                  <service.icon className="h-[18px] w-[18px]" />
                </div>
                <h3 className="mb-2 font-[family-name:var(--font-bricolage)] text-[15px] font-semibold">
                  {service.title}
                </h3>
                <p className="text-[13px] leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

/* ─────────────────────────────── SOLUTIONS ─────────────────────────────── */

const solutions = [
  {
    icon: Cloud,
    name: "Microsoft 365",
    tag: "Produktivita",
    accent: "oklch(0.6 0.15 25)",
    accentBg: "oklch(0.6 0.15 25 / 0.08)",
    accentBorder: "oklch(0.6 0.15 25 / 0.2)",
    description:
      "Kompletný balík produktivity pre vašu firmu. Exchange Online, Teams, OneDrive, SharePoint a Office aplikácie.",
    features: [
      "Exchange Online e-mail",
      "Microsoft Teams",
      "OneDrive for Business",
      "Správa licencií",
    ],
  },
  {
    icon: HardDrive,
    name: "Acronis Cyber Protect Cloud",
    tag: "Zálohovanie",
    accent: "oklch(0.65 0.14 155)",
    accentBg: "oklch(0.65 0.14 155 / 0.08)",
    accentBorder: "oklch(0.65 0.14 155 / 0.2)",
    description:
      "Zálohovanie a kybernetická ochrana v jednom. Cloudové zálohy, ochrana pred ransomvérom, obnova dát.",
    features: [
      "Cloudové zálohovanie",
      "Anti-ransomware",
      "Disaster recovery",
      "Centrálna správa",
    ],
  },
  {
    icon: KeyRound,
    name: "Kerio Control / GFI",
    tag: "Bezpečnosť",
    accent: "oklch(0.65 0.16 280)",
    accentBg: "oklch(0.65 0.16 280 / 0.08)",
    accentBorder: "oklch(0.65 0.16 280 / 0.2)",
    description:
      "Podnikový firewall a UTM riešenie. Pokročilá ochrana siete, filtrovanie obsahu, VPN a detekcia narušenia.",
    features: [
      "UTM firewall",
      "IPS / IDS ochrana",
      "VPN server",
      "Webový filter",
    ],
  },
];

function Solutions() {
  return (
    <section id="riesenia" className="relative overflow-hidden border-t border-border/40 py-28 sm:py-36">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.02] via-transparent to-transparent" />
      <div className="noise absolute inset-0" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <AnimateIn variant="fade-up">
          <div className="flex items-center gap-3">
            <div className="h-px flex-1 bg-gradient-to-r from-border to-transparent" />
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              Licencie & Riešenia
            </span>
            <div className="h-px flex-1 bg-gradient-to-l from-border to-transparent" />
          </div>
        </AnimateIn>

        <AnimateIn variant="fade-up" delay={0.1}>
          <h2 className="mt-8 text-center font-[family-name:var(--font-bricolage)] text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Overené softvérové
            <span className="text-primary"> riešenia</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-center text-base leading-relaxed text-muted-foreground">
            Autorizovaný partner pre predaj, nasadenie a správu podnikového
            softvéru.
          </p>
        </AnimateIn>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {solutions.map((solution, i) => (
            <AnimateIn key={solution.name} variant="fade-up" delay={0.15 + i * 0.1}>
              <div
                className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-border/60 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:border-border"
                style={
                  {
                    "--sol-accent": solution.accent,
                    "--sol-accent-bg": solution.accentBg,
                    "--sol-accent-border": solution.accentBorder,
                  } as React.CSSProperties
                }
              >
                {/* Top accent line */}
                <div
                  className="h-px w-full"
                  style={{
                    background: `linear-gradient(to right, transparent, ${solution.accent}, transparent)`,
                  }}
                />

                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-start justify-between">
                    <div
                      className="inline-flex h-11 w-11 items-center justify-center rounded-lg border transition-colors duration-300"
                      style={{
                        borderColor: solution.accentBorder,
                        backgroundColor: solution.accentBg,
                        color: solution.accent,
                      }}
                    >
                      <solution.icon className="h-5 w-5" />
                    </div>
                    <span
                      className="rounded-full border px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider"
                      style={{
                        borderColor: solution.accentBorder,
                        color: solution.accent,
                      }}
                    >
                      {solution.tag}
                    </span>
                  </div>

                  <h3 className="mt-5 font-[family-name:var(--font-bricolage)] text-lg font-bold">
                    {solution.name}
                  </h3>
                  <p className="mt-2 flex-1 text-[13px] leading-relaxed text-muted-foreground">
                    {solution.description}
                  </p>

                  <div className="mt-6 border-t border-border/40 pt-5">
                    <ul className="grid grid-cols-2 gap-x-4 gap-y-2.5">
                      {solution.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-2 text-[12px] text-muted-foreground"
                        >
                          <span
                            className="h-1 w-1 shrink-0 rounded-full"
                            style={{ backgroundColor: solution.accent }}
                          />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────── PRINTERS ─────────────────────────────── */

function Printers() {
  return (
    <section id="tlaciarne" className="relative overflow-hidden border-t border-border/40 py-28 sm:py-36">
      <div className="noise absolute inset-0" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <AnimateIn variant="slide-left">
            <div>
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                Tlačové riešenia
              </span>
              <h2 className="mt-4 font-[family-name:var(--font-bricolage)] text-3xl font-bold tracking-tight sm:text-4xl">
                Predaj a prenájom
                <span className="text-primary"> tlačiarní</span>
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                Autorizovaný predaj zariadení{" "}
                <span className="font-semibold text-foreground">EPSON</span> a{" "}
                <span className="font-semibold text-foreground">Konica Minolta</span>.
                Prenájom multifunkčných zariadení vám ušetrí investície aj starosti.
              </p>

              <div className="mt-10 space-y-5">
                {[
                  {
                    icon: Printer,
                    title: "Predaj a prenájom",
                    desc: "Multifunkčné zariadenia A3/A4 pre kanceláriu",
                  },
                  {
                    icon: Settings,
                    title: "Servis a údržba",
                    desc: "Pravidelná údržba, opravy a diagnostika",
                  },
                  {
                    icon: HardDrive,
                    title: "Spotrebný materiál",
                    desc: "Tonery a papier s dodaním priamo k vám",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-primary/15 bg-primary/8 text-primary">
                      <item.icon className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold">{item.title}</p>
                      <p className="mt-0.5 text-[13px] text-muted-foreground">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimateIn>

          <AnimateIn variant="slide-right" delay={0.2}>
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-sm">
                {/* Glow behind card */}
                <div className="absolute -inset-4 rounded-3xl bg-primary/5 blur-2xl" />

                <div className="relative overflow-hidden rounded-2xl border border-primary/15 bg-card/80 backdrop-blur-sm">
                  {/* Top accent */}
                  <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

                  <div className="p-8 text-center">
                    <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                      Prenájom od
                    </span>
                    <div className="mt-3 flex items-baseline justify-center gap-1">
                      <span className="font-[family-name:var(--font-bricolage)] text-6xl font-extrabold tracking-tight text-primary">
                        45
                      </span>
                      <span className="text-2xl font-semibold text-muted-foreground">
                        &euro;
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground">
                      mesačne / zariadenie
                    </p>

                    <Separator className="my-6" />

                    <p className="text-[13px] leading-relaxed text-muted-foreground">
                      Plnohodnotné kopírovacie zariadenie A3/A4 vrátane servisu
                      a spotrebného materiálu.
                    </p>

                    <Link href="#kontakt">
                      <Button className="mt-6 w-full gap-1.5 shadow-[0_0_20px_oklch(0.72_0.14_220/0.15)]">
                        Nezáväzná ponuka
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────── ABOUT ─────────────────────────────── */

function About() {
  return (
    <section id="o-nas" className="relative overflow-hidden border-t border-border/40 py-28 sm:py-36">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.015] via-transparent to-transparent" />
      <div className="grid-pattern absolute inset-0 opacity-50" />
      <div className="noise absolute inset-0" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <AnimateIn variant="fade-up">
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              O spoločnosti
            </span>
            <h2 className="mt-4 font-[family-name:var(--font-bricolage)] text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              A&amp;R s.r.o.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Tím IT profesionálov so sídlom v Trenčíne. Špecializujeme sa na
              komplexnú správu IT pre firemných zákazníkov — od servisných zmlúv
              cez licencie až po kompletný IT outsourcing.
            </p>
          </AnimateIn>

          <StaggerContainer
            className="mt-16 grid gap-6 sm:grid-cols-3"
            stagger={0.12}
          >
            {[
              {
                value: "SLA",
                label: "Garantované servisné zmluvy s definovanou dobou odozvy",
              },
              {
                value: "B2B",
                label: "Výhradné zameranie na firemných zákazníkov",
              },
              {
                value: "24h",
                label: "Maximálna doba odozvy pri kritických incidentoch",
              },
            ].map((stat) => (
              <StaggerItem key={stat.value}>
                <div className="group rounded-xl border border-border/60 bg-card/50 p-8 text-center backdrop-blur-sm transition-colors hover:border-primary/20">
                  <div className="font-[family-name:var(--font-bricolage)] text-4xl font-extrabold text-primary">
                    {stat.value}
                  </div>
                  <p className="mt-3 text-[13px] leading-relaxed text-muted-foreground">
                    {stat.label}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────── CONTACT ─────────────────────────────── */

function Contact() {
  return (
    <section id="kontakt" className="relative overflow-hidden border-t border-border/40 py-28 sm:py-36">
      <div className="noise absolute inset-0" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <AnimateIn variant="fade-up">
          <div className="mx-auto max-w-2xl text-center">
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              Kontakt
            </span>
            <h2 className="mt-4 font-[family-name:var(--font-bricolage)] text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Spojte sa
              <span className="text-primary"> s nami</span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Radi vám pripravíme nezáväznú ponuku IT služieb na mieru.
            </p>
          </div>
        </AnimateIn>

        <StaggerContainer
          className="mx-auto mt-16 grid max-w-4xl gap-5 sm:grid-cols-3"
          stagger={0.1}
        >
          {[
            {
              icon: Phone,
              label: "Telefón",
              value: "+421 911 996 699",
              href: "tel:+421911996699",
            },
            {
              icon: Mail,
              label: "E-mail",
              value: "tn@opravypocitacov.sk",
              href: "mailto:tn@opravypocitacov.sk",
            },
            {
              icon: MapPin,
              label: "Lokalita",
              value: "Trenčín a okolie",
              href: null,
            },
          ].map((contact) => (
            <StaggerItem key={contact.label}>
              <div className="group relative overflow-hidden rounded-xl border border-border/60 bg-card/50 p-8 text-center backdrop-blur-sm transition-all duration-300 hover:border-primary/20">
                <div className="mx-auto mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-primary/15 bg-primary/8 text-primary transition-colors duration-300 group-hover:bg-primary/15">
                  <contact.icon className="h-5 w-5" />
                </div>
                <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
                  {contact.label}
                </p>
                {contact.href ? (
                  <a
                    href={contact.href}
                    className="mt-2 block text-lg font-semibold text-primary transition-colors hover:text-primary/80"
                  >
                    {contact.value}
                  </a>
                ) : (
                  <p className="mt-2 text-lg font-semibold">{contact.value}</p>
                )}
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

/* ─────────────────────────────── FOOTER ─────────────────────────────── */

function Footer() {
  return (
    <footer className="border-t border-border/40">
      <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary/10 ring-1 ring-primary/20">
              <CircuitBoard className="h-4 w-4 text-primary" />
            </div>
            <div>
              <p className="text-sm font-semibold">A &amp; R s.r.o.</p>
              <p className="font-mono text-[11px] text-muted-foreground">
                IČO: 36 359 777
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[12px] text-muted-foreground">
            <span>Po – Pi: 8:00 – 17:00</span>
            <span className="hidden h-3 w-px bg-border sm:block" />
            <span>+421 911 996 699</span>
            <span className="hidden h-3 w-px bg-border sm:block" />
            <span>tn@opravypocitacov.sk</span>
          </div>
        </div>

        <Separator className="my-6 opacity-50" />

        <p className="text-center font-mono text-[11px] text-muted-foreground/60">
          &copy; {new Date().getFullYear()} A &amp; R s.r.o. Všetky práva vyhradené.
        </p>
      </div>
    </footer>
  );
}

/* ─────────────────────────────── PAGE ─────────────────────────────── */

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Services />
        <Solutions />
        <Printers />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
