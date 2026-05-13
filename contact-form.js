// Contact Form Handling
const contactForm = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');
const formError = document.getElementById('formError');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const formData = new FormData(contactForm);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            subject: formData.get('subject'),
            message: formData.get('message')
        };

        try {
            // Validate form data
            if (!data.name || !data.email || !data.subject || !data.message) {
                throw new Error('All fields are required');
            }

            // Basic email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(data.email)) {
                throw new Error('Please enter a valid email address');
            }

            // Here you would normally send the data to a backend service
            // For now, we'll just show a success message
            // Example: await fetch('your-backend-url', { method: 'POST', body: JSON.stringify(data) })

            // Simulate successful submission
            console.log('Form submitted:', data);
            
            formSuccess.style.display = 'block';
            formError.style.display = 'none';
            contactForm.reset();

            // Hide success message after 5 seconds
            setTimeout(() => {
                formSuccess.style.display = 'none';
            }, 5000);

        } catch (error) {
            console.error('Form error:', error);
            formError.textContent = error.message || 'Error sending message. Please try again.';
            formError.style.display = 'block';
            formSuccess.style.display = 'none';

            // Hide error message after 5 seconds
            setTimeout(() => {
                formError.style.display = 'none';
            }, 5000);
        }
    });
}