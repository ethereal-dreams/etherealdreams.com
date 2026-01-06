// Blog posts data
// Add your blog posts here. Each post needs:
// - id: unique identifier (used for filename)
// - title: the title of the blog post
// - date: publication date
const blogPosts = [
    {
        id: 'the-beginning',
        title: 'The Beginning',
        date: '2026-01-05'
    },
];

// Function to format date
function formatDate(dateString) {
    // Parse date string (YYYY-MM-DD) in local time to avoid timezone issues
    const [year, month, day] = dateString.split('-').map(Number);
    const date = new Date(year, month - 1, day);
    return date.toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    });
}

// Function to render blog posts list
function renderBlogPosts() {
    const listElement = document.getElementById('blog-posts-list');
    
    if (!listElement) return;
    
    // Sort posts by date (newest first)
    const sortedPosts = [...blogPosts].sort((a, b) => 
        new Date(b.date) - new Date(a.date)
    );
    
    listElement.innerHTML = sortedPosts.map(post => `
        <li>
            <a href="posts/${post.id}.html">${post.title}</a>
            <div class="post-date">${formatDate(post.date)}</div>
        </li>
    `).join('');
}

// Function to set current year in footer
function setCurrentYear() {
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    renderBlogPosts();
    setCurrentYear();
});

