import {
  Compass,
  Map,
  ShieldCheck,
  Headphones,
  CalendarCheck,
  Star,
} from "lucide-react"

const stats = [
  { value: "12K+", label: "Trips planned" },
  { value: "85+", label: "Countries covered" },
  { value: "4.9", label: "Average rating", showStar: true },
  { value: "24/7", label: "Traveler support" },
]

const features = [
  {
    icon: Map,
    title: "Smart itineraries",
    description:
      "Build day-by-day plans with routes, bookings, and activities all in one organized timeline.",
  },
  {
    icon: CalendarCheck,
    title: "Seamless scheduling",
    description:
      "Keep flights, hotels, and reservations in sync so you never miss a check-in or connection.",
  },
  {
    icon: ShieldCheck,
    title: "Travel with confidence",
    description:
      "Store documents, track budgets, and get reminders that keep every trip stress-free.",
  },
  {
    icon: Headphones,
    title: "Real human support",
    description:
      "Our team is available around the clock to help you adjust plans whenever life happens.",
  },
]

export default function About() {
  return (
    <section id="about" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-teal-100 px-4 py-1.5 text-sm font-bold uppercase tracking-wide text-teal-700">
            <Compass className="h-4 w-4" />
            About us
          </span>
          <h2 className="mt-5 text-balance text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
            Travel planning, finally made simple
          </h2>
          <p className="mt-4 text-pretty font-medium leading-relaxed text-slate-600">
            We help travelers turn scattered ideas into organized, memorable
            journeys. From the first spark of inspiration to your final stamp in
            the passport, our platform keeps every detail in one place.
          </p>
        </div>

        {/* Image + copy */}
        <div className="mt-16 grid items-center gap-10 md:grid-cols-2">
          <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
            <img
              src="/images/about-travel.png"
              alt="Traveler overlooking mountain lakes at golden hour"
              className="h-full w-full object-cover"
            />
          </div>

          <div>
            <h3 className="text-2xl font-bold text-slate-900">
              Built by travelers, for travelers
            </h3>
            <p className="mt-4 font-medium leading-relaxed text-slate-600">
              We started because planning trips across endless tabs, emails, and
              spreadsheets was exhausting. Today, thousands of adventurers rely
              on us to organize itineraries, manage bookings, and share plans
              with the people they love.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              {features.map((feature) => {
                const Icon = feature.icon
                return (
                  <div
                    key={feature.title}
                    className="rounded-xl border border-slate-200 bg-slate-50 p-5 transition-colors hover:border-teal-200 hover:bg-teal-50"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-600 text-white">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h4 className="mt-4 font-bold text-slate-900">
                      {feature.title}
                    </h4>
                    <p className="mt-1.5 text-sm font-medium leading-relaxed text-slate-600">
                      {feature.description}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-teal-600 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-teal-600 p-8 text-center">
              <div className="flex items-center justify-center gap-1.5 text-3xl font-extrabold text-white md:text-4xl">
                {stat.value}
                {stat.showStar && (
                  <Star className="h-6 w-6 fill-amber-400 text-amber-400" />
                )}
              </div>
              <div className="mt-2 text-sm font-semibold uppercase tracking-wide text-teal-100">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
