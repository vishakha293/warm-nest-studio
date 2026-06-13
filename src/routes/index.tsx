import { createFileRoute } from "@tanstack/react-router";
import { Heart, Sparkles, Home, Lamp, BookOpen, Sofa } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Home Finds Studio | Cozy Home Decor Inspiration" },
      { name: "description", content: "Home Finds Studio is your destination for cozy home decor inspiration, thoughtful styling ideas, and everyday finds that help transform a house into a warm and inviting home." },
      { property: "og:title", content: "Home Finds Studio | Cozy Home Decor Inspiration" },
      { property: "og:description", content: "Discover cozy home decor inspiration, thoughtful styling ideas, and everyday finds for a warm, inviting home." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 py-16 lg:grid-cols-2 lg:py-24">
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                <Home className="h-4 w-4" />
                <span>Home Decor & Styling</span>
              </div>
              <h1 className="font-serif text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                Welcome to{" "}
                <span className="italic text-primary">Home Finds Studio</span>{" "}
                <span className="inline-block align-middle">
                  <Heart className="h-8 w-8 fill-current text-destructive sm:h-10 sm:w-10" />
                </span>
              </h1>
              <p className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                Home Finds Studio is your destination for cozy home decor inspiration,
                thoughtful styling ideas, and everyday finds that help transform a house
                into a warm and inviting home.
              </p>
              <p className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                From calm living rooms and cozy bedrooms to inspiring home office spaces, we
                share beautiful ideas designed to make everyday living feel more
                comfortable, stylish, and intentional.
              </p>
              <p className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                Whether you're drawn to neutral interiors, soft lighting, minimalist decor,
                or timeless home aesthetics, you'll discover inspiration that helps create
                spaces that feel peaceful, functional, and uniquely yours.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-4 py-1.5 text-sm font-medium text-secondary-foreground">
                  <Sparkles className="h-3.5 w-3.5" />
                  Find inspiration
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-4 py-1.5 text-sm font-medium text-secondary-foreground">
                  <Sofa className="h-3.5 w-3.5" />
                  Create comfort
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-4 py-1.5 text-sm font-medium text-secondary-foreground">
                  <Heart className="h-3.5 w-3.5" />
                  Love your space
                </span>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-muted">
                <img
                  src="/images/hero-living.jpg"
                  alt="Cozy minimalist living room with warm natural light and neutral tones"
                  className="h-full w-full object-cover"
                  width={1280}
                  height={768}
                />
              </div>
              <div className="absolute -bottom-4 -left-4 hidden rounded-xl border border-border bg-card p-4 shadow-lg lg:block">
                <p className="font-serif text-sm italic text-card-foreground">
                  "Great design doesn't have to be complicated."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Taglines */}
      <section className="border-y border-border/40 bg-secondary/30 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 text-center sm:grid-cols-3">
            <div className="flex flex-col items-center gap-3">
              <Lamp className="h-8 w-8 text-primary" />
              <h3 className="font-serif text-xl font-semibold text-foreground">
                Find Inspiration. Create Comfort.
              </h3>
            </div>
            <div className="flex flex-col items-center gap-3">
              <Sofa className="h-8 w-8 text-primary" />
              <h3 className="font-serif text-xl font-semibold text-foreground">
                Cozy Spaces, Thoughtful Finds.
              </h3>
            </div>
            <div className="flex flex-col items-center gap-3">
              <BookOpen className="h-8 w-8 text-primary" />
              <h3 className="font-serif text-xl font-semibold text-foreground">
                Inspired Living Starts at Home.
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <Heart className="mx-auto mb-4 h-6 w-6 text-destructive" />
          <p className="font-serif text-xl leading-relaxed text-foreground sm:text-2xl">
            At Home Finds Studio, we believe that great design doesn't have to be
            complicated — sometimes the smallest details make the biggest difference.
          </p>
          <p className="mt-6 text-lg text-muted-foreground">
            Find inspiration. Create comfort. Love your space.{" "}
            <Sparkles className="inline-block h-5 w-5 text-primary" />
          </p>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="font-serif text-3xl font-semibold text-foreground sm:text-4xl">
              Spaces We Love
            </h2>
            <p className="mt-3 text-muted-foreground">
              Beautiful rooms and corners that spark joy
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Card 1 */}
            <div className="group overflow-hidden rounded-2xl border border-border bg-card">
              <div className="aspect-square overflow-hidden">
                <img
                  src="/images/cozy-bedroom.jpg"
                  alt="Serene minimalist bedroom with soft white bedding and warm neutral tones"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  width={1024}
                  height={1024}
                />
              </div>
              <div className="p-5">
                <h3 className="font-serif text-lg font-semibold text-card-foreground">
                  Cozy Bedroom Retreat
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Soft textures and calming neutrals for restful nights.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group overflow-hidden rounded-2xl border border-border bg-card">
              <div className="aspect-square overflow-hidden">
                <img
                  src="/images/home-office.jpg"
                  alt="Beautiful home office nook with warm wood desk and ambient lighting"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  width={1024}
                  height={1024}
                />
              </div>
              <div className="p-5">
                <h3 className="font-serif text-lg font-semibold text-card-foreground">
                  Productive Home Office
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  A workspace that fuels creativity and calm focus.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group overflow-hidden rounded-2xl border border-border bg-card">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="/images/kitchen.jpg"
                  alt="Warm Scandinavian-style kitchen with natural light and light wood cabinets"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  width={1024}
                  height={768}
                />
              </div>
              <div className="p-5">
                <h3 className="font-serif text-lg font-semibold text-card-foreground">
                  Heart of the Home
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Kitchens that blend function with warm, welcoming style.
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="group overflow-hidden rounded-2xl border border-border bg-card">
              <div className="aspect-square overflow-hidden">
                <img
                  src="/images/reading-nook.jpg"
                  alt="Cozy reading corner with comfortable armchair and warm side lamp"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  width={1024}
                  height={1024}
                />
              </div>
              <div className="p-5">
                <h3 className="font-serif text-lg font-semibold text-card-foreground">
                  Reading Nook
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  A quiet corner for books, blankets, and afternoon light.
                </p>
              </div>
            </div>

            {/* Card 5 */}
            <div className="group overflow-hidden rounded-2xl border border-border bg-card">
              <div className="aspect-square overflow-hidden">
                <img
                  src="/images/entryway.jpg"
                  alt="Beautifully styled entryway with wooden console table and round mirror"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  width={1024}
                  height={1024}
                />
              </div>
              <div className="p-5">
                <h3 className="font-serif text-lg font-semibold text-card-foreground">
                  Welcoming Entryway
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  First impressions that feel like a warm embrace.
                </p>
              </div>
            </div>

            {/* Card 6 */}
            <div className="group overflow-hidden rounded-2xl border border-border bg-card">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="/images/coffee-table.jpg"
                  alt="Styled coffee table with candles, ceramic mug, and open book"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  width={1024}
                  height={768}
                />
              </div>
              <div className="p-5">
                <h3 className="font-serif text-lg font-semibold text-card-foreground">
                  Everyday Moments
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Small details that make daily life feel special.
                </p>
              </div>
            </div>
          </div>

          {/* Extra wide image */}
          <div className="mt-6 group overflow-hidden rounded-2xl border border-border bg-card">
            <div className="aspect-[21/9] overflow-hidden sm:aspect-[3/1]">
              <img
                src="/images/bathroom.jpg"
                alt="Minimalist bathroom with natural stone sink and warm wood accents"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
                width={1024}
                height={1024}
              />
            </div>
            <div className="p-5">
              <h3 className="font-serif text-lg font-semibold text-card-foreground">
                Spa-Like Sanctuary
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Bathrooms that feel like a personal retreat — peaceful, clean, and restorative.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter / Closing */}
      <section className="border-t border-border/40 bg-secondary/30 py-20">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
          <Sparkles className="mx-auto mb-4 h-8 w-8 text-primary" />
          <h2 className="font-serif text-3xl font-semibold text-foreground">
            Start Your Home Journey
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Explore our curated collection of spaces, ideas, and finds that make everyday
            living more beautiful. Your dream home starts with a single inspired detail.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-2.5 text-sm font-medium text-foreground shadow-sm">
              <Heart className="h-4 w-4 text-destructive" />
              Find inspiration
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-2.5 text-sm font-medium text-foreground shadow-sm">
              <Sofa className="h-4 w-4 text-primary" />
              Create comfort
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-2.5 text-sm font-medium text-foreground shadow-sm">
              <Home className="h-4 w-4 text-sage" />
              Love your space
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}
