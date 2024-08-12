document.addEventListener("DOMContentLoaded", function() {
    const ukm1 = document.getElementById("ukm1");
    const ukm2 = document.getElementById("ukm2");
    const ukm3 = document.getElementById("ukm3");
    const ukm4 = document.getElementById("ukm4");
    const ukm5 = document.getElementById("ukm5");
    const ukm6 = document.getElementById("ukm6");
    const ukm7 = document.getElementById("ukm7");
    const ukm8 = document.getElementById("ukm8");
    const ukm9 = document.getElementById("ukm9");
    const ukm10 = document.getElementById("ukm10");
    const ukm11 = document.getElementById("ukm11");
    const ukm12 = document.getElementById("ukm12");
    const ukm13 = document.getElementById("ukm13");
    const ukm14 = document.getElementById("ukm14");
    const ukm15 = document.getElementById("ukm15");
    const ukm16 = document.getElementById("ukm16");
    const ukm17 = document.getElementById("ukm17");
    const ukm18 = document.getElementById("ukm18");
    const ukm19 = document.getElementById("ukm19");
    const ukm20 = document.getElementById("ukm20");
    const ukm21 = document.getElementById("ukm21");
    const ukm22 = document.getElementById("ukm22");
    const ukm23 = document.getElementById("ukm23");
    const ukm24 = document.getElementById("ukm24");
    const ukm25 = document.getElementById("ukm25");
    const ukm26 = document.getElementById("ukm26");
    const ukm27 = document.getElementById("ukm27");
    const p1 = document.getElementById("p1");
    const p2 = document.getElementById("p2");
    const p3 = document.getElementById("p3");
    const p4 = document.getElementById("p4");
    const p5 = document.getElementById("p5");
    const p6 = document.getElementById("p6");
    const p7 = document.getElementById("p7");
    const p8 = document.getElementById("p8");
    const p9 = document.getElementById("p9");
    const p10 = document.getElementById("p10");
    const p11 = document.getElementById("p11");
    const p12 = document.getElementById("p12");
    const p13 = document.getElementById("p13");
    const p14 = document.getElementById("p14");
    const p15 = document.getElementById("p15");
    const p16 = document.getElementById("p16");
    const p17 = document.getElementById("p17");
    const p18 = document.getElementById("p18");
    const p19 = document.getElementById("p19");
    const p20 = document.getElementById("p20");
    const p21 = document.getElementById("p21");
    const p22 = document.getElementById("p22");
    const p23 = document.getElementById("p23");
    const p24 = document.getElementById("p24");
    const p25 = document.getElementById("p25");
    const p26 = document.getElementById("p26");
    const p27 = document.getElementById("p27");
    const logo1 = document.getElementById("img1");
    const logo2 = document.getElementById("img2");
    const logo3 = document.getElementById("img3");
    const logo4 = document.getElementById("img4");
    const logo5 = document.getElementById("img5");
    const logo6 = document.getElementById("img6");
    const logo7 = document.getElementById("img7");
    const logo8 = document.getElementById("img8");
    const logo9 = document.getElementById("img9");
    const logo10 = document.getElementById("img10");
    const logo11 = document.getElementById("img11");
    const logo12 = document.getElementById("img12");
    const logo13 = document.getElementById("img13");
    const logo14 = document.getElementById("img14");
    const logo15 = document.getElementById("img15");
    const logo16 = document.getElementById("img16");
    const logo17 = document.getElementById("img17");
    const logo18 = document.getElementById("img18");
    const logo19 = document.getElementById("img19");
    const logo20 = document.getElementById("img20");
    const logo21 = document.getElementById("img21");
    const logo22 = document.getElementById("img22");
    const logo23 = document.getElementById("img23");
    const logo24 = document.getElementById("img24");
    const logo25 = document.getElementById("img25");
    const logo26 = document.getElementById("img26");
    const logo27 = document.getElementById("img27");
    const wa1 = document.getElementById("waUkm1");
    const wa2 = document.getElementById("waUkm2");
    const wa3 = document.getElementById("waUkm3");
    const wa4 = document.getElementById("waUkm4");
    const wa5 = document.getElementById("waUkm5");
    const wa6 = document.getElementById("waUkm6");
    const wa7 = document.getElementById("waUkm7");
    const wa8 = document.getElementById("waUkm8");
    const wa9 = document.getElementById("waUkm9");
    const wa10 = document.getElementById("waUkm10");
    const wa11 = document.getElementById("waUkm11");
    const wa12 = document.getElementById("waUkm12");
    const wa13 = document.getElementById("waUkm13");
    const wa14 = document.getElementById("waUkm14");
    const wa15 = document.getElementById("waUkm15");
    const wa16 = document.getElementById("waUkm16");
    const wa17 = document.getElementById("waUkm17");
    const wa18 = document.getElementById("waUkm18");
    const wa19 = document.getElementById("waUkm19");
    const wa20 = document.getElementById("waUkm20");
    const wa21 = document.getElementById("waUkm21");
    const wa22 = document.getElementById("waUkm22");
    const wa23 = document.getElementById("waUkm23");
    const wa24 = document.getElementById("waUkm24");
    const wa25 = document.getElementById("waUkm25");
    const wa26 = document.getElementById("waUkm26");
    const wa27 = document.getElementById("waUkm27");
    const prev = document.getElementById("prev");
    const next = document.getElementById("next");
    const contentContainer = document.getElementById("contentContainer");
    let currentPosition = 0;

    function moveRightDesktop() {
        if(currentPosition <= 8000){
            currentPosition += 1600; // Adjust the step size
            contentContainer.style.right = `${currentPosition}px`;
            console.log("jalan");
        }
    }
    function moveLeftDesktop() {
        if(currentPosition > 0){
            currentPosition -= 1600; // Adjust the step size
            contentContainer.style.right = `${currentPosition}px`;
            console.log("salah");
        }
    }

    function moveRightLaptop() {
        if(currentPosition <= 6000){
            currentPosition += 1200; // Adjust the step size
            contentContainer.style.right = `${currentPosition}px`;
            console.log("jalan");
        }
    }
    function moveLeftLaptop() {
        if(currentPosition > 0){
            currentPosition -= 1200; // Adjust the step size
            contentContainer.style.right = `${currentPosition}px`;
            console.log("jalan");
        }
    }

    function moveRightTablet() {
        if(currentPosition <= 4150){
            currentPosition += 830; // Adjust the step size
            contentContainer.style.right = `${currentPosition}px`;
            console.log("tablet");
        }
    }
    function moveLeftTablet() {
        if(currentPosition > 0){
            currentPosition -= 830; // Adjust the step size
            contentContainer.style.right = `${currentPosition}px`;
            console.log("jalan");
        }
    }
    function moveRightMobile() {
        if(currentPosition <= 3000){
            currentPosition += 520; // Adjust the step size
            contentContainer.style.right = `${currentPosition}px`;
            console.log("jalan");
        }
    }
    function moveLeftMobile() {
        if(currentPosition > 0){
            currentPosition -= 520; // Adjust the step size
            contentContainer.style.right = `${currentPosition}px`;
            console.log("jalan");
        }
    }


    function cursorIn(ukm1, ukm2, p, wa, logo){
        ukm1.style.width = "700px";
        ukm2.style.width = "260px";
        p.style.opacity = "1";
        p.style.transitionDelay = "400ms";
        p.style.transitionDuration = "500ms";
        wa.style.opacity = "1";
        wa.style.transitionDelay = "400ms";
        wa.style.transitionDuration = "500ms";
        logo.style.opacity = "1";
        logo.style.transitionDelay = "400ms";
        logo.style.transitionDuration = "500ms";
    }

    function cursorOut(ukm1, ukm2, p, wa, logo){
        ukm1.style.width = "480px";
        ukm2.style.width = "480px";
        p.style.opacity = "0";
        p.style.transitionDuration = "0ms";
        p.style.transitionDelay = "0ms";
        wa.style.opacity = "0";
        wa.style.transitionDelay = "0ms";
        wa.style.transitionDuration = "0ms";
        logo.style.opacity = "0";
        logo.style.transitionDelay = "0ms";
        logo.style.transitionDuration = "0ms";
    }

    function cursorIn2(ukm1, ukm2, p, wa, logo){
        ukm1.style.width = "580px";
        ukm2.style.width = "140px";
        p.style.opacity = "1";
        p.style.transitionDelay = "400ms";
        p.style.transitionDuration = "500ms";
        wa.style.opacity = "1";
        wa.style.transitionDelay = "400ms";
        wa.style.transitionDuration = "500ms";
        logo.style.opacity = "1";
        logo.style.transitionDelay = "400ms";
        logo.style.transitionDuration = "500ms";
    }

    function cursorOut2(ukm1, ukm2, p, wa, logo){
        ukm1.style.width = "360px";
        ukm2.style.width = "360px";
        p.style.opacity = "0";
        p.style.transitionDuration = "0ms";
        p.style.transitionDelay = "0ms";
        wa.style.opacity = "0";
        wa.style.transitionDelay = "0ms";
        wa.style.transitionDuration = "0ms";
        logo.style.opacity = "0";
        logo.style.transitionDelay = "0ms";
        logo.style.transitionDuration = "0ms";
    }
    

    function checkScreenSize(ukm1, ukm2, p, wa, logo) {
        if (window.screen.width < 1024) {
            ukm1.removeEventListener("mouseenter", cursorIn);
            ukm1.removeEventListener("mouseleave", cursorOut);
            // mobile display
            // ukm1.classList.add("detail-visible");
            // ukm1.style.width = "100%";
            // ukm1.style.height = "auto";
            // p.style.opacity = "1";
            // wa.style.opacity = "1";
            // logo.style.opacity = "1";
        } else if(window.screen.width >= 1024 && window.screen.width < 1440){
            ukm1.addEventListener("mouseenter", function() {
                cursorIn2(ukm1, ukm2, p, wa, logo);
            });
            ukm1.addEventListener("mouseleave", function() {
                cursorOut2(ukm1, ukm2, p, wa, logo);
            });
            // desktop display
            // ukm1.classList.remove("detail-visible");
            // ukm1.style.width = "";
            // ukm1.style.height = "";
            // p.style.opacity = "0";
            // wa.style.opacity = "0";
            // logo.style.opacity = "0";

        }
        else {
            ukm1.addEventListener("mouseenter", function() {
                cursorIn(ukm1, ukm2, p, wa, logo);
            });
            ukm1.addEventListener("mouseleave", function() {
                cursorOut(ukm1, ukm2, p, wa, logo);
            });
        }
    }

    window.addEventListener("resize", function() {
        checkScreenSize(ukm1, ukm2, p1, wa1, logo1);
        checkScreenSize(ukm2, ukm1, p2, wa2, logo2);
        checkScreenSize(ukm3, ukm4, p3, wa3, logo3);
        checkScreenSize(ukm4, ukm3, p4, wa4, logo4);
        checkScreenSize(ukm5, ukm6, p5, wa5, logo5);
        checkScreenSize(ukm6, ukm5, p6, wa6, logo6);
        checkScreenSize(ukm7, ukm8, p7, wa7, logo7);
        checkScreenSize(ukm8, ukm7, p8, wa8, logo8);
        checkScreenSize(ukm9, ukm10, p9, wa9, logo9);
        checkScreenSize(ukm10, ukm9, p10, wa10, logo10);
        checkScreenSize(ukm11, ukm12, p11, wa11, logo11);
        checkScreenSize(ukm12, ukm11, p12, wa12, logo12);
        checkScreenSize(ukm13, ukm14, p13, wa13, logo13);
        checkScreenSize(ukm14, ukm13, p14, wa14, logo14);
        checkScreenSize(ukm15, ukm16, p15, wa15, logo15);
        checkScreenSize(ukm16, ukm15, p16, wa16, logo16);
        checkScreenSize(ukm17, ukm18, p17, wa17, logo17);
        checkScreenSize(ukm18, ukm17, p18, wa18, logo18);
        checkScreenSize(ukm19, ukm20, p19, wa19, logo19);
        checkScreenSize(ukm20, ukm19, p20, wa20, logo20);
        checkScreenSize(ukm21, ukm22, p21, wa21, logo21);
        checkScreenSize(ukm22, ukm21, p22, wa22, logo22);
        checkScreenSize(ukm23, ukm24, p23, wa23, logo23);
        checkScreenSize(ukm24, ukm23, p24, wa24, logo24);
        checkScreenSize(ukm25, ukm26, p25, wa25, logo25);
        checkScreenSize(ukm26, ukm25, p26, wa26, logo26);

        if (window.screen.width < 1024) {
            ukm27.removeEventListener("mouseover", cursorIn);
            ukm27.removeEventListener("mouseout", cursorOut);

        } else if(window.screen.width < 1440){
            ukm27.addEventListener("mouseenter", function() {
                ukm27.style.width = "580px";
                p27.style.opacity = "1";
                p27.style.transitionDelay = "400ms";
                p27.style.transitionDuration = "500ms";
                wa27.style.opacity = "1";
                wa27.style.transitionDelay = "400ms";
                wa27.style.transitionDuration = "500ms";
                logo27.style.opacity = "1";
                logo27.style.transitionDelay = "400ms";
                logo27.style.transitionDuration = "500ms";
            });

            ukm27.addEventListener("mouseleave", function() {
                ukm27.style.width = "360px";
                p27.style.opacity = "0";
                p27.style.transitionDuration = "0ms";
                p27.style.transitionDelay = "0ms";
                wa27.style.opacity = "0";
                wa27.style.transitionDelay = "0ms";
                wa27.style.transitionDuration = "0ms";
                logo27.style.opacity = "0";
                logo27.style.transitionDelay = "0ms";
                logo27.style.transitionDuration = "0ms";
            });

        }else{
            ukm27.addEventListener("mouseover", function() {
                ukm27.style.width = "700px";
                p27.style.opacity = "1";
                p27.style.transitionDelay = "400ms";
                p27.style.transitionDuration = "500ms";
                wa27.style.opacity = "1";
                wa27.style.transitionDelay = "400ms";
                wa27.style.transitionDuration = "500ms";
                logo27.style.opacity = "1";
                logo27.style.transitionDelay = "400ms";
                logo27.style.transitionDuration = "500ms";
            });
            ukm27.addEventListener("mouseout", function() {
                ukm27.style.width = "480px";
                p27.style.opacity = "0";
                p27.style.transitionDuration = "0ms";
                p27.style.transitionDelay = "0ms";
                wa27.style.opacity = "0";
                wa27.style.transitionDelay = "0ms";
                wa27.style.transitionDuration = "0ms";
                logo27.style.opacity = "0";
                logo27.style.transitionDelay = "0ms";
                logo27.style.transitionDuration = "0ms";
            });
        };
    });
    window.addEventListener("load", function() {
        checkScreenSize(ukm1, ukm2, p1, wa1, logo1);
        checkScreenSize(ukm2, ukm1, p2, wa2, logo2);
        checkScreenSize(ukm3, ukm4, p3, wa3, logo3);
        checkScreenSize(ukm4, ukm3, p4, wa4, logo4);
        checkScreenSize(ukm5, ukm6, p5, wa5, logo5);
        checkScreenSize(ukm6, ukm5, p6, wa6, logo6);
        checkScreenSize(ukm7, ukm8, p7, wa7, logo7);
        checkScreenSize(ukm8, ukm7, p8, wa8, logo8);
        checkScreenSize(ukm9, ukm10, p9, wa9, logo9);
        checkScreenSize(ukm10, ukm9, p10, wa10, logo10);
        checkScreenSize(ukm11, ukm12, p11, wa11, logo11);
        checkScreenSize(ukm12, ukm11, p12, wa12, logo12);
        checkScreenSize(ukm13, ukm14, p13, wa13, logo13);
        checkScreenSize(ukm14, ukm13, p14, wa14, logo14);
        checkScreenSize(ukm15, ukm16, p15, wa15, logo15);
        checkScreenSize(ukm16, ukm15, p16, wa16, logo16);
        checkScreenSize(ukm17, ukm18, p17, wa17, logo17);
        checkScreenSize(ukm18, ukm17, p18, wa18, logo18);
        checkScreenSize(ukm19, ukm20, p19, wa19, logo19);
        checkScreenSize(ukm20, ukm19, p20, wa20, logo20);
        checkScreenSize(ukm21, ukm22, p21, wa21, logo21);
        checkScreenSize(ukm22, ukm21, p22, wa22, logo22);
        checkScreenSize(ukm23, ukm24, p23, wa23, logo23);
        checkScreenSize(ukm24, ukm23, p24, wa24, logo24);
        checkScreenSize(ukm25, ukm26, p25, wa25, logo25);
        checkScreenSize(ukm26, ukm25, p26, wa26, logo26);

        if (window.screen.width < 1024) {
            ukm27.removeEventListener("mouseover", cursorIn);
            ukm27.removeEventListener("mouseout", cursorOut);

        } else if(window.screen.width < 1440){
            ukm27.addEventListener("mouseenter", function() {
                ukm27.style.width = "580px";
                p27.style.opacity = "1";
                p27.style.transitionDelay = "400ms";
                p27.style.transitionDuration = "500ms";
                wa27.style.opacity = "1";
                wa27.style.transitionDelay = "400ms";
                wa27.style.transitionDuration = "500ms";
                logo27.style.opacity = "1";
                logo27.style.transitionDelay = "400ms";
                logo27.style.transitionDuration = "500ms";
            });

            ukm27.addEventListener("mouseleave", function() {
                ukm27.style.width = "360px";
                p27.style.opacity = "0";
                p27.style.transitionDuration = "0ms";
                p27.style.transitionDelay = "0ms";
                wa27.style.opacity = "0";
                wa27.style.transitionDelay = "0ms";
                wa27.style.transitionDuration = "0ms";
                logo27.style.opacity = "0";
                logo27.style.transitionDelay = "0ms";
                logo27.style.transitionDuration = "0ms";
            });

        }else{
            ukm27.addEventListener("mouseover", function() {
                ukm27.style.width = "700px";
                p27.style.opacity = "1";
                p27.style.transitionDelay = "400ms";
                p27.style.transitionDuration = "500ms";
                wa27.style.opacity = "1";
                wa27.style.transitionDelay = "400ms";
                wa27.style.transitionDuration = "500ms";
                logo27.style.opacity = "1";
                logo27.style.transitionDelay = "400ms";
                logo27.style.transitionDuration = "500ms";
            });
            ukm27.addEventListener("mouseout", function() {
                ukm27.style.width = "480px";
                p27.style.opacity = "0";
                p27.style.transitionDuration = "0ms";
                p27.style.transitionDelay = "0ms";
                wa27.style.opacity = "0";
                wa27.style.transitionDelay = "0ms";
                wa27.style.transitionDuration = "0ms";
                logo27.style.opacity = "0";
                logo27.style.transitionDelay = "0ms";
                logo27.style.transitionDuration = "0ms";
            });
        };
    });

    prev.addEventListener("click", function(){
        if(window.screen.width < 768){
            moveLeftMobile();
        }
        else if(window.screen.width < 1024){
            moveLeftTablet();
        }
        else if(window.screen.width < 1440){
            moveLeftLaptop();
        }
        else{
            moveLeftDesktop();
        }
            
    });
    next.addEventListener("click", function(){
        if(window.screen.width < 768){
            moveRightMobile();
        }
        else if(window.screen.width < 1024){
            moveRightTablet();
        }
        else if(window.screen.width < 1440){
            moveRightLaptop();
        }
        else{
            moveRightDesktop();
        }
            
    });

    // ukm1.addEventListener("mouseover", function() {
    //     const logo = document.getElementById("img1");
    //     const wa = document.getElementById("waUkm1");
    //     checkScreenSize(ukm1, ukm2, p1, wa, logo);
    // });
    // ukm1.addEventListener("mouseover", function() {
    //     const logo = document.getElementById("img1");
    //     const wa = document.getElementById("waUkm1");
    //     cursorIn(ukm1, ukm2, p1, wa, logo);
    // });

    // ukm1.addEventListener("mouseout", function() {
    //     const logo = document.getElementById("img1");
    //     const wa = document.getElementById("waUkm1");
    //     cursorOut(ukm1, ukm2, p1, wa, logo);
    // });

    // ukm2.addEventListener("mouseover", function() {
    //     const logo = document.getElementById("img2");
    //     const wa = document.getElementById("waUkm2");
    //     cursorIn(ukm2, ukm1, p2, wa, logo);
    // });

    // ukm2.addEventListener("mouseout", function() {
    //     const logo = document.getElementById("img2");
    //     const wa = document.getElementById("waUkm2");
    //     cursorOut(ukm2, ukm1, p2, wa, logo);
    // });

    // ukm3.addEventListener("mouseover", function() {
    //     const logo = document.getElementById("img3");
    //     const wa = document.getElementById("waUkm3");
    //    cursorIn(ukm3, ukm4, p3, wa, logo);
    // });

    // ukm3.addEventListener("mouseout", function() {
    //     const logo = document.getElementById("img3");
    //     const wa = document.getElementById("waUkm3");
    //     cursorOut(ukm3, ukm4, p3, wa, logo);
    // });

    // ukm4.addEventListener("mouseover", function() {
    //     const logo = document.getElementById("img4");
    //     const wa = document.getElementById("waUkm4");
    //     cursorIn(ukm4, ukm3, p4, wa, logo);
    // });

    // ukm4.addEventListener("mouseout", function() {
    //     const logo = document.getElementById("img4");
    //     const wa = document.getElementById("waUkm4");
    //     cursorOut(ukm4, ukm3, p4, wa, logo);
    // });

    // ukm5.addEventListener("mouseover", function() {
    //     const logo = document.getElementById("img5");
    //     const wa = document.getElementById("waUkm5");
    //     cursorIn(ukm5, ukm6, p5, wa, logo);
    // });

    // ukm5.addEventListener("mouseout", function() {
    //     const logo = document.getElementById("img5");
    //     const wa = document.getElementById("waUkm5");
    //     cursorOut(ukm5, ukm6, p5, wa, logo);
    // });

    // ukm6.addEventListener("mouseover", function() {
    //     const logo = document.getElementById("img6");
    //     const wa = document.getElementById("waUkm6");
    //     cursorIn(ukm6, ukm5, p6, wa, logo);
    // });

    // ukm6.addEventListener("mouseout", function() {
    //     const logo = document.getElementById("img6");
    //     const wa = document.getElementById("waUkm6");
    //     cursorOut(ukm6, ukm5, p6, wa, logo);
    // });

    // ukm7.addEventListener("mouseover", function() {
    //     const logo = document.getElementById("img7");
    //     const wa = document.getElementById("waUkm7");
    //     cursorIn(ukm7, ukm8, p7, wa, logo);
    // });

    // ukm7.addEventListener("mouseout", function() {
    //     const logo = document.getElementById("img7");
    //     const wa = document.getElementById("waUkm7");
    //     cursorOut(ukm7, ukm8, p7, wa, logo);
    // });

    // ukm8.addEventListener("mouseover", function() {
    //     const logo = document.getElementById("img8");
    //     const wa = document.getElementById("waUkm8");
    //     cursorIn(ukm8, ukm7 ,p8, wa, logo);
    // });

    // ukm8.addEventListener("mouseout", function() {
    //     const logo = document.getElementById("img8");
    //     const wa = document.getElementById("waUkm8");
    //     cursorOut(ukm8, ukm7, p8, wa, logo);
    // });

    // ukm9.addEventListener("mouseover", function() {
    //     const logo = document.getElementById("img9");
    //     const wa = document.getElementById("waUkm9");
    //     cursorIn(ukm9, ukm10, p9, wa, logo);
    // });

    // ukm9.addEventListener("mouseout", function() {
    //     const logo = document.getElementById("img9");
    //     const wa = document.getElementById("waUkm9");
    //     cursorOut(ukm9, ukm10, p9, wa, logo);
    // });

    // ukm10.addEventListener("mouseover", function() {
    //     const logo = document.getElementById("img10");
    //     const wa = document.getElementById("waUkm10");
    //     cursorIn(ukm10, ukm9, p10, wa, logo);
    // });

    // ukm10.addEventListener("mouseout", function() {
    //     const logo = document.getElementById("img10");
    //     const wa = document.getElementById("waUkm10");
    //     cursorOut(ukm10, ukm9, p10, wa, logo);
    // });

    // ukm11.addEventListener("mouseover", function() {
    //     const logo = document.getElementById("img11");
    //     const wa = document.getElementById("waUkm11");
    //     cursorIn(ukm11, ukm12, p11, wa, logo);
    // });

    // ukm11.addEventListener("mouseout", function() {
    //     const logo = document.getElementById("img11");
    //     const wa = document.getElementById("waUkm11");
    //     cursorOut(ukm11, ukm12, p11, wa, logo);
    // });

    // ukm12.addEventListener("mouseover", function() {
    //     const logo = document.getElementById("img12");
    //     const wa = document.getElementById("waUkm12");
    //     cursorIn(ukm12, ukm11, p12, wa, logo);
    // });

    // ukm12.addEventListener("mouseout", function() {
    //     const logo = document.getElementById("img12");
    //     const wa = document.getElementById("waUkm12");
    //     cursorOut(ukm12, ukm11, p12, wa, logo);
    // });

    // ukm13.addEventListener("mouseover", function() {
    //     const logo = document.getElementById("img13");
    //     const wa = document.getElementById("waUkm13");
    //     cursorIn(ukm13,ukm14, p13, wa, logo);
    // });

    // ukm13.addEventListener("mouseout", function() {
    //     const logo = document.getElementById("img13");
    //     const wa = document.getElementById("waUkm13");
    //     cursorOut(ukm13,ukm14, p13, wa, logo);
    // });

    // ukm14.addEventListener("mouseover", function() {
    //     const logo = document.getElementById("img14");
    //     const wa = document.getElementById("waUkm14");
    //     cursorIn(ukm14, ukm13, p14, wa, logo);
    // });

    // ukm14.addEventListener("mouseout", function() {
    //     const logo = document.getElementById("img14");
    //     const wa = document.getElementById("waUkm14");
    //     cursorOut(ukm14, ukm13, p14, wa, logo);
    // });

    // ukm15.addEventListener("mouseover", function() {
    //     const logo = document.getElementById("img15");
    //     const wa = document.getElementById("waUkm15");
    //    cursorIn(ukm15, ukm16, p15, wa, logo);
    // });

    // ukm15.addEventListener("mouseout", function() {
    //     const logo = document.getElementById("img15");
    //     const wa = document.getElementById("waUkm15");
    //     cursorOut(ukm15, ukm16, p15, wa, logo);
    // });

    // ukm16.addEventListener("mouseover", function() {
    //     const logo = document.getElementById("img16");
    //     const wa = document.getElementById("waUkm16");
    //     cursorIn(ukm16, ukm15, p16, wa, logo);
    // });

    // ukm16.addEventListener("mouseout", function() {
    //     const logo = document.getElementById("img16");
    //     const wa = document.getElementById("waUkm16");
    //     cursorOut(ukm16, ukm15, p16, wa, logo);
    // });

    // ukm17.addEventListener("mouseover", function() {
    //     const logo = document.getElementById("img17");
    //     const wa = document.getElementById("waUkm17");
    //     cursorIn(ukm17, ukm18, p17, wa, logo);
    // });

    // ukm17.addEventListener("mouseout", function() {
    //     const logo = document.getElementById("img17");
    //     const wa = document.getElementById("waUkm17");
    //     cursorOut(ukm17, ukm18, p17, wa, logo);
    // });

    // ukm18.addEventListener("mouseover", function() {
    //     const logo = document.getElementById("img18");
    //     const wa = document.getElementById("waUkm18");
    //     cursorIn(ukm18, ukm17, p18, wa, logo);
    // });

    // ukm18.addEventListener("mouseout", function() {
    //     const logo = document.getElementById("img18");
    //     const wa = document.getElementById("waUkm18");
    //     cursorOut(ukm18, ukm17, p18, wa, logo);
    // });

    // ukm19.addEventListener("mouseover", function() {
    //     const logo = document.getElementById("img19");
    //     const wa = document.getElementById("waUkm19");
    //     cursorIn(ukm19, ukm20, p19, wa, logo);
    // });

    // ukm19.addEventListener("mouseout", function() {
    //     const logo = document.getElementById("img19");
    //     const wa = document.getElementById("waUkm19");
    //     cursorOut(ukm19, ukm20, p19, wa, logo);
    // });

    // ukm20.addEventListener("mouseover", function() {
    //     const logo = document.getElementById("img20");
    //     const wa = document.getElementById("waUkm20");
    //     cursorIn(ukm20, ukm19 ,p20, wa, logo);
    // });

    // ukm20.addEventListener("mouseout", function() {
    //     const logo = document.getElementById("img20");
    //     const wa = document.getElementById("waUkm20");
    //     cursorOut(ukm20, ukm19, p20, wa, logo);
    // });

    // ukm21.addEventListener("mouseover", function() {
    //     const logo = document.getElementById("img21");
    //     const wa = document.getElementById("waUkm21");
    //     cursorIn(ukm21, ukm22, p21, wa, logo);
    // });

    // ukm21.addEventListener("mouseout", function() {
    //     const logo = document.getElementById("img21");
    //     const wa = document.getElementById("waUkm21");
    //     cursorOut(ukm21, ukm22, p21, wa, logo);
    // });

    // ukm22.addEventListener("mouseover", function() {
    //     const logo = document.getElementById("img22");
    //     const wa = document.getElementById("waUkm22");
    //     cursorIn(ukm22, ukm21, p22, wa, logo);
    // });

    // ukm22.addEventListener("mouseout", function() {
    //     const logo = document.getElementById("img22");
    //     const wa = document.getElementById("waUkm22");
    //     cursorOut(ukm22, ukm21, p22, wa, logo);
    // });

    // ukm23.addEventListener("mouseover", function() {
    //     const logo = document.getElementById("img23");
    //     const wa = document.getElementById("waUkm23");
    //     cursorIn(ukm23, ukm24, p23, wa, logo);
    // });

    // ukm23.addEventListener("mouseout", function() {
    //     const logo = document.getElementById("img23");
    //     const wa = document.getElementById("waUkm23");
    //     cursorOut(ukm23, ukm24, p23, wa, logo);
    // });

    // ukm24.addEventListener("mouseover", function() {
    //     const logo = document.getElementById("img24");
    //     const wa = document.getElementById("waUkm24");
    //     cursorIn(ukm24, ukm23, p24, wa, logo);
    // });

    // ukm24.addEventListener("mouseout", function() {
    //     const logo = document.getElementById("img24");
    //     const wa = document.getElementById("waUkm24");
    //     cursorOut(ukm24, ukm23, p24, wa, logo);
    // });

    // ukm25.addEventListener("mouseover", function() {
    //     const logo = document.getElementById("img25");
    //     const wa = document.getElementById("waUkm25");
    //     cursorIn(ukm25, ukm26, p25, wa, logo);
    // });

    // ukm25.addEventListener("mouseout", function() {
    //     const logo = document.getElementById("img25");
    //     const wa = document.getElementById("waUkm25");
    //     cursorOut(ukm25, ukm26, p25, wa, logo);
    // });

    // ukm26.addEventListener("mouseover", function() {
    //     const logo = document.getElementById("img26");
    //     const wa = document.getElementById("waUkm26");
    //     cursorIn(ukm26, ukm25, p26, wa, logo);
    // });

    // ukm26.addEventListener("mouseout", function() {
    //     const logo = document.getElementById("img26");
    //     const wa = document.getElementById("waUkm26");
    //     cursorOut(ukm26, ukm25, p26, wa, logo);
    // });

    // ukm27.addEventListener("mouseover", function() {
    //     const logo = document.getElementById("img27");
    //     const wa = document.getElementById("waUkm27");
    //     ukm27.style.width = "70%";
    //     p27.style.opacity = "1";
    //     p27.style.transitionDelay = "400ms";
    //     p27.style.transitionDuration = "500ms";
    //     wa.style.opacity = "1";
    //     wa.style.transitionDelay = "400ms";
    //     wa.style.transitionDuration = "500ms";
    //     logo.style.opacity = "1";
    //     logo.style.transitionDelay = "400ms";
    //     logo.style.transitionDuration = "500ms";
    // });

    // ukm27.addEventListener("mouseout", function() {
    //     const logo = document.getElementById("img27");
    //     const wa = document.getElementById("waUkm27");
    //     ukm27.style.width = "48%";
    //     p27.style.opacity = "0";
    //     p27.style.transitionDuration = "0ms";
    //     p27.style.transitionDelay = "0ms";
    //     wa.style.opacity = "0";
    //     wa.style.transitionDelay = "0ms";
    //     wa.style.transitionDuration = "0ms";
    //     logo.style.opacity = "0";
    //     logo.style.transitionDelay = "0ms";
    //     logo.style.transitionDuration = "0ms";
    // });
});