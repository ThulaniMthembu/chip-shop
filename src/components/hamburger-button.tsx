interface HamburgerButtonProps {
  isOpen: boolean
  onClick: () => void
  className?: string
}

export default function HamburgerButton({ isOpen, onClick, className = "" }: HamburgerButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`header-bar relative h-10 w-10 ${className}`}
      aria-label={isOpen ? "Close menu" : "Open menu"}
    >
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
        <span
          className={`absolute block h-0.5 w-6 transform bg-current transition duration-500 ease-in-out ${
            isOpen ? "rotate-45" : "-translate-y-2"
          }`}
        />
        <span
          className={`absolute block h-0.5 w-6 transform bg-current transition-opacity duration-500 ease-in-out ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        />
        <span
          className={`absolute block h-0.5 w-6 transform bg-current transition duration-500 ease-in-out ${
            isOpen ? "-rotate-45" : "translate-y-2"
          }`}
        />
      </div>
    </button>
  )
}