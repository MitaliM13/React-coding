/* eslint-disable no-useless-escape */
import { useState } from "react";

function TextEditor() {

    const [markdown, setMarkdown] = useState('');

  const handleChange = (e) => {
    setMarkdown(e.target.value);
  };

  // Function to convert markdown to HTML
  const convertMarkdownToHTML = (markdownText) => {
    // Convert headings
    let htmlText = markdownText.replace(/^###### (.*)/gm, '<h6>$1</h6>');
    htmlText = htmlText.replace(/^##### (.*)/gm, '<h5>$1</h5>');
    htmlText = htmlText.replace(/^#### (.*)/gm, '<h4>$1</h4>');
    htmlText = htmlText.replace(/^### (.*)/gm, '<h3>$1</h3>');
    htmlText = htmlText.replace(/^## (.*)/gm, '<h2>$1</h2>');
    htmlText = htmlText.replace(/^# (.*)/gm, '<h1>$1</h1>');

    // Convert bold text
    htmlText = htmlText.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

    // Convert italic text
    htmlText = htmlText.replace(/\*(.*?)\*/g, '<em>$1</em>');

    // Convert unordered list
    htmlText = htmlText.replace(/^\- (.*)/gm, '<ul><li>$1</li></ul>');
    htmlText = htmlText.replace(/(<ul><li>.*<\/li><\/ul>)/g, '<ul>$1</ul>'); // Ensure only one <ul> tag

    // Convert line breaks
    htmlText = htmlText.replace(/\n/g, '<br/>');

    return htmlText;
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', padding: '20px' }}>
      <h1>Markdown Editor</h1>
      <textarea
        style={{ width: '100%', height: '200px', padding: '10px' }}
        placeholder="Enter Markdown"
        value={markdown}
        onChange={handleChange}
      />
      <div style={{ marginTop: '20px' }}>
        <h2>Preview</h2>
        <div
          style={{
            border: '1px solid #ddd',
            padding: '10px',
            backgroundColor: '#f9f9f9',
            minHeight: '200px',
          }}
          dangerouslySetInnerHTML={{ __html: convertMarkdownToHTML(markdown) }}
        />
      </div>
    </div>
  )
}

export default TextEditor