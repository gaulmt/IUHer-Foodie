// Notification Popup System
function showNotification(type, title, message, redirectUrl = null, delay = 2000) {
    // Remove existing notification if any
    const existingOverlay = document.querySelector('.notification-overlay');
    if (existingOverlay) {
        existingOverlay.remove();
    }

    // Create notification overlay
    const overlay = document.createElement('div');
    overlay.className = 'notification-overlay';

    // Create notification popup
    const popup = document.createElement('div');
    popup.className = 'notification-popup';

    // Icon
    const icon = document.createElement('div');
    icon.className = `notification-icon ${type}`;
    icon.innerHTML = type === 'success' ? '✓' : '✕';

    // Title
    const titleEl = document.createElement('div');
    titleEl.className = 'notification-title';
    titleEl.textContent = title;

    // Message
    const messageEl = document.createElement('div');
    messageEl.className = 'notification-message';
    messageEl.textContent = message;

    // Assemble popup
    popup.appendChild(icon);
    popup.appendChild(titleEl);
    popup.appendChild(messageEl);

    // Add button if there's a redirect
    if (redirectUrl) {
        const button = document.createElement('button');
        button.className = 'notification-button';
        button.innerHTML = 'Đang chuyển hướng<span class="notification-spinner"></span>';
        popup.appendChild(button);

        // Auto redirect after delay
        setTimeout(() => {
            window.location.href = redirectUrl;
        }, delay);
    } else {
        // Add close button if no redirect
        const button = document.createElement('button');
        button.className = 'notification-button';
        button.textContent = 'Đóng';
        button.onclick = () => {
            overlay.classList.remove('show');
            setTimeout(() => overlay.remove(), 300);
        };
        popup.appendChild(button);
    }

    overlay.appendChild(popup);
    document.body.appendChild(overlay);

    // Show notification with animation
    setTimeout(() => {
        overlay.classList.add('show');
    }, 10);

    // Auto close if no redirect
    if (!redirectUrl) {
        setTimeout(() => {
            overlay.classList.remove('show');
            setTimeout(() => overlay.remove(), 300);
        }, 5000);
    }
}

// Success notification with redirect
function showSuccessNotification(title, message, redirectUrl, delay = 2000) {
    showNotification('success', title, message, redirectUrl, delay);
}

// Error notification
function showErrorNotification(title, message) {
    showNotification('error', title, message, null);
}
