"use client";

import Link from "next/link";
import { useEffect, useId, useRef } from "react";
import styles from "./BonnetDiagnosticAnimation.module.css";
import assetLayout from "../../public/images/diagnostics/layout.json";

const clamp = (value: number) => Math.max(0, Math.min(1, value));
const ease = (value: number) => { const t = clamp(value); return t * t * (3 - 2 * t); };
const segment = (progress: number, from: number, to: number) => ease((progress - from) / (to - from));
const wheelRadius = 82;
const wheelCentres = [176, 786] as const;
const bonnetImage = assetLayout["silver-bonnet"];
// Keep the approved upper hinge fixed independently of the image's padding.
const bonnetHinge = assetLayout["bonnet-hinge"];
const bonnetNose = {
  x: bonnetImage.x + bonnetImage.width * (61 / 2126),
  y: bonnetImage.y + bonnetImage.height * (397.5 / 740),
};
// Fit the rear edge to the cowl/trim without moving the nose or upper hinge.
// This is a fixed image fit; the approved opening rotation remains unchanged.
const bonnetSeamSlope = (bonnetNose.y - bonnetHinge.y) / (bonnetNose.x - bonnetHinge.x);
const bonnetRearFit = 0.22;
const bonnetRearLift = 0.11;
const bonnetFit = `matrix(${[
  1 - bonnetRearFit * bonnetSeamSlope, bonnetRearLift * bonnetSeamSlope,
  bonnetRearFit, 1 - bonnetRearLift,
  bonnetRearFit * (bonnetSeamSlope * bonnetHinge.x - bonnetHinge.y),
  bonnetRearLift * (bonnetHinge.y - bonnetSeamSlope * bonnetHinge.x),
].map((value) => value.toFixed(8)).join(" ")})`;
// Only painted cowl/wing panels occlude the bonnet's rear/lower edge.
// Leave the windscreen, pillar and mirror behind the raised bonnet.
// Reuse the complete car image for occlusion; no cropped bitmap is needed.
const fixedBodyOutline = "M328 143 H350 V166.5 H1100 V450 H-160 V180.5 H36 L318 166.5 L318 163 L319 161 L319.5 158 L321 154 Q321.5 151 322.5 148 Q324 145 328 143 Z";
const statuses = ["Arriving at the workshop", "Opening the bonnet", "Specialist engine diagnosis", "Closing the bonnet", "Ready for your next journey"];

