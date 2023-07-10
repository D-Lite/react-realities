import '@google/model-viewer'
import React from 'react'

export interface IGoogleModelViewer {
  src: string
  srcalt: string
  loading: string
  ar: boolean
  title?: string
}

const ModelViewerComponent = ({ src, srcalt, loading, ar }: IGoogleModelViewer) => {
  return (
    <div>
      <model-viewer
        src={src ? src : './src/assets/couch.glb'}
        alt={srcalt}
        ar={ar}
        shadow-intensity="1"
        camera-controls
        touch-action="pan-y"
        loading={loading}
      ></model-viewer>
    </div>
  )
}

export default ModelViewerComponent
