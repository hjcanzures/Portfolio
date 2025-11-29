/* BURGER */

function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

/* ACTIVE LINK ON SCROLL / SCROLL SPY */
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120; 
        if (scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});

/* BANNER */

const phoneLink = document.getElementById('phone-number');
let copied = false; 

function showBanner(message) {
    const banner = document.getElementById('copyBanner');
    banner.textContent = message;

    banner.classList.remove('show');
    banner.classList.add('show');

    setTimeout(() => {
        banner.classList.remove('show');
    }, 2000);
}

if (phoneLink) {
    phoneLink.addEventListener('click', function(event) {
        event.preventDefault();
        const phoneNumber = phoneLink.textContent;

        navigator.clipboard.writeText(phoneNumber)
            .then(() => {
                if (!copied) {
                    showBanner(`Phone number copied to clipboard!`);
                    copied = true; 
                } else {
                    showBanner(`Phone number already copied!`);
                }
            })
            .catch(err => {
                console.error('Failed to copy: ', err);
            });
    });
}

