// Fungsi untuk menggulir ke bagian yang ditentukan
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }
  
  // Dapatkan semua link di navbar
  const navLinks = document.querySelectorAll('.nav-menu a');
  
  // Tambahkan event listener ke setiap link
  navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const targetId = link.getAttribute('href').substring(1); // Hapus '#'
      scrollToSection(targetId);
    });
  });
  