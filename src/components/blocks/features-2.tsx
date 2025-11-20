import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Mic, FileText, Calendar } from 'lucide-react'
import { ReactNode, useState, useCallback } from 'react'
import { VoiceChat } from '@/components/ui/ia-siri-chat'
import { PureMultimodalInput } from '@/components/ui/multimodal-ai-chat-input'

type Attachment = {
  url: string;
  name: string;
  contentType: string;
  size: number;
};

type UIMessage = {
  id: string;
  content: string;
  role: string;
  attachments?: Attachment[];
};

interface Features2Props {
	heading?: string;
	description?: string;
	subDescription?: string;
}

export function Features2({
	heading = "Meet the 3 AI Agents automating your privacy program",
	description = "A multi-agent system that collects data, reasons about risk, and coordinates mitigation",
	subDescription = ""
}: Features2Props) {
	return (
		<section className="py-16">
			<div className="mx-auto max-w-6xl px-6">
				<div className="text-center mb-12">
					<div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full mb-6">
						<span className="text-sm font-medium text-zinc-600">Intelligence Layer</span>
					</div>
					<h2 className="text-balance text-3xl md:text-4xl lg:text-5xl font-semibold text-zinc-900">
						{heading}
					</h2>
					<p className="mt-4 text-lg text-zinc-600 max-w-2xl mx-auto">
						{description}
					</p>
				</div>
				<div className="mx-auto mt-8 grid max-w-sm gap-6 md:mt-16 md:grid-cols-3 md:max-w-full">
					<Card className="group border-0 bg-gray-50 shadow-none min-h-[400px] md:min-h-[450px] flex flex-col">
						<CardHeader className="pb-3 flex-1 flex flex-col">
							<div className="relative mx-auto mb-6 w-full h-64 md:h-72 flex items-center justify-center bg-white rounded-lg border border-gray-200 p-2">
								<VoiceChat demoMode={true} className="w-full h-full" />
							</div>
							<div className="mt-auto">
								<h3 className="font-semibold text-zinc-900">Assessment Voice Agent</h3>
							</div>
						</CardHeader>
						<CardContent>
							<p className="text-sm text-zinc-600">Automates stakeholder interviews, evidence, and fills DPIA templates.</p>
						</CardContent>
					</Card>

					<Card className="group border-0 bg-gray-50 shadow-none min-h-[400px] md:min-h-[450px] flex flex-col">
						<CardHeader className="pb-3 flex-1 flex flex-col">
							<div className="relative mx-auto mb-6 w-full h-64 md:h-72 flex items-center justify-center bg-white rounded-lg border border-gray-200 p-4">
								<img
									src="/images/how-it-works/Risk-Report.png"
									alt="Risk & Mitigation Agent"
									className="w-full h-full object-contain"
								/>
							</div>
							<div className="mt-auto">
								<h3 className="font-semibold text-zinc-900">Risk & Mitigation Agent</h3>
							</div>
						</CardHeader>
						<CardContent>
							<p className="text-sm text-zinc-600">Quantifies risks, drafts mitigations, and maps controls to PDPL / GDPR.</p>
						</CardContent>
					</Card>

					<Card className="group border-0 bg-gray-50 shadow-none min-h-[400px] md:min-h-[450px] flex flex-col">
						<CardHeader className="pb-3 flex-1 flex flex-col">
							<div className="relative mx-auto mb-6 w-full h-64 md:h-72 flex flex-col justify-end bg-white rounded-lg border border-gray-200 p-3">
								<MultimodalInputWrapper />
							</div>
							<div className="mt-auto">
								<h3 className="font-semibold text-zinc-900">Project Orchestrator Agent</h3>
							</div>
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

function MultimodalInputWrapper() {
	const [attachments, setAttachments] = useState<Attachment[]>([]);
	const [isGenerating, setIsGenerating] = useState(false);
	const [messages] = useState<UIMessage[]>([]);
	const chatId = 'project-orchestrator-demo';

	const handleSendMessage = useCallback(({ input, attachments }: { input: string; attachments: Attachment[] }) => {
		console.log("Sending message:", input, attachments);
		setIsGenerating(true);
		setTimeout(() => {
			setIsGenerating(false);
		}, 2000);
	}, []);

	const handleStopGenerating = useCallback(() => {
		setIsGenerating(false);
	}, []);

	return (
		<div className="w-full flex flex-col justify-end h-full">
			<PureMultimodalInput
				chatId={chatId}
				messages={messages}
				attachments={attachments}
				setAttachments={setAttachments}
				onSendMessage={handleSendMessage}
				onStopGenerating={handleStopGenerating}
				isGenerating={isGenerating}
				canSend={true}
				selectedVisibilityType="private"
				className="w-full"
			/>
		</div>
	);
}

