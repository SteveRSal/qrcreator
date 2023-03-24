const aplicacionQR = document.getElementById('aplicacionQR');
const formulario = document.getElementById('formulario');

const QR = new QRCode(aplicacionQR);

formulario.addEventListener('submit', (e) => {
	e.preventDefault();
	QR.makeCode(formulario.link.value);
});

function loadLogo(event) {
    var logoImage = document.getElementById("logo-image");
    logoImage.src = URL.createObjectURL(event.target.files[0]);
  }
  