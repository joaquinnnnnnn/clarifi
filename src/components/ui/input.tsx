import * as React from 'react'; import { cn } from '@/lib/utils';
const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<'input'>>(({ className, type, ...props }, ref) => (
  <input type={type} className={cn('flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm shadow-sm placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring', className)} ref={ref} {...props} />
));
Input.displayName='Input'; export { Input };
