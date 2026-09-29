import {
    ArrowRight,
    Bookmark,
    BriefcaseBusiness,
    Building2,
    MapPin,
    Search,
    Sparkles,
} from "lucide-react";

const featuredJobs = [
    {
        company: "TechNova",
        short: "TN",
        title: "Software Engineer",
        location: "Bangalore",
        mode: "Hybrid",
        salary: "₹8–14 LPA",
        posted: "2d ago",
        skills: ["React", "Node.js", "MongoDB"],
        fresh: true,
    },
    {
        company: "PixelWorks",
        short: "PW",
        title: "Frontend Developer",
        location: "Remote",
        mode: "Full-time",
        salary: "₹7–11 LPA",
        posted: "4h ago",
        skills: ["React", "TypeScript", "CSS"],
        fresh: true,
    },
    {
        company: "Nexora",
        short: "NX",
        title: "Backend Developer",
        location: "Hyderabad",
        mode: "Hybrid",
        salary: "₹9–15 LPA",
        posted: "1d ago",
        skills: ["Node.js", "Express", "MongoDB"],
        fresh: false,
    },
];

function Home() {
    return (
        <div className="min-h-screen bg-[#F7F8FA] text-[#172033]">

            {/* Navbar */}
            <nav className="border-b border-[#E4E7EC] bg-white">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

                    {/* Hirely wordmark */}
                    <div className="hirely-logo">
                        hirely
                    </div>

                    <div className="hidden items-center gap-9 text-sm font-medium md:flex">
                        <a
                            href="#"
                            className="text-[#172033] transition hover:text-[#4F46E5]"
                        >
                            Find Jobs
                        </a>

                        <a
                            href="#"
                            className="text-[#697386] transition hover:text-[#4F46E5]"
                        >
                            Companies
                        </a>

                        <a
                            href="#"
                            className="text-[#697386] transition hover:text-[#4F46E5]"
                        >
                            Resources
                        </a>
                    </div>

                    <div className="flex items-center gap-3">
                        <button className="hidden px-4 py-2 text-sm font-medium text-[#172033] transition hover:text-[#4F46E5] sm:block">
                            Log in
                        </button>

                        <button className="rounded-lg bg-[#4F46E5] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#4338CA]">
                            Post a Job
                        </button>
                    </div>

                </div>
            </nav>


            {/* Hero */}
            <main>

                <section className="relative overflow-hidden border-b border-[#E4E7EC] bg-[#F7F8FA]">

                    {/* Small decorative details */}
                    <div className="absolute -right-20 top-16 h-48 w-48 rounded-full border border-[#DDD9FF]" />

                    <div className="absolute right-28 top-24 h-3 w-3 rounded-full bg-[#4F46E5]" />

                    <div className="mx-auto max-w-7xl px-6 pb-24 pt-20 lg:pb-28 lg:pt-24">

                        <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">

                            {/* Left */}
                            <div className="relative z-10">

                                <div className="mb-6 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#4F46E5]">
                                    <span className="h-px w-8 bg-[#4F46E5]" />
                                    Your next chapter
                                </div>

                                <h1 className="max-w-3xl text-5xl font-bold leading-[1.05] tracking-[-0.045em] sm:text-6xl lg:text-[68px]">
                                    Find work that
                                    <br />
                                    <span className="text-[#4F46E5]">
                                        actually fits you.
                                    </span>
                                </h1>

                                <p className="mt-7 max-w-xl text-[17px] leading-8 text-[#697386]">
                                Search jobs, discover companies and find your next opportunity —
                                without making the search itself feel like a full-time job.
                                </p>


                                {/* Search */}
                                <div className="mt-9 max-w-3xl rounded-xl border border-[#DDE1E8] bg-white p-2 shadow-[0_12px_35px_rgba(23,32,51,0.06)]">

                                    <div className="grid gap-2 md:grid-cols-[1.3fr_1fr_auto]">

                                        <div className="flex items-center gap-3 rounded-lg px-4 py-3">
                                            <Search
                                                size={19}
                                                strokeWidth={1.8}
                                                className="text-[#697386]"
                                            />

                                            <input
                                                type="text"
                                                placeholder="Job title, skill or company"
                                                className="w-full bg-transparent text-sm outline-none placeholder:text-[#9AA2B1]"
                                            />
                                        </div>

                                        <div className="flex items-center gap-3 border-t border-[#E6E9F0] px-4 py-3 md:border-l md:border-t-0">
                                            <MapPin
                                                size={19}
                                                strokeWidth={1.8}
                                                className="text-[#697386]"
                                            />

                                            <input
                                                type="text"
                                                placeholder="Location"
                                                className="w-full bg-transparent text-sm outline-none placeholder:text-[#9AA2B1]"
                                            />
                                        </div>

                                        <button className="flex items-center justify-center gap-2 rounded-lg bg-[#4F46E5] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#4338CA]">
                                            Search
                                            <ArrowRight size={17} />
                                        </button>

                                    </div>
                                </div>


                                {/* Popular searches */}
                                <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm">

                                    <span className="text-[#8A93A3]">
                                        Try searching
                                    </span>

                                    {[
                                        "Software Engineer",
                                        "React",
                                        "Data Analyst",
                                        "Product Designer",
                                    ].map((item) => (
                                        <button
                                            key={item}
                                            className="border-b border-transparent text-[#4F46E5] transition hover:border-[#4F46E5]"
                                        >
                                            {item}
                                        </button>
                                    ))}

                                </div>

                            </div>

                            {/* Right — Hirely role spotlight */}
                            <div className="relative z-10">

                            <div className="relative mx-auto max-w-md">

                            {/* Small editorial note */}
                             <div className="absolute -left-7 top-8 z-20 hidden -rotate-3 rounded-md bg-[#172033] px-3 py-2 text-[11px] font-semibold tracking-wide text-white sm:block">
            START HERE →
        </div>

        {/* Decorative line */}
        <div className="absolute -right-8 -top-10 h-24 w-24 rounded-full border border-[#D9D5FF]" />

        <div className="relative">

            {/* Main job card */}
            <div className="rounded-2xl border border-[#DEE2E9] bg-white p-7 shadow-[0_20px_55px_rgba(23,32,51,0.08)]">

                <div className="flex items-start justify-between">

                    <div>
                        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#8A93A3]">
                            Featured role
                        </p>

                        <h3 className="mt-3 text-2xl font-bold tracking-[-0.025em]">
                            Software Engineer
                        </h3>

                        <p className="mt-1 text-sm text-[#697386]">
                            TechNova · Bangalore
                        </p>
                    </div>

                    <button className="rounded-lg border border-[#E4E7EC] p-2.5 text-[#697386] transition hover:border-[#C8C4FF] hover:text-[#4F46E5]">
                        <Bookmark size={18} strokeWidth={1.8} />
                    </button>

                </div>


                {/* Job information */}
                <div className="mt-7 grid grid-cols-2 gap-3">

                    <div className="rounded-lg bg-[#F7F8FA] p-3.5">
                        <p className="text-[11px] text-[#8A93A3]">
                            Salary
                        </p>

                        <p className="mt-1 text-sm font-semibold">
                            ₹8–14 LPA
                        </p>
                    </div>

                    <div className="rounded-lg bg-[#F7F8FA] p-3.5">
                        <p className="text-[11px] text-[#8A93A3]">
                            Work style
                        </p>

                        <p className="mt-1 text-sm font-semibold">
                            Hybrid
                        </p>
                    </div>

                </div>


                {/* Skills */}
                <div className="mt-6">

                    <p className="text-xs font-medium text-[#697386]">
                        Looking for
                    </p>

                    <div className="mt-3 flex flex-wrap gap-2">

                        {["React", "Node.js", "MongoDB", "TypeScript"].map(
                            (skill) => (
                                <span
                                    key={skill}
                                    className="rounded-md border border-[#E2E5EA] bg-white px-2.5 py-1.5 text-xs font-medium text-[#4D5667]"
                                >
                                    {skill}
                                </span>
                            )
                        )}

                    </div>

                </div>


                {/* Bottom */}
                <div className="mt-7 flex items-center justify-between border-t border-[#E7E9EE] pt-5">

                    <div>
                        <p className="text-xs text-[#8A93A3]">
                            Posted
                        </p>

                        <p className="mt-1 text-sm font-medium">
                            2 days ago
                        </p>
                    </div>

                    <button className="flex items-center gap-2 rounded-lg bg-[#4F46E5] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#4338CA]">
                        View role
                        <ArrowRight size={15} />
                    </button>

                </div>

            </div>


            {/* Floating mini card */}
            <div className="absolute -bottom-8 -left-6 hidden w-52 rounded-xl border border-[#E0E3E9] bg-white p-4 shadow-[0_14px_35px_rgba(23,32,51,0.08)] sm:block">

                <div className="flex items-center gap-3">

                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#EEF0FF] text-xs font-bold text-[#4F46E5]">
                        PW
                    </div>

                    <div>
                        <p className="text-xs font-semibold">
                            PixelWorks
                        </p>

                        <p className="mt-0.5 text-[11px] text-[#8A93A3]">
                            Frontend Developer
                        </p>
                    </div>

                </div>

                <div className="mt-3 flex items-center justify-between">

                    <span className="text-[11px] text-[#697386]">
                        Remote
                    </span>

                    <span className="text-[11px] font-semibold text-[#16805C]">
                        New
                    </span>

                </div>

            </div>


            {/* Tiny floating text */}
            <div className="absolute -right-3 bottom-3 hidden rotate-2 text-[11px] font-medium text-[#8A93A3] sm:block">
                worth a look.
            </div>

        </div>

    </div>

</div>

                        </div>

                    </div>

                </section>


                {/* Featured jobs */}
                <section className="bg-white">

                    <div className="mx-auto max-w-7xl px-6 py-20">

                        <div className="flex items-end justify-between gap-6">

                            <div>
                                <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.15em] text-[#4F46E5]">
                                    <span className="h-px w-7 bg-[#4F46E5]" />
                                    Hand-picked
                                </div>

                                <h2 className="mt-3 text-3xl font-bold tracking-[-0.025em] sm:text-4xl">
                                    Jobs worth a look
                                </h2>

                                <p className="mt-3 max-w-lg text-sm leading-6 text-[#697386]">
                                A few roles we think are worth opening. Save anything that
                                catches your eye and come back to it when you're ready.
                                </p>
                            </div>

                            <button className="hidden items-center gap-2 text-sm font-semibold text-[#4F46E5] transition hover:gap-3 sm:flex">
                                See all jobs
                                <ArrowRight size={17} />
                            </button>

                        </div>


                        <div className="mt-10 grid gap-5 lg:grid-cols-3">

                            {featuredJobs.map((job) => (

                                <div
                                    key={job.title}
                                    className="group rounded-xl border border-[#E0E4EA] bg-white p-6 transition duration-200 hover:-translate-y-1 hover:border-[#C8C4FF] hover:shadow-[0_14px_35px_rgba(23,32,51,0.07)]"
                                >

                                    <div className="flex items-start justify-between">

                                        <div className="flex items-center gap-3">

                                            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#F0F1F4] text-xs font-bold tracking-wide text-[#30394A]">
                                                {job.short}
                                            </div>

                                            <div>
                                                <div className="flex items-center gap-2">
                                                    <p className="text-sm font-semibold">
                                                        {job.company}
                                                    </p>

                                                    {job.fresh && (
                                                        <span className="rounded-full bg-[#ECFDF5] px-2 py-0.5 text-[10px] font-semibold text-[#16805C]">
                                                            New
                                                        </span>
                                                    )}
                                                </div>

                                                <p className="mt-0.5 text-xs text-[#8A93A3]">
                                                    {job.posted}
                                                </p>
                                            </div>

                                        </div>

                                        <button
                                            aria-label={`Save ${job.title}`}
                                            className="text-[#9AA3B1] transition hover:text-[#4F46E5]"
                                        >
                                            <Bookmark size={19} strokeWidth={1.8} />
                                        </button>

                                    </div>


                                    <h3 className="mt-7 text-lg font-semibold tracking-[-0.01em]">
                                        {job.title}
                                    </h3>


                                    <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-[#697386]">

                                        <span className="flex items-center gap-1.5">
                                            <MapPin size={14} />
                                            {job.location}
                                        </span>

                                        <span className="flex items-center gap-1.5">
                                            <BriefcaseBusiness size={14} />
                                            {job.mode}
                                        </span>

                                    </div>


                                    <div className="mt-5 flex flex-wrap gap-2">

                                        {job.skills.map((skill) => (
                                            <span
                                                key={skill}
                                                className="rounded-md bg-[#F5F6F8] px-2.5 py-1.5 text-xs font-medium text-[#596274]"
                                            >
                                                {skill}
                                            </span>
                                        ))}

                                    </div>


                                    <div className="mt-6 flex items-center justify-between border-t border-[#ECEEF2] pt-5">

                                        <span className="font-semibold">
                                            {job.salary}
                                        </span>

                                        <span className="flex items-center gap-1 text-sm font-semibold text-[#4F46E5] opacity-0 transition group-hover:translate-x-1 group-hover:opacity-100">
                                            View job
                                            <ArrowRight size={15} />
                                        </span>

                                    </div>

                                </div>

                            ))}

                        </div>

                    </div>

                </section>


                {/* Editorial section */}
                <section className="border-t border-[#E4E7EC] bg-[#F7F8FA]">

                    <div className="mx-auto max-w-7xl px-6 py-20">

                        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">

                            <div>

                                <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#4F46E5]">
                                    Why Hirely
                                </p>

                                <h2 className="mt-4 max-w-md text-3xl font-bold leading-tight tracking-[-0.03em] sm:text-4xl">
                                    Job hunting shouldn't feel like another job.
                                </h2>

                                <p className="mt-5 max-w-md text-sm leading-7 text-[#697386]">
                                    We keep the search focused on the things that
                                    actually matter — the role, the people, the
                                    work and whether it fits what you're looking for.
                                </p>

                                <button className="mt-7 flex items-center gap-2 text-sm font-semibold text-[#4F46E5]">
                                    Explore opportunities
                                    <ArrowRight size={17} />
                                </button>

                            </div>


                            <div className="divide-y divide-[#DDE1E7] border-y border-[#DDE1E7]">

                                <div className="grid gap-4 py-7 sm:grid-cols-[60px_1fr]">

                                    <span className="text-sm font-semibold text-[#4F46E5]">
                                        01
                                    </span>

                                    <div>
                                        <h3 className="text-lg font-semibold">
                                            Know where you're applying.
                                        </h3>

                                        <p className="mt-2 max-w-xl text-sm leading-6 text-[#697386]">
                                            Explore companies and roles with enough
                                            context to make an informed application.
                                        </p>
                                    </div>

                                </div>


                                <div className="grid gap-4 py-7 sm:grid-cols-[60px_1fr]">

                                    <span className="text-sm font-semibold text-[#4F46E5]">
                                        02
                                    </span>

                                    <div>
                                        <h3 className="text-lg font-semibold">
                                            Search without the noise.
                                        </h3>

                                        <p className="mt-2 max-w-xl text-sm leading-6 text-[#697386]">
                                            Filter by skills, location, experience and
                                            work style instead of endlessly scrolling.
                                        </p>
                                    </div>

                                </div>


                                <div className="grid gap-4 py-7 sm:grid-cols-[60px_1fr]">

                                    <span className="text-sm font-semibold text-[#4F46E5]">
                                        03
                                    </span>

                                    <div>
                                        <h3 className="text-lg font-semibold">
                                            Keep the good ones close.
                                        </h3>

                                        <p className="mt-2 max-w-xl text-sm leading-6 text-[#697386]">
                                            Save interesting roles and keep track of
                                            applications from one place.
                                        </p>
                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </section>

            </main>


            {/* Footer */}
            <footer className="border-t border-[#E4E7EC] bg-white">

                <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 sm:flex-row sm:items-center sm:justify-between">

                    <div className="hirely-logo hirely-logo-small">
                        hirely
                    </div>

                    <p className="text-xs text-[#8A93A3]">
                        Find work. Build your future.
                    </p>

                </div>

            </footer>

        </div>
    );
}

export default Home;