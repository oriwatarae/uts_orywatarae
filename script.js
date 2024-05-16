function showContent(id) {
  // Menyembunyikan semua konten
  var contents = document.querySelectorAll('.content > div');
  contents.forEach(function(content) {
    content.classList.add('hidden');
  });
  
  // Menampilkan konten yang dipilih
  var selectedContent = document.getElementById(id + 'Content');
  selectedContent.classList.remove('hidden');
}
