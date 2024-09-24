import data from "./data.json";

function App() {
  // Category colors map
  const dataCategoryColors = {
    Reaction: "hsl(0, 100%, 67%)", // lightred
    Memory: "hsl(39, 100%, 56%)", // orangeyellow
    Verbal: "hsl(166, 100%, 37%)", // greenteal
    Visual: "hsl(234, 85%, 45%)", // cobaltblue
  };

  // Helper function to convert HSL to a color with opacity
  const getBackgroundColorWithOpacity = (hslColor, opacity) => {
    // Extract the HSL values and apply opacity
    const [h, s, l] = hslColor.match(/\d+/g).map((val) => parseInt(val, 10));
    return `hsla(${h}, ${s}%, ${l}%, ${opacity})`;
  };

  return (
    <section className="font-hanken h-screen flex items-center justify-center">
      {/* Card */}
      <div className="max-w-[80%] md:max-w-[480px] flex shadow-lg rounded-2xl shadow-blue-100 flex-col md:flex-row">
        <div
          className=" md:w-1/2 bg-gradient-to-b from-lightslateblue to-lightroyalblue rounded-2xl
        flex flex-col items-center justify-center gap-4 px-4 py-8"
        >
          <p className="text-lightlavender font-medium font-paragraph">
            Your Result
          </p>
          <h1
            className="rounded-full flex flex-col w-32 h-32 items-center justify-center
           p-8 bg-gradient-to-t from-persianblue to-violetblue"
          >
            <span className="text-4xl font-bold text-white">76</span>
            <span className="text-lightlavender text-xs">of 100</span>
          </h1>
          <p className="text-white font-bold text-xl">Great</p>
          <p className="text-center text-xs text-lightlavender">
            You scored higher than 65% of the people who have taken these tests.
          </p>
        </div>
        <div className="flex-1 px-4 py-8 flex flex-col gap-4">
          <p className="text-darkgray font-bold">Summary</p>
          <ul className="flex flex-col gap-2">
            {data.map((item) => (
              <li
                key={item.score}
                // Apply background color with opacity and text color
                className="flex items-center rounded justify-between p-2"
                style={{
                  backgroundColor: getBackgroundColorWithOpacity(
                    dataCategoryColors[item.category],
                    0.1 // Set opacity to 10%
                  ),
                  color: dataCategoryColors[item.category], // Text color
                }}
              >
                <div className="flex items-center space-x-2">
                  <img src={item.icon} alt="Icon" />
                  <span className="">{item.category}</span>
                </div>
                <div>
                  <span className="text-darkgray font-bold">{item.score}</span>
                  <span className="text-gray-400 font-bold">/100</span>
                </div>
              </li>
            ))}
          </ul>
          <button
            className="bg-darkgray text-white rounded-full
          py-2 px-2 text-sm hover:bg-gradient-to-b from-violetblue to-lightroyalblue"
          >
            Continue
          </button>
        </div>
      </div>
    </section>
  );
}

export default App;
