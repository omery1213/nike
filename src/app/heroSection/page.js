"use client"
import React from 'react'
import Section1 from '../components/heroSectionComponent/section1'
import Section2 from '../components/heroSectionComponent/section2'
import Section4 from '../components/heroSectionComponent/section4'

import SlidingSec4 from '../components/heroSectionComponent/slidingSec4'
import Slide from '../components/heroSectionComponent/mainSlider/swipi'
import FallSLide from '../components/heroSectionComponent/FallStyle/fallSlide'

function HeroMain() {
    return (
        <>
            <Section1 />
            <Section2 />
            <Slide />
            <Section4 />
            <SlidingSec4 />

            <FallSLide />

        </>
    )
}

export default HeroMain