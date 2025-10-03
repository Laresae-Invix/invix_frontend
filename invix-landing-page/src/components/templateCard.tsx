export function TemplateCard({ name, tag }: { name: string; tag: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-3 shadow-sm hover:shadow transition">
      <div className="h-44 rounded-xl bg-slate-100 flex items-center justify-center">
        <span className="text-slate-400 text-sm">Preview {name}</span>
      </div>
      <div className="mt-3 flex items-center justify-between">
        <div>
          <p className="font-semibold">{name}</p>
          <p className="text-xs text-slate-500">{tag}</p>
        </div>
        <div className="flex items-center gap-2">
          <button className="rounded-xl border px-3 py-1.5 text-xs font-semibold hover:bg-slate-50">Pratinjau</button>
          <button className="rounded-xl bg-blue-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-blue-700">Gunakan</button>
        </div>
      </div>
    </div>
  );
}
