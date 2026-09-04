import { createFileRoute } from "@tanstack/react-router";
import {
  Wind,
  Cpu,
  Gauge,
  Leaf,
  ShieldCheck,
  Volume2,
  Radar,
  Sparkles,
  ArrowRight,
  Check,
  Home,
  UtensilsCrossed,
  Building2,
  GraduationCap,
} from "lucide-react";
import heroKitchen from "@/assets/hero-kitchen.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AeroSense — AI Kitchen Exhaust Fan Automation" },
      {
        name: "description",
        content:
          "AeroSense senses smoke, heat and grease in real time and runs your kitchen exhaust fan at exactly the right speed — clearer air, up to 40% less energy waste.",
      },
      { property: "og:title", content: "AeroSense — AI Kitchen Exhaust Fan Automation" },
      {
        property: "og:description",
        content:
          "Automatic ventilation that prevents smoke buildup and cuts wasted fan energy in homes and commercial kitchens.",
      },
    ],
  }),
  component: Index,
});

const steps = [
  {
    icon: Radar,
    title: "Sense",
    body: "A compact multi-sensor module reads smoke particulates, VOCs, humidity and cooktop heat 20 times a second.",
  },
  {
    icon: Cpu,
    title: "Predict",
    body: "On-device AI recognises the cooking pattern — searing, boiling, frying — and forecasts smoke buildup before you see it.",
  },
  {
    icon: Wind,
    title: "Act",
    body: "The fan ramps to the exact speed needed, never louder or longer than necessary, then winds down on its own.",
  },
  {
    icon: Sparkles,
    title: "Learn",
    body: "Every session refines the model to your kitchen's layout, appliances and habits, so it gets quieter and leaner over time.",
  },
];

const benefits = [
  {
    icon: ShieldCheck,
    title: "Healthier air",
    body: "Particulate levels stay below safe thresholds even during heavy searing sessions.",
  },
  {
    icon: Leaf,
    title: "Up to 40% less energy",
    body: "The fan stops running at full blast for hours after the pan comes off the heat.",
  },
  {
    icon: Volume2,
    title: "Noticeably quieter",
    body: "Right-sized airflow means fewer minutes at maximum speed and a calmer kitchen.",
  },
  {
    icon: Gauge,
    title: "Zero fiddling",
    body: "No dials, no remembering. Cook, and ventilation handles itself from first sizzle to last.",
  },
];

