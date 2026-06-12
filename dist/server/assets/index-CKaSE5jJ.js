import { jsx, jsxs } from "react/jsx-runtime";
import * as React from "react";
import { useState } from "react";
import { Toaster as Toaster$1, toast } from "sonner";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import * as LabelPrimitive from "@radix-ui/react-label";
import * as SelectPrimitive from "@radix-ui/react-select";
import { ChevronDown, Check, ChevronUp, Wine, Sparkles, Truck, Lightbulb, Music, GlassWater, CalendarHeart, Briefcase, PartyPopper, CalendarCheck, Wrench, Phone, Mail, MapPin, Instagram } from "lucide-react";
import { h as heroBar } from "./router-Crl1hxNf.js";
import "@tanstack/react-query";
import "@tanstack/react-router";
const Toaster = ({ ...props }) => {
  return /* @__PURE__ */ jsx(
    Toaster$1,
    {
      className: "toaster group",
      toastOptions: {
        classNames: {
          toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
        }
      },
      ...props
    }
  );
};
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsx(Comp, { className: cn(buttonVariants({ variant, size, className })), ref, ...props });
  }
);
Button.displayName = "Button";
const Input = React.forwardRef(
  ({ className, type, ...props }, ref) => {
    return /* @__PURE__ */ jsx(
      "input",
      {
        type,
        className: cn(
          "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        ),
        ref,
        ...props
      }
    );
  }
);
Input.displayName = "Input";
const Textarea = React.forwardRef(
  ({ className, ...props }, ref) => {
    return /* @__PURE__ */ jsx(
      "textarea",
      {
        className: cn(
          "flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        ),
        ref,
        ...props
      }
    );
  }
);
Textarea.displayName = "Textarea";
const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
);
const Label = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(LabelPrimitive.Root, { ref, className: cn(labelVariants(), className), ...props }));
Label.displayName = LabelPrimitive.Root.displayName;
const furgoneImg = "/assets/furgone-Brvfn7xx.png";
const cocktailBarImg = "/assets/2-B_2qrNqO.jpeg";
const uno = "/assets/5-DISbcz0l.jpeg";
const due = "/assets/3-kLzIDW5w.jpeg";
const tre = "/assets/6-DeBfl8jE.jpeg";
const Select = SelectPrimitive.Root;
const SelectValue = SelectPrimitive.Value;
const SelectTrigger = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(
  SelectPrimitive.Trigger,
  {
    ref,
    className: cn(
      "flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background cursor-pointer data-[placeholder]:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsx(SelectPrimitive.Icon, { asChild: true, children: /* @__PURE__ */ jsx(ChevronDown, { className: "h-4 w-4 opacity-50" }) })
    ]
  }
));
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;
const SelectScrollUpButton = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SelectPrimitive.ScrollUpButton,
  {
    ref,
    className: cn("flex cursor-default items-center justify-center py-1", className),
    ...props,
    children: /* @__PURE__ */ jsx(ChevronUp, { className: "h-4 w-4" })
  }
));
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName;
const SelectScrollDownButton = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SelectPrimitive.ScrollDownButton,
  {
    ref,
    className: cn("flex cursor-default items-center justify-center py-1", className),
    ...props,
    children: /* @__PURE__ */ jsx(ChevronDown, { className: "h-4 w-4" })
  }
));
SelectScrollDownButton.displayName = SelectPrimitive.ScrollDownButton.displayName;
const SelectContent = React.forwardRef(({ className, children, position = "popper", ...props }, ref) => /* @__PURE__ */ jsx(SelectPrimitive.Portal, { children: /* @__PURE__ */ jsxs(
  SelectPrimitive.Content,
  {
    ref,
    className: cn(
      "relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-select-content-transform-origin)",
      position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
      className
    ),
    position,
    ...props,
    children: [
      /* @__PURE__ */ jsx(SelectScrollUpButton, {}),
      /* @__PURE__ */ jsx(
        SelectPrimitive.Viewport,
        {
          className: cn(
            "p-1",
            position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
          ),
          children
        }
      ),
      /* @__PURE__ */ jsx(SelectScrollDownButton, {})
    ]
  }
) }));
SelectContent.displayName = SelectPrimitive.Content.displayName;
const SelectLabel = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SelectPrimitive.Label,
  {
    ref,
    className: cn("px-2 py-1.5 text-sm font-semibold", className),
    ...props
  }
));
SelectLabel.displayName = SelectPrimitive.Label.displayName;
const SelectItem = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(
  SelectPrimitive.Item,
  {
    ref,
    className: cn(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ jsx("span", { className: "absolute right-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsx(SelectPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx(Check, { className: "h-4 w-4" }) }) }),
      /* @__PURE__ */ jsx(SelectPrimitive.ItemText, { children })
    ]
  }
));
SelectItem.displayName = SelectPrimitive.Item.displayName;
const SelectSeparator = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SelectPrimitive.Separator,
  {
    ref,
    className: cn("-mx-1 my-1 h-px bg-muted", className),
    ...props
  }
));
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;
function LandingPage() {
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-background text-foreground overflow-x-hidden", children: [
    /* @__PURE__ */ jsx(Toaster, { theme: "dark", position: "top-center" }),
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsx(Hero, {}),
    /* @__PURE__ */ jsx(Showcase, {}),
    /* @__PURE__ */ jsx(Services, {}),
    /* @__PURE__ */ jsx(HowItWorks, {}),
    /* @__PURE__ */ jsx(Gallery, {}),
    /* @__PURE__ */ jsx(Contact, {}),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
function Navbar() {
  return /* @__PURE__ */ jsx("header", { className: "fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-background/60 border-b border-border/40", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto flex items-center justify-between px-6 py-4", children: [
    /* @__PURE__ */ jsxs("a", { href: "#top", className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsx("div", { className: "h-9 w-9 rounded-lg bg-gold-gradient flex items-center justify-center shadow-gold", children: /* @__PURE__ */ jsx(Wine, { className: "h-5 w-5 text-primary-foreground" }) }),
      /* @__PURE__ */ jsxs("span", { className: "font-display font-bold text-lg tracking-tight", children: [
        "MACRAMI",
        /* @__PURE__ */ jsx("span", { className: "text-gold-gradient", children: "BAR" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("nav", { className: "hidden md:flex items-center gap-8 text-sm text-muted-foreground", children: [
      /* @__PURE__ */ jsx("a", { href: "#bar", className: "hover:text-foreground transition", children: "Il Bar" }),
      /* @__PURE__ */ jsx("a", { href: "#servizi", className: "hover:text-foreground transition", children: "Servizi" }),
      /* @__PURE__ */ jsx("a", { href: "#come-funziona", className: "hover:text-foreground transition", children: "Come Funziona" }),
      /* @__PURE__ */ jsx("a", { href: "#gallery", className: "hover:text-foreground transition", children: "Gallery" })
    ] }),
    /* @__PURE__ */ jsx(Button, { asChild: true, variant: "default", className: "bg-gold-gradient text-primary-foreground hover:opacity-90 shadow-gold border-0", children: /* @__PURE__ */ jsx("a", { href: "#contatti", children: "Preventivo" }) })
  ] }) });
}
function Hero() {
  return /* @__PURE__ */ jsxs("section", { id: "top", className: "relative min-h-screen flex items-center pt-24 pb-16 bg-hero-gradient", children: [
    /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 -z-10", children: [
      /* @__PURE__ */ jsx("img", { src: heroBar, alt: "Cocktail Bar Mobile di lusso illuminato di notte", width: 1920, height: 1080, className: "w-full h-full object-cover opacity-40" }),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/30" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center", children: [
      /* @__PURE__ */ jsxs("div", { className: "fade-in-up space-y-8", children: [
        /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 rounded-full border border-gold/40 bg-background/40 backdrop-blur px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-gold", children: [
          /* @__PURE__ */ jsx(Sparkles, { className: "h-3.5 w-3.5" }),
          "Mixology su Ruote"
        ] }),
        /* @__PURE__ */ jsxs("h1", { className: "text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05]", children: [
          "Un Cocktail Bar",
          /* @__PURE__ */ jsx("br", {}),
          /* @__PURE__ */ jsx("span", { className: "text-gold-gradient", children: "d'Élite" }),
          " al tuo",
          /* @__PURE__ */ jsx("br", {}),
          "Evento."
        ] }),
        /* @__PURE__ */ jsxs("p", { className: "text-lg text-muted-foreground max-w-xl leading-relaxed", children: [
          "Il ",
          /* @__PURE__ */ jsx("span", { className: "text-foreground font-medium", children: "cocktail bar che si sposta con te" }),
          ". Uniamo un design unique, ingredienti di qualità e una squadra di bartender esperti per dare un tocco indimenticabile e originale alla tua festa privata, matrimonio o evento."
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-4", children: [
          /* @__PURE__ */ jsx(Button, { asChild: true, size: "lg", className: "bg-gold-gradient text-primary-foreground hover:opacity-90 shadow-gold border-0 h-14 px-8 text-base", children: /* @__PURE__ */ jsx("a", { href: "#contatti", children: "Richiedi un Preventivo" }) }),
          /* @__PURE__ */ jsx(Button, { asChild: true, size: "lg", variant: "outline", className: "border-border h-14 px-8 text-base bg-background/40 backdrop-blur", children: /* @__PURE__ */ jsx("a", { href: "#bar", children: "Scopri il Bar" }) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-8 pt-6 text-sm", children: [
          /* @__PURE__ */ jsx(Stat, { value: "200+", label: "Eventi realizzati" }),
          /* @__PURE__ */ jsx(Stat, { value: "50+", label: "Cocktail Premium" }),
          /* @__PURE__ */ jsx(Stat, { value: "100%", label: "Staff qualificato" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "relative hidden lg:block fade-in-up", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute -inset-10 bg-neon-gradient opacity-20 blur-3xl rounded-full glow-pulse" }),
        /* @__PURE__ */ jsx("div", { className: "relative rounded-2xl overflow-hidden shadow-elegant border border-gold/20", children: /* @__PURE__ */ jsx("img", { src: furgoneImg, alt: "Furgone Macramì Bar in viaggio", width: 1920, height: 1080, className: "w-full h-[560px] object-cover" }) })
      ] })
    ] })
  ] });
}
function Stat({
  value,
  label
}) {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("div", { className: "font-display text-3xl font-bold text-gold-gradient", children: value }),
    /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-widest text-muted-foreground mt-1", children: label })
  ] });
}
function Showcase() {
  const features = [{
    icon: Truck,
    title: "Itinerante",
    desc: "Arriva ovunque tu voglia, anche outdoor."
  }, {
    icon: Lightbulb,
    title: "Retroilluminato",
    desc: "Grafiche pop e luci neon a tema cocktail."
  }, {
    icon: Music,
    title: "Sound System",
    desc: "Impianto audio integrato per la giusta vibe."
  }, {
    icon: GlassWater,
    title: "Full Equipped",
    desc: "Postazioni mixology, ghiaccio, vetreria premium."
  }];
  return /* @__PURE__ */ jsx("section", { id: "bar", className: "relative py-28", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center", children: [
    /* @__PURE__ */ jsxs("div", { className: "relative order-2 lg:order-1", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute -inset-6 bg-neon-gradient opacity-15 blur-3xl rounded-3xl" }),
      /* @__PURE__ */ jsx("div", { className: "relative rounded-2xl overflow-hidden border border-border shadow-elegant", children: /* @__PURE__ */ jsx("img", { src: cocktailBarImg, alt: "Cocktail bar mobile in azione a un evento", loading: "lazy", width: 1024, height: 1024, className: "w-full h-[520px] object-cover" }) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "order-1 lg:order-2 space-y-8", children: [
      /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-[0.3em] text-gold", children: "Il Nostro Bar" }),
      /* @__PURE__ */ jsxs("h2", { className: "text-4xl md:text-5xl font-bold leading-tight", children: [
        "Un palcoscenico per la ",
        /* @__PURE__ */ jsx("span", { className: "text-gold-gradient", children: "mixology." })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-lg leading-relaxed", children: "Il nostro imponente chiosco itinerante è molto più di un bar: è un'installazione scenografica che cattura lo sguardo. Aperture ad ala di gabbiano, grafiche cocktail retroilluminate in fucsia, azzurro e verde, e tutto il necessario per servire drink di altissimo livello." }),
      /* @__PURE__ */ jsx("div", { className: "grid sm:grid-cols-2 gap-4", children: features.map((f) => /* @__PURE__ */ jsxs("div", { className: "group rounded-xl border border-border bg-card/60 backdrop-blur p-5 hover:border-gold/60 transition-all", children: [
        /* @__PURE__ */ jsx("div", { className: "h-10 w-10 rounded-lg bg-gold-gradient flex items-center justify-center mb-3 shadow-gold", children: /* @__PURE__ */ jsx(f.icon, { className: "h-5 w-5 text-primary-foreground" }) }),
        /* @__PURE__ */ jsx("div", { className: "font-display font-semibold text-base", children: f.title }),
        /* @__PURE__ */ jsx("div", { className: "text-sm text-muted-foreground mt-1", children: f.desc })
      ] }, f.title)) })
    ] })
  ] }) });
}
function Services() {
  const services = [{
    icon: CalendarHeart,
    title: "Matrimoni Eleganti",
    desc: "Open bar, drink signature dedicati agli sposi e un'esperienza visiva che incanta i tuoi ospiti dal welcome al dopo-cena.",
    accent: "neon-pink"
  }, {
    icon: Briefcase,
    title: "Eventi Aziendali",
    desc: "Format premium per corporate, inaugurazioni e cene di gala. Drink premium, staff qualificato e branding personalizzabile.",
    accent: "neon-cyan"
  }, {
    icon: PartyPopper,
    title: "Feste Private",
    desc: "Compleanni, anniversari, party in villa. Open bar con cocktail classici e creazioni esclusive servite dal nostro team.",
    accent: "neon-green"
  }];
  return /* @__PURE__ */ jsx("section", { id: "servizi", className: "relative py-28 border-t border-border/50", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "max-w-2xl mx-auto text-center mb-16", children: [
      /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-[0.3em] text-gold mb-4", children: "Servizi su Misura" }),
      /* @__PURE__ */ jsxs("h2", { className: "text-4xl md:text-5xl font-bold", children: [
        "Pensato per ogni ",
        /* @__PURE__ */ jsx("span", { className: "text-gold-gradient", children: "occasione" }),
        "."
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mt-5 text-lg", children: "Ogni formula include open bar, drink premium e staff qualificato." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-3 gap-6", children: services.map((s) => /* @__PURE__ */ jsxs("div", { className: "group relative rounded-2xl border border-border bg-card/60 backdrop-blur p-8 hover:-translate-y-1 hover:border-gold/60 transition-all duration-300 overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute -top-20 -right-20 h-48 w-48 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition", style: {
        background: `var(--${s.accent})`
      } }),
      /* @__PURE__ */ jsx(s.icon, { className: "h-10 w-10 text-gold mb-6" }),
      /* @__PURE__ */ jsx("h3", { className: "font-display text-2xl font-bold mb-3", children: s.title }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground leading-relaxed", children: s.desc }),
      /* @__PURE__ */ jsx("div", { className: "mt-6 pt-6 border-t border-border/60 flex flex-wrap gap-2 text-xs", children: ["Open Bar", "Drink Premium", "Staff Qualificato"].map((t) => /* @__PURE__ */ jsx("span", { className: "px-3 py-1 rounded-full bg-secondary text-secondary-foreground", children: t }, t)) })
    ] }, s.title)) })
  ] }) });
}
function HowItWorks() {
  const steps = [{
    icon: CalendarCheck,
    title: "Scegli data e menu",
    desc: "Concordiamo insieme la data dell'evento e selezioniamo il menu cocktail più adatto."
  }, {
    icon: Wrench,
    title: "Allestiamo tutto",
    desc: "Arriviamo con il nostro bar mobile e ci occupiamo dell'intero allestimento, luci e audio compresi."
  }, {
    icon: GlassWater,
    title: "I bartender servono",
    desc: "I nostri mixologist professionisti deliziano i tuoi ospiti con drink curati nei minimi dettagli."
  }];
  return /* @__PURE__ */ jsx("section", { id: "come-funziona", className: "relative py-28 border-t border-border/50", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "max-w-2xl mx-auto text-center mb-16", children: [
      /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-[0.3em] text-gold mb-4", children: "Come Funziona" }),
      /* @__PURE__ */ jsxs("h2", { className: "text-4xl md:text-5xl font-bold", children: [
        "Tre step. ",
        /* @__PURE__ */ jsx("span", { className: "text-gold-gradient", children: "Zero pensieri." })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-3 gap-8 relative", children: [
      /* @__PURE__ */ jsx("div", { className: "hidden md:block absolute top-10 left-[16%] right-[16%] h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" }),
      steps.map((s, i) => /* @__PURE__ */ jsxs("div", { className: "relative text-center", children: [
        /* @__PURE__ */ jsxs("div", { className: "mx-auto h-20 w-20 rounded-full bg-card border-2 border-gold/60 flex items-center justify-center shadow-gold relative z-10", children: [
          /* @__PURE__ */ jsx(s.icon, { className: "h-8 w-8 text-gold" }),
          /* @__PURE__ */ jsx("div", { className: "absolute -top-2 -right-2 h-7 w-7 rounded-full bg-gold-gradient text-primary-foreground text-xs font-bold flex items-center justify-center", children: i + 1 })
        ] }),
        /* @__PURE__ */ jsx("h3", { className: "font-display text-xl font-bold mt-6", children: s.title }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mt-3 max-w-xs mx-auto", children: s.desc })
      ] }, s.title))
    ] })
  ] }) });
}
function Gallery() {
  const items = [
    {
      src: uno,
      label: "L'atmosfera del nostro bar mobile"
    },
    {
      src: due,
      label: "Dettagli neon e vibrazioni pop"
    },
    {
      src: tre,
      label: "Un benvenuto in stile cocktail bar"
    }
    // Aggiungi le altre qui quando vuoi...
  ];
  return /* @__PURE__ */ jsx("section", { id: "gallery", className: "relative py-28 border-t border-border/50", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "max-w-2xl mx-auto text-center mb-14", children: [
      /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-[0.3em] text-gold mb-4", children: "Gallery" }),
      /* @__PURE__ */ jsxs("h2", { className: "text-4xl md:text-5xl font-bold", children: [
        "Il  ",
        /* @__PURE__ */ jsx("span", { className: "text-gold-gradient", children: "bar." })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[240px] md:auto-rows-[280px]", children: items.map((it, i) => /* @__PURE__ */ jsxs("div", { className: `group relative overflow-hidden rounded-xl border border-border ${i === 0 ? "col-span-2 row-span-2 md:col-span-2 md:row-span-2" : ""}`, children: [
      /* @__PURE__ */ jsx(
        "img",
        {
          src: it.src,
          alt: it.label,
          loading: "lazy",
          width: 1024,
          height: 1024,
          className: "w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-background/90 via-background/0 to-transparent opacity-0 group-hover:opacity-100 transition duration-300" }),
      /* @__PURE__ */ jsx("div", { className: "absolute bottom-4 left-4 text-sm font-medium opacity-0 group-hover:opacity-100 transition duration-300 text-white", children: it.label })
    ] }, i)) })
  ] }) });
}
function Contact() {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    nome: "",
    email: "",
    data: "",
    tipo: "",
    messaggio: ""
  });
  const today = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
  async function handleSubmit(e) {
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
          Accept: "application/json"
        },
        body: JSON.stringify({
          access_key: "9741f8ac-eff3-4380-b6cc-cc36904b45ea",
          name: form.nome,
          email: form.email,
          date: form.data,
          event_type: form.tipo,
          message: form.messaggio,
          subject: `Nuovo Preventivo da ${form.nome} - Macramì Bar`
        })
      });
      const result = await response.json();
      if (result.success) {
        toast.success("Richiesta inviata! Ti contatteremo entro 24h.");
        setForm({
          nome: "",
          email: "",
          data: "",
          tipo: "",
          messaggio: ""
        });
      } else {
        toast.error("Errore nell'invio. Riprova più tardi.");
      }
    } catch (error) {
      toast.error("Errore di connessione. Riprova.");
    } finally {
      setLoading(false);
    }
  }
  return /* @__PURE__ */ jsx("section", { id: "contatti", className: "relative py-28 border-t border-border/50", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-6 grid lg:grid-cols-2 gap-12", children: [
    /* @__PURE__ */ jsxs("div", { className: "space-y-8", children: [
      /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-[0.3em] text-gold", children: "Richiedi un Preventivo" }),
      /* @__PURE__ */ jsxs("h2", { className: "text-4xl md:text-5xl font-bold leading-tight", children: [
        "Pronto a stupire ",
        /* @__PURE__ */ jsx("br", {}),
        "i tuoi ",
        /* @__PURE__ */ jsx("span", { className: "text-gold-gradient", children: "ospiti?" })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-lg leading-relaxed", children: "Raccontaci il tuo evento. Ti risponderemo entro 24 ore con una proposta su misura, dettagliata e completamente personalizzabile." }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-4 pt-4", children: [
        /* @__PURE__ */ jsx(ContactRow, { icon: Phone, label: "+39 348 462 8993" }),
        /* @__PURE__ */ jsx(ContactRow, { icon: Mail, label: "infomacrami@gmail.com" }),
        /* @__PURE__ */ jsx(ContactRow, { icon: MapPin, label: "Disponibili in tutta Italia" }),
        /* @__PURE__ */ jsx(ContactRow, { icon: Instagram, label: "@macramibar" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "relative rounded-2xl border border-border bg-card/80 backdrop-blur p-8 shadow-elegant", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute -inset-1 bg-neon-gradient opacity-10 blur-2xl rounded-2xl -z-10" }),
      /* @__PURE__ */ jsxs("div", { className: "grid gap-5", children: [
        /* @__PURE__ */ jsx(Field, { label: "Nome e Cognome *", children: /* @__PURE__ */ jsx(Input, { value: form.nome, onChange: (e) => setForm({
          ...form,
          nome: e.target.value
        }), placeholder: "Mario Rossi", maxLength: 100, className: "bg-input border-border h-12" }) }),
        /* @__PURE__ */ jsx(Field, { label: "Email *", children: /* @__PURE__ */ jsx(Input, { type: "email", value: form.email, onChange: (e) => setForm({
          ...form,
          email: e.target.value
        }), placeholder: "mario@email.it", maxLength: 255, className: "bg-input border-border h-12" }) }),
        /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-2 gap-5", children: [
          /* @__PURE__ */ jsx(Field, { label: "Data Evento", children: /* @__PURE__ */ jsx(
            Input,
            {
              type: "date",
              min: today,
              value: form.data,
              onChange: (e) => setForm({
                ...form,
                data: e.target.value
              }),
              className: "bg-input border-border h-12"
            }
          ) }),
          /* @__PURE__ */ jsx(Field, { label: "Tipo di Evento *", children: /* @__PURE__ */ jsxs(Select, { value: form.tipo, onValueChange: (v) => setForm({
            ...form,
            tipo: v
          }), children: [
            /* @__PURE__ */ jsx(SelectTrigger, { className: "bg-input border-border h-12", children: /* @__PURE__ */ jsx(SelectValue, { placeholder: "Seleziona..." }) }),
            /* @__PURE__ */ jsxs(SelectContent, { children: [
              /* @__PURE__ */ jsx(SelectItem, { value: "matrimonio", children: "Matrimonio" }),
              /* @__PURE__ */ jsx(SelectItem, { value: "aziendale", children: "Evento Aziendale" }),
              /* @__PURE__ */ jsx(SelectItem, { value: "privata", children: "Festa Privata" }),
              /* @__PURE__ */ jsx(SelectItem, { value: "compleanno", children: "Compleanno" }),
              /* @__PURE__ */ jsx(SelectItem, { value: "altro", children: "Altro" })
            ] })
          ] }) })
        ] }),
        /* @__PURE__ */ jsx(Field, { label: "Messaggio", children: /* @__PURE__ */ jsx(Textarea, { value: form.messaggio, onChange: (e) => setForm({
          ...form,
          messaggio: e.target.value
        }), placeholder: "Numero di ospiti, location, esigenze particolari...", maxLength: 1e3, rows: 4, className: "bg-input border-border resize-none" }) }),
        /* @__PURE__ */ jsx(Button, { type: "submit", disabled: loading, size: "lg", className: "bg-gold-gradient text-primary-foreground hover:opacity-90 shadow-gold border-0 h-14 text-base mt-2", children: loading ? "Invio in corso..." : "Invia Richiesta" }),
        /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground text-center", children: "Risposta garantita entro 24 ore." })
      ] })
    ] })
  ] }) });
}
function ContactRow({
  icon: Icon,
  label
}) {
  return /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
    /* @__PURE__ */ jsx("div", { className: "h-11 w-11 rounded-lg border border-gold/40 bg-card flex items-center justify-center", children: /* @__PURE__ */ jsx(Icon, { className: "h-5 w-5 text-gold" }) }),
    /* @__PURE__ */ jsx("span", { className: "text-foreground", children: label })
  ] });
}
function Field({
  label,
  children
}) {
  return /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
    /* @__PURE__ */ jsx(Label, { className: "text-xs uppercase tracking-wider text-muted-foreground", children: label }),
    children
  ] });
}
function Footer() {
  return /* @__PURE__ */ jsx("footer", { className: "border-t border-border/50 py-10", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsx("div", { className: "h-7 w-7 rounded-md bg-gold-gradient flex items-center justify-center", children: /* @__PURE__ */ jsx(Wine, { className: "h-3.5 w-3.5 text-primary-foreground" }) }),
      /* @__PURE__ */ jsxs("span", { className: "font-display font-bold text-foreground", children: [
        "MACRAMI",
        /* @__PURE__ */ jsx("span", { className: "text-gold-gradient", children: "BAR" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      "© ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      " Macrami Mobile Bar. Tutti i diritti riservati."
    ] })
  ] }) });
}
export {
  LandingPage as component
};
