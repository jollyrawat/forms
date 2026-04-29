
document.addEventListener("DOMContentLoaded", function () {

    // =====================
    // AGE CALCULATION FIXED
    // =====================
    const dob = document.getElementById("dob");
    const age = document.getElementById("age");
  
    dob.addEventListener("change", function () {
      if (!this.value) return;
  
      let birth = new Date(this.value);
      let today = new Date();
  
      let calcAge = today.getFullYear() - birth.getFullYear();
      let m = today.getMonth() - birth.getMonth();
  
      if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
        calcAge--;
      }
  
      age.value = calcAge;
    });
  
    // =====================
    // FORM VALIDATION
    // =====================
    document.getElementById("form").addEventListener("submit", function (e) {
  
      e.preventDefault();
  
      let inputs = document.querySelectorAll("input, select, textarea");
  
      let password = document.getElementById("password").value;
      let confirmPassword = document.getElementById("confirmPassword").value;
  
      let strong = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;
  
      // EMPTY CHECK
      for (let input of inputs) {
        if (input.value.trim() === "") {
          alert("⚠️ Please fill all fields!");
          return;
        }
      }
  
      // PASSWORD CHECK
      if (!strong.test(password)) {
        alert("❌ Weak password!");
        return;
      }
  
      // CONFIRM PASSWORD
      if (password !== confirmPassword) {
        alert("❌ Passwords do not match!");
        return;
      }
  
      alert("✅ Form submitted successfully!");
  
      this.reset();
      age.value = "";
    });
  
  });