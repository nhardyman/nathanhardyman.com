document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.querySelector(".menu-button");
    const sidebar = document.querySelector(".sidebar");
    const menuIcon = menuButton.querySelector(".menu-icon");

    let menuOpen = false;

    menuButton.addEventListener("click", function () {
        menuOpen = !menuOpen;
        sidebar.classList.toggle("visible");

        // Swap the image source
        menuIcon.src = menuOpen ? "images/menu2.png" : "images/menu.png";
    });

    // Select gallery images
    const images = document.querySelectorAll(".gallery-item img");
    const captions = document.querySelectorAll(".gallery-item figcaption"); 
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
    const modalCaption = document.getElementById("modalCaption");
    const closeButton = document.getElementById("closeModal");
    const prevButton = document.getElementById("prevImage");
    const nextButton = document.getElementById("nextImage");

    let currentIndex = 0;

    function openModal(index) {
        modal.style.display = "flex";
        modalImg.src = images[index].src;
        modalCaption.textContent = captions[index].textContent;
        currentIndex = index;
    }

    function closeModal() {
        modal.style.display = "none";
    }

    function changeImage(direction) {
        currentIndex += direction;
        if (currentIndex < 0) currentIndex = images.length - 1;
        if (currentIndex >= images.length) currentIndex = 0;
        updateModal();
    }

    function updateModal() {
        modalImg.src = images[currentIndex].src;
        modalCaption.textContent = captions[currentIndex].textContent;
    }

    // Attach event listeners to images
    images.forEach((img, index) => {
        img.addEventListener("click", () => openModal(index));
    });

    // Event listeners for modal controls
    closeButton.addEventListener("click", closeModal);
    prevButton.addEventListener("click", () => changeImage(-1));
    nextButton.addEventListener("click", () => changeImage(1));

    // Keyboard navigation
    document.addEventListener("keydown", function(event) {
        if (modal.style.display === "flex") {
            if (event.key === "Escape") closeModal();
            if (event.key === "ArrowLeft") changeImage(-1);
            if (event.key === "ArrowRight") changeImage(1);
        }
    });
});
