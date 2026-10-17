window.addEventListener('DOMContentLoaded', () => {
  const stickyHeader = document.getElementById('stickySearchHeader');
  
  window.addEventListener('scroll', () => {
    // Ubah angka 420 ini jika dirasa masih kurang pas
    // Semakin besar angkanya, semakin tunggu sampai bottom sheet ditarik lebih tinggi ke atas
    if (window.scrollY > 420) {
      stickyHeader.classList.add('show'); 
    } else {
      stickyHeader.classList.remove('show'); 
    }
  });
});
