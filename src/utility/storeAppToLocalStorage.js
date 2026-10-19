const getStoredAppFromLS = () => {
  const storedAppSTR = localStorage.getItem("installedApp");
  // console.log('storedAppSTR', storedAppSTR);

  if (storedAppSTR) {
    const storedApp = JSON.parse(storedAppSTR);
    // console.log('storedApp', storedApp);
    return storedApp;
  }
  else {
    return [];
  }
}

const addAppToLS = (id) => {
  const storedApp = getStoredAppFromLS();

  if (storedApp.includes(id)) {
    return storedApp;
  }
  else {
    storedApp.push(id);
    const convertedStoredApp = JSON.stringify(storedApp);
    localStorage.setItem("installedApp", convertedStoredApp);
    return storedApp;
  }
}

const removeAppFromLS = (id) => {
  const storedApp = getStoredAppFromLS();

  const updatedStoredApp = storedApp.filter(appId => appId !== id);
  const convertedFilteredApp = JSON.stringify(updatedStoredApp);
  localStorage.setItem("installedApp", convertedFilteredApp);
  return updatedStoredApp;
}

export { getStoredAppFromLS, addAppToLS, removeAppFromLS }