import * as React from "react"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'ghost'
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', ...props }, ref) => {
    const baseClass = "inline-flex items-center justify-center rounded-md text-sm font-medium px-4 py-2 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400"
    
    const variants = {
      default: "bg-slate-900 text-white hover:bg-slate-800",
      outline: "border border-slate-300 bg-white hover:bg-slate-50",
      ghost: "hover:bg-slate-100",
    }
    
    return (
      <button
        ref={ref}
        className={`${baseClass} ${variants[variant]} ${className || ''}`}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }