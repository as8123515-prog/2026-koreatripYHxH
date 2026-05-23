export default function KoreaTripItinerary() {
  const expenses = [
    { item: "機票", cost: 12000 },
    { item: "住宿", cost: 8000 },
    { item: "演唱會", cost: 6500 },
    { item: "交通", cost: 2500 },
    { item: "餐飲", cost: 4000 },
    { item: "購物", cost: 5000 },
  ];

  const total = expenses.reduce((sum, item) => sum + item.cost, 0);

  const itinerary = [
    {
      date: "6/19（五）",
      title: "抵達首爾 ✈️",
      items: [
        "15:15 長榮航空出發",
        "18:45 抵達韓國首爾",
        "入住飯店、附近晚餐",
        "晚上可逛弘大或明洞"
      ]
    },
    {
      date: "6/20（六）",
      title: "仁川亞運主場館 — 克拉島演唱會 🎤",
      items: [
        "上午首爾市區自由行",
        "下午前往仁川亞運主場館",
        "參加克拉島活動",
        "演唱會結束後返回首爾"
      ]
    },
    {
      date: "6/21（日）",
      title: "第二天克拉島 💎",
      items: [
        "睡到自然醒 ☕",
        "中午前往仁川",
        "第二天克拉島活動",
        "晚上回飯店整理行李"
      ]
    },
    {
      date: "6/22（一）",
      title: "回台灣 ✈️",
      items: [
        "清晨前往機場",
        "09:15 濟州航空起飛",
        "10:55 抵達台灣"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-100 via-pink-50 to-sky-100 p-6 text-gray-800">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <div className="inline-block mb-4 px-4 py-2 rounded-full bg-gradient-to-r from-rose-400 to-sky-400 text-white font-semibold shadow-lg">
            💎 SEVENTEEN CARAT TRIP 💎
          </div>

          <h1 className="text-5xl font-black mb-3 bg-gradient-to-r from-rose-500 to-sky-500 bg-clip-text text-transparent">
            🇰🇷 首爾克拉島行程表
          </h1>

          <p className="text-lg text-gray-600 mb-4">
            2026 / 6 / 19 ～ 6 / 22
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {itinerary.map((day, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur rounded-3xl shadow-xl p-6 border border-white"
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold">{day.date}</h2>
                <span className="text-sm bg-pink-200 text-pink-800 px-3 py-1 rounded-full">
                  Day {index + 1}
                </span>
              </div>

              <h3 className="text-xl font-semibold mb-4 text-pink-600">
                {day.title}
              </h3>

              <ul className="space-y-3">
                {day.items.map((item, i) => (
                  <li
                    key={i}
                    className="bg-gray-50 rounded-2xl px-4 py-3 shadow-sm"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="bg-white/80 rounded-3xl p-6 shadow-xl">
            <h2 className="text-2xl font-bold mb-4">☁️ 韓國天氣預估</h2>

            <div className="space-y-4">
              <div className="bg-sky-50 rounded-2xl p-4 flex justify-between items-center">
                <div>
                  <p className="font-semibold">6/19 首爾</p>
                  <p className="text-sm text-gray-500">多雲轉晴</p>
                </div>
                <div className="text-2xl">24°C</div>
              </div>

              <div className="bg-rose-50 rounded-2xl p-4 flex justify-between items-center">
                <div>
                  <p className="font-semibold">6/20 仁川</p>
                  <p className="text-sm text-gray-500">晴時多雲</p>
                </div>
                <div className="text-2xl">26°C</div>
              </div>
            </div>
          </div>

          <div className="bg-white/80 rounded-3xl p-6 shadow-xl">
            <h2 className="text-2xl font-bold mb-4">✈️ 航班資訊</h2>

            <div className="space-y-4">
              <div className="bg-emerald-50 rounded-2xl p-5">
                <h3 className="font-bold text-lg mb-2">去程｜長榮航空</h3>
                <p>6/19 15:15 ～ 18:45</p>
              </div>

              <div className="bg-sky-50 rounded-2xl p-5">
                <h3 className="font-bold text-lg mb-2">回程｜濟州航空</h3>
                <p>6/22 09:15 ～ 10:55</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 bg-white/80 rounded-3xl p-6 shadow-xl">
          <h2 className="text-2xl font-bold mb-6">💰 花費統計</h2>

          <div className="space-y-4">
            {expenses.map((expense, index) => (
              <div
                key={index}
                className="flex items-center justify-between bg-gradient-to-r from-rose-50 to-sky-50 rounded-2xl px-5 py-4"
              >
                <span className="font-medium">{expense.item}</span>
                <span className="font-bold text-lg">
                  NT$ {expense.cost.toLocaleString()}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-6 bg-gradient-to-r from-rose-400 to-sky-400 text-white rounded-3xl p-6 text-center shadow-lg">
            <p className="text-lg mb-2">預估總花費</p>
            <p className="text-4xl font-black">
              NT$ {total.toLocaleString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
