import {
  Monitor,
  Network,
  Server,
  Shield,
  Wifi,
  HardDrive,
  Mail,
  Settings,
  Lock,
  FileText,
  Phone,
  MapPin,
  Clock,
  ChevronRight,
  Printer,
  Cloud,
  KeyRound,
  Headset,
  Building2,
  Menu,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
            <Monitor className="h-5 w-5 text-primary-foreground" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold leading-none tracking-tight">
              A &amp; R
            </span>
            <span className="text-[10px] text-muted-foreground leading-none">
              opravypocitacov.sk
            </span>
          </div>
        </Link>
        <nav className="hidden items-center gap-6 text-sm md:flex">
          <Link
            href="#sluzby"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Služby
          </Link>
          <Link
            href="#riesenia"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Riešenia
          </Link>
          <Link
            href="#tlaciarne"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Tlačiarne
          </Link>
          <Link
            href="#o-nas"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            O nás
          </Link>
          <Link href="#kontakt">
            <Button size="sm">Kontaktujte nás</Button>
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
        className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-md border peer-checked:hidden"
      >
        <Menu className="h-5 w-5" />
      </label>
      <label
        htmlFor="mobile-menu"
        className="hidden h-10 w-10 cursor-pointer items-center justify-center rounded-md border peer-checked:flex"
      >
        <X className="h-5 w-5" />
      </label>
      <div className="fixed inset-x-0 top-16 z-50 hidden border-b bg-background p-6 shadow-lg peer-checked:block">
        <nav className="flex flex-col gap-4">
          <label htmlFor="mobile-menu">
            <Link
              href="#sluzby"
              className="block text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Služby
            </Link>
          </label>
          <label htmlFor="mobile-menu">
            <Link
              href="#riesenia"
              className="block text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Riešenia
            </Link>
          </label>
          <label htmlFor="mobile-menu">
            <Link
              href="#tlaciarne"
              className="block text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Tlačiarne
            </Link>
          </label>
          <label htmlFor="mobile-menu">
            <Link
              href="#o-nas"
              className="block text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              O nás
            </Link>
          </label>
          <Separator />
          <label htmlFor="mobile-menu">
            <Link href="#kontakt">
              <Button className="w-full" size="sm">
                Kontaktujte nás
              </Button>
            </Link>
          </label>
        </nav>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden border-b bg-gradient-to-b from-primary/5 to-background">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
      <div className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32 lg:py-40">
        <div className="max-w-2xl">
          <Badge variant="secondary" className="mb-6">
            <Building2 className="mr-1 h-3 w-3" />
            IT partner pre vašu firmu
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Komplexná správa IT
            <span className="text-primary"> pre firmy</span> v&nbsp;Trenčíne
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            SLA servisné zmluvy, IT outsourcing, licencie a cloudové riešenia.
            Postaráme sa o vašu IT infraštruktúru, aby ste sa vy mohli
            sústrediť na svoje podnikanie.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link href="#kontakt">
              <Button size="lg" className="w-full sm:w-auto">
                Dohodnúť konzultáciu
                <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </Link>
            <Link href="#sluzby">
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto"
              >
                Naše služby
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

const services = [
  {
    icon: FileText,
    title: "SLA servisné zmluvy",
    description:
      "Garantovaná doba odozvy a opravy. Pravidelná údržba, monitoring a proaktívna starostlivosť o vašu IT infraštruktúru.",
  },
  {
    icon: Headset,
    title: "IT outsourcing",
    description:
      "Kompletné externé IT oddelenie pre vašu firmu. Helpdesk, správa používateľov, technická podpora pre zamestnancov.",
  },
  {
    icon: Network,
    title: "Sieťová infraštruktúra",
    description:
      "Návrh, realizácia a správa kabeláže, WiFi pokrytia, sieťových zariadení a firewallov.",
  },
  {
    icon: Server,
    title: "Správa serverov",
    description:
      "Inštalácia, konfigurácia a údržba serverov. Zálohovanie dát, virtualizácia, disaster recovery.",
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
    icon: Mail,
    title: "E-mailové riešenia",
    description:
      "Nasadenie a správa e-mailových systémov, migrácia na Microsoft 365, konfigurácia poštových klientov.",
  },
  {
    icon: Shield,
    title: "Bezpečnosť a zálohovanie",
    description:
      "Ochrana pred kybernetickými hrozbami, nastavenie zálohovania, šifrovanie dát a bezpečnostný audit.",
  },
];

function Services() {
  return (
    <section id="sluzby" className="border-b py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <Badge variant="secondary" className="mb-4">
            Služby
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Chceme byť vaše IT oddelenie
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Poskytujeme komplexné IT služby na mieru. Od jednorazových zásahov
            až po trvalú správu celej infraštruktúry.
          </p>
        </div>
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <Card
              key={service.title}
              className="group transition-colors hover:border-primary/30"
            >
              <CardHeader className="pb-3">
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <service.icon className="h-5 w-5" />
                </div>
                <CardTitle className="text-base">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

const solutions = [
  {
    icon: Cloud,
    name: "Microsoft 365",
    tag: "Licencie",
    description:
      "Kompletný balík produktivity pre vašu firmu. Exchange Online, Teams, OneDrive, SharePoint a všetky Office aplikácie. Zabezpečíme nákup licencií, migráciu aj správu.",
    features: [
      "Exchange Online e-mail",
      "Microsoft Teams",
      "OneDrive for Business",
      "Správa licencií a používateľov",
    ],
  },
  {
    icon: HardDrive,
    name: "Acronis Cyber Protect Cloud",
    tag: "Zálohovanie",
    description:
      "Zálohovanie a kybernetická ochrana v jednom riešení. Cloudové zálohy, ochrana pred ransomvérom, obnova dát a bezpečnostný monitoring pre celú vašu infraštruktúru.",
    features: [
      "Cloudové zálohovanie",
      "Ochrana pred ransomvérom",
      "Disaster recovery",
      "Centrálna správa bezpečnosti",
    ],
  },
  {
    icon: KeyRound,
    name: "Kerio Control / GFI Software",
    tag: "Bezpečnosť",
    description:
      "Podnikový firewall a UTM riešenie. Pokročilá ochrana siete, filtrovanie obsahu, VPN, detekcia narušenia a kompletné riadenie sieťovej prevádzky.",
    features: [
      "UTM firewall",
      "IPS/IDS ochrana",
      "VPN server",
      "Webový filter a reporty",
    ],
  },
];

function Solutions() {
  return (
    <section
      id="riesenia"
      className="border-b bg-gradient-to-b from-secondary/50 to-background py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <Badge variant="secondary" className="mb-4">
            Licencie &amp; Riešenia
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Overené softvérové riešenia
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Sme autorizovaným partnerom pre predaj a nasadenie overených
            softvérových riešení pre firmy.
          </p>
        </div>
        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {solutions.map((solution) => (
            <Card key={solution.name} className="flex flex-col">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <solution.icon className="h-6 w-6" />
                  </div>
                  <Badge variant="outline">{solution.tag}</Badge>
                </div>
                <CardTitle className="mt-4 text-xl">{solution.name}</CardTitle>
                <CardDescription className="leading-relaxed">
                  {solution.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="mt-auto">
                <Separator className="mb-4" />
                <ul className="space-y-2">
                  {solution.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <ChevronRight className="h-3 w-3 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function Printers() {
  return (
    <section id="tlaciarne" className="border-b py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <Badge variant="secondary" className="mb-4">
              Tlačové riešenia
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Predaj a prenájom tlačiarenských zariadení
            </h2>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">
              Sme predajcom tlačiarenských zariadení značiek{" "}
              <span className="font-semibold text-foreground">EPSON</span> a{" "}
              <span className="font-semibold text-foreground">
                Konica Minolta
              </span>
              . Prenájom multifunkčných zariadení vám ušetrí investície, čas aj
              starosti.
            </p>
            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Printer className="h-4 w-4" />
                </div>
                <div>
                  <p className="font-medium">Predaj a prenájom zariadení</p>
                  <p className="text-sm text-muted-foreground">
                    Multifunkčné zariadenia formátu A3/A4 pre vašu kanceláriu
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Settings className="h-4 w-4" />
                </div>
                <div>
                  <p className="font-medium">Servis a údržba</p>
                  <p className="text-sm text-muted-foreground">
                    Pravidelná údržba, opravy a výmena spotrebného materiálu
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <HardDrive className="h-4 w-4" />
                </div>
                <div>
                  <p className="font-medium">Spotrebný materiál</p>
                  <p className="text-sm text-muted-foreground">
                    Tonery, papier a ďalší spotrebný materiál s dodaním priamo k
                    vám
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Card className="w-full max-w-sm border-primary/20 bg-gradient-to-br from-primary/5 to-secondary/30">
              <CardHeader className="text-center">
                <CardDescription>Prenájom od</CardDescription>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-5xl font-bold tracking-tight text-primary">
                    45
                  </span>
                  <span className="text-xl font-semibold text-muted-foreground">
                    &euro;
                  </span>
                </div>
                <CardDescription>mesačne / zariadenie</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-muted-foreground">
                  Plnohodnotné kopírovacie zariadenie formátu A3/A4 vrátane
                  servisu a spotrebného materiálu
                </p>
                <Link href="#kontakt">
                  <Button className="mt-6 w-full">
                    Nezáväzná ponuka
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section
      id="o-nas"
      className="border-b bg-gradient-to-b from-secondary/50 to-background py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <Badge variant="secondary" className="mb-4">
            O nás
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            A &amp; R s.r.o.
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Sme tím IT profesionálov so sídlom v Trenčíne. Špecializujeme sa na
            komplexnú správu IT pre firemných zákazníkov. Naším cieľom je byť
            spoľahlivým IT partnerom, ktorý sa postará o celú vašu
            infraštruktúru.
          </p>
          <Separator className="my-10" />
          <div className="grid gap-8 sm:grid-cols-3">
            <div>
              <div className="text-3xl font-bold text-primary">SLA</div>
              <p className="mt-2 text-sm text-muted-foreground">
                Garantované servisné zmluvy s definovanou dobou odozvy
              </p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">B2B</div>
              <p className="mt-2 text-sm text-muted-foreground">
                Zameriavame sa výhradne na firemných zákazníkov
              </p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">Trenčín</div>
              <p className="mt-2 text-sm text-muted-foreground">
                Pôsobíme v Trenčíne a blízkom okolí s rýchlym výjazdom
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="kontakt" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <Badge variant="secondary" className="mb-4">
            Kontakt
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Spojte sa s nami
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Neváhajte nás kontaktovať. Radi vám pripravíme nezáväznú ponuku na
            mieru.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-4xl gap-8 sm:grid-cols-3">
          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Phone className="h-6 w-6" />
              </div>
              <CardTitle className="text-base">Telefón</CardTitle>
            </CardHeader>
            <CardContent>
              <a
                href="tel:+421911996699"
                className="text-lg font-semibold text-primary hover:underline"
              >
                +421 911 996 699
              </a>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Mail className="h-6 w-6" />
              </div>
              <CardTitle className="text-base">E-mail</CardTitle>
            </CardHeader>
            <CardContent>
              <a
                href="mailto:tn@opravypocitacov.sk"
                className="text-lg font-semibold text-primary hover:underline"
              >
                tn@opravypocitacov.sk
              </a>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <MapPin className="h-6 w-6" />
              </div>
              <CardTitle className="text-base">Lokalita</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg font-semibold">Trenčín</p>
              <p className="text-sm text-muted-foreground">a okolie</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
              <Monitor className="h-4 w-4 text-primary-foreground" />
            </div>
            <div>
              <p className="text-sm font-semibold">A &amp; R s.r.o.</p>
              <p className="font-mono text-xs text-muted-foreground">
                IČO: 36 359 777
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              <span>Po - Pi: 8:00 - 17:00</span>
            </div>
            <Separator orientation="vertical" className="h-4" />
            <div className="flex items-center gap-1">
              <Wifi className="h-3 w-3" />
              <span>opravypocitacov.sk</span>
            </div>
          </div>
        </div>
        <Separator className="my-6" />
        <p className="text-center text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} A &amp; R s.r.o. Všetky práva
          vyhradené.
        </p>
      </div>
    </footer>
  );
}

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
