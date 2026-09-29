import { useEffect, useMemo, useState } from "react";
import {
    ArrowRight,
    Bookmark,
    BriefcaseBusiness,
    Check,
    MapPin,
    Search,
    SlidersHorizontal,
    Upload,
    X,
} from "lucide-react";

const jobs = [
    {
        id: 1,
        company: "TechNova",
        short: "TN",
        title: "Software Engineer",
        location: "Bangalore",
        mode: "Hybrid",
        type: "Full-time",
        experience: "1–3 years",
        salary: "₹8–14 LPA",
        posted: "2d ago",
        skills: ["React", "Node.js", "MongoDB"],
        new: true,
        description:
            "Build and improve products used by thousands of people. You'll work closely with product and engineering teams to turn ideas into reliable software.",
        responsibilities: [
            "Build and maintain web applications",
            "Work with product and design teams",
            "Write clean, maintainable code",
            "Review and improve existing features",
        ],
    },
    {
        id: 2,
        company: "PixelWorks",
        short: "PW",
        title: "Frontend Developer",
        location: "Remote",
        mode: "Remote",
        type: "Full-time",
        experience: "Entry level",
        salary: "₹7–11 LPA",
        posted: "4h ago",
        skills: ["React", "TypeScript", "CSS"],
        new: true,
        description:
            "Join a small product team building thoughtful digital experiences. You'll have room to contribute to both the interface and the way we build it.",
        responsibilities: [
            "Create responsive React interfaces",
            "Translate designs into reusable components",
            "Improve accessibility and performance",
            "Collaborate with designers and developers",
        ],
    },
    {
        id: 3,
        company: "Nexora",
        short: "NX",
        title: "Backend Developer",
        location: "Hyderabad",
        mode: "Hybrid",
        type: "Full-time",
        experience: "1–3 years",
        salary: "₹9–15 LPA",
        posted: "1d ago",
        skills: ["Node.js", "Express", "MongoDB"],
        new: false,
        description:
            "Help build the services and APIs behind our growing platform. You'll work on systems that need to remain fast, secure and dependable as we scale.",
        responsibilities: [
            "Design and develop REST APIs",
            "Work with databases and backend services",
            "Improve application performance",
            "Write tests and documentation",
        ],
    },
    {
        id: 4,
        company: "Vertex Labs",
        short: "VL",
        title: "Junior Full Stack Developer",
        location: "Pune",
        mode: "On-site",
        type: "Full-time",
        experience: "Entry level",
        salary: "₹5–8 LPA",
        posted: "3d ago",
        skills: ["JavaScript", "React", "SQL"],
        new: false,
        description:
            "A hands-on role for someone who enjoys understanding how the pieces of a product fit together, from the interface to the database.",
        responsibilities: [
            "Develop frontend and backend features",
            "Work with SQL databases",
            "Fix bugs and improve existing functionality",
            "Learn and contribute across the stack",
        ],
    },
    {
        id: 5,
        company: "Northstar",
        short: "NS",
        title: "Product Designer",
        location: "Delhi",
        mode: "Hybrid",
        type: "Full-time",
        experience: "1–3 years",
        salary: "₹6–10 LPA",
        posted: "5d ago",
        skills: ["Figma", "UX", "UI Design"],
        new: false,
        description:
            "Work across research, interaction design and visual systems to create products that are useful, clear and enjoyable to use.",
        responsibilities: [
            "Create user flows and interface designs",
            "Work closely with product teams",
            "Turn research into practical design decisions",
            "Maintain and improve design systems",
        ],
    },
];

const filterGroups = {
    Work: ["Full-time", "Part-time", "Internship"],
    Location: ["Remote", "Bangalore", "Hyderabad", "Delhi"],
    Experience: ["Entry level", "1–3 years", "3–5 years"],
};

