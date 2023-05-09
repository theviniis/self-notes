import { cn } from '../../lib';

export interface ButtonProps
  extends React.HtmlHTMLAttributes<HTMLButtonElement> {}

export function Button({ className, children, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        'inline-flex px-6 py-3 rounded-lg bg-zinc-800 text-zinc-200 dark:bg-zinc-200 dark:text-zinc-800 font-sans text-base font-medium',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
