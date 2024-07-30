const logoHam = document.querySelector('.logoHamb');
const ctnList = document.querySelector('.lists');
const ListH = document.querySelector('.list-Ham');
const alert = document.querySelector('.enviar');

logoHam.addEventListener('click', () => {
	logoHam.classList.toggle('active');
	ctnList.classList.toggle('abrir');
	ListH.classList.toggle('block');
})

document.getElementById('form-contact').addEventListener('submit', function (event) {
	event.preventDefault();
	if (true) {
		addNotify('Mensaje enviado', `ok`);//ok
    disableBtn("buttonModal", 5, true);
    this.submit();
	} else {
		addNotify('Mensaje enviado', `danger`);//error
		addNotify('Mensaje enviado', `caution`);//caution
	}
});

function addNotify(messageText = ``, type = `caution`, seconds = 5) {
	const container = document.getElementById('ctn-notifs');
	const notify = createNotificationItem(messageText, type);
	container.appendChild(notify);

	setTimeout(() => {
		deleteNotificationItem(notify);
	}, seconds * 1000);
}
function createNotificationItem(messageText, type) {
	const notify = document.createElement('div');
	notify.className = 'item-notif';
  const bgNeed = {
    'ok' : '#d4edda',
    'caution' : '#ffc107',
    'danger' : '#dc3545',
  };
	const typeNeed = {
		'ok': 'bi bi-check',
		'caution': 'bi bi-exclamation-circle',
		'danger': 'bi bi-exclamation-triangle',
	};
	const bg = bgNeed[type] || '#ffc107';
  console.log('bg: ', bg);
	const iconClass = typeNeed[type] || 'bi bi-exclamation-circle';
	const iconLeft = createIcon(iconClass, 'left');
	const message = createMessage(messageText);
	// const iconRight = createIcon('right');
	const deleteButton = createDeleteButton();

  notify.style.backgroundColor = bg;

	notify.appendChild(iconLeft);
	notify.appendChild(message);
	notify.appendChild(deleteButton);

	return notify;
}

function createIcon(iconClass, position) {
	const icon = document.createElement('div');
	icon.className = `icon ${position}`;

	const iconElement = document.createElement('i');
	iconElement.className = `bi ${iconClass}`;

	icon.appendChild(iconElement);
	return icon;
}
function createMessage(text) {
	const message = document.createElement('div');
	message.className = 'message';
	message.textContent = text;
	return message;
}
function createDeleteButton() {
	const button = document.createElement('button');
	button.className = 'btn-delete icon right';
  button.type = 'button';
	button.innerHTML = '&times;';
	button.onclick = function () {
		this.parentElement.remove();
	};
	return button;
}

function deleteNotificationItem(item) {
	item.remove();
}

function disableBtn(id, time, forceDisable) {
  const button = document.getElementById(id);

  if (forceDisable === null) {
      return;
  }

  const setButtonState = (disable) => {
      button.disabled = disable;
      button.style.backgroundColor = disable ? `grey` : ``;
      button.style.border = disable ? `0px solid` : ``;
  };

  if (time === 0 || time === null) {
      setButtonState(forceDisable);
  } else {
      setButtonState(forceDisable);
      setTimeout(() => {
          setButtonState(!forceDisable);
      }, time * 1000);
  }
}