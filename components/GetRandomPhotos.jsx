import { useState, useEffect } from "react";

export function useRandomPodcastPhoto(props) {
  const [showDesc, setShowDesc] = useState(false);
  const [photoUrl, setPhotoUrl] = useState(null);

  const handleHover = () => {
    setShowDesc(true);
  };

  const handleLeave = () => {
    setShowDesc(false);
  };

  async function getRandomPodcastPhoto() {
    const defaultApi =
      "https://api.unsplash.com/photos/random/?query=podcast&orientation=landscape&client_id=og3JYOJYnvJPmKmj5DzEGhh7BS0_8e_hYaUjUCTJLcc";
    const apiUrlData = await fetch(defaultApi);
    const apiData = await apiUrlData.json();
    const photoUrl = apiData.urls.regular;
    return photoUrl;
  }

  useEffect(() => {
    const storedPhotoUrl = localStorage.getItem(`${props.id}`);
    if (storedPhotoUrl) {
      setPhotoUrl(storedPhotoUrl);
    } else {
      async function fetchPhoto() {
        const url = await getRandomPodcastPhoto();
        setPhotoUrl(url);
        localStorage.setItem(`${props.id}`, url);
      }
      fetchPhoto();
    }
  }, [props.id]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      localStorage.removeItem(`${props.id}`);
    }, 3600000);
    return () => clearTimeout(timeout);
  }, [props.id]);

  return {
    showDesc,
    photoUrl,
    handleHover,
    handleLeave,
  };
}