export default function BonnetDiagnosticAnimation() {
  const id = useId().replace(/:/g, "");
  const track = useRef<HTMLElement>(null);
  const sticky = useRef<HTMLDivElement>(null);
  const vehicle = useRef<SVGGElement>(null);
  const bonnet = useRef<SVGGElement>(null);
  const mechanic = useRef<SVGGElement>(null);
  const wheels = useRef<(SVGGElement | null)[]>([]);
  const message = useRef<HTMLDivElement>(null);
  const status = useRef<HTMLParagraphElement>(null);
  const progressLine = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = track.current;
    const viewport = sticky.current;
    if (!section || !viewport) return;
    let request = 0;
    let previousStage = -1;
    const reduced = matchMedia("(prefers-reduced-motion: reduce)");
    const render = () => {
      request = 0;
      const scrollDistance = -section.getBoundingClientRect().top;
      const scrollProgress = clamp(scrollDistance / Math.max(1, section.offsetHeight - viewport.offsetHeight));
      // Run the whole sequence from its early entrance, shortening the section
      // by the same distance so no waiting time is moved to a later stage.
      const entranceLead = viewport.offsetHeight * 0.5;
      const sequenceDistance = scrollDistance + entranceLead;
      const holdDistance = viewport.offsetHeight * 0.6;
      const animationDistance = Math.max(1, section.offsetHeight - viewport.offsetHeight - holdDistance + entranceLead);
      const mechanicArrivedAt = animationDistance * 0.45;
      // Hold the fully arrived mechanic for an extra 60% of a viewport of scroll.
      const heldScroll = Math.max(0, Math.min(holdDistance, sequenceDistance - mechanicArrivedAt));
      const progress = clamp((sequenceDistance - heldScroll) / animationDistance);
      const arrival = segment(progress, 0, 0.22);
      const departure = segment(progress, 0.79, 0.97);
      const distance = (1 - arrival) * 1450 - departure * 1500;
      const opening = segment(progress, 0.25, 0.39) * (1 - segment(progress, 0.65, 0.77));
      const person = segment(progress, 0.39, 0.45) * (1 - segment(progress, 0.59, 0.65));
      if (vehicle.current) vehicle.current.setAttribute("transform", `translate(${reduced.matches ? 0 : distance} 0)`);
      if (bonnet.current) {
        bonnet.current.setAttribute("transform", `rotate(${opening * 58} ${bonnetHinge.x} ${bonnetHinge.y})`);
      }
      if (mechanic.current) {
        mechanic.current.style.opacity = String(person);
        mechanic.current.setAttribute("transform", `translate(${-24 * (1 - person)} 0)`);
      }
      // Both tyres remain attached; their rotation follows travelled distance.
      const angle = reduced.matches ? 0 : distance / wheelRadius * 180 / Math.PI;
      wheels.current.forEach((wheel) => wheel?.setAttribute("transform", `rotate(${angle})`));
      const reveal = segment(progress, 0.93, 1);
      if (message.current) {
        message.current.style.opacity = String(reveal);
        message.current.style.visibility = reveal > 0 ? "visible" : "hidden";
      }
      if (progressLine.current) progressLine.current.style.transform = `scaleX(${scrollProgress})`;
      const stage = progress < 0.25 ? 0 : progress < 0.39 ? 1 : progress < 0.65 ? 2 : progress < 0.79 ? 3 : 4;
      if (status.current && stage !== previousStage) status.current.textContent = statuses[stage];
      previousStage = stage;
    };
    const update = () => { if (!request) request = requestAnimationFrame(render); };
    const observer = new ResizeObserver(update);
    observer.observe(section);
    observer.observe(viewport);
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    reduced.addEventListener("change", update);
    render();
    return () => {
      cancelAnimationFrame(request);
      observer.disconnect();
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      reduced.removeEventListener("change", update);
    };
  }, []);

  return (
    <section ref={track} className={styles.track} aria-labelledby={`${id}-heading`}>
      <div ref={sticky} className={styles.sticky}>
        <div className="mx-auto flex h-full w-full max-w-6xl flex-col px-5 sm:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="mb-3 text-xs font-bold tracking-[.22em] text-brand">EXPERT CARE. EVERY DETAIL.</p>
              <h2 id={`${id}-heading`} className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">From diagnosis to drive.</h2>
              <p className="mt-3 text-sm text-gray-600 sm:text-base">A closer look under the bonnet. Specialist attention for the journey ahead.</p>
            </div>
            <p className="text-xs font-medium text-brand">Scroll to explore ↓</p>
          </div>
          <div className={styles.scene}>
            <svg className={styles.animation} viewBox="-120 -180 1280 620" role="img" aria-label="The original silver Range Rover arrives on rotating wheels, stops, opens its bonnet for diagnosis, closes it and drives away. Scroll backward to reverse.">
              <defs>
                <filter id={`${id}-shadow`} x="-20%" width="140%" y="-100%" height="300%"><feGaussianBlur stdDeviation="6" /></filter>
                <clipPath id={`${id}-fixed-body`} clipPathUnits="userSpaceOnUse">
                  <path d={fixedBodyOutline} />
                </clipPath>
              </defs>
              <g ref={vehicle} transform="translate(1450 0)">
                <ellipse cx="500" cy="377" rx="470" ry="11" opacity=".15" fill="#171717" filter={`url(#${id}-shadow)`} />
                {/* Complete generated assets, with no clipping paths or photo crops. */}
                <image href="/images/diagnostics/silver-base-recessed.webp" {...assetLayout["silver-base"]} preserveAspectRatio="none" />
                <g ref={bonnet}>
                  <image href="/images/diagnostics/silver-bonnet-complete.webp" {...bonnetImage} transform={bonnetFit} preserveAspectRatio="xMidYMid meet" />
                </g>
                <image href="/images/diagnostics/silver-base-recessed.webp" {...assetLayout["silver-base"]} preserveAspectRatio="none" clipPath={`url(#${id}-fixed-body)`} />
                {wheelCentres.map((x, index) => <g key={x} transform={`translate(${x} 294)`}>
                  <g ref={(element) => { wheels.current[index] = element; }}>
                    <image href="/images/diagnostics/real-tyre.webp" {...assetLayout["real-tyre"]} preserveAspectRatio="none" />
                  </g>
                </g>)}
              </g>
              <g ref={mechanic} opacity="0">
                <image href="/images/diagnostics/mechanic-full.webp" {...assetLayout["mechanic-full"]} preserveAspectRatio="none" />
              </g>
            </svg>
            <div ref={message} className={styles.complete}>
              <span className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand text-2xl text-white">✓</span>
              <p className="text-3xl font-bold text-gray-900 sm:text-5xl">Ready to go.</p>
              <p className="mt-3 text-sm text-gray-600">Expert attention. Confidence for the road.</p>
              <Link href="/contact" className="mt-6 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white hover:bg-brand-dark">Book a diagnostic check →</Link>
            </div>
          </div>
          <div className="relative border-t border-gray-200 pt-5">
            <div ref={progressLine} className={styles.progress} />
            <p ref={status} aria-live="polite" className="text-sm font-medium text-brand">{statuses[0]}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