const useCases = [
  {
    icon: Home,
    title: "Family homes",
    body: "Open-plan kitchens where smoke drifts into living spaces and lingers in fabrics.",
  },
  {
    icon: UtensilsCrossed,
    title: "Restaurants",
    body: "High-heat lines that run hoods at full power all service, whether or not it's needed.",
  },
  {
    icon: Building2,
    title: "Multi-unit buildings",
    body: "Landlords cutting shared ventilation costs and odour complaints between apartments.",
  },
  {
    icon: GraduationCap,
    title: "Canteens & campuses",
    body: "Institutional kitchens with strict air quality standards and tight energy budgets.",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 glass border-b border-border/60">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <a href="#top" className="flex items-center gap-2 font-display text-lg font-bold tracking-tight text-ink">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <Wind className="h-4 w-4" aria-hidden="true" />
            </span>
            AeroSense
          </a>
          <div className="hidden items-center gap-8 text-sm font-medium text-muted-foreground md:flex">
            <a href="#problem" className="transition-colors hover:text-foreground">Why it matters</a>
            <a href="#how" className="transition-colors hover:text-foreground">How it works</a>
            <a href="#dashboard" className="transition-colors hover:text-foreground">Dashboard</a>
            <a href="#use-cases" className="transition-colors hover:text-foreground">Use cases</a>
          </div>
          <a
            href="#cta"
            className="rounded-full bg-ink px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Book a demo
          </a>
        </nav>
      </header>

      <main id="top">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <img
            src={heroKitchen}
            alt="Modern kitchen with a stainless steel range hood drawing steam upward"
            width={1920}
            height={1080}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/20" />
          <div className="relative mx-auto grid max-w-6xl gap-10 px-5 py-24 md:py-36">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-card/70 px-3 py-1 text-xs font-medium uppercase tracking-widest text-primary">
                <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
                AI ventilation, built in
              </span>
              <h1 className="mt-6 text-balance font-display text-4xl font-bold leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-6xl">
                Your exhaust fan should know when to work.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
                AeroSense reads smoke, heat and grease in real time and runs your kitchen hood at
                exactly the right speed — clearing the air before it fills the room, and shutting
                off before it wastes a watt.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href="#cta"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-transform hover:-translate-y-0.5"
                >
                  Book a demo
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
                <a
                  href="#how"
                  className="inline-flex items-center rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
                >
                  See how it works
                </a>
              </div>
              <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6">
                {[
                  ["40%", "less fan energy"],
                  ["3.5x", "faster smoke clearing"],
                  ["0", "switches to touch"],
                ].map(([stat, label]) => (
                  <div key={label}>
                    <dt className="font-display text-2xl font-bold text-ink sm:text-3xl">{stat}</dt>
                    <dd className="mt-1 text-xs uppercase tracking-wide text-muted-foreground">{label}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        {/* Problem / solution */}
        <section id="problem" className="mx-auto max-w-6xl px-5 py-24">
          <div className="grid gap-10 md:grid-cols-2">
            <div className="rounded-3xl border border-border bg-card p-8">
              <span className="text-xs font-semibold uppercase tracking-widest text-destructive">
                The problem
              </span>
              <h2 className="mt-4 font-display text-2xl font-bold text-ink">
                Manual hoods are always wrong in one direction
              </h2>
              <ul className="mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground">
                {[
                  "Switched on too late, so smoke and grease have already spread through the room.",
                  "Left running at full speed long after cooking, burning electricity for nothing.",
                  "Loud enough that people turn them down — or never turn them on at all.",
                  "No visibility into air quality, filter condition or actual running costs.",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-destructive" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-primary/25 bg-gradient-to-br from-accent/60 to-card p-8">
              <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                The AeroSense way
              </span>
              <h2 className="mt-4 font-display text-2xl font-bold text-ink">
                Ventilation that matches the moment
              </h2>
              <ul className="mt-6 space-y-4 text-sm leading-relaxed text-ink-soft">
                {[
                  "Starts the instant the sensors detect heat and particulates rising.",
                  "Modulates speed continuously instead of jumping between crude presets.",
                  "Winds down automatically once the air is measurably clear again.",
                  "Reports air quality, energy use and filter health in a live dashboard.",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section id="how" className="bg-ink py-24 text-primary-foreground">
          <div className="mx-auto max-w-6xl px-5">
            <div className="max-w-2xl">
              <span className="text-xs font-semibold uppercase tracking-widest text-teal-glow">
                How it works
              </span>
              <h2 className="mt-4 text-balance font-display text-3xl font-bold sm:text-4xl">
                Four steps, running continuously in the background
              </h2>
            </div>
            <ol className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map((step, i) => (
                <li
                  key={step.title}
                  className="rounded-2xl border border-primary-foreground/10 bg-primary-foreground/5 p-6"
                >
                  <div className="flex items-center justify-between">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-glow/15 text-teal-glow">
                      <step.icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span className="font-display text-sm text-primary-foreground/40">
                      0{i + 1}
                    </span>
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-primary-foreground/70">
                    {step.body}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Benefits */}
        <section className="mx-auto max-w-6xl px-5 py-24">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">
              Benefits
            </span>
            <h2 className="mt-4 text-balance font-display text-3xl font-bold text-ink sm:text-4xl">
              Cleaner air and a smaller bill, without changing how you cook
            </h2>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="group rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-lg hover:shadow-primary/10"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                  <b.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold text-ink">{b.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Dashboard */}
        <section id="dashboard" className="bg-secondary/60 py-24">
          <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 lg:grid-cols-2">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                The dashboard
              </span>
              <h2 className="mt-4 text-balance font-display text-3xl font-bold text-ink sm:text-4xl">
                Every session, measured
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                A wall panel or phone app shows exactly what the system is doing and why — live
                particulate readings, current fan speed, energy saved this month and when the
                filter actually needs cleaning.
              </p>
              <ul className="mt-8 space-y-3 text-sm text-ink-soft">
                {[
                  "Live PM2.5, VOC and humidity readings per zone",
                  "Energy use compared against always-on ventilation",
                  "Filter life estimated from real grease load, not a timer",
                  "Alerts and reports for multi-kitchen operators",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl bg-ink p-6 shadow-2xl shadow-ink/20">
              <div className="flex items-center justify-between text-primary-foreground">
                <div>
                  <p className="font-display text-sm font-semibold">Kitchen — main hood</p>
                  <p className="text-xs text-primary-foreground/50">Live · updated just now</p>
                </div>
                <span className="rounded-full bg-teal-glow/15 px-3 py-1 text-xs font-medium text-teal-glow">
                  Auto mode
                </span>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-3">
                {[
                  ["PM2.5", "12", "µg/m³"],
                  ["VOC", "0.3", "ppm"],
                  ["Fan", "38", "%"],
                ].map(([label, value, unit]) => (
                  <div
                    key={label}
                    className="rounded-xl border border-primary-foreground/10 bg-primary-foreground/5 p-4"
                  >
                    <p className="text-[11px] uppercase tracking-wide text-primary-foreground/50">
                      {label}
                    </p>
                    <p className="mt-1 font-display text-2xl font-bold text-primary-foreground">
                      {value}
                      <span className="ml-1 text-xs font-normal text-primary-foreground/50">
                        {unit}
                      </span>
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-4 rounded-xl border border-primary-foreground/10 bg-primary-foreground/5 p-4">
                <div className="flex items-baseline justify-between">
                  <p className="text-xs uppercase tracking-wide text-primary-foreground/50">
                    Airflow, last 60 min
                  </p>
                  <p className="text-xs text-teal-glow">Peak 82%</p>
                </div>
                <div className="mt-4 flex h-24 items-end gap-1.5" aria-hidden="true">
                  {[12, 18, 15, 30, 62, 82, 74, 55, 46, 38, 30, 26, 22, 18, 16, 14].map((h, i) => (
                    <div
                      key={i}
                      style={{ height: `${h}%` }}
                      className="flex-1 rounded-t bg-gradient-to-t from-primary/40 to-teal-glow"
                    />
                  ))}
                </div>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="rounded-xl border border-primary-foreground/10 bg-primary-foreground/5 p-4">
                  <p className="text-[11px] uppercase tracking-wide text-primary-foreground/50">
                    Energy saved
                  </p>
                  <p className="mt-1 font-display text-xl font-bold text-teal-glow">41.2 kWh</p>
                </div>
                <div className="rounded-xl border border-primary-foreground/10 bg-primary-foreground/5 p-4">
                  <p className="text-[11px] uppercase tracking-wide text-primary-foreground/50">
                    Filter life
                  </p>
                  <p className="mt-1 font-display text-xl font-bold text-primary-foreground">68%</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Use cases */}
        <section id="use-cases" className="mx-auto max-w-6xl px-5 py-24">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">
              Use cases
            </span>
            <h2 className="mt-4 text-balance font-display text-3xl font-bold text-ink sm:text-4xl">
              Built for one hood or a hundred
            </h2>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {useCases.map((u) => (
              <div
                key={u.title}
                className="flex gap-5 rounded-2xl border border-border bg-card p-7"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                  <u.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold text-ink">{u.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{u.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section id="cta" className="px-5 pb-24">
          <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl bg-gradient-to-br from-ink to-primary px-8 py-16 text-center text-primary-foreground sm:px-14">
            <h2 className="text-balance font-display text-3xl font-bold sm:text-4xl">
              See AeroSense running in a real kitchen
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-primary-foreground/75">
              Book a 20-minute walkthrough and we'll estimate the air quality and energy impact for
              your space.
            </p>
            <form
              className="mx-auto mt-9 flex max-w-md flex-col gap-3 sm:flex-row"
              onSubmit={(e) => e.preventDefault()}
            >
              <label htmlFor="email" className="sr-only">
                Work email
              </label>
              <input
                id="email"
                type="email"
                required
                placeholder="you@company.com"
                className="w-full rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-5 py-3 text-sm text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:ring-2 focus:ring-teal-glow"
              />
              <button
                type="submit"
                className="shrink-0 rounded-full bg-primary-foreground px-6 py-3 text-sm font-semibold text-ink transition-transform hover:-translate-y-0.5"
              >
                Book a demo
              </button>
            </form>
            <p className="mt-4 text-xs text-primary-foreground/60">
              No installation required for the pilot. Retrofits most existing hoods.
            </p>
          </div>
        </section>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p className="flex items-center gap-2 font-display font-semibold text-ink">
            <Wind className="h-4 w-4 text-primary" aria-hidden="true" />
            AeroSense
          </p>
          <p>© {new Date().getFullYear()} AeroSense. Smarter air, less waste.</p>
        </div>
      </footer>
    </div>
  );
}
