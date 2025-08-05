document.getElementById("eventForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Clear all previous error messages
  document.querySelectorAll(".error").forEach(el => el.textContent = "");
  document.getElementById("successMessage").textContent = "";

  let isValid = true;

  // Get form field values
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const age = parseInt(document.getElementById("age").value);
  const genderElement = document.querySelector('input[name="gender"]:checked');
  const gender = genderElement ? genderElement.value : "";
  const category = document.getElementById("category").value;
  const notes = document.getElementById("notes").value.trim();

  // Client-side validations
  if (!/^[A-Za-z\s]{2,}$/.test(name)) {
    document.getElementById("nameError").textContent = "Enter a valid name";
    isValid = false;
  }

  if (!/^[\w.-]+@[\w.-]+\.\w{2,}$/.test(email)) {
    document.getElementById("emailError").textContent = "Enter a valid email";
    isValid = false;
  }

  if (!/^\d{10}$/.test(phone)) {
    document.getElementById("phoneError").textContent = "Enter 10-digit phone";
    isValid = false;
  }

  if (isNaN(age) || age < 18) {
    document.getElementById("ageError").textContent = "Must be 18 or older";
    isValid = false;
  }

  if (!gender) {
    document.getElementById("genderError").textContent = "Select gender";
    isValid = false;
  }

  if (category === "") {
    document.getElementById("categoryError").textContent = "Select category";
    isValid = false;
  }

  // If everything is valid, send data to backend
  if (isValid) {
    fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, phone, age, gender, category, notes }),
    })
      .then((res) => {
        if (res.ok) {
          
          window.location.href = "success.html";
        } else {
          throw new Error("Failed");
        }
      })
      .catch(() => {
        alert("Submission failed. Please try again.");
      });
  }
});
