// Menunggu seluruh konten HTML dimuat sebelum menjalankan JavaScript
document.addEventListener('DOMContentLoaded', function () {

    // --- Fungsionalitas Hamburger Menu untuk Mobile ---
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    // Cek jika elemen ditemukan sebelum menambahkan event listener
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // Menutup menu mobile saat link di-klik
        document.querySelectorAll('.nav-links li a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
    }

    // --- Fungsionalitas Filter Produk ---
    const filterButtons = document.querySelectorAll('.filter-btn');
    const productCards = document.querySelectorAll('.product-card');

    if (filterButtons.length > 0 && productCards.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', function () {
                // Mengatur status tombol 'active'
                filterButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');

                const filterValue = this.getAttribute('data-filter');

                // Logika untuk menampilkan atau menyembunyikan kartu
                productCards.forEach(card => {
                    const cardCategory = card.getAttribute('data-category');

                    if (filterValue === 'all' || filterValue === cardCategory) {
                        // Menggunakan timeout kecil agar grid bisa mengatur ulang layout sebelum animasi
                        setTimeout(() => {
                           card.classList.remove('hide');
                        }, 0);
                    } else {
                        card.classList.add('hide');
                    }
                });
            });
        });
    }
});