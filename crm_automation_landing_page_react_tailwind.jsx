// CRM + Automation Landing Page — Single-file React component
// Pricing updated: Starter, Core, Pro with a universal $2,500 setup
// Notes:
// - Paste your GoHighLevel form/calendar embed where indicated.
// - Uses Tailwind + shadcn/ui + lucide-react + framer-motion.
// - Added data-testid hooks for simple UI tests.

import React from "react";
import {
  Check,
  ArrowRight,
  Zap,
  BarChart3,
  Workflow,
  CalendarCheck2,
  Shield,
  Users,
  Sparkles,
  Quote,
  ChevronRight,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";

const Stat = ({ value, label }: { value: string; label: string }) => (
  <div className="text-center">
    <div className="text-3xl md:text-4xl font-semibold tracking-tight">{value}</div>
    <div className="text-sm text-muted-foreground mt-1">{label}</div>
  </div>
);

const Feature = ({ icon: Icon, title, desc }: { icon: any; title: string; desc: string }) => (
  <Card className="rounded-2xl shadow-sm border bg-white">
    <CardContent className="p-6">
      <div className="flex items-start gap-4">
        <div className="p-2 rounded-xl bg-gray-50 border">
          <Icon className="w-5 h-5" />
        </div>
        <div>
          <h4 className="font-medium text-lg leading-tight">{title}</h4>
          <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{desc}</p>
        </div>
      </div>
    </CardContent>
  </Card>
);

const Step = ({ n, title, desc }: { n: string; title: string; desc: string }) => (
  <div className="flex gap-4 items-start">
    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-black text-white flex items-center justify-center text-sm font-semibold">
      {n}
    </div>
    <div>
      <h5 className="font-medium leading-tight">{title}</h5>
      <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{desc}</p>
    </div>
  </div>
);

const Testimonial = () => (
  <Card className="rounded-2xl border bg-white">
    <CardContent className="p-6">
      <Quote className="w-6 h-6" />
      <p className="mt-3 text-base leading-relaxed">
        "We went from missed DMs and no-shows to a reliable pipeline in two weeks. The automations alone paid for the setup in the first month."
      </p>
      <div className="mt-4 text-sm text-muted-foreground">— Owner, Local Fitness Studio</div>
    </CardContent>
  </Card>
);

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* NAV */}
      <header className="sticky top-0 z-40 bg-white/70 backdrop-blur border-b">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-xl bg-black" />
            <span className="font-semibold tracking-tight">BagOps™ Automations</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm">
            <a href="#features" className="hover:opacity-80">
              Features
            </a>
            <a href="#pricing" className="hover:opacity-80">
              Pricing
            </a>
            <a href="#faq" className="hover:opacity-80">
              FAQ
            </a>
            <Button asChild className="rounded-xl">
              <a href="#book">Book a Setup Call</a>
            </Button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-5xl font-semibold tracking-tight"
            >
              Automate Your Growth: <span className="inline-block">CRM + Pipeline + Follow‑up</span>
            </motion.h1>
            <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
              Done‑for‑you setup in GoHighLevel: organized CRM, conversion‑ready pipeline, and a base automation suite that stops lead leakage and increases show‑up rate.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild size="lg" className="rounded-2xl">
                <a href="#book" className="flex items-center gap-2">
                  Book Your Setup <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
              <a href="#features" className="inline-flex items-center gap-2 text-sm font-medium hover:opacity-80">
                See how it works <ChevronRight className="w-4 h-4" />
              </a>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-4">
              <Stat value="< 14 days" label="Typical setup time" />
              <Stat value="30–50%" label="Lead recovery via follow‑ups" />
              <Stat value="> 20%" label="Show‑up rate lift (avg)" />
            </div>
          </div>

          {/* Visual: simple automation flow mock */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            <div className="rounded-3xl border bg-white shadow-sm p-6">
              <div className="text-sm font-medium mb-4">Sample Automation Flow</div>
              <div className="grid grid-cols-1 gap-3">
                <Card className="border bg-gray-50">
                  <CardContent className="p-4 flex items-center gap-3">
                    <Zap className="w-4 h-4" />
                    <div className="text-sm">
                      New Lead Captured → Pipeline: <span className="font-medium">Inbound</span>
                    </div>
                  </CardContent>
                </Card>
                <Card className="border bg-gray-50">
                  <CardContent className="p-4 flex items-center gap-3">
                    <Workflow className="w-4 h-4" />
                    <div className="text-sm">Immediate SMS + Email sequence (personalized)</div>
                  </CardContent>
                </Card>
                <Card className="border bg-gray-50">
                  <CardContent className="p-4 flex items-center gap-3">
                    <CalendarCheck2 className="w-4 h-4" />
                    <div className="text-sm">Smart reminders → Booked call + no‑show rescue</div>
                  </CardContent>
                </Card>
                <Card className="border bg-gray-50">
                  <CardContent className="p-4 flex items-center gap-3">
                    <BarChart3 className="w-4 h-4" />
                    <div className="text-sm">Dashboard KPIs + weekly digest</div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="border-t bg-gray-50/60" id="problem">
        <div className="max-w-6xl mx-auto px-4 py-14 grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Tired of leads slipping through the cracks?</h2>
            <p className="mt-3 text-muted-foreground">
              Most small businesses lose revenue from inconsistent follow‑up and scattered tools. We fix that with a single, integrated system.
            </p>
            <ul className="mt-6 space-y-3 text-sm">
              {["No centralized pipeline → poor visibility", "Slow or no follow‑up → cold leads", "Manual tasks eat time → missed revenue", "No tracking → can’t improve what you can’t see"].map(
                (t) => (
                  <li key={t} className="flex items-start gap-2">
                    <Check className="w-4 h-4 mt-0.5" /> {t}
                  </li>
                )
              )}
            </ul>
          </div>
          <Testimonial />
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-white" id="features">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">One Setup. Everything You Need.</h2>
            <p className="mt-3 text-muted-foreground">We tailor a proven template to your business and launch in days, not months.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
            <Feature icon={Workflow} title="Custom CRM & Pipeline" desc="Organized stages from first touch to closed‑won. Zero guesswork on what’s next." />
            <Feature icon={Zap} title="Base Automation Suite" desc="Instant lead response, smart reminders, review requests, and no‑show recovery." />
            <Feature icon={BarChart3} title="Tracking & Reporting" desc="KPI dashboard and weekly summary so you always know what’s working." />
            <Feature icon={Shield} title="Data Hygiene + QA" desc="Validation, deduping, and monitoring to keep your system clean and reliable." />
          </div>

          <div className="mt-10 grid md:grid-cols-2 gap-6">
            <Card className="rounded-2xl">
              <CardContent className="p-6">
                <h3 className="font-medium text-lg">Works for local service, solo‑pros, and lean teams</h3>
                <p className="text-sm text-muted-foreground mt-2">Real estate, fitness/wellness, trades, clinics, agencies, coaching, and more.</p>
                <div className="flex items-center gap-4 mt-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4" /> Multi‑inbox + roles
                  </div>
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4" /> AI‑assisted replies
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-2xl">
              <CardContent className="p-6">
                <h3 className="font-medium text-lg">Fast integration</h3>
                <p className="text-sm text-muted-foreground mt-2">Connect forms, calendars, and phone/email in minutes. Keep your domain + numbers.</p>
                <ul className="mt-3 space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 mt-0.5" /> Migrate existing contacts + pipeline
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 mt-0.5" /> Preserve current booking links and SMS numbers
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 mt-0.5" /> Add tracking + UTM templates
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="border-t bg-gray-50/60">
        <div className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Implementation in a Week (or Two)</h2>
            <p className="mt-3 text-muted-foreground">A simple, structured rollout so you’re live fast and confident.</p>
            <div className="mt-6 space-y-5">
              <Step n="1" title="Blueprint" desc="30‑min intake, goals, and mapping current lead sources." />
              <Step n="2" title="Build" desc="CRM + pipeline + automations tailored from our proven template." />
              <Step n="3" title="Integrate" desc="Connect forms, calendars, email/SMS; import contacts; QA." />
              <Step n="4" title="Launch" desc="Go live with tracking, alerts, and weekly KPI reporting." />
            </div>
          </div>
          <div className="rounded-3xl border bg-white p-6">
            <h3 className="font-medium">What’s Included</h3>
            <ul className="mt-3 space-y-2 text-sm">
              {["Custom pipeline + statuses + reasons", "Inbound + outbound follow‑up sequences", "No‑show rescue + review request", "Unified inbox + templates + AI assist", "UTM + source tracking + dashboard", "Playbook Loom + quick SOPs"].map(
                (t) => (
                  <li key={t} className="flex items-start gap-2">
                    <Check className="w-4 h-4 mt-0.5" /> {t}
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="bg-white" id="pricing">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="max-w-3xl text-center mx-auto">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Choose Your Plan</h2>
            <p className="mt-3 text-muted-foreground">
              All plans include the same <strong>$2,500 setup</strong>. Select the ongoing support level that fits your needs.
            </p>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {/* STARTER */}
            <Card className="rounded-2xl" data-testid="plan-starter" aria-label="Starter Plan">
              <CardContent className="p-6 flex flex-col h-full">
                <h3 className="font-medium text-lg">Starter</h3>
                <div className="mt-2 text-2xl font-semibold">
                  $0 <span className="text-base font-normal text-muted-foreground">/mo</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">We set it up, you run it. Best for teams who want full control after launch.</p>
                <ul className="mt-4 space-y-2 text-sm flex-1">
                  {["Custom CRM, pipeline, and roles", "Base automations (lead reply, reminders, reviews)", "Integrations, import, QA", "Tracking dashboard + SOPs"].map(
                    (t) => (
                      <li key={t} className="flex items-start gap-2">
                        <Check className="w-4 h-4 mt-0.5" /> {t}
                      </li>
                    )
                  )}
                </ul>
                <div className="mt-6">
                  <div className="text-xs mb-2 text-muted-foreground" data-testid="starter-setup">
                    Setup Fee: $2,500
                  </div>
                  <Button asChild className="w-full rounded-xl">
                    <a href="#book">Start with Starter</a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* CORE (RECOMMENDED) */}
            <Card className="rounded-2xl border-2 border-black" data-testid="plan-core" aria-label="Core Plan">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium text-lg">Core</h3>
                  <span className="text-xs uppercase tracking-wider text-white bg-black px-2 py-1 rounded-full">Recommended</span>
                </div>
                <div className="mt-2 text-2xl font-semibold">
                  $500 <span className="text-base font-normal text-muted-foreground">/mo</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  Everything in Starter plus ongoing management so you never miss a lead.
                </p>
                <ul className="mt-4 space-y-2 text-sm flex-1">
                  {["Inbox triage + SLA follow‑ups", "List hygiene + pipeline QA", "Offer/sequence testing", "Monthly reporting + insights"].map(
                    (t) => (
                      <li key={t} className="flex items-start gap-2">
                        <Check className="w-4 h-4 mt-0.5" /> {t}
                      </li>
                    )
                  )}
                </ul>
                <div className="mt-6">
                  <div className="text-xs mb-2 text-muted-foreground" data-testid="core-setup">
                    Setup Fee: $2,500
                  </div>
                  <Button asChild variant="default" className="w-full rounded-xl">
                    <a href="#book">Choose Core</a>
                  </Button>
                  <p className="text-xs text-muted-foreground mt-3">Month‑to‑month after first 30 days.</p>
                </div>
              </CardContent>
            </Card>

            {/* PRO */}
            <Card className="rounded-2xl" data-testid="plan-pro" aria-label="Pro Plan">
              <CardContent className="p-6 flex flex-col h-full">
                <h3 className="font-medium text-lg">Pro</h3>
                <div className="mt-2 text-2xl font-semibold">
                  $1,500 <span className="text-base font-normal text-muted-foreground">/mo</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  Core management plus ongoing custom automations for next‑level scaling.
                </p>
                <ul className="mt-4 space-y-2 text-sm flex-1">
                  {["Everything in Core", "2 custom automations per month", "Priority implementation queue", "Quarterly strategy workshop"].map(
                    (t) => (
                      <li key={t} className="flex items-start gap-2">
                        <Check className="w-4 h-4 mt-0.5" /> {t}
                      </li>
                    )
                  )}
                </ul>
                <div className="mt-6">
                  <div className="text-xs mb-2 text-muted-foreground" data-testid="pro-setup">
                    Setup Fee: $2,500
                  </div>
                  <Button asChild className="w-full rounded-xl">
                    <a href="#book">Go Pro</a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* BOOKING + FORM */}
      <section className="border-t bg-gray-50/60" id="book">
        <div className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Stop Losing Leads. Start Automating Growth.</h2>
            <p className="mt-3 text-muted-foreground">Tell us a bit about your business and we’ll share the playbook + timeline for your setup on a quick call.</p>
            <ul className="mt-6 space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 mt-0.5" /> 30‑min discovery + live system preview
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 mt-0.5" /> Clear scope, flat pricing, fast implementation
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 mt-0.5" /> No pressure. We only work with good fits
              </li>
            </ul>
            <div className="mt-6 flex gap-3">
              <Button asChild size="lg" className="rounded-2xl">
                <a href="#ghl-form">Open Form</a>
              </Button>
              <a href="#faq" className="inline-flex items-center gap-2 text-sm font-medium hover:opacity-80">
                Have questions? <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Paste your GHL embed here */}
          <div id="ghl-form" className="rounded-3xl border bg-white p-6">
            <div className="text-sm font-medium">Booking / Intake Form</div>
            <p className="text-sm text-muted-foreground mb-4">Embed your GoHighLevel calendar or form below.</p>
            <div className="aspect-video w-full rounded-xl bg-gray-50 border flex items-center justify-center text-sm text-muted-foreground">
              {/* Example: GHL Embed */}
              {/* <script src="https://api.leadconnectorhq.com/widget/booking/js?..." async></script> */}
              GHL form embed placeholder
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white" id="faq">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">FAQ</h2>
            <p className="mt-3 text-muted-foreground">Quick answers to common questions.</p>
          </div>

          <div className="mt-8">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="q1">
                <AccordionTrigger>How long does setup take?</AccordionTrigger>
                <AccordionContent>Typical turnaround is 7–14 days depending on complexity and integrations.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="q2">
                <AccordionTrigger>Can you work with my existing CRM?</AccordionTrigger>
                <AccordionContent>
                  Yes. We can migrate or enhance what you have, but our templates are optimized for GoHighLevel.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q3">
                <AccordionTrigger>Is ongoing management required?</AccordionTrigger>
                <AccordionContent>
                  No. The monthly plan is optional. Many clients start with setup, then add management once they see results.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q4">
                <AccordionTrigger>What about texting and phone numbers?</AccordionTrigger>
                <AccordionContent>
                  We support existing numbers where possible or help you provision new ones with proper compliance settings.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q5">
                <AccordionTrigger>Do you integrate ads + tracking?</AccordionTrigger>
                <AccordionContent>
                  Yes. We add UTM templates and conversion tracking so you can attribute revenue to source/campaign.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t bg-gray-50/60">
        <div className="max-w-6xl mx-auto px-4 py-10 text-sm text-muted-foreground flex flex-col md:flex-row items-center md:justify-between gap-4">
          <div>© {new Date().getFullYear()} BagOps™ • CRM + Automation</div>
          <div className="flex items-center gap-6">
            <a className="hover:opacity-80" href="#">
              Privacy
            </a>
            <a className="hover:opacity-80" href="#">
              Terms
            </a>
            <a className="hover:opacity-80" href="#">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

/*
TEST CASES (for React Testing Library)
-------------------------------------
1) Renders three pricing plans with correct headings
   - getByTestId('plan-starter'), getByTestId('plan-core'), getByTestId('plan-pro')
   - getByText(/Starter/i), getByText(/Core/i), getByText(/Pro/i)

2) Each plan displays the universal setup fee
   - within(getByTestId('starter-setup')).getByText(/\$2,500/)
   - within(getByTestId('core-setup')).getByText(/\$2,500/)
   - within(getByTestId('pro-setup')).getByText(/\$2,500/)

3) Monthly prices are correct
   - getByTestId('plan-starter') contains /$0\s*\/mo/
   - getByTestId('plan-core') contains /$500\s*\/mo/
   - getByTestId('plan-pro') contains /$1,500\s*\/mo/

4) Core plan has "Recommended" badge
   - within(getByTestId('plan-core')).getByText(/Recommended/i)

*/
