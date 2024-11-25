import { Metadata } from "next";

interface BolosProps {}

export const metadata: Metadata = {
  title: 'Bolos',
}

export default function Bolos({ ...props }: BolosProps) {
  return <section {...props} className="h-dvh">Bolos</section>;
}
