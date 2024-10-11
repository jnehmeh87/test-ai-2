const accessToken = 'IGQWRQY3lHSzJPUnFoRWVZAcmZA1Wk5yY21yaTV0a3RZAbFQwV25qd1BHSWlLZAFBNejE2QktBWlIxWXctdmh2dWd4aHdrWjJCYVlrR0dqWUEzT2t5OWx3bHFLV1JPejJ2bkhiQTlWeTI3dGZASR1UxNFpUbk1YbFJUZA1kZD'; // Replace with your actual long-lived access token
const userId = '496816116694500'; // Replace with your actual user ID
const limit = 12;

async function fetchInstagramPhotos() {
    const response = await fetch(`https://graph.instagram.com/${userId}/media?fields=id,caption,media_type,media_url,permalink,thumbnail_url,timestamp&access_token=${accessToken}&limit=${limit}`);
    const data = await response.json();
    return data.data;
}

async function displayInstagramPhotos() {
    const photos = await fetchInstagramPhotos();
    const container = document.getElementById('instagram-photos');
    container.innerHTML = '';

    photos.forEach(photo => {
        const img = document.createElement('img');
        img.src = photo.media_url;
        img.alt = photo.caption || 'Instagram Photo';
        img.style.width = '100px'; // Adjust the size as needed
        img.style.height = '100px'; // Adjust the size as needed
        img.style.margin = '5px';
        container.appendChild(img);
    });
}

document.addEventListener('DOMContentLoaded', displayInstagramPhotos);