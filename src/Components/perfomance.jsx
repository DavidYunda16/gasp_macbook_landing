import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Performance = () => {
    const sectionRef = useRef(null);

    useGSAP(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                ".performance-image",
                {
                    opacity: 0,
                    x: -90,
                    y: 40,
                    scale: 0.92,
                    rotate: -14,
                    filter: "blur(10px)",
                },
                {
                    opacity: 1,
                    x: 0,
                    y: 0,
                    scale: 1,
                    rotate: -10,
                    filter: "blur(0px)",
                    duration: 1.8,
                    ease: "power4.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 82%",
                        toggleActions: "play none none reverse",
                    },
                    onComplete: () => {
                        gsap.to(".performance-image", {
                            y: "-=8",
                            duration: 3.2,
                            repeat: -1,
                            yoyo: true,
                            ease: "sine.inOut",
                        });
                    },
                }
            );

            gsap.fromTo(
                ".performance-content > *",
                {
                    opacity: 0,
                    x: 70,
                    y: 28,
                },
                {
                    opacity: 1,
                    x: 0,
                    y: 0,
                    duration: 1.5,
                    stagger: 0.18,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 80%",
                        toggleActions: "play none none reverse",
                    },
                }
            );

            gsap.to(".performance-image", {
                yPercent: -4,
                ease: "none",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true,
                },
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            id="performance"
            ref={sectionRef}
            className="bg-black px-6 pb-24 pt-40 text-white md:px-10 lg:px-16"
        >
            <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1.2fr_0.9fr] lg:gap-24">
                <div className="flex justify-center lg:justify-start">
                    <img
                        src="/performance1.png"
                        alt="Performance preview"
                        className="performance-image w-full max-w-[900px] rounded-[18px] border border-white/10 object-cover brightness-125 contrast-115 saturate-110 shadow-[0_35px_120px_rgba(255,255,255,0.08)]"
                    />
                </div>

                <div className="performance-content max-w-2xl">
                    <h2 className="text-4xl font-semibold leading-[0.95] md:text-6xl lg:text-7xl">
                        Next-level graphics performance.
                        <span className="mt-1 block w-full text-center text-neutral-500">
              Game on.
            </span>
                    </h2>

                    <p className="mt-8 text-base leading-7 text-neutral-300 md:text-lg md:leading-8">
                        Run graphics-intensive workflows with a responsiveness that keeps up
                        with your imagination. The M4 family of chips features a GPU with a
                        second-generation hardware-accelerated ray tracing engine that
                        renders images faster, so{" "}
                        <span className="font-semibold text-[#2997ff]">
              gaming feels more immersive and realistic than ever.
            </span>{" "}
                        And{" "}
                        <span className="font-semibold text-white">
              Dynamic Caching optimizes fast on-chip memory
            </span>{" "}
                        to dramatically increase average GPU utilization, driving a huge
                        performance boost for the most demanding pro apps and games.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Performance;
