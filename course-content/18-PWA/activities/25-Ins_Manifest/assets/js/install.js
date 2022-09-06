const installBtn = document.getElementById('installBtn');
const textHeader = document.getElementById('textHeader');

//https://developer.mozilla.org/en-US/docs/Web/API/BeforeInstallPromptEvent
// The BeforeInstallPromptEvent is fired at the Window.onbeforeinstallprompt handler before a user is prompted to "install" a web site to a home screen on mobile.
// This interface inherits from the Event interface.
window.addEventListener('beforeinstallprompt', (event) => {
  event.preventDefault();
  installBtn.style.visibility = 'visible';
  textHeader.textContent = 'Click the button to install!';

  installBtn.addEventListener('click', () => {
    event.prompt();
    installBtn.setAttribute('disabled', true);
    installBtn.textContent = 'Installed!';
  });
});

//https://developer.mozilla.org/en-US/docs/Web/API/BeforeInstallPromptEvent
// The appinstalled event of the Web Manifest API is fired when the browser has successfully installed a page as an application.
window.addEventListener('appinstalled', (event) => {
  textHeader.textContent = 'Successfully installed!';
  console.log('👍', 'appinstalled', event);
});

