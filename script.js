function showTab(tabId, element) {
    // Hide all tab content
    const tabContents = document.getElementsByClassName('tabContent');
    for (let i = 0; i < tabContents.length; i++) {
        tabContents[i].style.display = 'none';
    }

    // Show the selected tab content
    document.getElementById(tabId).style.display = 'block';

    // Remove active class from all buttons
    const tabButtons = document.getElementsByClassName('tabButton');
    for (let i = 0; i < tabButtons.length; i++) {
        tabButtons[i].classList.remove('active');
    }

    // Add active class to the clicked button
    element.classList.add('active');
}
showTab('timetableContent', document.getElementsByClassName('active')[0]);