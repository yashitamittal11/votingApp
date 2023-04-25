export const setActivitiesToLocalStorage = () => {
    const activities = [
      { id: 1, name: 'Running', votes: 0 },
      { id: 2, name: 'Swimming', votes: 0 },
      { id: 3, name: 'Cycling', votes: 0 },
    ];
  
    localStorage.setItem( 'activities', JSON.stringify( activities ) );
  };