import Link from "next/link";

const Index = () => (
    <>
        <div>
            <h1>Ethereum Tools</h1>
            <Link
                href="/decode/hex"
                as={process.env.BACKEND_URL + "/decode/hex"}
            >
                Decode Hex
            </Link>
        </div>
        <style jsx global>{`
            body {
                font-family: sans-serif, helvetica;
            }
        `}</style>
    </>
);

export default Index;
