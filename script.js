document.addEventListener("DOMContentLoaded", function() {
    var navLinks = document.querySelectorAll("nav ul li a");
    
    var sections = document.querySelectorAll("section");
    
    navLinks.forEach(function(link) {
        link.addEventListener("click", function(event) {
            event.preventDefault(); // جلوگیری از رفتار پیش‌فرض لینک
            
            var targetId = link.getAttribute("href").substring(1);
            var targetSection = document.getElementById(targetId);
            
            sections.forEach(function(section) {
                section.style.display = "none";
            });
            
            targetSection.style.display = "block";
        });
    });
    
    sections.forEach(function(section, index) {
        if (index !== 0) {
            section.style.display = "none";
        }
    });
});
