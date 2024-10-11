const accessToken = '915132a7824c04e041a2432af4019fda';
const userId = '496816116694500';
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