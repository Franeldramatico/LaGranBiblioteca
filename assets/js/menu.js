
document.addEventListener('DOMContentLoaded', () => {
    // Dropdown Logic for Desktop
    const dropdownToggles = document.querySelectorAll('nav .group > button');

    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();

            // Close other dropdowns
            dropdownToggles.forEach(otherToggle => {
                if (otherToggle !== toggle) {
                    const otherMenu = otherToggle.nextElementSibling;
                    if (otherMenu) {
                        otherMenu.classList.remove('opacity-100', 'visible');
                        otherMenu.classList.add('opacity-0', 'invisible');
                    }
                }
            });

            // Toggle current
            const menu = toggle.nextElementSibling;
            if (menu) {
                if (menu.classList.contains('opacity-100')) {
                    menu.classList.remove('opacity-100', 'visible');
                    menu.classList.add('opacity-0', 'invisible');
                } else {
                    menu.classList.remove('opacity-0', 'invisible');
                    menu.classList.add('opacity-100', 'visible');
                }
            }
        });
    });

    // Close on click outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('nav .group')) {
            document.querySelectorAll('nav .group > div').forEach(menu => {
                menu.classList.remove('opacity-100', 'visible');
                menu.classList.add('opacity-0', 'invisible');
            });
        }
    });
});
