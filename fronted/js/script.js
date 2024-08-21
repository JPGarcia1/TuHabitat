document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', async (event) => {
        event.preventDefault();
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        try {
            const response = await fetch('http://localhost:3000/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            const result = await response.json();
            alert('Mensaje enviado: ' + result.message);
        } catch (error) {
            console.error('Error:', error);
        }
    });

    // Fetch properties and display them
    if (document.getElementById('property-list')) {
        fetch('http://localhost:3000/properties')
            .then(response => response.json())
            .then(properties => {
                const propertyList = document.getElementById('property-list');
                properties.forEach(property => {
                    const div = document.createElement('div');
                    div.className = 'property';
                    div.innerHTML = `
                        <h2>${property.name}</h2>
                        <p>${property.description}</p>
                        <p>Precio: ${property.price}</p>
                    `;
                    propertyList.appendChild(div);
                });
            })
            .catch(error => console.error('Error:', error));
    }
});

