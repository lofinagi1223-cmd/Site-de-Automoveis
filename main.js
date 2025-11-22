// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    }); 
  });
});

// Form submission handler (Mock)
const form = document.getElementById('leadForm');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    
    // Simulate API call
    const btn = form.querySelector('button');
    const originalText = btn.innerText;
    btn.innerText = 'Enviando...';
    btn.disabled = true;

    setTimeout(() => {
      alert('Obrigado! Recebemos seus dados e entraremos em contato em breve.');
      form.reset();
      btn.innerText = originalText;
      btn.disabled = false;
    }, 1500);
  });
}

// Vehicle contact button handler
window.contactVehicle = (vehicleName) => {
  const message = `Olá, tenho interesse no veículo: ${vehicleName}`;
  const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, '_blank');
};
