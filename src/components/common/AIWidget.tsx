import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, X, Send, RotateCcw, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useAI } from '@/hooks/useAI';
import { personal } from '@/data/personal';

// ============================================================
// AIWidget — floating chat button powered by useAI
// Drop this into Portfolio.tsx to activate.
// Currently uses placeholder responses; wire useAI.ts to your
// Antigravity API to make it fully functional.
// ============================================================

const SUGGESTIONS = [
  `Tell me about ${personal.shortName}'s projects`,
  `What technologies does ${personal.shortName} know?`,
  `Is ${personal.shortName} open to opportunities?`,
];

const AIWidget: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const { messages, isLoading, ask, reset } = useAI();
  const bottomRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to latest message
  useEffect(() => {
    if (open) bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, open]);

  const handleSend = async () => {
    const trimmed = input.trim();
    if (!trimmed || isLoading) return;
    setInput('');
    await ask(trimmed);
  };

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Chat panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="fixed bottom-24 right-6 z-50 w-80 sm:w-96 flex flex-col"
            style={{ maxHeight: '70vh' }}
          >
            <div className="glass rounded-2xl border border-primary/20 shadow-neon-blue flex flex-col overflow-hidden" style={{ maxHeight: '70vh' }}>
              {/* Header */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-border/30 bg-muted/20">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-gradient-primary flex items-center justify-center">
                    <Bot className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">Portfolio AI</p>
                    <p className="text-xs text-neon-green">Ask me anything</p>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  {messages.length > 0 && (
                    <button
                      onClick={reset}
                      className="p-1.5 text-muted-foreground hover:text-foreground transition-colors"
                      aria-label="Reset conversation"
                    >
                      <RotateCcw className="h-3.5 w-3.5" />
                    </button>
                  )}
                  <button
                    onClick={() => setOpen(false)}
                    className="p-1.5 text-muted-foreground hover:text-foreground transition-colors"
                    aria-label="Close AI chat"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-3 min-h-0">
                {messages.length === 0 ? (
                  <div className="space-y-3">
                    <p className="text-xs text-muted-foreground text-center">
                      Hi! I'm {personal.shortName}'s portfolio assistant. Try asking:
                    </p>
                    {SUGGESTIONS.map((s) => (
                      <button
                        key={s}
                        onClick={() => ask(s)}
                        className="w-full text-left text-xs px-3 py-2 rounded-lg bg-muted/60 border border-border/40 text-muted-foreground hover:border-primary/40 hover:text-foreground transition-all duration-200"
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                ) : (
                  messages.map((msg, i) => (
                    <div
                      key={i}
                      className={cn(
                        'flex',
                        msg.role === 'user' ? 'justify-end' : 'justify-start',
                      )}
                    >
                      <div
                        className={cn(
                          'max-w-[85%] text-xs leading-relaxed px-3 py-2 rounded-xl',
                          msg.role === 'user'
                            ? 'bg-gradient-primary text-white rounded-br-sm'
                            : 'glass border border-border/40 text-foreground rounded-bl-sm',
                        )}
                      >
                        {msg.content}
                      </div>
                    </div>
                  ))
                )}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="glass border border-border/40 px-3 py-2 rounded-xl rounded-bl-sm">
                      <div className="flex gap-1">
                        {[0, 1, 2].map((i) => (
                          <span
                            key={i}
                            className="w-1.5 h-1.5 rounded-full bg-primary animate-bounce"
                            style={{ animationDelay: `${i * 0.15}s` }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                )}
                <div ref={bottomRef} />
              </div>

              {/* Input */}
              <div className="p-3 border-t border-border/30 flex items-center gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKey}
                  placeholder="Ask about skills, projects…"
                  disabled={isLoading}
                  className="flex-1 text-xs px-3 py-2 rounded-lg bg-muted/60 border border-border/60 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary/40 disabled:opacity-50 transition-all"
                />
                <button
                  onClick={handleSend}
                  disabled={!input.trim() || isLoading}
                  className="p-2 rounded-lg bg-gradient-primary text-white disabled:opacity-40 hover:shadow-neon-blue transition-all duration-200"
                  aria-label="Send message"
                >
                  <Send className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FAB toggle button */}
      <motion.button
        onClick={() => setOpen((v) => !v)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={cn(
          'fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full',
          'bg-gradient-primary shadow-neon-blue',
          'flex items-center justify-center',
          'transition-all duration-300',
        )}
        aria-label={open ? 'Close AI chat' : 'Open AI chat'}
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.span key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
              <ChevronDown className="h-6 w-6 text-white" />
            </motion.span>
          ) : (
            <motion.span key="bot" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
              <Bot className="h-6 w-6 text-white" />
            </motion.span>
          )}
        </AnimatePresence>
        {/* Ping indicator */}
        {!open && (
          <span className="absolute top-0 right-0 w-3.5 h-3.5 rounded-full bg-neon-green border-2 border-background animate-glow-pulse" />
        )}
      </motion.button>
    </>
  );
};

export default AIWidget;
