export function parseMarkdownContent(content: string) {
  const lines = content.split('\n');
  const parsedContent: string[] = [];
  const expertTips: Array<{ tip: string; context?: string }> = [];
  const keyTakeaways: string[] = [];

  let inKeyTakeaways = false;
  let inExpertTip = false;
  let currentTip = '';
  let currentContext = '';

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    // Handle Key Takeaways section
    if (line.startsWith('## Key Takeaways')) {
      inKeyTakeaways = true;
      parsedContent.push(line);
      continue;
    }
    
    if (inKeyTakeaways) {
      if (line.startsWith('## ') && !line.includes('Key Takeaways')) {
        inKeyTakeaways = false;
        parsedContent.push(line);
        continue;
      }
      
      if (line.startsWith('* ') && line.includes('**')) {
        const takeaway = line.replace(/^\* \*\*(.*?)\*\*$/, '$1').trim();
        if (takeaway) {
          keyTakeaways.push(takeaway);
        }
      }
      
      parsedContent.push(line);
      continue;
    }

    // Handle Expert Tips
    if (line.startsWith('> **Kaitaki Expert Tip**:')) {
      inExpertTip = true;
      currentTip = line.replace('> **Kaitaki Expert Tip**:', '').trim();
      continue;
    }
    
    if (inExpertTip) {
      if (line.startsWith('> — ')) {
        currentContext = line.replace('> — ', '').trim();
        expertTips.push({ tip: currentTip, context: currentContext });
        inExpertTip = false;
        currentTip = '';
        currentContext = '';
        continue;
      }
      
      if (line.startsWith('> ')) {
        currentTip += ' ' + line.replace('> ', '').trim();
        continue;
      } else {
        // End of expert tip
        if (currentTip) {
          expertTips.push({ tip: currentTip, context: currentContext });
        }
        inExpertTip = false;
        currentTip = '';
        currentContext = '';
      }
    }

    parsedContent.push(line);
  }

  return {
    content: parsedContent.join('\n'),
    expertTips,
    keyTakeaways
  };
}

export function extractKeyTakeaways(content: string): string[] {
  const lines = content.split('\n');
  const takeaways: string[] = [];
  let inKeyTakeaways = false;

  for (const line of lines) {
    if (line.startsWith('## Key Takeaways')) {
      inKeyTakeaways = true;
      continue;
    }
    
    if (inKeyTakeaways) {
      if (line.startsWith('## ') && !line.includes('Key Takeaways')) {
        break;
      }
      
      if (line.startsWith('* ') && line.includes('**')) {
        const takeaway = line.replace(/^\* \*\*(.*?)\*\*$/, '$1').trim();
        if (takeaway) {
          takeaways.push(takeaway);
        }
      }
    }
  }

  return takeaways;
}

