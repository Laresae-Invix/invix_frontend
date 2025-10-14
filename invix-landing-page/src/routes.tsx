// file : invix-landing-page/src/routes.tsx
import type React from "react";
import { lazy, Suspense } from "react";
import { createBrowserRouter, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";


const HomePage = lazy(() => import("./pages/home/index"));
const AboutLayout = lazy(() => import("./pages/about/layout"));
const AboutPage = lazy(() => import("./pages/about/page"));
const ProductLayout = lazy(() => import("./pages/product/layout"));
const ProductPage = lazy(() => import("./pages/product/page"));
const NotFoundPage = lazy(() => import("./pages/not-found"));

function RootLayout() {
	return (
		<div className="min-h-screen bg-gray-50 text-gray-900">
			<Navbar />
			<main className="">
				<Outlet />
			</main>
		</div>
	);
}

function Loader({ children }: { children: React.ReactNode }) {
	return (
		<Suspense fallback={<div className="p-6">Loading…</div>}>
			{children}
		</Suspense>
	);
}

export const router = createBrowserRouter([
	{
		path: "/",
		element: (
			<Loader>
				<RootLayout />
			</Loader>
		),
		errorElement: (
			<Loader>
				<NotFoundPage />
			</Loader>
		),
		children: [
			{
				index: true,
				element: (
					<Loader>
						<HomePage />
					</Loader>
				),
			},
			{
				path: "about",
				element: (
					<Loader>
						<AboutLayout />
					</Loader>
				),
				children: [
					{
						index: true,
						element: (
							<Loader>
								<AboutPage />
							</Loader>
						),
					},
				],
			},
			{
				path: "product",
				element: (
					<Loader>
						<ProductLayout />
					</Loader>
				),
				children: [
					{
						index: true,
						element: (
							<Loader>
								<ProductPage />
							</Loader>
						),
					},
				],
			},
			{
				path: "*",
				element: (
					<Loader>
						<NotFoundPage />
					</Loader>
				),
			},
		],
	},
]);
