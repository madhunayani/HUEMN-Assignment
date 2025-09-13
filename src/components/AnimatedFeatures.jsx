// /src/components/AnimatedFeatures.jsx

import React, { useRef, useEffect } from 'react';
import '../styles/AnimatedFeatures.scss';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AnimatedFeatures = () => {
    // Create refs for all the elements we need to animate
    const componentRef = useRef(null);
    const stickyContentRef = useRef(null);
    const scene1HeadlineRef = useRef(null);
    const browserMockupRef = useRef(null);
    const colorPickerRef = useRef(null);
    const scene2HeadlineRef = useRef(null);
    const extensionsRef = useRef(null);
    const scene3HeadlineRef = useRef(null);
    const tabGroupsRef = useRef(null);
    const scene4HeadlineRef = useRef(null);
    const safetyCheckRef = useRef(null);

    // /src/components/AnimatedFeatures.jsx

    // ... (imports and refs are the same)

    // /src/components/AnimatedFeatures.jsx

    // ... (imports and refs are the same)

    useEffect(() => {
        const component = componentRef.current;
        const stickyContent = stickyContentRef.current;

        // Set initial states
        gsap.set([scene1HeadlineRef.current, scene2HeadlineRef.current, scene3HeadlineRef.current, scene4HeadlineRef.current], { autoAlpha: 0, y: 50 });
        gsap.set(browserMockupRef.current, { autoAlpha: 0, scale: 0.8, rotateX: 15 });
        gsap.set([colorPickerRef.current, extensionsRef.current, tabGroupsRef.current, safetyCheckRef.current], { autoAlpha: 0 });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: component,
                start: 'top top',
                end: 'bottom bottom',
                scrub: 1,
                pin: stickyContent,
            }
        });

        // --- SCENE 1 ---
        tl.to(scene1HeadlineRef.current, { autoAlpha: 1, y: 0, duration: 0.5 });
        tl.to(browserMockupRef.current, { autoAlpha: 1, scale: 1, rotateX: 0, duration: 0.7 }, "<");
        tl.to(colorPickerRef.current, { autoAlpha: 1, duration: 0.3 });
        tl.from(colorPickerRef.current.querySelectorAll('.color-circle'), { autoAlpha: 0, scale: 0.5, stagger: 0.1 }, "-=0.2");
        tl.to({}, { duration: 1 });

        // --- SCENE 2 ---
        tl.to(scene1HeadlineRef.current, { autoAlpha: 0, y: -50, duration: 0.5 });
        tl.to(colorPickerRef.current, { autoAlpha: 0, scale: 0.9, duration: 0.5 }, "<");
        tl.to(scene2HeadlineRef.current, { autoAlpha: 1, y: 0, duration: 0.5 }, "-=0.3");
        tl.to(extensionsRef.current, { autoAlpha: 1, duration: 0.5 }, "<");
        tl.from(extensionsRef.current.querySelectorAll('.extension-item'), { autoAlpha: 0, x: -50, stagger: 0.1 }, "-=0.3");
        tl.to({}, { duration: 1 });

        // --- SCENE 3 ---
        tl.to(scene2HeadlineRef.current, { autoAlpha: 0, y: -50, duration: 0.5 });
        tl.to(extensionsRef.current, { autoAlpha: 0, y: -50, duration: 0.5 }, "<");
        tl.to(scene3HeadlineRef.current, { autoAlpha: 1, y: 0, duration: 0.5 }, "-=0.3");
        tl.to(tabGroupsRef.current, { autoAlpha: 1, duration: 0.5 }, "<");
        tl.from(tabGroupsRef.current.querySelectorAll('.tab, .tab-group-header'), { autoAlpha: 0, y: 30, stagger: 0.1 }, "-=0.3");
        tl.to({}, { duration: 1 });

        // --- SCENE 4 ---
        tl.to(scene3HeadlineRef.current, { autoAlpha: 0, y: -50, duration: 0.5 });
        tl.to(tabGroupsRef.current, { autoAlpha: 0, y: -50, duration: 0.5 }, "<");
        tl.to(scene4HeadlineRef.current, { autoAlpha: 1, y: 0, duration: 0.5 }, "-=0.3");
        tl.to(safetyCheckRef.current, { autoAlpha: 1, duration: 0.5 }, "<");
        tl.from(safetyCheckRef.current.children, { autoAlpha: 0, y: 30, stagger: 0.1 }, "-=0.3");

        return () => {
            tl.kill();
            ScrollTrigger.getAll().forEach(t => t.kill());
        };
    }, []);

    // ... (the return statement is the new one from Step 1)


    // ... (the return statement with JSX is the same)


    // The JSX structure remains the same
    // /src/components/AnimatedFeatures.jsx

    // ... (imports, refs, and the useEffect hook are the same)

    // /src/components/AnimatedFeatures.jsx

    // ... (imports, refs, and useEffect hook remain the same)

    return (
        <div className="animated-features-container" ref={componentRef}>
            <div className="sticky-content" ref={stickyContentRef}>
                <div className="feature-text">
                    <h2 ref={scene1HeadlineRef}>The browser built to be yours</h2>
                    <h2 ref={scene2HeadlineRef}>Extensions</h2>
                    <h2 ref={scene3HeadlineRef}>Take control of your tabs</h2>
                    <h2 ref={scene4HeadlineRef}>Helpful features built-in</h2>
                </div>

                <div className="browser-mockup" ref={browserMockupRef}>
                    <div className="browser-ui">
                        {/* === SCENE 1: COLOR PICKER UI === */}
                        <div className="feature" id="color-picker" ref={colorPickerRef}>
                            <h4 className="feature-title">Customize Chrome</h4>
                            <div className="color-grid">
                                <div className="color-circle" style={{ background: '#f28b82' }}></div>
                                <div className="color-circle" style={{ background: '#fdd663' }}></div>
                                <div className="color-circle" style={{ background: '#81c995' }}></div>
                                <div className="color-circle active" style={{ background: '#8ab4f8' }}></div>
                                <div className="color-circle" style={{ background: '#c58af9' }}></div>
                                <div className="color-circle" style={{ background: '#78d9ec' }}></div>
                            </div>
                            <div className="eyedropper">🎨</div>
                        </div>

                        {/* === SCENE 2: EXTENSIONS UI === */}
                        <div className="feature" id="extensions" ref={extensionsRef}>
                            <h4 className="feature-title">Add your favorite extensions</h4>
                            <div className="extension-item"><span><img src="https://upload.wikimedia.org/wikipedia/commons/d/d7/Google_Translate_logo.svg" alt="Translate"/></span> Google Translate</div>
                            <div className="extension-item"><span><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Google_Arts_%26_Culture_logo.svg/2048px-Google_Arts_%26_Culture_logo.svg.png" alt="Arts & Culture"/></span> Arts & Culture</div>
                            <div className="extension-item"><span>🧩</span> Manage Extensions</div>
                        </div>

                        {/* === SCENE 3: TAB GROUPS UI === */}
                        <div className="feature" id="tab-groups" ref={tabGroupsRef}>
                             <h4 className="feature-title">Group tabs for a clear view</h4>
                            <div className="tab-group-header" style={{ color: '#f28b82' }}>Project Alpha</div>
                            <div className="tab"><span>📄</span> Design Docs</div>
                            <div className="tab"><span>📈</span> User Feedback</div>
                            <div className="tab-group-header" style={{ color: '#81c995' }}>Portfolio</div>
                            <div className="tab"><span>🎨</span> Case Study</div>
                        </div>

                        {/* === SCENE 4: SAFETY CHECK UI === */}
                        <div className="feature" id="safety-check" ref={safetyCheckRef}>
                            <div className="safety-check-icon">🛡️</div>
                            <h4 className="feature-title">Safety Check</h4>
                            <p>Chrome is helping you stay safe from data breaches, bad extensions, and more.</p>
                            <button className="safety-check-button">Check now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AnimatedFeatures;
