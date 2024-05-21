document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.ingredients ul li input').forEach(checkbox => {
        checkbox.addEventListener('click', () => {
            checkbox.parentNode.classList.toggle('checked');
        });
    });
});