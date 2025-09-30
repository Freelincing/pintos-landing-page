// Porsche Header Menu Toggle Script
(function() {
    'use strict';
    
    // Wait for DOM to be fully loaded
    document.addEventListener('DOMContentLoaded', function() {
        // Get DOM elements
        const menuButton = document.getElementById('menuButton');
        const menuClose = document.getElementById('menuClose');
        const menuOverlay = document.getElementById('menuOverlay');
        const body = document.body;
        
        // Check if all elements exist
        if (!menuButton || !menuClose || !menuOverlay) {
            console.warn('Menu elements not found');
            return;
        }
        
        // Function to open menu
        function openMenu() {
            menuOverlay.classList.add('active');
            body.style.overflow = 'hidden'; // Prevent background scrolling
            
            // Focus trap - focus on close button for accessibility
            setTimeout(() => {
                menuClose.focus();
            }, 100);
        }
        
        // Function to close menu
        function closeMenu() {
            menuOverlay.classList.remove('active');
            body.style.overflow = ''; // Restore scrolling
            
            // Return focus to menu button for accessibility
            setTimeout(() => {
                menuButton.focus();
            }, 100);
        }
        // Porsche Header Menu Toggle Script
(function() {
    'use strict';
    
    // Wait for DOM to be fully loaded
    document.addEventListener('DOMContentLoaded', function() {
        // Get DOM elements
        const menuButton = document.getElementById('menuButton');
        const menuClose = document.getElementById('menuClose');
        const menuOverlay = document.getElementById('menuOverlay');
        const body = document.body;
        
        // Check if all elements exist
        if (!menuButton || !menuClose || !menuOverlay) {
            console.warn('Menu elements not found');
            return;
        }
        
        // Function to open menu
        function openMenu() {
            menuOverlay.classList.add('active');
            body.style.overflow = 'hidden'; // Prevent background scrolling
            
            // Focus trap - focus on close button for accessibility
            setTimeout(() => {
                menuClose.focus();
            }, 100);
        }
        
        // Function to close menu
        function closeMenu() {
            menuOverlay.classList.remove('active');
            body.style.overflow = ''; // Restore scrolling
            
            // Return focus to menu button for accessibility
            setTimeout(() => {
                menuButton.focus();
            }, 100);
        }
        
        // Event listeners
        menuButton.addEventListener('click', function(e) {
            e.preventDefault();
            openMenu();
        });
        
        menuClose.addEventListener('click', function(e) {
            e.preventDefault();
            closeMenu();
        });
        
        // Close menu when clicking on overlay background
        menuOverlay.addEventListener('click', function(e) {
            if (e.target === menuOverlay) {
                closeMenu();
            }
        });
        
        // Close menu with Escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && menuOverlay.classList.contains('active')) {
                closeMenu();
            }
        });
        
        // Prevent menu items from closing menu when clicked
        const menuItems = menuOverlay.querySelectorAll('.menu-items a');
        menuItems.forEach(function(item) {
            item.addEventListener('click', function(e) {
                // Optional: Close menu when a menu item is clicked
                // Uncomment the line below if you want this behavior
                // closeMenu();
            });
        });
        
        // Handle window resize - close menu on large screens if open
        let resizeTimer;
        window.addEventListener('resize', function() {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(function() {
                if (window.innerWidth > 1024 && menuOverlay.classList.contains('active')) {
                    closeMenu();
                }
            }, 150);
        });
    });
})();
        // Event listeners
        menuButton.addEventListener('click', function(e) {
            e.preventDefault();
            openMenu();
        });
        
        menuClose.addEventListener('click', function(e) {
            e.preventDefault();
            closeMenu();
        });
        
        // Close menu when clicking on overlay background
        menuOverlay.addEventListener('click', function(e) {
            if (e.target === menuOverlay) {
                closeMenu();
            }
        });
        
        // Close menu with Escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && menuOverlay.classList.contains('active')) {
                closeMenu();
            }
        });
        
        // Prevent menu items from closing menu when clicked
        const menuItems = menuOverlay.querySelectorAll('.menu-items a');
        menuItems.forEach(function(item) {
            item.addEventListener('click', function(e) {
                // Optional: Close menu when a menu item is clicked
                // Uncomment the line below if you want this behavior
                // closeMenu();
            });
        });
        
        // Handle window resize - close menu on large screens if open
        let resizeTimer;
        window.addEventListener('resize', function() {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(function() {
                if (window.innerWidth > 1024 && menuOverlay.classList.contains('active')) {
                    closeMenu();
                }
            }, 150);
        });
    });
})();