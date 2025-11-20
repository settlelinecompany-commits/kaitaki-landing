'use client';

import { CheckCircle, Shield, Database, Download, TrendingUp, Link as LinkIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { FeatureCard } from '@/components/ui/grid-feature-cards';

const features = [
	{
		title: 'Pass audits under PDPL + GDPR',
		icon: CheckCircle,
		description: 'Ensure compliance with global privacy regulations and pass audits with confidence.',
	},
	{
		title: 'Keep legal in control of final sign-off',
		icon: Shield,
		description: 'Maintain legal oversight and control over all privacy decisions and approvals.',
	},
	{
		title: 'Host data in-region or cloud',
		icon: Database,
		description: 'Flexible hosting options to meet your data residency and compliance requirements.',
	},
	{
		title: 'Track every change & export anytime',
		icon: Download,
		description: 'Complete audit trail with full change tracking and on-demand export capabilities.',
	},
	{
		title: 'See time saved per assessment',
		icon: TrendingUp,
		description: 'Track efficiency gains and demonstrate ROI with detailed time savings metrics.',
	},
	{
		title: 'Sync results to RoPA, Jira, and email',
		icon: LinkIcon,
		description: 'Seamlessly integrate with your existing tools and workflows for maximum efficiency.',
	},
];

type ViewAnimationProps = {
	delay?: number;
	className?: React.ComponentProps<typeof motion.div>['className'];
	children: React.ReactNode;
};

function AnimatedContainer({ className, delay = 0.1, children }: ViewAnimationProps) {
	const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

	if (prefersReducedMotion) {
		return <div className={className}>{children}</div>;
	}

	return (
		<motion.div
			initial={{ filter: 'blur(4px)', translateY: -8, opacity: 0 }}
			whileInView={{ filter: 'blur(0px)', translateY: 0, opacity: 1 }}
			viewport={{ once: true }}
			transition={{ delay, duration: 0.8 }}
			className={className}
		>
			{children}
		</motion.div>
	);
}

export function GridFeatureSection() {
	return (
		<section className="py-16">
			<div className="mx-auto w-full max-w-6xl space-y-6 px-6">
				<AnimatedContainer className="mx-auto max-w-3xl text-center">
					<div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full mb-6">
						<span className="text-sm font-medium text-zinc-600">Benefits</span>
					</div>
					<h2 className="text-3xl font-bold tracking-wide text-balance md:text-4xl lg:text-5xl xl:font-extrabold text-zinc-900">
						Cut DPIA time 90% Zero manual follow-ups
					</h2>
					<p className="text-zinc-600 mt-4 mb-8 text-lg text-balance max-w-2xl mx-auto">
						Reduce audit risk, save time, and strengthen governance effortlessly
					</p>
				</AnimatedContainer>
				<AnimatedContainer
					delay={0.4}
					className="grid grid-cols-1 divide-x divide-y divide-dashed border border-dashed border-gray-200 sm:grid-cols-2 md:grid-cols-3 bg-white rounded-lg overflow-hidden"
				>
					{features.map((feature, i) => (
						<FeatureCard key={i} feature={feature} />
					))}
				</AnimatedContainer>
			</div>
		</section>
	);
}

