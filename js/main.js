const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

// Selects the tab content item //
function selectItem(e) {
  removeBorder();
  removeShow();

  //Adds border to current tab //
  this.classList.add('tab-border');
  // Retrieve content from the DOM //
  const tabContentItem = document.querySelector(`#${this.id}-content`);

  // Add the SHOW class //
  tabContentItem.classList.add('show');
}

function removeBorder() {
  tabItems.forEach(item => item.classList.remove('tab-border'))
}

function removeShow() {
  tabContentItems.forEach(item => item.classList.remove('show'))
}

// Event Listener for tab click with the tab items used originally in index.html //
tabItems.forEach(item => item.addEventListener('click', selectItem));
