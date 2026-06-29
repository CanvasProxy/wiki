document.addEventListener("DOMContentLoaded", function() {
    // Находим блок с заголовком в шапке сайта
    var titleBlock = document.querySelector('.md-header__title');
    
    if (titleBlock) {
        // Меняем курсор на "палец", чтобы пользователь понимал, что можно кликнуть
        titleBlock.style.cursor = 'pointer';
        
        // Добавляем действие при клике
        titleBlock.addEventListener('click', function() {
            // Перенаправляем на главную страницу сайта. 
            // Если нужно уводить в бота, замените '/' на 'https://t.me/CanvasProxyBot'
            window.location.href = '/'; 
        });
    }
});