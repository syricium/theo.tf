function changeTab(element) {
    const elementBody = element + '-body';

    const windows = document.querySelectorAll('.window-body');

    for (const window of windows) {
      const windowButton = document.querySelector('#' + window.id.slice(0, -5))
      if (window.id == elementBody) {
        windowButton.setAttribute("aria-selected", "true")
        window.removeAttribute("hidden")
      } else {
        windowButton.setAttribute("aria-selected", "false")
        window.setAttribute("hidden", "")
      }
    }
}
  