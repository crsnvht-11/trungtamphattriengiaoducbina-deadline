// Danh sách câu hỏi toán
let questions = [
  {q: "2 + 3 = ?", a: "5"},
  {q: "5 - 2 = ?", a: "3"},
  {q: "4 + 6 = ?", a: "10"},
  {q: "9 - 7 = ?", a: "2"},
  {q: "3 + 7 = ?", a: "10"}
];
let currentQuestion;

// Hiển thị khu vực toán
function showQuiz() {
  document.getElementById("quiz").classList.remove("hidden");
  nextQuestion();
}

// Chọn câu hỏi ngẫu nhiên
function nextQuestion() {
  currentQuestion = questions[Math.floor(Math.random() * questions.length)];
  document.getElementById("question").innerText = "Câu hỏi: " + currentQuestion.q;
  document.getElementById("answer").value = "";
  document.getElementById("result").innerText = "";
}

// Kiểm tra đáp án
function checkAnswer() {
  let answer = document.getElementById("answer").value.trim();
  let result = document.getElementById("result");

  if(answer === currentQuestion.a) {
    result.innerHTML = "✅ Chính xác! Mở quà ngay 🎁";
    document.getElementById("soundCorrect").play();
    document.getElementById("giftBox").classList.remove("hidden");
  } else {
    result.innerHTML = "❌ Sai rồi, thử lại nào!";
    document.getElementById("soundWrong").play();
  }
}

// Mở quà
function openGift() {
  document.getElementById("giftBox").classList.add("hidden");
  let surprise = document.getElementById("surprise");
  let gifts = ["🍭 Cây kẹo mút", "🧸 Gấu bông dễ thương"];
  let gift = gifts[Math.floor(Math.random() * gifts.length)];
  surprise.classList.remove("hidden");
  surprise.innerHTML = "🎉 Bạn nhận được: " + gift + " 🎉";
  document.getElementById("songCandy").play();
  setTimeout(nextQuestion, 5000);
}

// Luyện chữ đẹp
function goToWriting() {
  window.open("https://www.youtube.com/results?search_query=luyện+chữ+đẹp+cho+trẻ+em", "_blank");
}

// Phát âm chuẩn
function goToPronunciation() {
  let words = ["mẹ", "ba", "bạn", "bé", "nhà", "cá", "chim", "hoa", "sách", "vở"];
  let list = words.map(w => `<button onclick="speakWord('${w}')">${w}</button>`).join(" ");
  document.getElementById("quiz").innerHTML = "<h2>🗣️ Luyện phát âm</h2>" + list;
}

function speakWord(word) {
  let utterance = new SpeechSynthesisUtterance(word);
  utterance.lang = "vi-VN";
  speechSynthesis.speak(utterance);
}

// Hành trang vào lớp 1
function showPrep() {
  alert("📘 Bé cần gì khi đi vào lớp 1?");
}
