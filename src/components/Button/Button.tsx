export interface ButtonProps
  extends React.HtmlHTMLAttributes<HTMLButtonElement> {}

export function Button({ children }: ButtonProps) {
  return <button>{children}</button>;
}