function Jobs() {
    const [selectedJob, setSelectedJob] = useState(jobs[0]);
    const [saved, setSaved] = useState(false);
    const [showFilters, setShowFilters] = useState(false);

    const [searchTerm, setSearchTerm] = useState("");
    const [locationTerm, setLocationTerm] = useState("");
    const [selectedFilters, setSelectedFilters] = useState([]);

    // Application modal
    const [showApplyModal, setShowApplyModal] = useState(false);
    const [applicationSubmitted, setApplicationSubmitted] =
        useState(false);

    const [applicationData, setApplicationData] = useState({
        name: "",
        email: "",
        resume: null,
        coverNote: "",
    });

    const filteredJobs = useMemo(() => {
        const search = searchTerm.trim().toLowerCase();
        const location = locationTerm.trim().toLowerCase();

        return jobs.filter((job) => {
            const matchesSearch =
                !search ||
                job.title.toLowerCase().includes(search) ||
                job.company.toLowerCase().includes(search) ||
                job.skills.some((skill) =>
                    skill.toLowerCase().includes(search)
                );

            const matchesLocation =
                !location ||
                job.location.toLowerCase().includes(location) ||
                job.mode.toLowerCase().includes(location);

            const matchesFilters = selectedFilters.every((filter) => {
                if (
                    filter === "Full-time" ||
                    filter === "Part-time" ||
                    filter === "Internship"
                ) {
                    return job.type === filter;
                }

                if (filter === "Remote") {
                    return job.mode === "Remote";
                }

                if (
                    filter === "Bangalore" ||
                    filter === "Hyderabad" ||
                    filter === "Delhi"
                ) {
                    return job.location === filter;
                }

                if (
                    filter === "Entry level" ||
                    filter === "1–3 years" ||
                    filter === "3–5 years"
                ) {
                    return job.experience === filter;
                }

                if (filter === "Entry-level") {
                    return job.experience === "Entry level";
                }

                if (filter === "Engineering") {
                    return job.skills.some((skill) =>
                        [
                            "React",
                            "Node.js",
                            "MongoDB",
                            "TypeScript",
                            "JavaScript",
                            "SQL",
                        ].includes(skill)
                    );
                }

                if (filter === "Design") {
                    return (
                        job.title.toLowerCase().includes("designer") ||
                        job.skills.some((skill) =>
                            ["Figma", "UX", "UI Design"].includes(skill)
                        )
                    );
                }

                if (filter === "Recently added") {
                    return job.new;
                }

                return true;
            });

            return (
                matchesSearch &&
                matchesLocation &&
                matchesFilters
            );
        });
    }, [searchTerm, locationTerm, selectedFilters]);

    useEffect(() => {
        if (
            filteredJobs.length > 0 &&
            !filteredJobs.some(
                (job) => job.id === selectedJob.id
            )
        ) {
            setSelectedJob(filteredJobs[0]);
            setSaved(false);
        }
    }, [filteredJobs, selectedJob.id]);

    const selectJob = (job) => {
        setSelectedJob(job);
        setSaved(false);
    };

    const toggleSaved = () => {
        setSaved((current) => !current);
    };

    const toggleFilter = (filter) => {
        setSelectedFilters((current) =>
            current.includes(filter)
                ? current.filter((item) => item !== filter)
                : [...current, filter]
        );
    };

    const clearFilters = () => {
        setSelectedFilters([]);
        setSearchTerm("");
        setLocationTerm("");
    };

    const openApplyModal = () => {
        setApplicationSubmitted(false);
        setShowApplyModal(true);
    };

    const closeApplyModal = () => {
        setShowApplyModal(false);
        setApplicationSubmitted(false);
    };

    const handleApplicationChange = (e) => {
        const { name, value, files } = e.target;

        setApplicationData((current) => ({
            ...current,
            [name]: files ? files[0] : value,
        }));
    };

    const submitApplication = (e) => {
        e.preventDefault();

        setApplicationSubmitted(true);
    };

    return (
        <div className="min-h-screen bg-[#F7F8FA] text-[#172033]">

            {/* Navbar */}
            <nav className="border-b border-[#E4E7EC] bg-white">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

                    <a href="/" className="hirely-logo">
                        hirely
                    </a>

                    <div className="hidden items-center gap-9 text-sm font-medium md:flex">

                        <a
                            href="/jobs"
                            className="text-[#172033]"
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

                        <button className="hidden px-4 py-2 text-sm font-medium transition hover:text-[#4F46E5] sm:block">
                            Log in
                        </button>

                        <button className="rounded-lg bg-[#4F46E5] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#4338CA]">
                            Post a Job
                        </button>

                    </div>

                </div>
            </nav>


            {/* Header */}
            <section className="border-b border-[#E4E7EC] bg-white">

                <div className="mx-auto max-w-7xl px-6 pb-7 pt-12">

                    <div className="flex flex-col gap-7">

                        <div>

                            <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.16em] text-[#4F46E5]">
                                <span className="h-px w-8 bg-[#4F46E5]" />
                                Find your next role
                            </div>

                            <h1 className="mt-4 max-w-2xl text-4xl font-bold leading-tight tracking-[-0.04em] sm:text-5xl">
                                Find something worth
                                <br />
                                <span className="text-[#4F46E5]">
                                    applying for.
                                </span>
                            </h1>

                        </div>


                        {/* Search */}
                        <div className="flex flex-col gap-3 lg:flex-row">

                            <div className="flex flex-1 items-center gap-3 rounded-xl border border-[#DDE1E8] bg-[#FAFAFB] px-4 py-3.5 transition focus-within:border-[#BEB9FF]">

                                <Search
                                    size={19}
                                    strokeWidth={1.8}
                                    className="text-[#697386]"
                                />

                                <input
                                    type="text"
                                    value={searchTerm}
                                    onChange={(e) =>
                                        setSearchTerm(e.target.value)
                                    }
                                    placeholder="Job title, skill or company"
                                    className="w-full bg-transparent text-sm outline-none placeholder:text-[#9AA2B1]"
                                />

                            </div>


                            <div className="flex flex-1 items-center gap-3 rounded-xl border border-[#DDE1E8] bg-[#FAFAFB] px-4 py-3.5 transition focus-within:border-[#BEB9FF]">

                                <MapPin
                                    size={19}
                                    strokeWidth={1.8}
                                    className="text-[#697386]"
                                />

                                <input
                                    type="text"
                                    value={locationTerm}
                                    onChange={(e) =>
                                        setLocationTerm(e.target.value)
                                    }
                                    placeholder="Where?"
                                    className="w-full bg-transparent text-sm outline-none placeholder:text-[#9AA2B1]"
                                />

                            </div>


                            <button className="flex items-center justify-center gap-2 rounded-xl bg-[#4F46E5] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#4338CA]">
                                Search
                                <ArrowRight size={16} />
                            </button>

                        </div>


                        {/* Discovery chips */}
                        <div className="flex flex-wrap items-center gap-2">

                            <span className="mr-2 text-xs font-medium text-[#8A93A3]">
                                Explore
                            </span>

                            {[
                                "Remote",
                                "Entry-level",
                                "Engineering",
                                "Design",
                                "Recently added",
                            ].map((item) => (
                                <button
                                    key={item}
                                    onClick={() =>
                                        toggleFilter(item)
                                    }
                                    className={`rounded-full border px-3.5 py-1.5 text-xs font-medium transition ${
                                        selectedFilters.includes(item)
                                            ? "border-[#4F46E5] bg-[#EEF0FF] text-[#4F46E5]"
                                            : "border-[#E0E4EA] bg-white text-[#596274] hover:border-[#BEB9FF] hover:text-[#4F46E5]"
                                    }`}
                                >
                                    {item}
                                </button>
                            ))}

                        </div>

                    </div>

                </div>

            </section>


            {/* Main discovery area */}
            <main className="mx-auto max-w-7xl px-6 py-8">

                {/* Mobile filter button */}
                <div className="mb-5 lg:hidden">

                    <button
                        onClick={() => setShowFilters(true)}
                        className="flex items-center gap-2 rounded-lg border border-[#DDE1E8] bg-white px-4 py-2.5 text-sm font-medium"
                    >
                        <SlidersHorizontal size={16} />
                        Filters

                        {selectedFilters.length > 0 && (
                            <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-[#4F46E5] px-1.5 text-[10px] font-bold text-white">
                                {selectedFilters.length}
                            </span>
                        )}
                    </button>

                </div>


                <div className="grid min-h-[680px] gap-5 lg:grid-cols-[390px_1fr]">


                    {/* Job list */}
                    <section className="rounded-2xl border border-[#E0E4EA] bg-white">

                        <div className="border-b border-[#E6E9EE] px-5 py-5">

                            <div className="flex items-center justify-between">

                                <div>

                                    <p className="text-sm font-semibold">
                                        Opportunities
                                    </p>

                                    <p className="mt-1 text-xs text-[#8A93A3]">
                                        {filteredJobs.length} roles to explore
                                    </p>

                                </div>

                                <button
                                    onClick={() =>
                                        setShowFilters(true)
                                    }
                                    className="rounded-lg border border-[#E0E4EA] p-2 text-[#697386] transition hover:border-[#C8C4FF] hover:text-[#4F46E5]"
                                >
                                    <SlidersHorizontal size={16} />
                                </button>

                            </div>

                        </div>


                        {/* List */}
                        <div className="divide-y divide-[#E8EBEF]">

                            {filteredJobs.map((job) => {

                                const isSelected =
                                    selectedJob.id === job.id;

                                return (
                                    <button
                                        key={job.id}
                                        onClick={() =>
                                            selectJob(job)
                                        }
                                        className={`w-full text-left transition ${
                                            isSelected
                                                ? "bg-[#F4F3FF]"
                                                : "bg-white hover:bg-[#FAFAFC]"
                                        }`}
                                    >

                                        <div className="px-5 py-5">

                                            <div className="flex gap-3">

                                                <div
                                                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-xs font-bold ${
                                                        isSelected
                                                            ? "bg-[#E8E6FF] text-[#4F46E5]"
                                                            : "bg-[#F0F1F4] text-[#30394A]"
                                                    }`}
                                                >
                                                    {job.short}
                                                </div>


                                                <div className="min-w-0 flex-1">

                                                    <div className="flex items-start justify-between gap-3">

                                                        <div>

                                                            <p className="text-xs font-medium text-[#697386]">
                                                                {job.company}
                                                            </p>

                                                            <h2 className="mt-1 text-sm font-semibold">
                                                                {job.title}
                                                            </h2>

                                                        </div>

                                                        {job.new && (
                                                            <span className="shrink-0 rounded-full bg-[#ECFDF5] px-2 py-0.5 text-[10px] font-semibold text-[#16805C]">
                                                                New
                                                            </span>
                                                        )}

                                                    </div>


                                                    <div className="mt-3 flex flex-wrap gap-x-3 gap-y-1.5 text-xs text-[#7B8494]">

                                                        <span className="flex items-center gap-1">
                                                            <MapPin size={12} />
                                                            {job.location}
                                                        </span>

                                                        <span>
                                                            {job.mode}
                                                        </span>

                                                        <span>
                                                            {job.salary}
                                                        </span>

                                                    </div>


                                                    <div className="mt-3 flex flex-wrap gap-1.5">

                                                        {job.skills
                                                            .slice(0, 2)
                                                            .map((skill) => (
                                                                <span
                                                                    key={skill}
                                                                    className="rounded bg-white px-2 py-1 text-[10px] font-medium text-[#687181] ring-1 ring-[#E5E8ED]"
                                                                >
                                                                    {skill}
                                                                </span>
                                                            ))}

                                                        {job.skills.length > 2 && (
                                                            <span className="px-1 py-1 text-[10px] text-[#9AA2B1]">
                                                                +
                                                                {job.skills.length -
                                                                    2}
                                                            </span>
                                                        )}

                                                    </div>

                                                </div>

                                            </div>

                                        </div>

                                    </button>
                                );
                            })}


                            {/* Empty state */}
                            {filteredJobs.length === 0 && (
                                <div className="px-6 py-16 text-center">

                                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#EEF0FF] text-[#4F46E5]">
                                        <Search size={20} />
                                    </div>

                                    <h3 className="mt-4 text-base font-semibold">
                                        Nothing here yet.
                                    </h3>

                                    <p className="mx-auto mt-2 max-w-xs text-sm leading-6 text-[#697386]">
                                        Try another job title, skill or
                                        location.
                                    </p>

                                    <button
                                        onClick={clearFilters}
                                        className="mt-5 text-sm font-semibold text-[#4F46E5]"
                                    >
                                        Clear search
                                    </button>

                                </div>
                            )}

                        </div>

                    </section>


                    {/* Selected job */}
                    <section className="hidden lg:block">

                        <div className="sticky top-6 rounded-2xl border border-[#E0E4EA] bg-white">

                            {/* Selected job header */}
                            <div className="border-b border-[#E6E9EE] px-8 py-7">

                                <div className="flex items-start justify-between gap-5">

                                    <div className="flex gap-4">

                                        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#EEF0FF] text-sm font-bold text-[#4F46E5]">
                                            {selectedJob.short}
                                        </div>

                                        <div>

                                            <p className="text-sm font-medium text-[#697386]">
                                                {selectedJob.company}
                                            </p>

                                            <h2 className="mt-1 text-2xl font-bold tracking-[-0.025em]">
                                                {selectedJob.title}
                                            </h2>

                                            <div className="mt-2 flex flex-wrap gap-x-4 gap-y-2 text-sm text-[#697386]">

                                                <span className="flex items-center gap-1.5">
                                                    <MapPin size={14} />
                                                    {selectedJob.location}
                                                </span>

                                                <span className="flex items-center gap-1.5">
                                                    <BriefcaseBusiness
                                                        size={14}
                                                    />
                                                    {selectedJob.type}
                                                </span>

                                                <span>
                                                    {selectedJob.mode}
                                                </span>

                                            </div>

                                        </div>

                                    </div>


                                    <button
                                        onClick={toggleSaved}
                                        className={`rounded-lg border p-2.5 transition ${
                                            saved
                                                ? "border-[#C8C4FF] bg-[#F1F0FF] text-[#4F46E5]"
                                                : "border-[#E0E4EA] text-[#697386] hover:border-[#C8C4FF] hover:text-[#4F46E5]"
                                        }`}
                                    >
                                        <Bookmark
                                            size={18}
                                            fill={
                                                saved
                                                    ? "currentColor"
                                                    : "none"
                                            }
                                        />
                                    </button>

                                </div>


                                {/* Quick facts */}
                                <div className="mt-7 flex flex-wrap gap-2">

                                    <span className="rounded-lg bg-[#F7F8FA] px-3 py-2 text-xs font-medium text-[#596274]">
                                        {selectedJob.salary}
                                    </span>

                                    <span className="rounded-lg bg-[#F7F8FA] px-3 py-2 text-xs font-medium text-[#596274]">
                                        {selectedJob.experience}
                                    </span>

                                    <span className="rounded-lg bg-[#F7F8FA] px-3 py-2 text-xs font-medium text-[#596274]">
                                        Posted {selectedJob.posted}
                                    </span>

                                </div>

                            </div>


                            {/* Job content */}
                            <div className="px-8 py-7">

                                <div>

                                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#4F46E5]">
                                        About the role
                                    </p>

                                    <p className="mt-4 max-w-2xl text-sm leading-7 text-[#697386]">
                                        {selectedJob.description}
                                    </p>

                                </div>


                                <div className="mt-8">

                                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#4F46E5]">
                                        What you'll work on
                                    </p>

                                    <div className="mt-4 space-y-3">

                                        {selectedJob.responsibilities.map(
                                            (item) => (
                                                <div
                                                    key={item}
                                                    className="flex items-start gap-3 text-sm text-[#596274]"
                                                >
                                                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#EEF0FF] text-[#4F46E5]">
                                                        <Check size={12} />
                                                    </span>

                                                    {item}
                                                </div>
                                            )
                                        )}

                                    </div>

                                </div>


                                <div className="mt-8">

                                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#4F46E5]">
                                        Skills
                                    </p>

                                    <div className="mt-3 flex flex-wrap gap-2">

                                        {selectedJob.skills.map(
                                            (skill) => (
                                                <span
                                                    key={skill}
                                                    className="rounded-md border border-[#E0E4EA] bg-white px-3 py-1.5 text-xs font-medium text-[#596274]"
                                                >
                                                    {skill}
                                                </span>
                                            )
                                        )}

                                    </div>

                                </div>

                            </div>


                            {/* Apply bar */}
                            <div className="flex items-center justify-between gap-5 border-t border-[#E6E9EE] bg-[#FAFAFB] px-8 py-5">

                                <div>

                                    <p className="text-xs text-[#8A93A3]">
                                        Salary
                                    </p>

                                    <p className="mt-1 font-semibold">
                                        {selectedJob.salary}
                                    </p>

                                </div>

                                <button
                                    onClick={openApplyModal}
                                    className="flex items-center gap-2 rounded-lg bg-[#4F46E5] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#4338CA]"
                                >
                                    Apply now
                                    <ArrowRight size={16} />
                                </button>

                            </div>

                        </div>

                    </section>

                </div>

            </main>


            {/* Mobile filter drawer */}
            {showFilters && (
                <div className="fixed inset-0 z-50 lg:hidden">

                    <div
                        className="absolute inset-0 bg-[#172033]/30"
                        onClick={() => setShowFilters(false)}
                    />

                    <div className="absolute right-0 top-0 h-full w-[85%] max-w-sm overflow-y-auto bg-white p-6 shadow-2xl">

                        <div className="flex items-center justify-between">

                            <div>

                                <h2 className="text-lg font-semibold">
                                    Filters
                                </h2>

                                {selectedFilters.length > 0 && (
                                    <p className="mt-1 text-xs text-[#8A93A3]">
                                        {selectedFilters.length} selected
                                    </p>
                                )}

                            </div>

                            <button
                                onClick={() =>
                                    setShowFilters(false)
                                }
                                className="rounded-lg border border-[#E0E4EA] p-2"
                            >
                                <X size={18} />
                            </button>

                        </div>


                        {Object.entries(filterGroups).map(
                            ([group, options]) => (
                                <div
                                    key={group}
                                    className="mt-7 border-t border-[#E5E8ED] pt-6"
                                >

                                    <h3 className="text-sm font-semibold">
                                        {group}
                                    </h3>

                                    <div className="mt-4 space-y-3">

                                        {options.map((option) => {

                                            const checked =
                                                selectedFilters.includes(
                                                    option
                                                );

                                            return (
                                                <label
                                                    key={option}
                                                    className={`flex cursor-pointer items-center justify-between rounded-lg px-2 py-2 text-sm transition ${
                                                        checked
                                                            ? "bg-[#F4F3FF] text-[#4F46E5]"
                                                            : "text-[#697386] hover:bg-[#FAFAFC]"
                                                    }`}
                                                >

                                                    <span>
                                                        {option}
                                                    </span>

                                                    <input
                                                        type="checkbox"
                                                        checked={checked}
                                                        onChange={() =>
                                                            toggleFilter(
                                                                option
                                                            )
                                                        }
                                                        className="h-4 w-4 accent-[#4F46E5]"
                                                    />

                                                </label>
                                            );
                                        })}

                                    </div>

                                </div>
                            )
                        )}


                        {/* More filters */}
                        <div className="mt-7 border-t border-[#E5E8ED] pt-6">

                            <h3 className="text-sm font-semibold">
                                More filters
                            </h3>

                            <div className="mt-4 space-y-3">

                                {[
                                    "Engineering",
                                    "Design",
                                    "Recently added",
                                ].map((option) => {

                                    const checked =
                                        selectedFilters.includes(option);

                                    return (
                                        <label
                                            key={option}
                                            className={`flex cursor-pointer items-center justify-between rounded-lg px-2 py-2 text-sm transition ${
                                                checked
                                                    ? "bg-[#F4F3FF] text-[#4F46E5]"
                                                    : "text-[#697386] hover:bg-[#FAFAFC]"
                                            }`}
                                        >

                                            <span>
                                                {option}
                                            </span>

                                            <input
                                                type="checkbox"
                                                checked={checked}
                                                onChange={() =>
                                                    toggleFilter(option)
                                                }
                                                className="h-4 w-4 accent-[#4F46E5]"
                                            />

                                        </label>
                                    );
                                })}

                            </div>

                        </div>


                        {/* Drawer actions */}
                        <div className="sticky bottom-0 mt-8 flex gap-3 border-t border-[#E5E8ED] bg-white pt-5">

                            <button
                                onClick={clearFilters}
                                className="flex-1 rounded-lg border border-[#E0E4EA] px-4 py-3 text-sm font-semibold text-[#596274] transition hover:border-[#C8C4FF] hover:text-[#4F46E5]"
                            >
                                Clear all
                            </button>

                            <button
                                onClick={() =>
                                    setShowFilters(false)
                                }
                                className="flex-1 rounded-lg bg-[#4F46E5] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#4338CA]"
                            >
                                Show {filteredJobs.length} jobs
                            </button>

                        </div>

                    </div>

                </div>
            )}


            {/* Apply modal */}
            {showApplyModal && (
                <div className="fixed inset-0 z-[60] flex items-center justify-center px-4">

                    {/* Overlay */}
                    <div
                        className="absolute inset-0 bg-[#172033]/45 backdrop-blur-[2px]"
                        onClick={closeApplyModal}
                    />

                    {/* Modal */}
                    <div className="relative z-10 max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl bg-white shadow-2xl">

                        {/* Modal header */}
                        <div className="flex items-start justify-between border-b border-[#E6E9EE] px-6 py-5">

                            <div>

                                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#4F46E5]">
                                    Job application
                                </p>

                                <h2 className="mt-2 text-xl font-bold tracking-[-0.02em]">
                                    {selectedJob.title}
                                </h2>

                                <p className="mt-1 text-sm text-[#697386]">
                                    {selectedJob.company} ·{" "}
                                    {selectedJob.location}
                                </p>

                            </div>

                            <button
                                onClick={closeApplyModal}
                                className="rounded-lg border border-[#E0E4EA] p-2 text-[#697386] transition hover:border-[#C8C4FF] hover:text-[#4F46E5]"
                            >
                                <X size={18} />
                            </button>

                        </div>


                        {applicationSubmitted ? (
                            /* Success state */
                            <div className="px-6 py-12 text-center">

                                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#ECFDF5] text-[#16805C]">
                                    <Check size={26} />
                                </div>

                                <h3 className="mt-5 text-xl font-bold">
                                    Application submitted
                                </h3>

                                <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-[#697386]">
                                    Your application for{" "}
                                    <span className="font-semibold text-[#172033]">
                                        {selectedJob.title}
                                    </span>{" "}
                                    at{" "}
                                    <span className="font-semibold text-[#172033]">
                                        {selectedJob.company}
                                    </span>{" "}
                                    has been recorded.
                                </p>

                                <button
                                    onClick={closeApplyModal}
                                    className="mt-7 rounded-lg bg-[#4F46E5] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#4338CA]"
                                >
                                    Done
                                </button>

                            </div>
                        ) : (
                            <form
                                onSubmit={submitApplication}
                                className="px-6 py-6"
                            >

                                {/* Full name */}
                                <div>

                                    <label className="text-sm font-semibold">
                                        Full name
                                    </label>

                                    <input
                                        type="text"
                                        name="name"
                                        value={applicationData.name}
                                        onChange={handleApplicationChange}
                                        placeholder="Enter your full name"
                                        required
                                        className="mt-2 w-full rounded-lg border border-[#DDE1E8] bg-[#FAFAFB] px-4 py-3 text-sm outline-none transition focus:border-[#BEB9FF] focus:bg-white"
                                    />

                                </div>


                                {/* Email */}
                                <div className="mt-5">

                                    <label className="text-sm font-semibold">
                                        Email address
                                    </label>

                                    <input
                                        type="email"
                                        name="email"
                                        value={applicationData.email}
                                        onChange={handleApplicationChange}
                                        placeholder="you@example.com"
                                        required
                                        className="mt-2 w-full rounded-lg border border-[#DDE1E8] bg-[#FAFAFB] px-4 py-3 text-sm outline-none transition focus:border-[#BEB9FF] focus:bg-white"
                                    />

                                </div>


                                {/* Resume */}
                                <div className="mt-5">

                                    <label className="text-sm font-semibold">
                                        Resume
                                    </label>

                                    <label className="mt-2 flex cursor-pointer items-center gap-3 rounded-lg border border-dashed border-[#C9CED8] bg-[#FAFAFB] px-4 py-4 transition hover:border-[#BEB9FF] hover:bg-[#F8F8FF]">

                                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#EEF0FF] text-[#4F46E5]">
                                            <Upload size={17} />
                                        </div>

                                        <div className="min-w-0">

                                            <p className="text-sm font-medium">
                                                {applicationData.resume
                                                    ? applicationData.resume
                                                          .name
                                                    : "Upload your resume"}
                                            </p>

                                            <p className="mt-0.5 text-xs text-[#8A93A3]">
                                                PDF, DOC or DOCX
                                            </p>

                                        </div>

                                        <input
                                            type="file"
                                            name="resume"
                                            accept=".pdf,.doc,.docx"
                                            onChange={
                                                handleApplicationChange
                                            }
                                            required
                                            className="hidden"
                                        />

                                    </label>

                                </div>


                                {/* Cover note */}
                                <div className="mt-5">

                                    <label className="text-sm font-semibold">
                                        Short note{" "}
                                        <span className="font-normal text-[#8A93A3]">
                                            (optional)
                                        </span>
                                    </label>

                                    <textarea
                                        name="coverNote"
                                        value={
                                            applicationData.coverNote
                                        }
                                        onChange={handleApplicationChange}
                                        rows={4}
                                        placeholder="Tell the employer briefly why you're interested..."
                                        className="mt-2 w-full resize-none rounded-lg border border-[#DDE1E8] bg-[#FAFAFB] px-4 py-3 text-sm outline-none transition focus:border-[#BEB9FF] focus:bg-white"
                                    />

                                </div>


                                {/* Actions */}
                                <div className="mt-7 flex gap-3 border-t border-[#E6E9EE] pt-5">

                                    <button
                                        type="button"
                                        onClick={closeApplyModal}
                                        className="flex-1 rounded-lg border border-[#E0E4EA] px-5 py-3 text-sm font-semibold text-[#596274] transition hover:border-[#C8C4FF] hover:text-[#4F46E5]"
                                    >
                                        Cancel
                                    </button>

                                    <button
                                        type="submit"
                                        className="flex-1 rounded-lg bg-[#4F46E5] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#4338CA]"
                                    >
                                        Submit application
                                    </button>

                                </div>

                            </form>
                        )}

                    </div>

                </div>
            )}

        </div>
    );
}

export default Jobs;