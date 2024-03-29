// faq js
const btns = document.querySelectorAll(".acc-btn");
function accordion() {
  this.classList.toggle("is-open");
  const content = this.nextElementSibling;
  if (content.style.maxHeight) content.style.maxHeight = null;
  else content.style.maxHeight = content.scrollHeight + "px";
}
btns.forEach((el) => el.addEventListener("click", accordion));

// scrl1
function scrollToCarousel() {
  const carouselElement = document.getElementById("carousel");
  carouselElement.scrollIntoView({ behavior: "smooth" });
}

//scrl2
function scrollToFitur() {
  const carouselElement = document.getElementById("fitur");
  carouselElement.scrollIntoView({ behavior: "smooth" });
}

//scrl3
function scrollToFAQ() {
  const carouselElement = document.getElementById("faq");
  carouselElement.scrollIntoView({ behavior: "smooth" });
}

//icon
$(document).ready(function () {
  $("#toggle-btn").click(function () {
    $("#toggle-icon").toggleClass("bi-chevron-down bi-chevron-up");
    $("#item").toggleClass("open");
  });
});

// loginlte
document.getElementById('signInButton').addEventListener('click', function(event) {
          event.preventDefault(); // Prevent form submission
          const email = document.getElementById('emailInput').value;
          const password = document.getElementById('passwordInput').value;

          fetch('https://fakestoreapi.com/users')
              .then(res => res.json())
              .then(users => {
                  // Check if there's a user with the matching email and password
                  const user = users.find(user => user.email === email && user.password === password);
                  if (user) {
                      console.log('Login successful for:', user);
                      // Redirect to dashboard.html
                      window.location.href = 'product-admin.html';
                  } else {
                      alert('Login failed! User not found or password does not match.');
                  }
              })
              .catch(err => {
                  console.error('Error:', err);
                  alert('An error occurred while fetching user data.');
              });
      });