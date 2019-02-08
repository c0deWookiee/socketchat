const changeListeners = [];

function push(pathname) {
  window.history.pushState({}, '', pathname);

  changeListeners.forEach( cb => cb(pathname));
}

export default {
    push, 
    onChange: cb => changeListeners.push(cb)
}