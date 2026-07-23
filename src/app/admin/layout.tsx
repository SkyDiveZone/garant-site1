export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-100">
      <div className="container-custom py-8 pt-24 sm:pt-28">{children}</div>
    </div>
  );
}
