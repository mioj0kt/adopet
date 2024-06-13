document.getElementById('contact-donor').addEventListener('click', function() {
    alert('Contato com o doador!');
});

document.getElementById('dog-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const fileInput = document.getElementById('file-input');
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const weight = document.getElementById('weight').value;
    const address = document.getElementById('address').value;
    const description = document.getElementById('description').value;

    if (fileInput.files.length > 0) {
        const file = fileInput.files[0];
        const reader = new FileReader();
        reader.onload = function(e) {
            const img = document.createElement('img');
            img.src = e.target.result;
            img.alt = name;
            document.querySelector('.details').prepend(img);
        };
        reader.readAsDataURL(file);
    }

    document.getElementById('display-name').textContent = name;
    document.getElementById('display-age').textContent = age;
    document.getElementById('display-weight').textContent = weight;
    document.getElementById('display-address').textContent = address;
    document.getElementById('display-description').textContent = description;
});
