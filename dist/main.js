function updatePath() {
    const path = window.location.pathname;
    document.getElementById('path').textContent = `Current Path: ${path}`;
}

window.addEventListener('popstate', updatePath);
window.addEventListener('load', updatePath);

function navigate(path) {
    history.pushState({}, '', path);
    updatePath();
}