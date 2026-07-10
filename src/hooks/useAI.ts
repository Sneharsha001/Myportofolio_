// ============================================================
// useAI — Antigravity AI integration scaffold
//
// This hook is the single integration point for AI features.
// To connect the Antigravity AI:
//   1. Import your API client here
//   2. Replace the placeholder `ask` implementation
//   3. Optionally inject portfolio context (projects, skills, personal)
//      so the AI can answer "tell me about your projects" accurately
// ============================================================

import { useState, useCallback } from 'react';
import { projects } from '@/data/projects';
import { personal } from '@/data/personal';
import { allSkills } from '@/data/skills';

export interface AIMessage {
  role: 'user' | 'assistant';
  content: string;
}

interface UseAIReturn {
  messages: AIMessage[];
  isLoading: boolean;
  ask: (prompt: string) => Promise<void>;
  reset: () => void;
}

// Portfolio context injected into every AI request
const PORTFOLIO_CONTEXT = `
You are an AI assistant for ${personal.name}'s portfolio website.
About ${personal.shortName}: ${personal.bio}
Location: ${personal.location}
Currently learning: ${personal.currentlyLearning.join(', ')}
Top skills: ${allSkills.slice(0, 10).map((s) => s.name).join(', ')}
Projects: ${projects.map((p) => p.title).join(', ')}
`.trim();

export function useAI(): UseAIReturn {
  const [messages, setMessages] = useState<AIMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const ask = useCallback(async (prompt: string) => {
    if (!prompt.trim()) return;

    const userMessage: AIMessage = { role: 'user', content: prompt };
    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);

    try {
      // ── INTEGRATION POINT ──────────────────────────────────
      // Replace this placeholder with your Antigravity API call.
      // Example:
      //   const response = await antigravityClient.chat({
      //     systemPrompt: PORTFOLIO_CONTEXT,
      //     messages: [...messages, userMessage],
      //   });
      //   const reply = response.content;
      // ───────────────────────────────────────────────────────

      // Placeholder response (remove when real API is connected)
      await new Promise((r) => setTimeout(r, 800));
      const reply =
        `Hi! I'm ${personal.shortName}'s AI assistant. ` +
        `I can tell you about projects, skills, or experience. ` +
        `(AI backend not yet connected — wire useAI.ts to your API.)`;

      setMessages((prev) => [...prev, { role: 'assistant', content: reply }]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: 'Sorry, something went wrong. Please try again.' },
      ]);
    } finally {
      setIsLoading(false);
    }
  }, [messages]);

  const reset = useCallback(() => setMessages([]), []);

  return { messages, isLoading, ask, reset };
}
