export default function FileUpload() {
    const elements = Array.from(document.querySelectorAll('.js-file-upload'));

    elements.forEach(element => {
        const input = element.querySelector('input[type="file"]');
        const label = element.querySelector('label');

        // const labelOriginalText = label.textContent;

        input.addEventListener('change', () => {
            if (input.files.length) {
                label.textContent = input.files[0].name
            } 
        })
    })
}