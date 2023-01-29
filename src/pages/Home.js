import React from 'react'
import '../styles/Home.css'
import Navbar from '../components/Navbar'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

export default function Home() {
    return (
        <div>
            <Parallax pages={2} style={{ top: '0', left: '0' }} class="animation">
                <ParallaxLayer offset={0} style={{ zIndex: "20" }}>
                    <Navbar />
                </ParallaxLayer>
                <ParallaxLayer offset={0} speed={0.25}>
                    <div class="animation_layer parallax" id="artback"></div>
                </ParallaxLayer>
                <ParallaxLayer offset={0} speed={0.3}>
                    <div class="animation_layer parallax" id="mountain"></div>
                </ParallaxLayer>
                <ParallaxLayer offset={0} speed={-0.1}>
                    <div class="animation_layer parallax" id="Text"></div>
                </ParallaxLayer>
                <ParallaxLayer offset={0} speed={0.3}>
                    <div class="animation_layer parallax" id="jungle1"></div>
                </ParallaxLayer>
                <ParallaxLayer offset={0} speed={0.35}>
                    <div class="animation_layer parallax" id="jungle2"></div>
                </ParallaxLayer>
                <ParallaxLayer offset={0} speed={0.5}>
                    <div class="animation_layer parallax" id="jungle3"></div>
                </ParallaxLayer>
                <ParallaxLayer offset={0} speed={0.45}>
                    <div class="animation_layer parallax" id="jungle4"></div>
                </ParallaxLayer>
                <ParallaxLayer offset={0} speed={0.40}>
                    <div class="animation_layer parallax" id="manonmountain"></div>
                </ParallaxLayer>
                <ParallaxLayer offset={0} speed={0.35}>
                    <div class="animation_layer parallax" id="jungle5"></div>
                </ParallaxLayer>
                <ParallaxLayer offset={1} speed={0.25}>
                    <section className='sec'>
                        <div className='ContainerBox'>
                            <p className='uptxt'>Hi</p>
                            <div className='splitText'>
                                <p className='Im'>I am</p>
                                <p className='myname'>Anmol Srivastava</p>
                            </div>

                            <p className='dev'>I am a Web Developer</p>
                        </div>
                    </section>
                </ParallaxLayer>
            </Parallax>
        </div>
    )
}
