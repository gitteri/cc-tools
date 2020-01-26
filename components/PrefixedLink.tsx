import Link from "next/link";

const PrefixedLink = ({ href, as = href, children }) => (
    <Link href={href} as={`${process.env.linkPrefix}${as}`}>
        {children}
    </Link>
);

export default PrefixedLink;
