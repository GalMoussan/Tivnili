import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { WhatsAppInput } from '../WhatsAppInput';

// T007 — WhatsApp Input

describe('T007 — WhatsAppInput', () => {
  beforeEach(() => {
    vi.stubGlobal('open', vi.fn());
  });

  // Acceptance: "Input renders with placeholder text 'Tell me what your business needs →'"
  it('renders with correct placeholder', () => {
    render(<WhatsAppInput />);
    expect(screen.getByPlaceholderText('Tell me what your business needs →')).toBeInTheDocument();
  });

  // Acceptance: "Typing a message and clicking send opens WhatsApp with prefilled message"
  it('opens WhatsApp with typed message on submit', () => {
    render(<WhatsAppInput />);
    const input = screen.getByPlaceholderText('Tell me what your business needs →');
    fireEvent.change(input, { target: { value: 'I need a website' } });
    const sendButton = screen.getByRole('button');
    fireEvent.click(sendButton);
    expect(window.open).toHaveBeenCalledWith(
      expect.stringContaining('wa.me'),
      expect.anything()
    );
    expect(window.open).toHaveBeenCalledWith(
      expect.stringContaining(encodeURIComponent('I need a website')),
      expect.anything()
    );
  });

  // Acceptance: "Empty submit opens WhatsApp without message text"
  it('opens WhatsApp without message when input is empty', () => {
    render(<WhatsAppInput />);
    const sendButton = screen.getByRole('button');
    fireEvent.click(sendButton);
    expect(window.open).toHaveBeenCalledWith(
      expect.stringContaining('wa.me'),
      expect.anything()
    );
  });

  // Acceptance: "Accessible: proper ARIA labels, keyboard submit with Enter"
  it('has proper ARIA labels', () => {
    render(<WhatsAppInput />);
    const input = screen.getByPlaceholderText('Tell me what your business needs →');
    expect(input).toHaveAttribute('aria-label');
    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('aria-label');
  });

  it('submits on Enter key', () => {
    render(<WhatsAppInput />);
    const input = screen.getByPlaceholderText('Tell me what your business needs →');
    fireEvent.change(input, { target: { value: 'Hello' } });
    fireEvent.keyDown(input, { key: 'Enter' });
    expect(window.open).toHaveBeenCalled();
  });
});
