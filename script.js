// JavaScript to add a little interaction
document.querySelectorAll('.column').forEach((column) => {
    column.addEventListener('mouseenter', () => {
        column.style.transition = 'transform 0.4s ease, box-shadow 0.4s ease';
        column.style.transform = 'scale(1.05)';
    });
    column.addEventListener('mouseleave', () => {
        column.style.transition = 'transform 0.4s ease, box-shadow 0.4s ease';
        column.style.transform = 'scale(1)';
    });
});
