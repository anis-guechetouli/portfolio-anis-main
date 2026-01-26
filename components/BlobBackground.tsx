'use client'

import { motion } from 'framer-motion'

export default function BlobBackground() {
  const blobs = [
    {
      size: 500,
      x: '10%',
      y: '20%',
      delay: 0,
    },
    {
      size: 400,
      x: '80%',
      y: '60%',
      delay: 0.2,
    },
    {
      size: 350,
      x: '50%',
      y: '80%',
      delay: 0.4,
    },
    {
      size: 300,
      x: '20%',
      y: '70%',
      delay: 0.6,
    },
    {
      size: 450,
      x: '70%',
      y: '10%',
      delay: 0.8,
    },
  ]

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {blobs.map((blob, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full opacity-[0.08] blur-3xl"
          style={{
            width: blob.size,
            height: blob.size,
            background: 'radial-gradient(circle, #4CC9F0 0%, transparent 70%)',
            left: blob.x,
            top: blob.y,
            transform: 'translate(-50%, -50%)',
          }}
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 20 + index * 2,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: blob.delay,
          }}
        />
      ))}
    </div>
  )
}
