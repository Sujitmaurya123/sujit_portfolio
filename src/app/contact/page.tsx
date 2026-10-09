"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import {
  ArrowUpRight,
  Check,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  Sparkles,
} from "lucide-react";
import { FaGithub,FaLinkedin } from "react-icons/fa";

/* =========================================================
   DATA
========================================================= */

const projectTypes = [
  "App",
  "Web",
  "Backend",
  "DevOps & Deploy",
  "AI Agent",
];

const budgets = [
  "Under ₹15,000",
  "₹15,000 – ₹40,000",
  "₹40,000 – ₹1,00,000",
  "₹1,00,000+",
  "Not sure yet",
];

/* =========================================================
   PAGE
========================================================= */

export default function ContactPage() {
  const [selectedProjects, setSelectedProjects] = useState([]);
  const [selectedBudget, setSelectedBudget] = useState("");

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState("idle");

  /* -------------------------------------------------------
     Toggle Project
  ------------------------------------------------------- */

  const toggleProject = (project) => {
    setSelectedProjects((current) => {
      if (current.includes(project)) {
        return current.filter((item) => item !== project);
      }

      return [...current, project];
    });
  };

  /* -------------------------------------------------------
     Form Change
  ------------------------------------------------------- */

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));
  };

  /* -------------------------------------------------------
     Submit
  ------------------------------------------------------- */

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!form.name || !form.email || !form.message) {
      return;
    }

    setStatus("loading");

    /*
      Replace this with your actual API call.

      Example:

      await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...form,
          projects: selectedProjects,
          budget: selectedBudget,
        }),
      });
    */

    await new Promise((resolve) => setTimeout(resolve, 1200));

    setStatus("success");

    setForm({
      name: "",
      email: "",
      phone: "",
      message: "",
    });

    setSelectedProjects([]);
    setSelectedBudget("");

    setTimeout(() => {
      setStatus("idle");
    }, 5000);
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#121212] text-white">
      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative min-h-[400px] overflow-hidden">
        {/* Background */}

        <div className="absolute inset-0">
          <Image
            src="/assets/sujitsk.png"
            alt="Let's talk"
            fill
            priority
            className="object-cover object-center"
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/65" />

          {/* Green Spotify glow */}
          <div className="absolute -right-20 -top-40 h-[550px] w-[550px] rounded-full bg-[#1DB954]/10 blur-[150px]" />

          <div className="absolute -left-32 bottom-0 h-[400px] w-[400px] rounded-full bg-[#1DB954]/5 blur-[130px]" />

          {/* Bottom fade */}
          <div className="absolute inset-x-0 bottom-0 h-[65%] bg-gradient-to-t from-[#121212] via-[#121212]/80 to-transparent" />

          {/* Left gradient */}
          <div className="absolute inset-y-0 left-0 w-[75%] bg-gradient-to-r from-black/70 to-transparent" />
        </div>

        {/* Hero Content */}

        <div className="relative z-10 mx-auto max-w-[1500px] px-6 pb-20 pt-10 md:px-10 lg:px-12">
          {/* Episode */}

          <div className="mb-5 mt-10">
            <span className="text-[11px] font-black uppercase tracking-[0.45em] text-[#1DB954] ">
              EP 6
            </span>
          </div>

          {/* Heading */}

          <h1
            className="
              text-[50px]
              font-black
              uppercase
              leading-[0.9]
              tracking-[-0.045em]
              text-white
              drop-shadow-[0_4px_15px_rgba(0,0,0,0.8)]
              sm:text-[62px]
              md:text-[76px]
              lg:text-[86px]
            "
          >
            Let's Talk
          </h1>

          {/* Subtitle */}

          <p className="mt-6 text-[16px] font-medium text-white/65 md:text-[19px]">
            Open to full-stack & AI agent freelance work
          </p>
        </div>
      </section>

      {/* =====================================================
          CONTACT CONTENT
      ====================================================== */}

      <section className="relative mx-auto max-w-[1150px] px-6 pb-24 md:px-10 lg:px-12">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.1fr_0.8fr]">
          {/* =================================================
              FORM
          ================================================== */}

          <div>
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name + Email */}

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Input
                  name="name"
                  placeholder="Your name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />

                <Input
                  name="email"
                  type="email"
                  placeholder="Your email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Phone */}

              <Input
                name="phone"
                type="tel"
                placeholder="Phone number (optional)"
                value={form.phone}
                onChange={handleChange}
              />

              {/* Project Types */}

              <div>
                <label className="mb-3 block text-[14px] font-medium text-white/70">
                  What are you building?{" "}
                  <span className="text-white/40">
                    (pick all that apply)
                  </span>
                </label>

                <div className="flex flex-wrap gap-2">
                  {projectTypes.map((project) => {
                    const active = selectedProjects.includes(project);

                    return (
                      <ChoiceButton
                        key={project}
                        active={active}
                        onClick={() => toggleProject(project)}
                      >
                        {project}
                      </ChoiceButton>
                    );
                  })}
                </div>
              </div>

              {/* Budget */}

              <div className="pt-2">
                <label className="mb-3 block text-[14px] font-medium text-white/70">
                  Budget range
                </label>

                <div className="flex flex-wrap gap-2">
                  {budgets.map((budget) => {
                    const active = selectedBudget === budget;

                    return (
                      <ChoiceButton
                        key={budget}
                        active={active}
                        onClick={() => setSelectedBudget(budget)}
                      >
                        {budget}
                      </ChoiceButton>
                    );
                  })}
                </div>
              </div>

              {/* Message */}

              <div>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  placeholder="Tell me more — additional info, timeline, anything I should know"
                  className="
                    w-full
                    resize-none
                    rounded-[6px]
                    border
                    border-white/[0.10]
                    bg-[#181818]
                    px-4
                    py-4
                    text-[16px]
                    leading-6
                    text-white
                    outline-none
                    placeholder:text-white/40
                    transition-all
                    duration-200
                    focus:border-[#1DB954]
                    focus:bg-[#1b1b1b]
                    focus:ring-1
                    focus:ring-[#1DB954]/30
                  "
                />
              </div>

              {/* Submit */}

              <button
                type="submit"
                disabled={status === "loading"}
                className="
                  group
                  inline-flex
                  items-center
                  justify-center
                  gap-3
                  rounded-[6px]
                  bg-[#1DB954]
                  px-7
                  py-3.5
                  text-[16px]
                  font-bold
                  text-black
                  shadow-[0_8px_30px_rgba(29,185,84,0.16)]
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:bg-[#1ed760]
                  hover:shadow-[0_12px_35px_rgba(29,185,84,0.25)]
                  disabled:cursor-not-allowed
                  disabled:opacity-60
                "
              >
                {status === "loading" ? (
                  <>
                    <span
                      className="
                        h-4
                        w-4
                        animate-spin
                        rounded-full
                        border-2
                        border-black/30
                        border-t-black
                      "
                    />

                    Sending...
                  </>
                ) : status === "success" ? (
                  <>
                    <Check size={18} />
                    Message Sent
                  </>
                ) : (
                  <>
                    <Send
                      size={17}
                      className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />

                    Send Message
                  </>
                )}
              </button>

              {/* Success */}

              {status === "success" && (
                <div
                  className="
                    flex
                    items-center
                    gap-3
                    rounded-[7px]
                    border
                    border-[#1DB954]/20
                    bg-[#1DB954]/10
                    px-4
                    py-3
                    text-sm
                    text-[#1DB954]
                  "
                >
                  <Check size={17} />

                  Thanks! Your message has been sent successfully.
                </div>
              )}
            </form>
          </div>

          {/* =================================================
              CONTACT INFORMATION
          ================================================== */}

          <aside className="lg:pt-1">
            <div className="space-y-7">
              {/* Email */}

              <ContactItem
                icon={Mail}
                href="mailto:work@example.com"
                title="Email"
              >
                work@example.com
              </ContactItem>

              {/* Phone */}

              <ContactItem
                icon={Phone}
                href="tel:+919934601244"
                title="Phone"
              >
                +91 99346 01244
              </ContactItem>

              {/* Location */}

              <ContactItem icon={MapPin} title="Location">
                Sitapura, Jaipur, India
              </ContactItem>
            </div>

            {/* Social */}

            <div className="mt-10 flex items-center gap-4">
              <SocialButton
                href="https://linkedin.com"
                label="LinkedIn"
              >
                <FaLinkedin size={19} />
              </SocialButton>

              <SocialButton
                href="https://github.com"
                label="GitHub"
              >
                <FaGithub size={19} />
              </SocialButton>

              <SocialButton
                href="https://wa.me/919934601244"
                label="WhatsApp"
              >
                <MessageCircle size={19} />
              </SocialButton>
            </div>

            {/* Availability */}

            <div
              className="
                mt-12
                rounded-[9px]
                border
                border-[#1DB954]/15
                bg-[#181818]
                p-5
              "
            >
              <div className="flex items-center gap-3">
                <span className="relative flex h-3 w-3">
                  <span
                    className="
                      absolute
                      inline-flex
                      h-full
                      w-full
                      animate-ping
                      rounded-full
                      bg-[#1DB954]
                      opacity-50
                    "
                  />

                  <span className="relative inline-flex h-3 w-3 rounded-full bg-[#1DB954]" />
                </span>

                <span className="text-[13px] font-semibold text-white">
                  Currently available for select projects
                </span>
              </div>

              <p className="mt-3 text-[13px] leading-6 text-white/50">
                Full-stack development, AI agents, SaaS products,
                automation and production deployments.
              </p>
            </div>
          </aside>
        </div>
      </section>

      {/* =====================================================
          BOTTOM DIVIDER
      ====================================================== */}

      <div className="h-px w-full bg-white/[0.06]" />
    </main>
  );
}

/* =========================================================
   INPUT
========================================================= */

function Input({
  name,
  type = "text",
  placeholder,
  value,
  onChange,
  required = false,
}) {
  return (
    <input
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      required={required}
      placeholder={placeholder}
      className="
        h-[54px]
        w-full
        rounded-[6px]
        border
        border-white/[0.10]
        bg-[#181818]
        px-4
        text-[16px]
        text-white
        outline-none
        placeholder:text-white/40
        transition-all
        duration-200
        focus:border-[#1DB954]
        focus:bg-[#1b1b1b]
        focus:ring-1
        focus:ring-[#1DB954]/30
      "
    />
  );
}

/* =========================================================
   CHOICE BUTTON
========================================================= */

function ChoiceButton({
  children,
  active,
  onClick,
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`
        rounded-full
        border
        px-4
        py-2
        text-[14px]
        font-medium
        transition-all
        duration-200
        ${
          active
            ? "border-[#1DB954] bg-[#1DB954] text-black shadow-[0_5px_20px_rgba(29,185,84,0.15)]"
            : "border-white/[0.12] bg-transparent text-white/65 hover:border-[#1DB954]/50 hover:bg-[#1DB954]/10 hover:text-[#1DB954]"
        }
      `}
    >
      {children}
    </button>
  );
}

/* =========================================================
   CONTACT ITEM
========================================================= */

function ContactItem({
  icon: Icon,
  children,
  href,
  title,
}) {
  const content = (
    <div className="group flex items-center gap-4">
      <div
        className="
          flex
          h-10
          w-10
          shrink-0
          items-center
          justify-center
          rounded-full
          bg-[#181818]
          text-[#1DB954]
          transition-all
          duration-300
          group-hover:bg-[#1DB954]/10
        "
      >
        <Icon size={19} strokeWidth={1.8} />
      </div>

      <div>
        <div className="text-[11px] font-medium uppercase tracking-[0.15em] text-white/35">
          {title}
        </div>

        <div className="mt-1 text-[16px] font-medium text-white/70 transition-colors group-hover:text-[#1DB954]">
          {children}
        </div>
      </div>
    </div>
  );

  if (href) {
    return (
      <a
        href={href}
        className="block"
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      >
        {content}
      </a>
    );
  }

  return content;
}

/* =========================================================
   SOCIAL BUTTON
========================================================= */

function SocialButton({
  children,
  href,
  label,
}) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="
        flex
        h-12
        w-12
        items-center
        justify-center
        rounded-full
        border
        border-white/[0.08]
        bg-[#181818]
        text-white/70
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-[#1DB954]/40
        hover:bg-[#1DB954]/10
        hover:text-[#1DB954]
      "
    >
      {children}
    </Link>
  );
}