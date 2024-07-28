function calculateAge() {
    const dobInput = document.getElementById('dob').value;
    if (!dobInput) {
      alert('Please enter your date of birth');
      return;
    }
  
    const dob = new Date(dobInput);
    const today = new Date();
  
    let age = today.getFullYear() - dob.getFullYear();
    const monthDiff = today.getMonth() - dob.getMonth();
    const dayDiff = today.getDate() - dob.getDate();
  
    // Adjust age if the birth date has not occurred yet this year
    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
      age--;
    }
  
    document.getElementById('result').textContent = `Your age is ${age} years old`;
  }
  