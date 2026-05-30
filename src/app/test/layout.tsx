export default function TestLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <h1>I am test layout</h1>
            <section>
                {children}
            </section>
        </>
    );
}
