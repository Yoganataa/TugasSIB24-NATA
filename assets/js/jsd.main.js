// data
const feedbackData = [];

// display reslut umpannalik
function displayFeedback() {
    const feedbackList = document.getElementById("feedbackItems");
    feedbackList.innerHTML = "";

    // foreach array
    feedbackData.forEach((item, index) => {
        const li = document.createElement("li");
        li.textContent = `${index + 1}. Nama: ${item.name}, Feedback: ${item.feedback}, Rating: ${item.rating}`;
        feedbackList.appendChild(li);
    });
}

// send umpanbalik
function submitFeedback() {
    const name = document.getElementById("name").value;
    const feedback = document.getElementById("feedback").value;
    const rating = document.getElementById("rating").value;

    if (name && feedback && rating) {
        const feedbackItem = {
            name,
            feedback,
            rating
        };

        feedbackData.push(feedbackItem);

        // display
        displayFeedback();

        // reste
        document.getElementById("feedbackForm").reset();
    } else {
        alert("Harap isi semua field sebelum mengirim feedback.");
    }
}

// dowhile
let i = 0;
do {
    console.log("Ini adalah jsdsar ke-" + i);
    i++;
} while (i < 5);

// for
for (let j = 0; j < 3; j++) {
    console.log("Ini adalah jsdsar for ke-" + j);
}
const bend = ["PHP", "PYTHON", "GO"];

// foreach
bend.forEach((be) => {
    console.log("Backend: " + bend);
});
