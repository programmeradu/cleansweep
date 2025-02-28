"use client"

import ReactFlow, {
  Node,
  Edge,
  Background,
  Controls,
  Handle,
  Position,
  NodeProps,
  useNodesState,
  useEdgesState,
} from 'reactflow';
import 'reactflow/dist/style.css';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Code2, Gamepad2, Shield, Cpu, Database, Users, X } from 'lucide-react';
import { useState } from 'react';
import { Card } from '@/components/ui/card';

// Custom Node Component
const CustomNode = ({ data }: NodeProps) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <motion.div
            whileHover={{ scale: 1.05 }}
            onClick={() => data.onClick && data.onClick()}
            className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-lg shadow-lg p-4 border border-slate-200 dark:border-slate-700 cursor-pointer"
          >
            <Handle type="target" position={Position.Top} className="!bg-emerald-500" />
            <div className="flex items-center gap-3">
              <div className={`p-2 rounded-md ${data.iconBg}`}>
                {data.icon}
              </div>
              <div>
                <h3 className="font-semibold text-sm">{data.label}</h3>
                <p className="text-xs text-muted-foreground">{data.sublabel}</p>
              </div>
            </div>
            <Handle type="source" position={Position.Bottom} className="!bg-emerald-500" />
          </motion.div>
        </TooltipTrigger>
        <TooltipContent side="right" className="max-w-sm">
          <div className="space-y-2">
            <p className="text-sm">{data.description}</p>
            {data.codeExample && (
              <div className="mt-2 p-2 rounded bg-slate-900 text-xs text-slate-100 font-mono">
                {data.codeExample}
              </div>
            )}
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

const nodeTypes = {
  custom: CustomNode,
};

export function InteractiveArchitecture() {
  const [selectedNode, setSelectedNode] = useState<string | null>(null);

  const handleNodeClick = (nodeId: string) => {
    setSelectedNode(nodeId === selectedNode ? null : nodeId);
  };

  // Initial Nodes with code examples
  const initialNodes: Node[] = [
    {
      id: '1',
      type: 'custom',
      position: { x: 400, y: 50 },
      data: {
        label: 'User Interface',
        sublabel: 'Next.js & React',
        icon: <Users className="w-5 h-5 text-blue-500" />,
        iconBg: 'bg-blue-100 dark:bg-blue-900/50',
        description: 'Built with Next.js 14, featuring server components and optimized image loading for sustainability challenges.',
        onClick: () => handleNodeClick('1'),
        codeExample: 'import { ReactVM } from "@reactive-network/sdk";',
      },
    },
    {
      id: '2',
      type: 'custom',
      position: { x: 200, y: 200 },
      data: {
        label: 'Challenge Registry',
        sublabel: 'ReactVM Contract',
        icon: <Code2 className="w-5 h-5 text-emerald-500" />,
        iconBg: 'bg-emerald-100 dark:bg-emerald-900/50',
        description: 'Smart contract managing challenge lifecycle, verification rules, and reward distribution logic.',
        onClick: () => handleNodeClick('2'),
        codeExample: 'import { ReactVM } from "@reactive-network/sdk";',
      },
    },
    {
      id: '3',
      type: 'custom',
      position: { x: 600, y: 200 },
      data: {
        label: 'Mini-Game Engine',
        sublabel: 'ReactVM Events',
        icon: <Gamepad2 className="w-5 h-5 text-purple-500" />,
        iconBg: 'bg-purple-100 dark:bg-purple-900/50',
        description: 'Real-time game mechanics powered by ReactVM event system for instant reward triggers.',
        onClick: () => handleNodeClick('3'),
        codeExample: 'import { ReactVM } from "@reactive-network/sdk";',
      },
    },
    {
      id: '4',
      type: 'custom',
      position: { x: 400, y: 350 },
      data: {
        label: 'Verification System',
        sublabel: 'Azure Vision AI',
        icon: <Cpu className="w-5 h-5 text-orange-500" />,
        iconBg: 'bg-orange-100 dark:bg-orange-900/50',
        description: 'ML-powered verification using Azure Vision AI, integrated with ReactVM for automated processing.',
        onClick: () => handleNodeClick('4'),
        codeExample: 'import { ReactVM } from "@reactive-network/sdk";',
      },
    },
    {
      id: '5',
      type: 'custom',
      position: { x: 200, y: 500 },
      data: {
        label: 'Reward Distributor',
        sublabel: 'Parallel Processing',
        icon: <Database className="w-5 h-5 text-red-500" />,
        iconBg: 'bg-red-100 dark:bg-red-900/50',
        description: 'Parallelized reward distribution using ReactVM batch processing for optimal gas efficiency.',
        onClick: () => handleNodeClick('5'),
        codeExample: 'import { ReactVM } from "@reactive-network/sdk";',
      },
    },
    {
      id: '6',
      type: 'custom',
      position: { x: 600, y: 500 },
      data: {
        label: 'Security Layer',
        sublabel: 'ReactVM Security',
        icon: <Shield className="w-5 h-5 text-slate-500" />,
        iconBg: 'bg-slate-100 dark:bg-slate-900/50',
        description: 'Multi-layer security with ReactVM verification nodes and automated audit systems.',
        onClick: () => handleNodeClick('6'),
        codeExample: 'import { ReactVM } from "@reactive-network/sdk";',
      },
    },
  ];

  // Initial Edges (same as TechnicalArchitecture)
  const initialEdges: Edge[] = [
    { id: 'e1-2', source: '1', target: '2', animated: true, style: { stroke: '#10b981' } },
    { id: 'e1-3', source: '1', target: '3', animated: true, style: { stroke: '#10b981' } },
    { id: 'e2-4', source: '2', target: '4', animated: true, style: { stroke: '#10b981' } },
    { id: 'e3-4', source: '3', target: '4', animated: true, style: { stroke: '#10b981' } },
    { id: 'e4-5', source: '4', target: '5', animated: true, style: { stroke: '#10b981' } },
    { id: 'e4-6', source: '4', target: '6', animated: true, style: { stroke: '#10b981' } },
  ];

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  return (
    <div className="relative">
      <div className="h-[600px] w-full rounded-xl overflow-hidden border bg-slate-50 dark:bg-slate-900">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          nodeTypes={nodeTypes}
          fitView
          className="bg-slate-50 dark:bg-slate-900"
        >
          <Background />
          <Controls />
        </ReactFlow>
      </div>
      <AnimatePresence>
        {selectedNode && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-4 right-4"
          >
            <Card className="w-80 bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm shadow-lg border-slate-200/50 dark:border-slate-700/50">
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-sm">
                    {nodes.find(n => n.id === selectedNode)?.data.label}
                  </h3>
                  <button
                    onClick={() => setSelectedNode(null)}
                    className="p-1 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-full transition-colors"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
                <pre className="text-xs bg-slate-900 text-slate-50 p-3 rounded-md overflow-x-auto">
                  <code>
                    {nodes.find(n => n.id === selectedNode)?.data.codeExample}
                  </code>
                </pre>
              </div>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
} 