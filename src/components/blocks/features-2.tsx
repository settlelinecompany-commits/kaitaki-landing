import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Mic, FileText, Calendar } from 'lucide-react'
import { ReactNode } from 'react'

interface Features2Props {
	heading?: string;
	description?: string;
	subDescription?: string;
}

export function Features2({
	heading = "Meet the 3 AI Agents automating your privacy program",
	description = "Kaitaki's multi-agentic system runs the entire design phase of privacy programs:",
	subDescription = "Collecting data, Reasoning about risk, and Coordinating mitigation"
}: Features2Props) {
	return (
		<section className="py-16">
			<div className="mx-auto max-w-6xl px-6">
				<div className="text-center mb-12">
					<h2 className="text-balance text-3xl md:text-4xl lg:text-5xl font-semibold text-zinc-900">
						{heading}
					</h2>
					<p className="mt-4 text-lg text-zinc-600 max-w-2xl mx-auto">
						{description} <strong className="text-zinc-900">{subDescription}</strong>
					</p>
				</div>
				<div className="mx-auto mt-8 grid max-w-sm gap-6 md:mt-16 md:grid-cols-3 md:max-w-full">
					<Card className="group border-0 bg-gray-50 shadow-none">
						<CardHeader className="pb-3">
							<CardDecorator>
								<Mic className="size-6 text-blue-500" aria-hidden />
							</CardDecorator>
							<h3 className="mt-6 font-semibold text-zinc-900">Assessment Voice Agent</h3>
						</CardHeader>
						<CardContent>
							<p className="text-sm text-zinc-600">Automates stakeholder interviews, evidence, and fills DPIA templates.</p>
						</CardContent>
					</Card>

					<Card className="group border-0 bg-gray-50 shadow-none">
						<CardHeader className="pb-3">
							<CardDecorator>
								<FileText className="size-6 text-blue-500" aria-hidden />
							</CardDecorator>
							<h3 className="mt-6 font-semibold text-zinc-900">Risk & Mitigation Agent</h3>
						</CardHeader>
						<CardContent>
							<p className="text-sm text-zinc-600">Quantifies risks, drafts mitigations, and maps controls to PDPL / GDPR.</p>
						</CardContent>
					</Card>

					<Card className="group border-0 bg-gray-50 shadow-none">
						<CardHeader className="pb-3">
							<CardDecorator>
								<Calendar className="size-6 text-blue-500" aria-hidden />
							</CardDecorator>
							<h3 className="mt-6 font-semibold text-zinc-900">Project Orchestrator Agent</h3>
						</CardHeader>
						<CardContent>
							<p className="text-sm text-zinc-600">Tracks review cycles, reminders, and syncs approved actions to RoPA / Jira.</p>
						</CardContent>
					</Card>
				</div>
			</div>
		</section>
	)
}

const CardDecorator = ({ children }: { children: ReactNode }) => (
	<div aria-hidden className="relative mx-auto size-36 [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]">
		<div className="absolute inset-0 [--border:black] bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:24px_24px] opacity-10"/>
		<div className="bg-white absolute inset-0 m-auto flex size-12 items-center justify-center border-t border-l border-gray-200 rounded-lg">{children}</div>
	</div>
)

