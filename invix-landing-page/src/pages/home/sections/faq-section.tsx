import { cva } from "class-variance-authority"; // Untuk Button Variants
import { Sparkles } from "lucide-react"; // Menambahkan Sparkles ikon
import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa"; // Ganti ChevronDown dengan FaChevronDown
import { cn } from "@/lib/utils"; // pastikan cn sudah terdefinisi di file utils

// Mock Data FAQ
const mockFAQs = [
	{
		id: 1,
		question: "Bagaimana Cara Membuat Undangan Dengan Invix?",
		answer:
			"Anda dapat membuat desain undangan di Invix, menyesuaikannya, dan mengirimkannya melalui email, SMS, atau media sosial. Penerima dapat melihat dan merespons undangan tersebut secara instan dari perangkat apa pun.",
	},

	{
		id: 2,
		question: "Bagaimana Cara Kerja Fitur RSVP?",
		answer:
			"Fitur RSVP kami memungkinkan Anda melacak tanggapan tamu secara real-time. Anda dapat melihat siapa yang telah merespons, mengelola daftar tamu, dan mengirim pengingat otomatis kepada mereka yang belum merespons.",
	},
	{
		id: 3,
		question: "Apakah Ada Batasan Jumlah Tamu pada Rencana Gratis?",
		answer:
			"Pada rencana gratis, Anda dapat mengundang hingga 50 tamu per acara. Untuk jumlah tamu yang lebih besar, pertimbangkan untuk meningkatkan ke rencana Premium atau Bisnis kami yang menawarkan kapasitas tamu yang lebih tinggi dan fitur tambahan.",
	},
	{
		id: 4,
		question: "Apakah saya bisa menggunakan Invix untuk acara korporat?",
		answer:
			"Tentu saja! Invix dirancang untuk memenuhi kebutuhan berbagai jenis acara, termasuk acara korporat. Dengan fitur kustomisasi penuh, pelacakan RSVP, dan manajemen tamu, Invix adalah solusi ideal untuk undangan digital profesional.",
	},
];

// Button Variants
const buttonVariants = cva(
	"inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
	{
		variants: {
			variant: {
				default: "bg-[#4351BC] text-white shadow hover:bg-[#3b47a5]",
				destructive:
					"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
				outline:
					"border border-input shadow-sm hover:bg-accent hover:text-accent-foreground",
				secondary:
					"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
				ghost: "hover:bg-accent hover:text-accent-foreground",
				link: "text-primary underline-offset-4 hover:underline",
			},
			size: {
				default: "h-9 px-4 py-2",
				sm: "h-8 rounded-md px-3 text-xs",
				lg: "h-12 px-6 py-3 text-lg",
				icon: "h-9 w-9",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
		},
	},
);

// Button Component
const Button = React.forwardRef<HTMLElement, any>(
	({ className, variant, size, asChild = false, ...props }, ref) => {
		const Comp: React.ElementType = asChild ? "div" : "button";
		return (
			<Comp
				className={cn(buttonVariants({ variant, size, className }))}
				ref={ref as React.Ref<any>}
				{...props}
			/>
		);
	},
);
Button.displayName = "Button";

// Accordion Item
const AccordionItem = ({
	question,
	answer,
}: {
	question: string;
	answer: string;
}) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="border-b">
			<button
				type="button"
				className="flex justify-between py-4 text-sm font-medium cursor-pointer hover:underline w-full text-left"
				onClick={() => setIsOpen(!isOpen)}
				onKeyDown={(e) => {
					if (e.key === "Enter" || e.key === " ") {
						e.preventDefault();
						setIsOpen(!isOpen);
					}
				}}
				aria-expanded={isOpen}
			>
				<span className="font-semibold text-lg text-[#111827]">{question}</span>
				<ChevronIcon isOpen={isOpen} />
			</button>
			{isOpen && (
				<div className="pb-4 pt-0 text-sm text-gray-600">{answer}</div>
			)}
		</div>
	);
};

// Chevron Icon (SVG)
const ChevronIcon = ({ isOpen }: { isOpen: boolean }) => (
	<FaChevronDown
		className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
	/>
);

// FAQSection Component
const FAQSection = () => {
	return (
		<section id="faq" className="">
			<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-8">
					{" "}
					{/* Reducing margin-top here */}
					{/* Sparkles and Title for FAQ */}
					<div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-gray-200 mb-4">
						{" "}
						{/* Reduced margin-bottom here */}
						<Sparkles className="h-4 w-4" style={{ color: "#4351BC" }} />
						<span
							className="text-sm font-medium mt-2"
							style={{ color: "#4351BC" }}
						>
							Masih Bingung Seputar Invix?
						</span>
					</div>
					<h2 className="mt-2 mb-4 text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">
						Pertanyaan yang Sering Ditanyakan
					</h2>
					<p className="section-description max-w-2xl mx-auto text-gray-600">
						Punya pertanyaan? Kami punya jawabannya. Jika Anda tidak menemukan
						apa yang Anda cari, silakan hubungi tim kami.
					</p>
				</div>

				<div className="faq-accordion">
					{mockFAQs.map((faq) => (
						<AccordionItem
							key={faq.id}
							question={faq.question}
							answer={faq.answer}
						/>
					))}
				</div>

				{/* Contact CTA */}
				<div className="text-center mt-8 p-8 rounded-2xl">
					<h3 className="text-xl font-semibold mb-2">
						Masih Punya Pertanyaan?
					</h3>
					<p className="text-gray-600 mb-4">
						Tim kami siap membantu Anda dalam segala pertanyaan.
					</p>
					{/* Menggunakan tag <a> langsung untuk WhatsApp */}
					<a
						href="https://wa.me/6285157609919?text=Halo%20Invix%2C%20saya%20ingin%20konsultasi%20undangan"
						className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium bg-[#4351BC] text-white px-6 py-3 transition-colors hover:bg-[#3b47a5]"
						target="_blank"
						rel="noopener noreferrer"
					>
						Contact Support
					</a>
				</div>
			</div>
		</section>
	);
};

export default FAQSection;
