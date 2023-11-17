import React from 'react';
import './App.css';
import openai from 'openai';

function App() {
  const [userTextInput, setUserTextInput] = React.useState('');
  const [userHistory, setUserHistory] = React.useState([]);

  const handleClick = async () => {
    // const assistant = await openai.beta.assistants.create({
    //   name: "Help me with my homework",
    //   instructions: "You are a teacher assistant. You teach the math behind artificial intelligence. You are diligent, often checking your answer several times before responding and you explain your results. ",
    //   tools: [{ type: "code_interpreter" },{ type: "retrieval" },{ type: "function" }],
    //   model: "gpt-4-1106-preview"
    // });
    // const thread = await openai.beta.threads.create();
    // const message = await openai.beta.threads.messages.create(
    //   thread.id,
    //   {
    //     role: "user",
    //     content: userTextInput
    //   }
    // );
    // const run = await openai.beta.threads.runs.create(
    //   thread.id,
    //   {
    //     assistant_id: assistant.id,
    //     instructions: "Please address the user as Jane Doe. The user has a premium account."
    //   }
    // );
    // const runStatus = await openai.beta.threads.runs.retrieve(
    //   thread.id,
    //   run.id
    // );
    // console.log("Status: ", runStatus)
  };
  const renderHistory = () => {
    return userHistory.map((history, i) => {
      return (
        <li key={i} className="mb-2">
          {history}
        </li>
      );
    });
  };

  return (
    <body className="bg-gray-100">
      <div className="flex">
        <div className="w-64 bg-white p-5">
          <div className="text-gray-700 text-lg font-semibold mb-8">ChatGPT</div>
          <div className="mb-4 text-gray-600">Explore</div>
          <div className="text-gray-900 font-medium mb-4">Previous History</div>

          <ul className="text-gray-600 text-sm">{renderHistory()}</ul>
        </div>

        <div className="flex-1 p-10">
          <div className="flex justify-between items-start">
            <div className="flex-1">
              <div className="text-gray-800 text-2xl font-semibold mb-4">GPT-Builders' Assistant</div>
              <div className="text-gray-600 text-lg mb-6">
                Effortless GPT Creation : Your Go-To Assistant for Tailoring Perfect Descriptions, Instructions, and
                Behaviors for Custom GPTs
              </div>
              <div className="text-gray-500 text-sm">By gendojo.ai</div>
            </div>
            <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center">
              <img
                alt="Placeholder of a pen on paper, representing the GPT-Builders' Assistant logo."
                className="w-8 h-8"
                height="64"
                src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-hYXKrybBQnM9jqEaIWdStzgO/user-p4teEWzBpND22zUhcT0hcPZQ/img-gkgm5JE1FLsBMoAjCrehumkp.png?st=2023-11-16T09%3A41%3A53Z&amp;se=2023-11-16T11%3A41%3A53Z&amp;sp=r&amp;sv=2021-08-06&amp;sr=b&amp;rscd=inline&amp;rsct=image/png&amp;skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&amp;sktid=a48cca56-e6da-484e-a814-9c849652bcb3&amp;skt=2023-11-16T10%3A40%3A12Z&amp;ske=2023-11-17T10%3A40%3A12Z&amp;sks=b&amp;skv=2021-08-06&amp;sig=2ixLT3EYzJWSgInUDwfTaJE1todcgC3XquNsgUtNHgs%3D"
                width="64"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <button
              className="bg-blue-500 text-white py-2 px-4 rounded"
              onClick={() => {
                handleClick();
              }}
            >
              I want to build a GPT for [specific task].
            </button>
            <button className="bg-blue-500 text-white py-2 px-4 rounded">
              Can you assist me in developing a GPT for [specific purpose].
            </button>
            <button className="bg-blue-500 text-white py-2 px-4 rounded">
              I need help creating a GPT that can [specific function].
            </button>
            <button className="bg-blue-500 text-white py-2 px-4 rounded">
              I'm planning to create a GPT for [specific application].
            </button>
          </div>
          <div className="flex items-center justify-between mt-10">
            <div className="flex items-center bg-white border rounded-full py-2 px-4">
              <i className="fas fa-microphone text-gray-500 mr-3"></i>
              <input
                className="outline-none"
                placeholder="Message GPT-Builders' Assistant..."
                type="text"
                onChange={(e) => setUserTextInput(e.target.value)}
              />
            </div>
            <div className="flex items-center">
              <button className="text-blue-500 font-semibold">Get citation</button>
              <i className="fas fa-cog text-gray-500 ml-6"></i>
              <i className="fas fa-question-circle text-gray-500 ml-4"></i>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
}

export default App;
