import React from 'react'

export default function SkeletonCard() {
  return (
    <div className="animate-pulse rounded-md p-4">
      <div className="h-24 bg-gray-300 w-3/4 mb-2 rounded-md"></div>
      <div className="h-6 bg-gray-300 w-1/2"></div>
    </div>
  )
};