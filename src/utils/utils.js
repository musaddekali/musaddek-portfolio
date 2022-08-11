// Framer motion variants 
export const scrollVariants = {
    onscreen : {
        scale: 1,
        opacity: 1,
        transition: {duration: 0.5}
    },
    offscreen : {
        scale: 0,
        opacity: 0
    }
}

export const scrollViewport = { once: true, amount: 0.3 }