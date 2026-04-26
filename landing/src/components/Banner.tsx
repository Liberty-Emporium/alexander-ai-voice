import { ArrowRight } from 'lucide-react';

export function Banner() {
  return (
    <div className="bg-primary/[0.06] border-b border-border backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center h-10 text-sm">
          <a
            href="https://ai-agent-widget-production.up.railway.app"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
          >
            <span>
              Also by Alexander AI:{' '}
              <strong className="text-foreground/90">AI Agent Widget</strong> — add a smart AI assistant to any website in minutes.
            </span>
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </div>
  );
}
