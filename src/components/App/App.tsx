import "./App.css";

import type { UnsplashImage, UnsplashResponse } from "./App.types";
import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import ImageModal from "../ImageModal/ImageModal";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import LoadMore from "../LoadMoreBtn/LoadMoreBtn";

const ACCESS_KEY = "8spJw71vctj93yz3wv-AGK87NS6KqcVJh2bnR6Ku8y4";

const App = (): JSX.Element => {
  const [images, setImages] = useState<UnsplashImage[]>([]);
  const [selectedImage, setSelectedImage] = useState<UnsplashImage | null>(
    null
  );
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);

  const fetchImages = async (
    query: string,
    pageNumber: number = 1
  ): Promise<void> => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `https://api.unsplash.com/search/photos?query=${query}&page=${pageNumber}&per_page=15&client_id=${ACCESS_KEY}`
      );

      if (!response.ok) {
        throw new Error(`Помилка: ${response.status} ${response.statusText}`);
      }

      const data: UnsplashResponse = await response.json();

      if (data.results.length === 0) {
        toast("Нічого не знайдено");
        setImages([]);
        setTotalPages(1);
        return;
      }

      const directMatch = data.results.some(
        (img) =>
          (img.alt_description &&
            img.alt_description.toLowerCase() === query.toLowerCase()) ||
          (img.description &&
            img.description.toLowerCase() === query.toLowerCase())
      );

      if (pageNumber === 1) {
        setImages(data.results);
      } else {
        setImages((prev) => [...prev, ...data.results]);
      }

      setPage(pageNumber);
      setTotalPages(data.total_pages);
    } catch (error) {
      console.error(error);
      setError("Помилка при завантаженні зображень");
      setImages([]);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (query: string): void => {
    setSearchQuery(query);
    setPage(1);
    fetchImages(query, 1);
  };

  const loadMore = (): void => {
    fetchImages(searchQuery, page + 1);
  };

  return (
    <div>
      <Toaster position="top-right" />
      <SearchBar onSubmit={handleSearch} />
      {error ? (
        <ErrorMessage message={error} />
      ) : (
        <ImageGallery images={images} onImageClick={setSelectedImage} />
      )}
      {selectedImage && (
        <ImageModal
          image={selectedImage}
          onClose={() => setSelectedImage(null)}
        />
      )}
      {loading && <Loader />}
      {!loading && images.length > 0 && page < totalPages && (
        <LoadMore onClick={loadMore} />
      )}
    </div>
  );
};

export default App;
