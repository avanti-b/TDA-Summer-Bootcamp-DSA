import { useState } from "react";
import { FaComments } from "react-icons/fa";

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hi! Ask me anything about TDA!", sender: "bot" },
  ]);
  const [input, setInput] = useState("");

  // Simple FAQ responses
  const responses = {
    hello: "Hey there! 👋 How can I help you today?",
    events: "We have amazing events coming up soon! Stay tuned on our Events page.",
    recruitment: "Recruitments usually happen in the start of the semester. Check our Recruitment page for updates!",
    contact: "You can contact us via the Contact page. We’d love to hear from you!",
    default: "I'm still learning 🤖, but check our FAQ or main pages for details!"
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = input.toLowerCase();
    let botResponse = responses.default;

    if (userMessage.includes("hello") || userMessage.includes("hi")) {
      botResponse = responses.hello;
    } else if (userMessage.includes("event")) {
      botResponse = responses.events;
    } else if (userMessage.includes("recruit")) {
      botResponse = responses.recruitment;
    } else if (userMessage.includes("contact")) {
      botResponse = responses.contact;
    }

    setMessages([...messages, { text: input, sender: "user" }]);
    setInput("");

    setTimeout(() => {
      setMessages((prev) => [...prev, { text: botResponse, sender: "bot" }]);
    }, 600);
  };

  return (
    <>
      {/* Floating Button */}
      <button
        className="fixed bottom-6 right-6 bg-blue-500 text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-600 flex items-center space-x-2"
        onClick={() => setOpen(!open)}
      >
        <span className="font-semibold">Ask me?</span>
        <FaComments size={20} />
      </button>

      {/* Chat Window */}
      {open && (
        <div className="fixed bottom-20 right-6 bg-gray-900 text-white w-80 rounded-lg shadow-lg overflow-hidden">
          <div className="p-3 bg-blue-600 font-bold">TDA Chatbot</div>
          <div className="p-3 h-64 overflow-y-auto space-y-2">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`p-2 rounded-lg max-w-[75%] ${
                  msg.sender === "user"
                    ? "bg-blue-500 ml-auto text-right"
                    : "bg-gray-700"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>
          <div className="flex border-t border-gray-700">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              className="flex-grow p-2 bg-gray-800 text-gray-200 outline-none placeholder-gray-400"
            />
            <button
              onClick={handleSend}
              className="px-4 bg-blue-500 hover:bg-blue-600"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}
