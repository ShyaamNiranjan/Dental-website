export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="border-b border-slate-200 bg-white px-4 py-4 sm:px-6">
        <p className="text-sm font-semibold text-teal-800">ClearSmile Admin</p>
      </div>
      {children}
    </div>
  );
}
