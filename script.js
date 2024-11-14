document.addEventListener("DOMContentLoaded", function () {
    // Seção de Modais
    const loginModal = document.getElementById("loginModal");
    const registerModal = document.getElementById("registerPage");
    const forgotPasswordModal = document.getElementById("forgotPasswordModal");

    function openModal(modal) {
        modal.style.display = "flex";
    }

    function closeModal(modal) {
        modal.style.display = "none";
    }

    document.getElementById("loginBtn").onclick = () => openModal(loginModal);
    document.getElementById("registerBtn").onclick = () => openModal(registerModal);

    document.getElementById("registerLink").onclick = (e) => {
        e.preventDefault();
        closeModal(loginModal);
        openModal(registerModal);
    };

    document.getElementById("loginLink").onclick = (e) => {
        e.preventDefault();
        closeModal(registerModal);
        openModal(loginModal);
    };

    document.getElementById("forgotPasswordLink").onclick = (e) => {
        e.preventDefault();
        closeModal(loginModal);
        openModal(forgotPasswordModal);
    };

    document.getElementById("closeLoginModal").onclick = () => closeModal(loginModal);
    document.getElementById("closeRegisterModal").onclick = () => closeModal(registerModal);
    document.getElementById("closeForgotPasswordModal").onclick = () => closeModal(forgotPasswordModal);

    window.onclick = (event) => {
        if (event.target === loginModal) closeModal(loginModal);
        if (event.target === registerModal) closeModal(registerModal);
        if (event.target === forgotPasswordModal) closeModal(forgotPasswordModal);
    };

    // Seção do Banner Rotativo
    let currentSlide = 0;
    const slides = document.querySelectorAll('.carousel-slide > div');
    const slideIndicator = document.getElementById('slideIndicator');

    function showSlide(slideIndex) {
        slides.forEach((slide, index) => {
            slide.style.display = index === slideIndex ? 'block' : 'none';
        });
        updateSlideIndicators(slideIndex);
    }

    function updateSlideIndicators(slideIndex) {
        // Verificar se as bolinhas já foram criadas
        if (slideIndicator && slideIndicator.childElementCount === 0) {
            slides.forEach((_, index) => {
                const dot = document.createElement('span');
                dot.classList.add('dot');
                dot.addEventListener('click', () => {
                    currentSlide = index;
                    showSlide(currentSlide);
                });
                slideIndicator.appendChild(dot);
            });
        }
        // Atualiza a bolinha ativa
        const dots = slideIndicator.querySelectorAll('.dot');
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === slideIndex);
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    document.getElementById("nextSlide").addEventListener("click", nextSlide);
    document.getElementById("prevSlide").addEventListener("click", prevSlide);

    setInterval(nextSlide, 3000);
    showSlide(currentSlide);
});


// Seleciona o botão de alternância
const toggleDarkModeButton = document.getElementById('toggleDarkMode');

// Função para alternar o modo
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    
    // Salva a preferência no localStorage
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
    } else {
        localStorage.setItem('darkMode', 'disabled');
    }
}

// Adiciona o evento de clique ao botão
toggleDarkModeButton.addEventListener('click', toggleDarkMode);

// Verifica a preferência de modo ao carregar a página
if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark-mode');
}

// Função para abrir e fechar os modais
function toggleModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = modal.style.display === 'block' ? 'none' : 'block';
}

// Abrir os modais ao clicar nos botões
document.getElementById('loginBtn').addEventListener('click', () => toggleModal('loginModal'));
document.getElementById('registerBtn').addEventListener('click', () => toggleModal('registerPage'));

// Fechar os modais ao clicar no "X" ou fora deles
function setupCloseModal(modalId, closeButtonId) {
    const modal = document.getElementById(modalId);
    const closeButton = document.getElementById(closeButtonId);

    closeButton.addEventListener('click', () => modal.style.display = 'none');
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
}

setupCloseModal('loginModal', 'closeLoginModal');
setupCloseModal('registerPage', 'closeRegisterModal');
setupCloseModal('forgotPasswordModal', 'closeForgotPasswordModal');

// Alternar entre login e cadastro ao clicar nos links nos modais
document.getElementById('registerLink').addEventListener('click', (e) => {
    e.preventDefault();
    toggleModal('loginModal');
    toggleModal('registerPage');
});

document.getElementById('loginLink').addEventListener('click', (e) => {
    e.preventDefault();
    toggleModal('registerPage');
    toggleModal('loginModal');
});

// Alternar para recuperação de senha
document.getElementById('forgotPasswordLink').addEventListener('click', (e) => {
    e.preventDefault();
    toggleModal('loginModal');
    toggleModal('forgotPasswordModal');
});

// Seleciona os modais e links

const registerPage = document.getElementById("registerPage");
const registerLink = document.getElementById("registerLink");
const loginLink = document.getElementById("loginLink");

// Função para abrir o modal de cadastro e fechar o de login
registerLink.addEventListener("click", function(event) {
    event.preventDefault();
    loginModal.style.display = "none";
    registerPage.style.display = "flex"; // Certifica que o modal de cadastro é exibido como flex
});

