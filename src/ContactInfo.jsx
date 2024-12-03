import React, { useEffect, useRef } from 'react';
import Form from './Components/Form';
import Glide from './Animations/Glide';
import GlideY from './Animations/GlideY';

const ContactInfo = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        let canvas = canvasRef.current;
        let ctx = canvas.getContext('2d');
        let w, h, moon;
        const stars = [];
        const meteors = [];

        function resizeReset() {
            w = canvas.width = window.innerWidth;
            h = canvas.height = window.innerHeight;
        }

        function init() {
            resizeReset();
            moon = new Moon();
            for (let a = 0; a < w * h * 0.0001; a++) {
                stars.push(new Star());
            }
            for (let b = 0; b < 4; b++) {
                meteors.push(new Meteor());
            }
            animationLoop();
        }

        function animationLoop() {
            ctx.clearRect(0, 0, w, h);
            drawScene();
            requestAnimationFrame(animationLoop);
        }

        function drawScene() {
            moon.draw();
            stars.forEach((star) => {
                star.update();
                star.draw();
            });
            meteors.forEach((meteor) => {
                meteor.update();
                meteor.draw();
            });
        }

        class Moon {
            constructor() {
                this.x = 250;
                this.y = 250;
                this.size = 80;
            }
            draw() {
                ctx.save();
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.shadowColor = 'rgba(254, 247, 144, .7)';
                ctx.shadowBlur = 70;
                ctx.fillStyle = 'rgba(254, 247, 144, 1)';
                ctx.fill();
                ctx.closePath();
                ctx.restore();
            }
        }

        class Star {
            constructor() {
                this.x = Math.random() * w;
                this.y = Math.random() * h;
                this.size = Math.random() + 0.5;
                this.blinkChance = 0.005;
                this.alpha = 1;
                this.alphaChange = 0;
            }
            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255, 255, 255, ${this.alpha})`;
                ctx.fill();
                ctx.closePath();
            }
            update() {
                if (
                    this.alphaChange === 0 &&
                    Math.random() < this.blinkChance
                ) {
                    this.alphaChange = -1;
                } else if (this.alphaChange !== 0) {
                    this.alpha += this.alphaChange * 0.05;
                    if (this.alpha <= 0) {
                        this.alphaChange = 1;
                    } else if (this.alpha >= 1) {
                        this.alphaChange = 0;
                    }
                }
            }
        }

        class Meteor {
            constructor() {
                this.reset();
            }
            reset() {
                this.x = Math.random() * w + 300;
                this.y = -100;
                this.size = Math.random() * 2 + 0.5;
                this.speed = (Math.random() + 0.5) * 8;
            }
            draw() {
                ctx.save();
                ctx.strokeStyle = 'rgba(255, 255, 255, .1)';
                ctx.lineCap = 'round';
                ctx.shadowColor = 'rgba(255, 255, 255, 1)';
                ctx.shadowBlur = 10;
                for (let i = 0; i < 10; i++) {
                    ctx.beginPath();
                    ctx.moveTo(this.x, this.y);
                    ctx.lineWidth = this.size;
                    ctx.lineTo(this.x + 10 * (i + 1), this.y - 10 * (i + 1));
                    ctx.stroke();
                    ctx.closePath();
                }
                ctx.restore();
            }
            update() {
                this.x -= this.speed;
                this.y += this.speed;
                if (this.y >= h + 100) {
                    this.reset();
                }
            }
        }

        window.addEventListener('resize', resizeReset);
        init();

        return () => {
            window.removeEventListener('resize', resizeReset);
        };
    }, []);
    const mobile = window.innerWidth <= 1024;
    return (
        <div className="contact-me" id="contact">
            <canvas
                ref={canvasRef}
                className="absolute w-full h-full top-0 left-0 z-0"
            ></canvas>
            <div className="relative z-10 text-center text-white">
                <Glide
                    visible={mobile ? 0 : 0.5}
                    transitionDistance={mobile ? -100 : 100}
                >
                    <h1 className="text-9xl font-black">LET'S TALK</h1>
                </Glide>

                <Glide
                    delay={0.4}
                    visible={mobile ? 0 : 0.5}
                    transitionDistance={mobile ? -100 : 100}
                >
                    <p className="py-10 text-xl">
                        Have a proposal, suggestion, want to work together on
                        something?
                    </p>
                </Glide>
                <div className="flex flex-row justify-between w-[685px] mx-auto mb-10">
                    <div className="w-[380px] max-w-[90%] border-blue-50 rounded-lg border-2 p-10">
                        <Form />
                    </div>
                    <div className="text-left">
                        <Glide
                            transitionDistance={mobile ? -100 : 100}
                            visible={mobile ? 0 : 0.5}
                        >
                            <h1 className="text-3xl font-semibold py-2">
                                My Profiles
                            </h1>
                        </Glide>

                        <ul>
                            <Glide
                                transitionDistance={mobile ? -100 : 100}
                                visible={mobile ? 0 : 0.5}
                            >
                                <li className="p-3 font-black text-lg">
                                    <a
                                        href="https://github.com/chiragJoshi24"
                                        target="_blank"
                                        className="p-3"
                                    >
                                        GITHUB
                                    </a>
                                </li>
                            </Glide>
                            <Glide
                                transitionDistance={mobile ? -100 : 100}
                                visible={mobile ? 0 : 0.5}
                            >
                                <li className="p-3 font-black text-lg">
                                    <a
                                        href="https://www.linkedin.com/in/chirag-joshi-67b464216/"
                                        target="_blank"
                                        className="p-3"
                                    >
                                        LINKEDIN
                                    </a>
                                </li>
                            </Glide>
                            <Glide
                                transitionDistance={mobile ? -100 : 100}
                                visible={mobile ? 0 : 0.5}
                            >
                                <li className="p-3 font-black text-lg">
                                    <a
                                        href="https://hashnode.com/@chiragj2403"
                                        target="_blank"
                                        className="p-3"
                                    >
                                        HASHNODE
                                    </a>
                                </li>
                            </Glide>
                            <Glide
                                transitionDistance={mobile ? -100 : 100}
                                visible={mobile ? 0 : 0.5}
                            >
                                <li className="p-3 font-black text-lg">
                                    <a
                                        href="https://leetcode.com/u/chirag45610/"
                                        target="_blank"
                                        className="p-3"
                                    >
                                        LEETCODE
                                    </a>
                                </li>
                            </Glide>
                            <Glide
                                transitionDistance={mobile ? -100 : 100}
                                visible={mobile ? 0 : 0.5}
                            >
                                <li className="p-3 font-black text-lg">
                                    <a
                                        href="https://x.com/ChiragJ72010984"
                                        target="_blank"
                                        className="p-3"
                                    >
                                        TWITTER
                                    </a>
                                </li>
                            </Glide>
                            <Glide
                                transitionDistance={mobile ? -100 : 100}
                                visible={mobile ? 0 : 0.5}
                            >
                                <li className="p-3 font-black text-lg ">
                                    <a
                                        href="mailto:chirag45610@gmail.com"
                                        target="_blank"
                                        className="p-3"
                                    >
                                        SEND ME AN EMAIL
                                    </a>
                                </li>
                            </Glide>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-12 flex justify-between w-full font-bold">
                <div className="ml-16">
                    <GlideY>COPYRIGHT 2024</GlideY>
                </div>
                <div className="mr-16">
                    <GlideY>DESIGNED AND CREATED BY CHIRAG JOSHI</GlideY>
                </div>
            </div>
        </div>
    );
};

export default ContactInfo;
