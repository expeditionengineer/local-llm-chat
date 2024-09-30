import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'; // for simulating user events

import OverlayTile from './overlay_tile.tsx'; // Import your component

describe('overlay_tile', () => {
  it('renders a heading', () => {
    render(<OverlayTile routeHref={'chat_window'} titleName={'LLM Chat'} />)
 
    const textOfTile = screen.getByText('LLM Chat')
 
    expect(textOfTile).toBeInTheDocument()
  })
  it('loads another component when the text is clicked', async () => {
    render(<OverlayTile routeHref="chat_window" tileName="LLM Chat" />);

    // Simulate a click on the 'LLM Chat' text
    const textDiv = screen.getByText('LLM Chat');
    userEvent.click(textDiv); // Simulate user click

    // Assert that AnotherComponent is rendered after the click
    const newComponentElement = await screen.findByText('Local LLM Chatbot');
    expect(newComponentElement).toBeInTheDocument();
  });
})
