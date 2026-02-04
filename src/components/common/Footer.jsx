import React from 'react';
import packageJson from '../../../package.json';
import './Footer.css';

function Footer({title}) {
    const reactVersion = React.version;
    const viteVersion = packageJson.devDependencies.vite;
  
    // header display
    return(
<div id="footer" className="footer">
  <div className="footer-container">
    <div className="footer-content">
      <div className="footer-section">
        <p className="copyright">
          © 2026 Joanne, Front End Frameworks T0511
        </p>
        <div className="footer-tech">
          <a href="https://react.dev/" target="_blank" rel="noopener noreferrer" className="version-badge">React {reactVersion}</a>
          <a href="https://vite.dev/" target="_blank" rel="noopener noreferrer" className="version-badge">Vite {viteVersion}</a>
        </div>
      </div>
      
      <div className="footer-section credits">
        <p className="design-credit">
          Design assets generated using <strong><a href="https://recraft.ai/" target="_blank" rel="noopener noreferrer"><strong>Recraft</strong></a></strong>
        </p>
        <p className="design-credit">
          Development assisted by <strong><a href="https://github.com/features/copilot" target="_blank" rel="noopener noreferrer">GitHub Copilot</a></strong> with <strong><a href="https://www.anthropic.com/claude/sonnet" target="_blank" rel="noopener noreferrer">Claude Sonnet</a></strong> and <strong><a href="https://search.google/intl/en-CA/ways-to-search/ai-overviews/" target="_blank" rel="noopener noreferrer">Google AI Overview</a></strong>
        </p>
      </div>
    </div>
  </div>
</div>
    );
}

export default Footer