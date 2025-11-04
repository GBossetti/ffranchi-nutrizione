export function DecorativeFruits() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Bottom left corner - fruits cluster */}
      <div className="absolute bottom-0 left-0 w-64 h-64 opacity-50">
        <img src="/watercolor-fruits-vegetables-lemon-pomegranate-ber.jpg" alt="" className="w-full h-full object-contain" />
      </div>

      {/* Top right corner - single fruit accent */}
      <div className="absolute top-8 right-8 w-32 h-32 opacity-40 animate-float">
        <img src="/watercolor-apple-with-leaf.jpg" alt="" className="w-full h-full object-contain" />
      </div>
    </div>
  )
}
