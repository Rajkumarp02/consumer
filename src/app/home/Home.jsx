"use client"
import React from 'react'
import SubNav from '../component/SubNav'
import { Banner } from './Banner'
import { Box } from './Box'
import { ProductReview } from './ProductReview'

export default function Home() {
  return (
    <div>
        <SubNav/>
        <Banner/>
        <Box/>
        <ProductReview/>
    </div>
  )
}
