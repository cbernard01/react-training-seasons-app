import {useEffect, useState} from "react";


const useLocation = () => {
  const [coords, setCoords] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(
      position => setCoords({lat: position.coords.latitude, lng: position.coords.longitude}),
      err => setErrorMessage(err.message)
    );
  }, []);

  return [coords, errorMessage];
};

export default useLocation;
