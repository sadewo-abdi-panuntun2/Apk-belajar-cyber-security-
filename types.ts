
export interface Lesson {
  id: string;
  title: string;
  description: string;
  category: 'Fundamentals' | 'Attacks' | 'Defense';
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  content: string;
}

export interface GroundingChunk {
  web?: {
    uri: string;
    title: string;
  };
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
  groundingChunks?: GroundingChunk[];
}

export enum SecurityCategory {
  CYBER_BASICS = 'Cyber Security 101',
  SQL_BASICS = 'SQL Basics',
  SQL_INJECTION = 'SQL Injection',
  XSS = 'Cross-Site Scripting (XSS)',
  IDOR = 'Insecure Direct Object Reference (IDOR)',
  AUTH_BROKEN = 'Broken Authentication',
  PREVENTION = 'Prevention Strategies',
  LABS = 'Interactive Lab'
}
