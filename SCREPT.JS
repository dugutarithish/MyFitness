// Smooth Scroll for Navbar
document.querySelectorAll('.navbar a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Registration Logic
const form = document.getElementById('registrationForm');
const profileSection = document.getElementById('profile');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const age = document.getElementById('age').value;
  const mobile = document.getElementById('mobile').value;
  const height = document.getElementById('height').value;
  const weight = document.getElementById('weight').value;
  const email = document.getElementById('email').value;

  document.getElementById('displayName').textContent = name;
  document.getElementById('displayAge').textContent = age;
  document.getElementById('displayMobile').textContent = mobile;
  document.getElementById('displayHeight').textContent = height + " cm";
  document.getElementById('displayWeight').textContent = weight + " kg";
  document.getElementById('displayEmail').textContent = email;

  document.getElementById('register').style.display = 'none';
  profileSection.style.display = 'block';
  profileSection.scrollIntoView({ behavior: 'smooth' });
});