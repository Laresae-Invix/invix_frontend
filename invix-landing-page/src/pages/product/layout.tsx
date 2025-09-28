import { Outlet } from "react-router-dom";

export default function ProductLayout() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Products</h2>
      <Outlet />
    </div>
  );
}
