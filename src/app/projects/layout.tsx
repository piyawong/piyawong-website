export default function PostsLayout({
  children,
  modal, // slot ชื่อเดียวกับโฟลเดอร์ @modal
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <>
      <div className="mt-[64px]">
        {children}
        {/* modal จะถูกวางทับ */}
        {modal}
      </div>
    </>
  );
}