// Função para abrir o modal de login e fechar o de cadastro
loginLink.addEventListener("click", function(event) {
    event.preventDefault();
    registerPage.style.display = "none";
    loginModal.style.display = "flex"; // Certifica que o modal de login é exibido como flex
});

// Função para fechar o modal de login
document.getElementById("closeLoginModal").addEventListener("click", function() {
    loginModal.style.display = "none";
});

// Função para fechar o modal de cadastro
document.getElementById("closeRegisterModal").addEventListener("click", function() {
    registerPage.style.display = "none";
});

document.addEventListener("DOMContentLoaded", function () {
    const modals = {
        loginModal: document.getElementById("loginModal"),
        registerModal: document.getElementById("registerPage"),
        forgotPasswordModal: document.getElementById("forgotPasswordModal"),
    };

    const openModal = (modal) => {
        modal.style.display = "flex"; // Exibe o modal com flex para centralizar
        modal.style.position = "fixed";
        modal.style.top = "50%";
        modal.style.left = "50%";
        modal.style.transform = "translate(-50%, -50%)";
    };

    const closeModal = (modal) => {
        modal.style.display = "none";
    };

    // Botões para abrir os modais
    document.getElementById("loginBtn").onclick = () => openModal(modals.loginModal);
    document.getElementById("registerBtn").onclick = () => openModal(modals.registerModal);
    
    // Links para alternar entre login e cadastro dentro dos modais
    document.getElementById("forgotPasswordLink").onclick = () => {
        closeModal(modals.loginModal);
        openModal(modals.forgotPasswordModal);
    };

    document.getElementById("registerLink").onclick = () => {
        closeModal(modals.loginModal);
        openModal(modals.registerModal);
    };

    document.getElementById("loginLink").onclick = () => {
        closeModal(modals.registerModal);
        openModal(modals.loginModal);
    };

    // Botões para fechar os modais
    document.getElementById("closeLoginModal").onclick = () => closeModal(modals.loginModal);
    document.getElementById("closeRegisterModal").onclick = () => closeModal(modals.registerModal);
    document.getElementById("closeForgotPasswordModal").onclick = () => closeModal(modals.forgotPasswordModal);

    // Fechar o modal ao clicar fora dele
    window.onclick = (event) => {
        Object.values(modals).forEach((modal) => {
            if (event.target === modal) closeModal(modal);
        });
    };
});
// Função para abrir o modal com informações do livro
function openBookModal(title, author, originalPrice, discountedPrice, synopsis) {
    const bookModal = document.getElementById("bookModal");

    // Preenchendo o conteúdo do modal
    document.getElementById("modalTitle").innerText = title;
    document.getElementById("modalAuthor").innerText = author;
    document.getElementById("modalOriginalPrice").innerText = "R$ " + originalPrice.toFixed(2);
    document.getElementById("modalDiscountedPrice").innerText = "R$ " + discountedPrice.toFixed(2);

    // Calculando e exibindo o desconto
    const discount = ((originalPrice - discountedPrice) / originalPrice) * 100;
    document.getElementById("modalDiscount").innerText = Math.round(discount) + "% off";

    // Sinopse do livro
    document.getElementById("modalSynopsis").innerText = synopsis;

    // Exibindo o modal
    bookModal.style.display = "flex";
    bookModal.style.position = "fixed";
    bookModal.style.top = "50%";
    bookModal.style.left = "50%";
    bookModal.style.transform = "translate(-50%, -50%)";
}

// Função para fechar o modal
function closeModal() {
    document.getElementById("bookModal").style.display = "none";
}

// Configurando o botão de fechar
document.getElementById("closeBookModal").addEventListener("click", closeModal);

// Fechar o modal ao clicar fora dele
window.addEventListener("click", function(event) {
    const bookModal = document.getElementById("bookModal");
    if (event.target === bookModal) {
        closeModal();
    }
});

    // Tornando a função openBookModal acessível globalmente
    window.openBookModal = openBookModal;

    // Função para calcular o desconto percentual
    function calculateDiscount(originalPrice, salePrice) {
        if (originalPrice > 0) {
            const discount = ((originalPrice - salePrice) / originalPrice) * 100;
            return Math.round(discount); // Retorna o desconto arredondado
        }
        return 0;
    }

const telefoneInput = document.getElementById('telefone');

telefoneInput.addEventListener('input', function(event) {
    let telefone = event.target.value;
    
    // Remove todos os caracteres que não são números
    telefone = telefone.replace(/\D/g, "");

    // Adiciona a formatação de DDD e número
    if (telefone.length <= 2) {
        telefone = `(${telefone}`;
    } else if (telefone.length <= 7) {
        telefone = `(${telefone.slice(0, 2)}) ${telefone.slice(2)}`;
    } else {
        telefone = `(${telefone.slice(0, 2)}) ${telefone.slice(2, 7)}-${telefone.slice(7, 11)}`;
    }

    // Atualiza o valor do campo de entrada com a formatação
    event.target.value = telefone;
});
