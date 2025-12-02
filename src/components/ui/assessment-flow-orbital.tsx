'use client';

import { useState, useEffect, useRef } from 'react';
import { Mic, Brain, FileCheck, Shield, Users, Clock } from 'lucide-react';

interface FlowNode {
  id: number;
  title: string;
  icon: React.ElementType;
  color: string;
}

const flowNodes: FlowNode[] = [
  { id: 1, title: 'Voice Capture', icon: Mic, color: 'bg-blue-500' },
  { id: 2, title: 'AI Analysis', icon: Brain, color: 'bg-blue-600' },
  { id: 3, title: 'Risk Scoring', icon: Shield, color: 'bg-blue-500' },
  { id: 4, title: 'Review', icon: Users, color: 'bg-blue-600' },
  { id: 5, title: 'Approval', icon: FileCheck, color: 'bg-blue-500' },
  { id: 6, title: 'Complete', icon: Clock, color: 'bg-blue-600' },
];

export function AssessmentFlowOrbital() {
  const [rotationAngle, setRotationAngle] = useState(0);
  const [activeNode, setActiveNode] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setRotationAngle((prev) => (prev + 0.5) % 360);
    }, 50);
    return () => clearInterval(timer);
  }, []);

  const calculatePosition = (index: number, total: number) => {
    const angle = ((index / total) * 360 + rotationAngle) % 360;
    const radius = 80;
    const radian = (angle * Math.PI) / 180;
    const x = radius * Math.cos(radian);
    const y = radius * Math.sin(radian);
    const opacity = 0.5 + 0.5 * ((1 + Math.sin(radian)) / 2);
    return { x, y, opacity };
  };

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-[280px] bg-gradient-to-br from-blue-50 to-white rounded-xl overflow-hidden flex items-center justify-center"
    >
      {/* Center core */}
      <div className="absolute w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center z-10 shadow-lg shadow-blue-500/30">
        <div className="absolute w-16 h-16 rounded-full border-2 border-blue-400/30 animate-ping opacity-50" />
        <div className="w-6 h-6 rounded-full bg-white/90" />
      </div>

      {/* Orbit ring */}
      <div className="absolute w-44 h-44 rounded-full border border-blue-200/50" />
      <div className="absolute w-52 h-52 rounded-full border border-blue-100/30" />

      {/* Orbital nodes */}
      {flowNodes.map((node, index) => {
        const position = calculatePosition(index, flowNodes.length);
        const Icon = node.icon;
        const isActive = activeNode === node.id;

        return (
          <div
            key={node.id}
            className="absolute transition-all duration-300 cursor-pointer"
            style={{
              transform: `translate(${position.x}px, ${position.y}px)`,
              opacity: isActive ? 1 : position.opacity,
              zIndex: isActive ? 20 : 10,
            }}
            onMouseEnter={() => setActiveNode(node.id)}
            onMouseLeave={() => setActiveNode(null)}
          >
            {/* Glow effect */}
            <div 
              className={`absolute -inset-2 rounded-full ${node.color} blur-md transition-opacity duration-300 ${isActive ? 'opacity-40' : 'opacity-0'}`}
            />
            
            {/* Node */}
            <div
              className={`relative w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                isActive 
                  ? 'bg-blue-600 scale-125 shadow-lg shadow-blue-500/40' 
                  : 'bg-white border-2 border-blue-300'
              }`}
            >
              <Icon 
                size={18} 
                className={isActive ? 'text-white' : 'text-blue-600'} 
              />
            </div>
            
            {/* Label */}
            <div
              className={`absolute top-12 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs font-medium transition-all duration-300 ${
                isActive ? 'text-blue-700 scale-110' : 'text-zinc-500'
              }`}
            >
              {node.title}
            </div>
          </div>
        );
      })}

      {/* Floating particles */}
      <div className="absolute w-2 h-2 bg-blue-400/40 rounded-full animate-pulse" style={{ top: '20%', left: '30%' }} />
      <div className="absolute w-1.5 h-1.5 bg-blue-300/50 rounded-full animate-pulse" style={{ top: '70%', right: '25%', animationDelay: '0.5s' }} />
      <div className="absolute w-1 h-1 bg-blue-500/30 rounded-full animate-pulse" style={{ bottom: '30%', left: '20%', animationDelay: '1s' }} />
    </div>
  );
}

