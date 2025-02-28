"use client"

import { useCallback, useState } from 'react';
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
import { motion } from 'framer-motion';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Code2, Gamepad2, Shield, Cpu, Database, Users } from 'lucide-react';

// Custom Node Components
const CustomNode = ({ data }: NodeProps) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-lg shadow-lg p-4 border border-slate-200 dark:border-slate-700"
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
        <TooltipContent>
          <p className="text-sm max-w-xs">{data.description}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

// Node Types
const nodeTypes = {
  custom: CustomNode,
};

export const TechnicalArchitecture = () => {
  // Initial Nodes
  const initialNodes: Node[] = [
    {
      id: '1',
      type: 'custom',
      position: { x: 400, y: 50 },
      data: {
        label: 'User Interface',
        sublabel: 'Web & Mobile Apps',
        icon: <Users className="w-5 h-5 text-blue-500" />,
        iconBg: 'bg-blue-100 dark:bg-blue-900/50',
        description: 'Interactive frontend for users to engage with sustainability challenges and mini-games.',
      },
    },
    {
      id: '2',
      type: 'custom',
      position: { x: 200, y: 200 },
      data: {
        label: 'Challenge Registry',
        sublabel: 'Smart Contract',
        icon: <Code2 className="w-5 h-5 text-emerald-500" />,
        iconBg: 'bg-emerald-100 dark:bg-emerald-900/50',
        description: 'Manages sustainability challenges and verification criteria.',
      },
    },
    {
      id: '3',
      type: 'custom',
      position: { x: 600, y: 200 },
      data: {
        label: 'Mini-Game Engine',
        sublabel: 'Game Logic',
        icon: <Gamepad2 className="w-5 h-5 text-purple-500" />,
        iconBg: 'bg-purple-100 dark:bg-purple-900/50',
        description: 'Handles game mechanics and player interactions.',
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
        description: 'AI-powered verification of sustainability actions.',
      },
    },
    {
      id: '5',
      type: 'custom',
      position: { x: 200, y: 500 },
      data: {
        label: 'Reward Distributor',
        sublabel: 'Smart Contract',
        icon: <Database className="w-5 h-5 text-red-500" />,
        iconBg: 'bg-red-100 dark:bg-red-900/50',
        description: 'Handles token distribution and NFT rewards.',
      },
    },
    {
      id: '6',
      type: 'custom',
      position: { x: 600, y: 500 },
      data: {
        label: 'Security Layer',
        sublabel: 'Protocol Security',
        icon: <Shield className="w-5 h-5 text-slate-500" />,
        iconBg: 'bg-slate-100 dark:bg-slate-900/50',
        description: 'Ensures secure transactions and data integrity.',
      },
    },
  ];

  // Initial Edges
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
    <div className="h-[500px] w-full rounded-xl overflow-hidden border bg-slate-50 dark:bg-slate-900">
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
  );
}; 