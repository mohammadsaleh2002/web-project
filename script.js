document.addEventListener("DOMContentLoaded", function() {
    // گرفتن تمامی لینک‌های ناوبری
    var navLinks = document.querySelectorAll("nav ul li a");
    
    // گرفتن تمامی بخش‌ها
    var sections = document.querySelectorAll("section");
    
    // افزودن رویداد کلیک به هر لینک
    navLinks.forEach(function(link) {
        link.addEventListener("click", function(event) {
            event.preventDefault(); // جلوگیری از رفتار پیش‌فرض لینک
            
            // گرفتن بخش هدف از طریق href لینک
            var targetId = link.getAttribute("href").substring(1);
            var targetSection = document.getElementById(targetId);
            
            // پنهان کردن تمامی بخش‌ها
            sections.forEach(function(section) {
                section.style.display = "none";
            });
            
            // نمایش بخش هدف
            targetSection.style.display = "block";
        });
    });
    
    // به صورت پیش‌فرض نمایش اولین بخش
    sections.forEach(function(section, index) {
        if (index !== 0) {
            section.style.display = "none";
        }
    });
});
