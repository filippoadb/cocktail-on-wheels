import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import furgoneImg from "../assets/furgone.png";
import cocktailBarImg from '../assets/2.jpeg';
import uno from '../assets/5.jpeg';
import due from '../assets/3.jpeg';
import tre from '../assets/6.jpeg';
import quattro from '../assets/7.jpeg';
import cinque from '../assets/1.jpeg';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sparkles,
  Truck,
  GlassWater,
  Music,
  Lightbulb,
  CalendarHeart,
  Briefcase,
  PartyPopper,
  CalendarCheck,
  Wrench,
  Wine,
  Mail,
  Phone,
  MapPin,
  Instagram,
} from "lucide-react";

import heroBar from "@/assets/hero-bar.jpg";
import cocktails from "@/assets/cocktails.jpg";
import bartender from "@/assets/bartender.jpg";
import eventImg from "@/assets/event.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Macrami Mobile Bar — Cocktail Bar Mobile per Eventi" },
      {
        name: "description",
        content:
          "Noleggio Cocktail Bar Mobile su ruote per matrimoni, events aziendali e feste private. Bartender professionisti, drink premium, allestimento scenografico.",
      },
      { property: "og:title", content: "Luxe Mobile Bar — Cocktail Bar Mobile" },
      {
        property: "og:description",
        content:
          "Un vero cocktail bar d'élite direttamente al tuo evento. Chiosco itinerante, mixology professionale, atmosfera unica.",
      },
      { property: "og:image", content: heroBar },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Syne:wght@500;600;700;800&family=Inter:wght@400;500;600&display=swap",
      },
    ],
  }),
  component: LandingPage,
});

function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Toaster theme="dark" position="top-center" />
      <Navbar />
      <Hero />
      <Showcase />
      <Services />
      <HowItWorks />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}

function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-background/60 border-b border-border/40">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-lg bg-gold-gradient flex items-center justify-center shadow-gold">
            <Wine className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="font-display font-bold text-lg tracking-tight">
            MACRAMI<span className="text-gold-gradient">BAR</span>
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#bar" className="hover:text-foreground transition">Il Bar</a>
          <a href="#servizi" className="hover:text-foreground transition">Servizi</a>
          <a href="#come-funziona" className="hover:text-foreground transition">Come Funziona</a>
          <a href="#gallery" className="hover:text-foreground transition">Gallery</a>
        </nav>
        <Button asChild variant="default" className="bg-gold-gradient text-primary-foreground hover:opacity-90 shadow-gold border-0">
          <a href="#contatti">Preventivo</a>
        </Button>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center pt-24 pb-16 bg-hero-gradient">
      <div className="absolute inset-0 -z-10">
        <img
          src={heroBar}
          alt="Cocktail Bar Mobile di lusso illuminato di notte"
          width={1920}
          height={1080}
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/30" />
      </div>

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div className="fade-in-up space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-background/40 backdrop-blur px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-gold">
            <Sparkles className="h-3.5 w-3.5" />
            Mixology su Ruote
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05]">
            Un Cocktail Bar
            <br />
            <span className="text-gold-gradient">d'Élite</span> al tuo
            <br />
            Evento.
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
            Il <span className="text-foreground font-medium">cocktail bar che si sposta con te</span>.
            Uniamo un design unique, ingredienti di qualità e una squadra di bartender esperti per dare un
            tocco indimenticabile e originale alla tua festa privata, matrimonio o evento.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="bg-gold-gradient text-primary-foreground hover:opacity-90 shadow-gold border-0 h-14 px-8 text-base">
              <a href="#contatti">Richiedi un Preventivo</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-border h-14 px-8 text-base bg-background/40 backdrop-blur">
              <a href="#bar">Scopri il Bar</a>
            </Button>
          </div>
          <div className="flex flex-wrap gap-8 pt-6 text-sm">
            <Stat value="200+" label="Eventi realizzati" />
            <Stat value="50+" label="Cocktail Premium" />
            <Stat value="100%" label="Staff qualificato" />
          </div>
        </div>

        <div className="relative hidden lg:block fade-in-up">
          <div className="absolute -inset-10 bg-neon-gradient opacity-20 blur-3xl rounded-full glow-pulse" />
          <div className="relative rounded-2xl overflow-hidden shadow-elegant border border-gold/20">
            <img
              src={furgoneImg}
              alt="Furgone Macramì Bar in viaggio"
              width={1920}
              height={1080}
              className="w-full h-[560px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="font-display text-3xl font-bold text-gold-gradient">{value}</div>
      <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">{label}</div>
    </div>
  );
}

