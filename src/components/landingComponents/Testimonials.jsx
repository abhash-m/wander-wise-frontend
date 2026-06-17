import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Solo traveler",
    avatar: "/images/avatar-1.png",
    rating: 5,
    quote:
      "Planning my three-week trip across Southeast Asia used to feel impossible. This app kept every flight, hostel, and tour perfectly organized. I actually enjoyed the planning!",
  },
  {
    name: "James Carter",
    role: "Family vacation planner",
    avatar: "/images/avatar-2.png",
    rating: 5,
    quote:
      "Coordinating a trip for six people was a breeze. Sharing the itinerary with my family meant everyone knew the plan, and the reminders saved us from missing a single booking.",
  },
  {
    name: "Aisha Khan",
    role: "Digital nomad",
    avatar: "/images/avatar-3.png",
    rating: 4.9,
    quote:
      "I live out of a suitcase and this is the first tool that keeps up with me. Budgets, documents, and itineraries all in one place. The 24/7 support is genuinely a lifesaver.",
  },
]

function StarRating({ rating }) {
  return (
    <div className="flex items-center gap-2">
      <div
        className="flex items-center gap-0.5"
        aria-label={`${rating} out of 5 stars`}
      >
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={
              i < Math.round(rating)
                ? "h-4 w-4 fill-amber-400 text-amber-400"
                : "h-4 w-4 fill-slate-200 text-slate-200"
            }
          />
        ))}
      </div>
      <span className="text-sm font-bold text-slate-900">
        {rating.toFixed(1)}
      </span>
    </div>
  )
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-slate-50 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-1.5 text-sm font-bold uppercase tracking-wide text-amber-700">
            <Star className="h-4 w-4 fill-current" />
            Testimonials
          </span>
          <h2 className="mt-5 text-balance text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
            Loved by travelers everywhere
          </h2>
          <p className="mt-4 text-pretty font-medium leading-relaxed text-slate-600">
            Join thousands of explorers who plan smarter and travel further with
            us. Here is what a few of them have to say.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex items-center justify-between">
                <Quote className="h-9 w-9 text-teal-600" />
                <StarRating rating={t.rating} />
              </div>

              <blockquote className="mt-5 flex-1 text-pretty font-medium leading-relaxed text-slate-700">
                {t.quote}
              </blockquote>

              <figcaption className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-6">
                <img
                  src={t.avatar || "/placeholder.svg"}
                  alt={t.name}
                  className="h-11 w-11 rounded-full object-cover ring-2 ring-teal-100"
                />
                <div>
                  <div className="font-bold text-slate-900">{t.name}</div>
                  <div className="text-sm font-medium text-slate-500">
                    {t.role}
                  </div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
