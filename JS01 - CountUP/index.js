document.addEventListener('DOMContentLoaded', () => {
    const countElement = document.getElementById('count');
    const countButton = document.getElementById('countButton');
    
    // Initialize
    let currentCount = 0;
    
    // Click event listener to the button
    countButton.addEventListener('click', () => {
        // Increment the count
        currentCount += 1;
        
        // Update the display
        countElement.innerText = currentCount;
    });
});