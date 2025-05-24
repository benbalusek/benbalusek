import Link from "next/link";

type ExternalLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

function ExternalLink({ href, children, className = "" }: ExternalLinkProps) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`text-blue-600 underline ${className}`}
    >
      {children}
    </Link>
  );
}
export default ExternalLink;
