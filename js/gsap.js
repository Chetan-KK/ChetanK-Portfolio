import gsap from "gsap";
import CSSRulePlugin from "gsap/CSSRulePlugin";
gsap.registerPlugin(CSSRulePlugin);

let rule = CSSRulePlugin.getRule(".animBox::before");


export function loaded() {
    const tl = gsap.timeline();
    if (window.innerWidth > 705) {
        tl.to(".loading", { y: "-100%", duration: 1 })
            .to(".loading2", { y: "-100%", duration: 1 }, '-=.7')
            .from(".header", { y: "-150%", duration: .5 })
            .from(".logo", { x: "-100%", opacity: 0, duration: .5 })
            .to("html", { overflowY: "scroll", duration: 0 })
            .from(".main-link", { opacity: "0", duration: .5, stagger: .2 })
            .from(".main-title", { y: "-100%", opacity: 0, duration: 1 })
            .from(rule, { height: '100%', duration: .5 }, '-=.8')
            .from(".main-body .main-description", { y: "100%", opacity: 0, duration: 1 }, '-=.7');
    } else {
        tl.to(".loading", { y: "-100%", duration: 1 })
            .to(".loading2", { y: "-100%", duration: 1 }, '-=.7')
            .to("html", { overflowY: "scroll", duration: 0 });
    }

}