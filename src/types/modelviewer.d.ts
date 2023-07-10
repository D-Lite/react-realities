export declare global {
  namespace JSX {
    interface IntrinsicElements {
      'model-viewer': MyElementAttributes
    }

    interface MyElementAttributes {
      src: string

      children?: any

      id?: any

      ref?: any

      class?: string

      alt: string

      ar: boolean

      loading: string
    }
  }
}
