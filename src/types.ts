export interface FileNode {
  id: string;
  name: string;
  type: 'folder' | 'file';
  size?: string;
  updatedAt?: string;
  children?: FileNode[];
  isOpen?: boolean;
}

export interface SearchOperator {
  operator: string;
  syntax: string;
  purpose: string;
  example: string;
  result: string;
}

export interface EvaluationSource {
  id: string;
  title: string;
  url: string;
  currency: { score: number; comment: string };
  relevance: { score: number; comment: string };
  authority: { score: number; comment: string };
  accuracy: { score: number; comment: string };
  purpose: { score: number; comment: string };
  isReliable: boolean;
  totalScore: number;
}

export interface PromptImprovement {
  id: string;
  context: string;
  before: string;
  after: string;
  explanation: string;
  techniques: string[];
}

export interface KanbanTask {
  id: string;
  title: string;
  description: string;
  assignee: string;
  priority: 'low' | 'medium' | 'high';
  dueDate: string;
  status: 'backlog' | 'todo' | 'in_progress' | 'review' | 'done';
}

export interface AISpotlight {
  id: string;
  title: string;
  category: string;
  description: string;
  aiTools: string[];
  workflow: string[];
  promptUsed: string;
  imageUrl?: string;
  outcome: string;
}

export interface EthicsRule {
  id: number;
  title: string;
  subTitle: string;
  principle: string;
  practicalAction: string;
}
