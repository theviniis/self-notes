export interface ButtonProps
  extends React.HtmlHTMLAttributes<HTMLButtonElement> {}

export function Button({ children, ...props }: ButtonProps) {
  return <button {...props}>{children}</button>;
}