function Showcase() {
  const features = [
    { icon: Truck, title: "Itinerante", desc: "Arriva ovunque tu voglia, anche outdoor." },
    { icon: Lightbulb, title: "Retroilluminato", desc: "Grafiche pop e luci neon a tema cocktail." },
    { icon: Music, title: "Sound System", desc: "Impianto audio integrato per la giusta vibe." },
    { icon: GlassWater, title: "Full Equipped", desc: "Postazioni mixology, ghiaccio, vetreria premium." },
  ];

  return (
    <section id="bar" className="relative py-28">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative order-2 lg:order-1">
          <div className="absolute -inset-6 bg-neon-gradient opacity-15 blur-3xl rounded-3xl" />
          <div className="relative rounded-2xl overflow-hidden border border-border shadow-elegant">
            <img
              src={cocktailBarImg}
              alt="Cocktail bar mobile in azione a un evento"
              loading="lazy"
              width={1024}
              height={1024}
              className="w-full h-[520px] object-cover"
            />
          </div>
        </div>

        <div className="order-1 lg:order-2 space-y-8">
          <div className="text-xs uppercase tracking-[0.3em] text-gold">Il Nostro Bar</div>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Un palcoscenico per la <span className="text-gold-gradient">mixology.</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Il nostro imponente chiosco itinerante è molto più di un bar: è
            un'installazione scenografica che cattura lo sguardo. Aperture ad ala di gabbiano,
            grafiche cocktail retroilluminate in fucsia, azzurro e verde, e tutto il necessario
            per servire drink di altissimo livello.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {features.map((f) => (
              <div
                key={f.title}
                className="group rounded-xl border border-border bg-card/60 backdrop-blur p-5 hover:border-gold/60 transition-all"
              >
                <div className="h-10 w-10 rounded-lg bg-gold-gradient flex items-center justify-center mb-3 shadow-gold">
                  <f.icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <div className="font-display font-semibold text-base">{f.title}</div>
                <div className="text-sm text-muted-foreground mt-1">{f.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  const services = [
    {
      icon: CalendarHeart,
      title: "Matrimoni Eleganti",
      desc: "Open bar, drink signature dedicati agli sposi e un'esperienza visiva che incanta i tuoi ospiti dal welcome al dopo-cena.",
      accent: "neon-pink",
    },
    {
      icon: Briefcase,
      title: "Eventi Aziendali",
      desc: "Format premium per corporate, inaugurazioni e cene di gala. Drink premium, staff qualificato e branding personalizzabile.",
      accent: "neon-cyan",
    },
    {
      icon: PartyPopper,
      title: "Feste Private",
      desc: "Compleanni, anniversari, party in villa. Open bar con cocktail classici e creazioni esclusive servite dal nostro team.",
      accent: "neon-green",
    },
  ];

  return (
    <section id="servizi" className="relative py-28 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <div className="text-xs uppercase tracking-[0.3em] text-gold mb-4">Servizi su Misura</div>
          <h2 className="text-4xl md:text-5xl font-bold">
            Pensato per ogni <span className="text-gold-gradient">occasione</span>.
          </h2>
          <p className="text-muted-foreground mt-5 text-lg">
            Ogni formula include open bar, drink premium e staff qualificato.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="group relative rounded-2xl border border-border bg-card/60 backdrop-blur p-8 hover:-translate-y-1 hover:border-gold/60 transition-all duration-300 overflow-hidden"
            >
              <div
                className="absolute -top-20 -right-20 h-48 w-48 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition"
                style={{ background: `var(--${s.accent})` }}
              />
              <s.icon className="h-10 w-10 text-gold mb-6" />
              <h3 className="font-display text-2xl font-bold mb-3">{s.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
              <div className="mt-6 pt-6 border-t border-border/60 flex flex-wrap gap-2 text-xs">
                {["Open Bar", "Drink Premium", "Staff Qualificato"].map((t) => (
                  <span key={t} className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    { icon: CalendarCheck, title: "Scegli data e menu", desc: "Concordiamo insieme la data dell'evento e selezioniamo il menu cocktail più adatto." },
    { icon: Wrench, title: "Allestiamo tutto", desc: "Arriviamo con il nostro bar mobile e ci occupiamo dell'intero allestimento, luci e audio compresi." },
    { icon: GlassWater, title: "I bartender servono", desc: "I nostri mixologist professionisti deliziano i tuoi ospiti con drink curati nei minimi dettagli." },
  ];

  return (
    <section id="come-funziona" className="relative py-28 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <div className="text-xs uppercase tracking-[0.3em] text-gold mb-4">Come Funziona</div>
          <h2 className="text-4xl md:text-5xl font-bold">
            Tre step. <span className="text-gold-gradient">Zero pensieri.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          <div className="hidden md:block absolute top-10 left-[16%] right-[16%] h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
          {steps.map((s, i) => (
            <div key={s.title} className="relative text-center">
              <div className="mx-auto h-20 w-20 rounded-full bg-card border-2 border-gold/60 flex items-center justify-center shadow-gold relative z-10">
                <s.icon className="h-8 w-8 text-gold" />
                <div className="absolute -top-2 -right-2 h-7 w-7 rounded-full bg-gold-gradient text-primary-foreground text-xs font-bold flex items-center justify-center">
                  {i + 1}
                </div>
              </div>
              <h3 className="font-display text-xl font-bold mt-6">{s.title}</h3>
              <p className="text-muted-foreground mt-3 max-w-xs mx-auto">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
function Gallery() {
  const items = [
    { src: uno, label: "L'atmosfera del nostro bar mobile" },
    { src: due, label: "Dettagli neon e vibrazioni pop" },
    { src: tre, label: "Un benvenuto in stile cocktail bar" },
    // Aggiungi le altre qui quando vuoi...
  ];

  return (
    <section id="gallery" className="relative py-28 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <div className="text-xs uppercase tracking-[0.3em] text-gold mb-4">Gallery</div>
          <h2 className="text-4xl md:text-5xl font-bold">
            Il  <span className="text-gold-gradient">bar.</span>
          </h2>
        </div>

        {/* Abbiamo impostato una griglia con auto-rows per mantenere tutto solido ed equilibrato */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[240px] md:auto-rows-[280px]">
          {items.map((it, i) => (
            <div
              key={i}
              className={`group relative overflow-hidden rounded-xl border border-border ${
                i === 0 ? "col-span-2 row-span-2 md:col-span-2 md:row-span-2" : ""
              }`}
            >
              <img
                src={it.src}
                alt={it.label}
                loading="lazy"
                width={1024}
                height={1024}
                /* h-full e w-full costringono l'immagine a coprire l'intera area, object-cover fa il resto senza deformare */
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/0 to-transparent opacity-0 group-hover:opacity-100 transition duration-300" />
              <div className="absolute bottom-4 left-4 text-sm font-medium opacity-0 group-hover:opacity-100 transition duration-300 text-white">
                {it.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    nome: "",
    email: "",
    data: "",
    tipo: "",
    messaggio: "",
  });

  // Genera la data odierna nel formato YYYY-MM-DD richiesto dall'input date
  const today = new Date().toISOString().split("T")[0];

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.nome.trim() || !form.email.trim() || !form.tipo) {
      toast.error("Compila i campi obbligatori.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "9741f8ac-eff3-4380-b6cc-cc36904b45ea",
          name: form.nome,
          email: form.email,
          date: form.data,
          event_type: form.tipo,
          message: form.messaggio,
          subject: `Nuovo Preventivo da ${form.nome} - Macramì Bar`,
        }),
      });

      const result = await response.json();

      if (result.success) {
        toast.success("Richiesta inviata! Ti contatteremo entro 24h.");
        setForm({ nome: "", email: "", data: "", tipo: "", messaggio: "" });
      } else {
        toast.error("Errore nell'invio. Riprova più tardi.");
      }
    } catch (error) {
      toast.error("Errore di connessione. Riprova.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contatti" className="relative py-28 border-t border-border/50">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div className="text-xs uppercase tracking-[0.3em] text-gold">Richiedi un Preventivo</div>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Pronto a stupire <br />i tuoi <span className="text-gold-gradient">ospiti?</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Raccontaci il tuo evento. Ti risponderemo entro 24 ore con una proposta su misura,
            dettagliata e completamente personalizzabile.
          </p>

          <div className="space-y-4 pt-4">
            <ContactRow icon={Phone} label="+39 348 462 8993" />
            <ContactRow icon={Mail} label="infomacrami@gmail.com" />
            <ContactRow icon={MapPin} label="Disponibili in tutta Italia" />
            <ContactRow icon={Instagram} label="@macramibar" />
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="relative rounded-2xl border border-border bg-card/80 backdrop-blur p-8 shadow-elegant"
        >
          <div className="absolute -inset-1 bg-neon-gradient opacity-10 blur-2xl rounded-2xl -z-10" />
          <div className="grid gap-5">
            <Field label="Nome e Cognome *">
              <Input
                value={form.nome}
                onChange={(e) => setForm({ ...form, nome: e.target.value })}
                placeholder="Mario Rossi"
                maxLength={100}
                className="bg-input border-border h-12"
              />
            </Field>
            <Field label="Email *">
              <Input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="mario@email.it"
                maxLength={255}
                className="bg-input border-border h-12"
              />
            </Field>
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Data Evento">
                <Input
                  type="date"
                  min={today} // Impedisce la selezione di date passate
                  value={form.data}
                  onChange={(e) => setForm({ ...form, data: e.target.value })}
                  className="bg-input border-border h-12"
                />
              </Field>
              <Field label="Tipo di Evento *">
                <Select value={form.tipo} onValueChange={(v) => setForm({ ...form, tipo: v })}>
                  <SelectTrigger className="bg-input border-border h-12">
                    <SelectValue placeholder="Seleziona..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="matrimonio">Matrimonio</SelectItem>
                    <SelectItem value="aziendale">Evento Aziendale</SelectItem>
                    <SelectItem value="privata">Festa Privata</SelectItem>
                    <SelectItem value="compleanno">Compleanno</SelectItem>
                    <SelectItem value="altro">Altro</SelectItem>
                  </SelectContent>
                </Select>
              </Field>
            </div>
            <Field label="Messaggio">
              <Textarea
                value={form.messaggio}
                onChange={(e) => setForm({ ...form, messaggio: e.target.value })}
                placeholder="Numero di ospiti, location, esigenze particolari..."
                maxLength={1000}
                rows={4}
                className="bg-input border-border resize-none"
              />
            </Field>

            <Button
              type="submit"
              disabled={loading}
              size="lg"
              className="bg-gold-gradient text-primary-foreground hover:opacity-90 shadow-gold border-0 h-14 text-base mt-2"
            >
              {loading ? "Invio in corso..." : "Invia Richiesta"}
            </Button>
            <p className="text-xs text-muted-foreground text-center">
              Risposta garantita entro 24 ore.
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}

function ContactRow({ icon: Icon, label }: { icon: typeof Mail; label: string }) {
  return (
    <div className="flex items-center gap-4">
      <div className="h-11 w-11 rounded-lg border border-gold/40 bg-card flex items-center justify-center">
        <Icon className="h-5 w-5 text-gold" />
      </div>
      <span className="text-foreground">{label}</span>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="space-y-2">
      <Label className="text-xs uppercase tracking-wider text-muted-foreground">{label}</Label>
      {children}
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/50 py-10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <div className="h-7 w-7 rounded-md bg-gold-gradient flex items-center justify-center">
            <Wine className="h-3.5 w-3.5 text-primary-foreground" />
          </div>
          <span className="font-display font-bold text-foreground">
            MACRAMI<span className="text-gold-gradient">BAR</span>
          </span>
        </div>
        <div>© {new Date().getFullYear()} Macrami Mobile Bar. Tutti i diritti riservati.</div>
      </div>
    </footer>
  );
}