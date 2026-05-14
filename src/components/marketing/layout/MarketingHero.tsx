import heroSideLogo from '../../../assets/school logo (2).svg?url'
import { SchoolLogo } from '../SchoolLogo'

export function MarketingHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-site-navy via-site-navy-mid to-site-navy-dark text-white">
      <div
        className="pointer-events-none absolute -right-20 top-10 h-72 w-72 rounded-full bg-site-red/30 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-16 bottom-0 h-64 w-64 rounded-full bg-white/10 blur-3xl"
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:radial-gradient(circle_at_2px_2px,white_1px,transparent_0)] [background-size:32px_32px]" />

      <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-14 lg:grid-cols-2 lg:items-center lg:gap-12 lg:px-8 lg:py-20">
        <div>
          <SchoolLogo variant="hero" className="mb-6 drop-shadow-lg lg:mb-8" />
          <h1 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
            Explore sectors & trusted credentials
          </h1>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/80 sm:text-base">
            CertiVerify helps organizations issue, manage, and prove compliance across industries. Browse
            popular sectors and certificate paths below, or use Verify when you have a code to check.
          </p>
        </div>

        <div className="relative hidden min-h-[200px] lg:flex lg:items-center lg:justify-center" aria-hidden>
          <img
            src={heroSideLogo}
            alt=""
            className="h-auto w-full max-w-[300px] object-contain drop-shadow-2xl"
            decoding="async"
          />
        </div>
      </div>
    </section>
  )
}
