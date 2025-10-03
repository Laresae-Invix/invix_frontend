export function Step({ no, title, desc }: { no: number; title: string; desc: string }) {
  return (
    <li className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 text-white font-bold">{no}</div>
      <p className="mt-3 font-semibold">{title}</p>
      <p className="text-sm text-slate-600">{desc}</p>
    </li>
  );
}
