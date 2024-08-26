function toggleBox(box) {
    const isExpanded = box.classList.contains('expanded');
    document.querySelectorAll('.sport-box').forEach(b => b.classList.remove('expanded'));
    document.querySelectorAll('.sport-details').forEach(d => d.style.display = 'none');

    if (!isExpanded) {
        box.classList.add('expanded');
        box.querySelector('.sport-details').style.display = 'block';
    }
}
