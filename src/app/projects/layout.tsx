export default function PostsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="mt-[64px]">
        {children}
      </div>
    </>
  );
}
