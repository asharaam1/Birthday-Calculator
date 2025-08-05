function calculateAge() {
    const dobInput = document.getElementById("dob").value;
    const result = document.getElementById("result");

    if (!dobInput) {
        result.innerHTML = "⚠️ Please select your date of birth.";
        return;
    }

    const dob = new Date(dobInput);
    const today = new Date();

    let years = today.getFullYear() - dob.getFullYear();
    let months = today.getMonth() - dob.getMonth();
    let days = today.getDate() - dob.getDate();

    if (days < 0) {
        months--;
        const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
        days += prevMonth;
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    result.innerHTML = `🎉 You are <b>${years}</b> years, <b>${months}</b> months, and <b>${days}</b> days old.`;
}
