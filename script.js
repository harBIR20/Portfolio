// current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// form submission
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  
  if (!name || !email || !message) {
    alert('Please fill all fields');
    return;
  }
  
  const subject = encodeURIComponent('Portfolio contact from ' + name);
  const body = encodeURIComponent(message + '\n\n— ' + name + ' (' + email + ')');
  window.location.href = 'mailto:harbir2003@gmail.com?subject=' + subject + '&body=' + body;
});

// mobile menu toggle
const menuBtn = document.getElementById('menuBtn');
if (menuBtn) {
  menuBtn.addEventListener('click', () => {
    const nav = document.querySelector('nav');
    if (nav.style.display === 'flex') {
      nav.style.display = 'none';
      menuBtn.setAttribute('aria-expanded', 'false');
    } else {
      nav.style.display = 'flex';
      menuBtn.setAttribute('aria-expanded', 'true');
    }
  });
}
