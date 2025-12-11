// Mobile menu
const menuBtn = document.getElementById("menuBtn");
const mobileNav = document.getElementById("mobileNav");

if (menuBtn){
    menuBtn.addEventListener("click", () => {
        mobileNav.classList.toggle("show");
    });
}

// Smooth scroll
document.querySelectorAll("a[href^='#']").forEach(link => {
    link.addEventListener("click", function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Dark mode
const toggleBtn = document.getElementById("darkToggle");
toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    localStorage.setItem("darkMode", document.body.classList.contains("dark-mode"));
});

// Load dark mode
if (localStorage.getItem("darkMode") === "true"){
    document.body.classList.add("dark-mode");
}

// Contact form – lưu vào LocalStorage
const contactForm = document.getElementById("contactForm");

if (contactForm){
    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const contactData = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            message: document.getElementById("message").value,
            time: new Date().toLocaleString()
        };

        let list = JSON.parse(localStorage.getItem("contactList")) || [];
        list.push(contactData);
        localStorage.setItem("contactList", JSON.stringify(list));

        alert("Đã gửi thành công! Dữ liệu đã lưu vào LocalStorage.");
        contactForm.reset();
    });
}
