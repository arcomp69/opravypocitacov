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
  Globe,
  Camera,
  Database,
  Cpu,
  Handshake,
  Users,
  Clock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  AnimateIn,
  StaggerContainer,
  StaggerItem,
  TextReveal,
  TiltCard,
  MagneticWrap,
  Counter,
  ScrollProgress,
  CursorGlow,
  FloatingShapes,
  GradientBorderCard,
} from "@/components/animate-in";
import Image from "next/image";
import Link from "next/link";

/* ─────────────────────────────── HEADER ─────────────────────────────── */

function Header() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link href="/" className="group flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="AR COMP"
            width={120}
            height={40}
            className="h-8 w-auto brightness-0 invert opacity-90 transition-opacity group-hover:opacity-100"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {[
            ["Služby", "#sluzby"],
            ["Riešenia", "#riesenia"],
            ["Servery", "#servery"],
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
            <Button
              size="sm"
              className="h-8 gap-1.5 rounded-md px-4 text-xs font-medium"
            >
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
            ["Servery", "#servery"],
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
      <div className="hero-mesh noise absolute inset-0" />
      <div className="grid-pattern absolute inset-0" />

      {/* Cursor-following glow */}
      <CursorGlow className="pointer-events-none fixed z-30 hidden h-[500px] w-[500px] rounded-full bg-primary/[0.03] blur-[100px] lg:block" />

      {/* Animated floating shapes */}
      <FloatingShapes />

      <div className="relative mx-auto flex min-h-[calc(100dvh-4rem)] max-w-7xl items-center px-5 sm:px-8">
        <div className="w-full py-20 lg:py-0">
          <div className="max-w-3xl">
            <AnimateIn variant="fade-up">
              <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-medium text-primary">
                <Zap className="h-3 w-3" />
                Váš IT partner od roku 2005
              </div>
            </AnimateIn>

            <h1 className="font-[family-name:var(--font-bricolage)] text-[clamp(2.5rem,6vw,4.5rem)] font-extrabold leading-[1.05] tracking-tight">
              <TextReveal delay={0.15}>Komplexná správa</TextReveal>
              <br />
              <AnimateIn variant="fade-up" delay={0.3} className="inline-block">
                <span className="animated-gradient bg-clip-text text-transparent">
                  IT infraštruktúry
                </span>
              </AnimateIn>
              <br />
              <TextReveal delay={0.45}>pre firmy</TextReveal>
            </h1>

            <AnimateIn variant="fade-up" delay={0.5}>
              <p className="mt-7 max-w-xl text-[17px] leading-relaxed text-muted-foreground">
                Jeden kontaktný bod pre celú vašu IT infraštruktúru — od
                serverov a sietí cez licencie Microsoft 365 až po zálohovanie a
                bezpečnosť. Individuálne SLA zmluvy šité na mieru pre firmy od
                1 do 200 zamestnancov.
              </p>
            </AnimateIn>

            <AnimateIn variant="fade-up" delay={0.6}>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
                <MagneticWrap>
                  <Link href="#kontakt">
                    <Button
                      size="lg"
                      className="group h-12 gap-2 rounded-lg px-7 text-sm font-semibold shadow-[0_0_24px_oklch(0.72_0.14_220/0.2)] transition-all hover:shadow-[0_0_48px_oklch(0.72_0.14_220/0.35)]"
                    >
                      Dohodnúť konzultáciu
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </Button>
                  </Link>
                </MagneticWrap>
                <MagneticWrap>
                  <Link href="#sluzby">
                    <Button
                      variant="outline"
                      size="lg"
                      className="h-12 rounded-lg border-border/60 px-7 text-sm hover:bg-accent"
                    >
                      Preskúmať služby
                    </Button>
                  </Link>
                </MagneticWrap>
              </div>
            </AnimateIn>

            <AnimateIn variant="fade-in" delay={0.8}>
              <div className="mt-16 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-border/40 pt-8">
                {[
                  "Microsoft Partner",
                  "Acronis Partner",
                  "ESET Partner",
                  "EPSON & Konica",
                  "Dell servery",
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

          {/* Side decoration */}
          <div className="pointer-events-none absolute right-8 top-1/2 hidden -translate-y-1/2 lg:block">
            <AnimateIn variant="fade-in" delay={0.6}>
              <div className="relative h-80 w-80">
                <div className="absolute inset-0 animate-pulse-glow rounded-2xl border border-primary/10 bg-primary/[0.03]" />
                <div className="absolute inset-4 rounded-xl border border-primary/8" />
                <div className="absolute inset-8 rounded-lg border border-dashed border-primary/10" />
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <CircuitBoard className="h-12 w-12 text-primary/20" />
                </div>
                <div className="absolute -left-1 -top-1 h-3 w-3 border-l-2 border-t-2 border-primary/30" />
                <div className="absolute -right-1 -top-1 h-3 w-3 border-r-2 border-t-2 border-primary/30" />
                <div className="absolute -bottom-1 -left-1 h-3 w-3 border-b-2 border-l-2 border-primary/30" />
                <div className="absolute -bottom-1 -right-1 h-3 w-3 border-b-2 border-r-2 border-primary/30" />
              </div>
            </AnimateIn>
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}

/* ─────────────────────────────── SERVICES ─────────────────────────────── */

const services = [
  {
    icon: FileText,
    title: "SLA zmluvy na mieru",
    description:
      "Individuálne servisné zmluvy s garantovanou dobou odozvy. Pravidelná údržba, monitoring a proaktívna starostlivosť o celú infraštruktúru.",
  },
  {
    icon: Headset,
    title: "IT outsourcing",
    description:
      "Kompletné externé IT oddelenie pre vašu firmu. Helpdesk, správa používateľov a technická podpora pre všetkých zamestnancov.",
  },
  {
    icon: Network,
    title: "Sieťová infraštruktúra",
    description:
      "Návrh, realizácia a správa firemných sietí. WiFi pokrytie, switche, routery a firewally.",
  },
  {
    icon: Server,
    title: "Správa serverov",
    description:
      "Inštalácia, konfigurácia a údržba serverov Dell. Zálohovanie, virtualizácia, disaster recovery.",
  },
  {
    icon: Lock,
    title: "VPN a vzdialený prístup",
    description:
      "Bezpečné pripojenie do firemnej siete odkiaľkoľvek. Konfigurácia VPN, vzdialenej plochy a bezpečnostných politík.",
  },
  {
    icon: Monitor,
    title: "Správa pracovných staníc",
    description:
      "Inštalácia, aktualizácie, antivírus a údržba firemných počítačov a notebookov.",
  },
  {
    icon: Globe,
    title: "Webhosting a domény",
    description:
      "Hosting webových stránok, registrácia a správa domén. Spoľahlivé riešenie pre vašu online prítomnosť.",
  },
  {
    icon: Camera,
    title: "Správa kamerových systémov",
    description:
      "Správa a údržba existujúcich CCTV a IP kamerových systémov. Vzdialen prístup k záznamom a monitoring.",
  },
  {
    icon: Mail,
    title: "E-mailové riešenia",
    description:
      "Nasadenie a správa e-mailových systémov vrátane migrácie na Microsoft 365 Exchange Online.",
  },
  {
    icon: Shield,
    title: "Kybernetická bezpečnosť",
    description:
      "Ochrana pred hrozbami, nastavenie firewallov, šifrovanie dát a pravidelný bezpečnostný audit.",
  },
];

function SectionHeader({
  label,
  title,
  highlight,
  description,
}: {
  label: string;
  title: string;
  highlight: string;
  description: string;
}) {
  return (
    <>
      <AnimateIn variant="fade-up">
        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-gradient-to-r from-border to-transparent" />
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
            {label}
          </span>
          <div className="h-px flex-1 bg-gradient-to-l from-border to-transparent" />
        </div>
      </AnimateIn>
      <AnimateIn variant="fade-up" delay={0.1}>
        <h2 className="mt-8 text-center font-[family-name:var(--font-bricolage)] text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
          {title}
          <span className="text-primary"> {highlight}</span>
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-center text-base leading-relaxed text-muted-foreground">
          {description}
        </p>
      </AnimateIn>
    </>
  );
}

function Services() {
  return (
    <section id="sluzby" className="relative overflow-hidden py-28 sm:py-36">
      <div className="noise absolute inset-0" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader
          label="Služby"
          title="Jeden kontaktný bod pre"
          highlight="celé vaše IT"
          description="Pokrývame všetko od hardvéru cez softvér až po cloud. Nemusíte riešiť viacero dodávateľov — stačí zavolať nám."
        />

        <StaggerContainer className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {services.map((service) => (
            <StaggerItem key={service.title}>
              <TiltCard className="h-full">
                <GradientBorderCard className="h-full">
                  <div className="flex h-full flex-col p-5">
                    <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-lg border border-primary/15 bg-primary/8 text-primary transition-colors duration-300 group-hover:bg-primary/15">
                      <service.icon className="h-[17px] w-[17px]" />
                    </div>
                    <h3 className="mb-1.5 font-[family-name:var(--font-bricolage)] text-[14px] font-semibold leading-snug">
                      {service.title}
                    </h3>
                    <p className="text-[12px] leading-relaxed text-muted-foreground">
                      {service.description}
                    </p>
                  </div>
                </GradientBorderCard>
              </TiltCard>
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
      "Kompletný balík produktivity. Exchange Online, Teams, OneDrive, SharePoint a Office aplikácie. Ako Microsoft Partner zabezpečíme nákup licencií, migráciu z on-prem aj priebežnú správu.",
    features: [
      "Exchange Online e-mail",
      "Microsoft Teams",
      "OneDrive for Business",
      "SharePoint Online",
      "Správa licencií a používateľov",
      "Migrácia z existujúcich riešení",
    ],
  },
  {
    icon: Shield,
    name: "ESET",
    tag: "Antivírus",
    accent: "oklch(0.6 0.18 145)",
    accentBg: "oklch(0.6 0.18 145 / 0.08)",
    accentBorder: "oklch(0.6 0.18 145 / 0.2)",
    description:
      "Predaj licencií ESET pre firemných zákazníkov. Spoľahlivá ochrana koncových zariadení, serverov a e-mailov pred vírusmi, ransomvérom a online hrozbami.",
    features: [
      "ESET Endpoint Security",
      "Ochrana serverov",
      "Antispam a e-mail filter",
      "Licencie pre firmy",
      "Centrálna správa ESET PROTECT",
      "Pravidelné aktualizácie",
    ],
  },
  {
    icon: HardDrive,
    name: "Acronis Cyber Protect Cloud",
    tag: "Zálohovanie",
    accent: "oklch(0.65 0.14 220)",
    accentBg: "oklch(0.65 0.14 220 / 0.08)",
    accentBorder: "oklch(0.65 0.14 220 / 0.2)",
    description:
      "Zálohovanie a kybernetická ochrana v jednom. Ako Acronis Partner nasadzujeme cloudové zálohy, ochranu pred ransomvérom a riešenia pre obnovu dát pre celú vašu infraštruktúru.",
    features: [
      "Cloudové zálohovanie",
      "Anti-ransomware ochrana",
      "Disaster recovery",
      "Centrálna správa bezpečnosti",
      "Záloha serverov aj staníc",
      "Monitoring a reporty",
    ],
  },
  {
    icon: KeyRound,
    name: "Kerio Control / GFI Software",
    tag: "Firewall",
    accent: "oklch(0.65 0.16 280)",
    accentBg: "oklch(0.65 0.16 280 / 0.08)",
    accentBorder: "oklch(0.65 0.16 280 / 0.2)",
    description:
      "Podnikový firewall a UTM riešenie. Pokročilá ochrana siete, filtrovanie webového obsahu, integrovaný VPN server a systém detekcie narušenia pre firmy každej veľkosti.",
    features: [
      "UTM firewall",
      "IPS / IDS ochrana",
      "Integrovaný VPN server",
      "Webový filter a reporty",
      "Bandwidth management",
      "Centrálna správa pravidiel",
    ],
  },
];

function Solutions() {
  return (
    <section
      id="riesenia"
      className="relative overflow-hidden border-t border-border/40 py-28 sm:py-36"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.02] via-transparent to-transparent" />
      <div className="noise absolute inset-0" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader
          label="Licencie & Riešenia"
          title="Overené softvérové"
          highlight="riešenia"
          description="Autorizovaný partner pre predaj, nasadenie a správu podnikového softvéru. Všetko od licencie po implementáciu a podporu."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {solutions.map((solution, i) => (
            <AnimateIn
              key={solution.name}
              variant="fade-up"
              delay={0.15 + i * 0.1}
            >
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

/* ─────────────────────────────── SERVERS ─────────────────────────────── */

const serverOptions = [
  {
    icon: Server,
    title: "Fyzický server u zákazníka",
    description:
      "Dell PowerEdge server priamo vo vašich priestoroch. Plná kontrola nad dátami, minimálna latencia, ideálne pre firmy s internými aplikáciami.",
    features: [
      "Dell PowerEdge rady",
      "On-site inštalácia a správa",
      "Zálohovanie cez Acronis",
      "Monitoring 24/7",
    ],
  },
  {
    icon: Database,
    title: "Hosting v dátovom centre",
    description:
      "Dedikovaný server v profesionálnom dátovom centre. Redundantné napájanie, klimatizácia a konektivita bez starostí o fyzickú infraštruktúru.",
    features: [
      "Redundantné napájanie",
      "Garantovaná konektivita",
      "Fyzická bezpečnosť DC",
      "Vzdialená správa",
    ],
  },
  {
    icon: Cpu,
    title: "Virtuálne servery (VPS)",
    description:
      "Flexibilné virtualizované prostredie. Rýchle škálovanie zdrojov podľa aktuálnych potrieb, platíte len za to čo využívate.",
    features: [
      "Flexibilné škálovanie",
      "Rýchle nasadenie",
      "Snapshoty a zálohy",
      "Nižšie náklady na štart",
    ],
  },
];

function Servers() {
  return (
    <section
      id="servery"
      className="relative overflow-hidden border-t border-border/40 py-28 sm:py-36"
    >
      <div className="noise absolute inset-0" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader
          label="Serverové riešenia"
          title="Prenájom a správa"
          highlight="serverov"
          description="Tri spôsoby ako získať výkonný server pre vašu firmu. Všetky varianty zahŕňajú kompletnú správu, monitoring a zálohovanie."
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {serverOptions.map((option, i) => (
            <AnimateIn
              key={option.title}
              variant="fade-up"
              delay={0.15 + i * 0.1}
            >
              <TiltCard className="h-full">
                <GradientBorderCard className="h-full">
                  <div className="flex h-full flex-col p-6">
                    <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg border border-primary/15 bg-primary/8 text-primary transition-colors group-hover:bg-primary/15">
                      <option.icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-[family-name:var(--font-bricolage)] text-lg font-bold">
                      {option.title}
                    </h3>
                    <p className="mt-2 flex-1 text-[13px] leading-relaxed text-muted-foreground">
                      {option.description}
                    </p>

                    <div className="mt-6 border-t border-border/40 pt-5">
                      <ul className="space-y-2.5">
                        {option.features.map((feature) => (
                          <li
                            key={feature}
                            className="flex items-center gap-2 text-[12px] text-muted-foreground"
                          >
                            <ChevronRight className="h-3 w-3 shrink-0 text-primary" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </GradientBorderCard>
              </TiltCard>
            </AnimateIn>
          ))}
        </div>

        <AnimateIn variant="fade-up" delay={0.4}>
          <div className="mx-auto mt-12 max-w-2xl rounded-xl border border-primary/15 bg-primary/[0.03] p-6 text-center backdrop-blur-sm">
            <p className="text-sm text-muted-foreground">
              Neviete, ktorý variant je pre vás najlepší?{" "}
              <Link
                href="#kontakt"
                className="font-medium text-primary hover:underline"
              >
                Ozvite sa nám
              </Link>{" "}
              — poradíme vám riešenie presne podľa vašich potrieb a rozpočtu.
            </p>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}

/* ─────────────────────────────── PRINTERS ─────────────────────────────── */

function Printers() {
  return (
    <section
      id="tlaciarne"
      className="relative overflow-hidden border-t border-border/40 py-28 sm:py-36"
    >
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
                <span className="font-semibold text-foreground">
                  Konica Minolta
                </span>
                . Prenájom multifunkčných zariadení vám ušetrí počiatočné
                investície — platíte len mesačný paušál vrátane servisu.
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
                <div className="absolute -inset-4 rounded-3xl bg-primary/5 blur-2xl" />

                <div className="relative overflow-hidden rounded-2xl border border-primary/15 bg-card/80 backdrop-blur-sm">
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
                      Plnohodnotné kopírovacie zariadenie A3/A4 vrátane
                      kompletného servisu a spotrebného materiálu.
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

/* ─────────────────────────────── WHY US ─────────────────────────────── */

function WhyUs() {
  return (
    <section className="relative overflow-hidden border-t border-border/40 py-28 sm:py-36">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.015] via-transparent to-transparent" />
      <div className="noise absolute inset-0" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader
          label="Prečo my"
          title="Čo nás"
          highlight="odlišuje"
          description="Nie sme anonymná korporácia. Sme tím ľudí, ktorí vašu infraštruktúru poznajú osobne."
        />

        <StaggerContainer
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          stagger={0.1}
        >
          {([
            {
              icon: Handshake,
              title: "Osobný prístup",
              description:
                "Každého zákazníka poznáme osobne. Viete, komu voláte a kto príde riešiť váš problém. Žiadne call centrá ani anonymní technici.",
            },
            {
              icon: Settings,
              title: "Komplexné riešenia",
              description:
                "Od kabeláže cez servery, licencie, zálohovanie až po bezpečnosť — všetko z jedného miesta. Jeden kontaktný bod, žiadne presúvanie medzi dodávateľmi.",
            },
            {
              icon: Clock,
              title: "Dlhoročné skúsenosti",
              description:
                "Na trhu pôsobíme od roku 2005. Za ten čas sme vyriešili tisíce incidentov a pomohli desiatkam firiem v Trenčíne a okolí.",
            },
            {
              icon: Users,
              title: "Pre firmy od 1 do 200 ľudí",
              description:
                "Či ste živnostník s dvoma počítačmi alebo firma s desiatkami staníc a vlastným serverom — SLA zmluvu ušijeme na mieru presne vám.",
            },
            {
              icon: Shield,
              title: "Certifikovaní partneri",
              description:
                "Sme autorizovaný Microsoft Partner, Acronis Partner, ESET Partner a predajca EPSON a Konica Minolta. Pracujeme s overenými riešeniami.",
            },
            {
              icon: Zap,
              title: "Proaktívna správa",
              description:
                "Nečakáme, kým sa niečo pokazí. Monitorujeme, aktualizujeme a predchádzame problémom skôr, ako o nich viete.",
            },
          ] as const).map((item) => (
            <StaggerItem key={item.title}>
              <TiltCard className="h-full">
                <GradientBorderCard className="h-full">
                  <div className="flex h-full flex-col p-6">
                    <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-primary/15 bg-primary/8 text-primary transition-colors group-hover:bg-primary/15">
                      <item.icon className="h-[18px] w-[18px]" />
                    </div>
                    <h3 className="font-[family-name:var(--font-bricolage)] text-[15px] font-semibold">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </GradientBorderCard>
              </TiltCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

/* ─────────────────────────────── ABOUT ─────────────────────────────── */

function About() {
  return (
    <section
      id="o-nas"
      className="relative overflow-hidden border-t border-border/40 py-28 sm:py-36"
    >
      <div className="grid-pattern absolute inset-0 opacity-50" />
      <div className="noise absolute inset-0" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <AnimateIn variant="fade-up">
            <Image
              src="/logo.png"
              alt="AR COMP"
              width={200}
              height={67}
              className="mx-auto mb-8 h-14 w-auto brightness-0 invert opacity-80"
            />
            <h2 className="font-[family-name:var(--font-bricolage)] text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Váš IT partner
              <span className="text-primary"> od roku 2005</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              AR COMP je značka spoločnosti A&nbsp;&&nbsp;R s.r.o. so sídlom v
              Trenčíne. Špecializujeme sa na komplexnú správu IT pre firemných
              zákazníkov — od malých kancelárií po stredné firmy s desiatkami
              zamestnancov. Náš prístup je jednoduchý: poznáme vašu
              infraštruktúru osobne a staráme sa o ňu, ako keby bola naša.
            </p>
          </AnimateIn>

          <AnimateIn variant="fade-up" delay={0.15}>
            <div className="mt-12 rounded-xl border border-border/60 bg-card/50 p-8 backdrop-blur-sm">
              <div className="grid gap-8 sm:grid-cols-3">
                {[
                  {
                    icon: FileText,
                    value: "SLA",
                    label: "Individuálne servisné zmluvy pre každého zákazníka",
                  },
                  {
                    icon: Users,
                    value: "B2B",
                    label:
                      "Výhradné zameranie na firemných zákazníkov",
                  },
                  {
                    icon: MapPin,
                    value: "Trenčín",
                    label:
                      "Pôsobíme v Trenčíne a okolí s rýchlym výjazdom",
                  },
                ].map((stat) => (
                  <div key={stat.value} className="text-center">
                    <div className="mx-auto mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-primary/15 bg-primary/8 text-primary">
                      <stat.icon className="h-[18px] w-[18px]" />
                    </div>
                    <div className="font-[family-name:var(--font-bricolage)] text-2xl font-extrabold text-primary">
                      {stat.value}
                    </div>
                    <p className="mt-1 text-[12px] leading-relaxed text-muted-foreground">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </AnimateIn>

          {/* Partners strip */}
          <AnimateIn variant="fade-in" delay={0.3}>
            <div className="mt-12">
              <p className="mb-6 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60">
                Autorizovaný partner
              </p>
              <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
                {[
                  "Microsoft Partner",
                  "Acronis Partner",
                  "ESET Partner",
                  "EPSON",
                  "Konica Minolta",
                  "Dell Technologies",
                ].map((partner) => (
                  <span
                    key={partner}
                    className="text-sm font-medium text-muted-foreground/50 transition-colors hover:text-muted-foreground"
                  >
                    {partner}
                  </span>
                ))}
              </div>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────── CONTACT ─────────────────────────────── */

function Contact() {
  return (
    <section
      id="kontakt"
      className="relative overflow-hidden border-t border-border/40 py-28 sm:py-36"
    >
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
              Radi vám pripravíme nezáväznú ponuku IT služieb presne podľa
              vašich potrieb a veľkosti firmy.
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
              sub: "Po – Pi: 8:00 – 17:00",
            },
            {
              icon: Mail,
              label: "E-mail",
              value: "tn@opravypocitacov.sk",
              href: "mailto:tn@opravypocitacov.sk",
              sub: "Odpovieme do 24 hodín",
            },
            {
              icon: MapPin,
              label: "Pôsobnosť",
              value: "Trenčín a okolie",
              href: null,
              sub: "Výjazd k zákazníkovi",
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
                <p className="mt-1 text-[12px] text-muted-foreground">
                  {contact.sub}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <AnimateIn variant="fade-up" delay={0.4}>
          <div className="mx-auto mt-12 max-w-md text-center">
            <MagneticWrap className="inline-block">
              <a href="tel:+421911996699">
                <Button
                  size="lg"
                  className="group h-12 gap-2 rounded-lg px-8 text-sm font-semibold shadow-[0_0_24px_oklch(0.72_0.14_220/0.2)] transition-all hover:shadow-[0_0_48px_oklch(0.72_0.14_220/0.35)]"
                >
                  <Phone className="h-4 w-4" />
                  Zavolajte nám
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Button>
              </a>
            </MagneticWrap>
          </div>
        </AnimateIn>
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
            <Image
              src="/logo.png"
              alt="AR COMP"
              width={100}
              height={33}
              className="h-6 w-auto brightness-0 invert opacity-60"
            />
            <span className="hidden h-4 w-px bg-border sm:block" />
            <span className="font-mono text-[11px] text-muted-foreground">
              IČO: 36 359 777
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[12px] text-muted-foreground">
            <span>Po – Pi: 8:00 – 17:00</span>
            <span className="hidden h-3 w-px bg-border sm:block" />
            <a
              href="tel:+421911996699"
              className="transition-colors hover:text-foreground"
            >
              +421 911 996 699
            </a>
            <span className="hidden h-3 w-px bg-border sm:block" />
            <a
              href="mailto:tn@opravypocitacov.sk"
              className="transition-colors hover:text-foreground"
            >
              tn@opravypocitacov.sk
            </a>
          </div>
        </div>

        <Separator className="my-6 opacity-50" />

        <p className="text-center font-mono text-[11px] text-muted-foreground/60">
          &copy; {new Date().getFullYear()} A &amp; R s.r.o. Všetky práva
          vyhradené.
        </p>
      </div>
    </footer>
  );
}

/* ─────────────────────────────── PAGE ─────────────────────────────── */

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Header />
      <main className="flex-1">
        <Hero />
        <Services />
        <Solutions />
        <Servers />
        <Printers />
        <WhyUs />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
