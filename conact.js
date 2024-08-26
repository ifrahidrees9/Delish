// *** HEADER & FOOTER  ***
function loadCSS(href) {
    var link = document.createElement("link");
    link.rel = "stylesheet";
    link.type = "text/css";
    link.href = href;
    document.head.appendChild(link);
}

fetch('header.html')
    .then(response => response.text())
    .then(data => {
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = data;
        const headerContent = tempDiv.querySelector('header').outerHTML;
        const footerContent = tempDiv.querySelector('footer').outerHTML;
        document.getElementById('header-placeholder').innerHTML = headerContent;
        document.getElementById('footer-placeholder').innerHTML = footerContent;
        loadCSS('header.css');
        addActiveClassToNavLink();
    });

function addActiveClassToNavLink() {
    var currentUrl = window.location.href;
    var pageLinks = {
        'index.html': 'homeLink',
        'blog.html': 'blogLink',
        'about.html': 'aboutLink',
        'contact.html': 'contactLink',
    };

    for (var pageUrl in pageLinks) {
        if (currentUrl.endsWith(pageUrl)) {
            document.getElementById(pageLinks[pageUrl]).classList.add('active');
        }
    }
}