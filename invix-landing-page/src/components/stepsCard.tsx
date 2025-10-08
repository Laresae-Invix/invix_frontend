export function Step({
  no,
  title,
  desc,
}: {
  no: number;
  title: string;
  desc: string;
}) {
  return (
    <li className="transition-all duration-500 ease-in-out transform hover:scale-105 hover:shadow-xl hover:bg-blue-50 p-6 rounded-2xl border border-slate-200 bg-white">
      <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-white font-semibold text-2xl">
        {no}
      </div>
      <h4 className="mt-4 font-semibold text-lg">{title}</h4>
      <p className="text-slate-600 text-sm mt-2">{desc}</p>
    </li>
  );
}
