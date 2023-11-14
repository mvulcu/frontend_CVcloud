async function updatemyVisitorCount() {
    try {
       
        const response = await fetch('https://us-central1-crafty-campaign-401215.cloudfunctions.net/current_number_visitors');

        if (response.ok) {
            
            const data = await response.json();

       
            document.getElementById('visitor-counter').textContent = data.new_number;
        } else {
            console.error('Failed to fetch visitor count:', response.statusText);
        }
    } catch (error) {
        console.error('Error fetching visitor count:', error.message);
    }
}

window.onload = updatemyVisitorCount;