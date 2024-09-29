'use client'
import React, { useState } from 'react';
import ollama from 'ollama/browser'

const ChatWindow: React.FC = () => {
  const [inputValue, setInputValue] = useState(''); // Store the current input value
  const [messages, setMessages] = useState<string[]>([]); // Store all messages

  // Handle key press in the input field
  const handleKeyPress = async (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault(); // Prevents the default behavior of Enter key
      if (inputValue.trim() !== '') { // Only add non-empty messages
        setMessages([...messages, inputValue]); // Add the message to the list
        const response = await ollama.chat({
          model: 'llama3.2',
          messages: [{ role: 'user', content: inputValue }],
        });
        setMessages([...messages, response.message.content]);
        setInputValue(''); // Clear the input field
      }
    }
  };

  return (
    <div style={styles.container}>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={styles.header}>
          <h2>Local LLM Chatbot</h2>
        </div>
          {messages.map((message, index) => (
            <div key={index} style={styles.message}>
              {message}
            </div>
          ))}
        <div style={styles.chatArea} id="chatWindow">
        </div>
        <div style={styles.inputArea}>
          <input type="text" 
          placeholder="Type a message..."
          value={inputValue}
          style={styles.input}
          onChange={(e) => setInputValue(e.target.value)} // Update inputValue on change
          onKeyPress={handleKeyPress} // Trigger when "Enter" is pressed
          style={styles.input} />
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh', // Full viewport height
    width: '100vw',  // Full viewport width
    backgroundColor: '#f1f1f1',
  },
  header: {
    padding: '10px',
    backgroundColor: '#007bff',
    color: 'white',
    textAlign: 'center',
  },
  chatArea: {
    flex: 1, // This will make the chat area grow and fill the remaining space
    overflowY: 'auto', // Enable scrolling for long chat messages
    padding: '10px',
    backgroundColor: '#fff',
    //height: '80vh', // Full viewport height
    //width: '80vw',  // Full viewport width
    borderBottom: '1px solid #ccc',
  },
  inputArea: {
    display: 'flex',
    padding: '10px',
    backgroundColor: '#f1f1f1',
    borderTop: '1px solid #ccc',
  },
  input: {
    flex: 1,
    padding: '10px',
    fontSize: '16px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    marginRight: '10px',
    color: 'black',
  },
  sendButton: {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  message: {
    marginBottom: '10px',
    padding: '8px',
    backgroundColor: '#f1f1f1',
    borderRadius: '5px',
    maxWidth: '80%',
    wordWrap: 'break-word',
    color: 'black',
  },
};

export default ChatWindow;
