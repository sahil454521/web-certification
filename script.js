// Image data array
const images = [
    {
        thumb: 'https://picsum.photos/150/150?random=1',
        main: 'https://picsum.photos/600/400?random=1',
        alt: 'Mountain landscape with snow-capped peaks'
    },
    {
        thumb: 'https://picsum.photos/150/150?random=2',
        main: 'https://picsum.photos/600/400?random=2',
        alt: 'Ocean waves crashing on rocky shore'
    },
    {
        thumb: 'https://picsum.photos/150/150?random=3',
        main: 'https://picsum.photos/600/400?random=3',
        alt: 'Forest path with autumn leaves'
    },
    {
        thumb: 'https://picsum.photos/150/150?random=4',
        main: 'https://picsum.photos/600/400?random=4',
        alt: 'City skyline at sunset'
    },
    {
        thumb: 'https://picsum.photos/150/150?random=5',
        main: 'https://picsum.photos/600/400?random=5',
        alt: 'Desert landscape with sand dunes'
    },
    {
        thumb: 'https://picsum.photos/150/150?random=6',
        main: 'https://picsum.photos/600/400?random=6',
        alt: 'Lake reflection with surrounding trees'
    }
];

// Function to change the main image
function changeImage(index) {
    const mainImage = document.getElementById('mainImage');
    const imageDescription = document.getElementById('imageDescription');
    const thumbnails = document.querySelectorAll('.thumbnail');
    
    // Update main image
    mainImage.src = images[index].main;
    mainImage.alt = images[index].alt;
    imageDescription.textContent = images[index].alt;
    
    // Update active thumbnail
    thumbnails.forEach(thumb => thumb.classList.remove('active'));
    thumbnails[index].classList.add('active');
}

// Function to handle mouse over event
function handleMouseOver(event) {
    const thumbnail = event.target;
    thumbnail.style.opacity = '0.8';
}

// Function to handle mouse leave event
function handleMouseLeave(event) {
    const thumbnail = event.target;
    thumbnail.style.opacity = '1';
}

// Function to handle focus event
function handleFocus(event) {
    const thumbnail = event.target;
    thumbnail.style.transform = 'scale(1.05)';
    console.log('Thumbnail focused:', thumbnail.alt);
}

// Function to handle blur event
function handleBlur(event) {
    const thumbnail = event.target;
    if (!thumbnail.classList.contains('active')) {
        thumbnail.style.transform = 'scale(1)';
    }
    console.log('Thumbnail blurred:', thumbnail.alt);
}

// Function to add tabindex attributes
function addTabindexAttributes() {
    console.log('Adding tabindex attributes to thumbnails');
    const thumbnails = document.querySelectorAll('.thumbnail');
    
    for (let i = 0; i < thumbnails.length; i++) {
        thumbnails[i].setAttribute('tabindex', '0');
        console.log(`Added tabindex to thumbnail ${i + 1}`);
    }
}

// Function to initialize the gallery
function initializeGallery() {
    console.log('Gallery initialization started');
    const thumbnails = document.querySelectorAll('.thumbnail');
    
    // Add event listeners to each thumbnail
    thumbnails.forEach((thumbnail, index) => {
        // Click event
        thumbnail.addEventListener('click', () => changeImage(index));
        
        // Keyboard event
        thumbnail.addEventListener('keydown', (event) => {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                changeImage(index);
            }
        });
        
        // Mouse events
        thumbnail.addEventListener('mouseover', handleMouseOver);
        thumbnail.addEventListener('mouseleave', handleMouseLeave);
        
        // Focus events
        thumbnail.addEventListener('focus', handleFocus);
        thumbnail.addEventListener('blur', handleBlur);
    });
    
    // Set first thumbnail as active
    thumbnails[0].classList.add('active');
    console.log('Gallery initialization completed');
}

// Add onload event listener
window.addEventListener('load', function() {
    console.log('Page loaded - initializing gallery and adding tabindex attributes');
    addTabindexAttributes();
    initializeGallery();
});