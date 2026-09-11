"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { X, ChevronLeft, ChevronRight, Camera } from "@/components/Icons";

export interface PhotoItem {
  id: string;
  albumId: string;
  folder: string;
  src: string;
  title: string;
  category: string;
  tags?: string[];
}

interface PhotoLightboxProps {
  photo: PhotoItem | null;
  photos: PhotoItem[];
  onClose: () => void;
  onSelectPhoto: (photo: PhotoItem) => void;
}

export const PhotoLightbox: React.FC<PhotoLightboxProps> = ({
  photo,
  photos,
  onClose,
  onSelectPhoto,
}) => {
  const { t } = useLanguage();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!photo) return;
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowLeft") {
        handlePrev();
      } else if (e.key === "ArrowRight") {
        handleNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [photo, photos]);

  if (!photo) return null;

  const currentIndex = photos.findIndex((p) => p.id === photo.id);
  const handlePrev = () => {
    if (currentIndex > 0) {
      onSelectPhoto(photos[currentIndex - 1]);
    } else {
      onSelectPhoto(photos[photos.length - 1]);
    }
  };

  const handleNext = () => {
    if (currentIndex < photos.length - 1) {
      onSelectPhoto(photos[currentIndex + 1]);
    } else {
      onSelectPhoto(photos[0]);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md animate-in fade-in">
      
      {/* Top Bar Controls */}
      <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10 text-white">
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 rounded-full bg-white/20 text-xs font-bold uppercase tracking-wider backdrop-blur-md">
            {photo.folder}
          </span>
          <span className="text-xs text-white/70">
            {currentIndex + 1} / {photos.length}
          </span>
        </div>

        <button
          onClick={onClose}
          className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          aria-label={t("closeModal")}
        >
          <X size={24} />
        </button>
      </div>

      {/* Left Arrow Button */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white z-10 transition-transform hover:scale-110"
        aria-label={t("ariaPrevImage")}
      >
        <ChevronLeft size={28} />
      </button>

      {/* Main Image Container */}
      <div className="relative max-w-5xl max-h-[75vh] w-full h-full flex flex-col items-center justify-center">
        {(() => {
          const photoTitleMap: Record<string, keyof typeof import("@/data/translations").translations.en> = {
            "investiture-1": "photoInvestiture1",
            "investiture-2": "photoInvestiture2",
            "investiture-3": "photoInvestiture3",
            "investiture-4": "photoInvestiture4",
            "investiture-5": "photoInvestiture5",
            "camp-1": "photoCamp1",
            "camp-2": "photoCamp2",
            "camp-3": "photoCamp3",
            "hike-1": "photoHike1",
            "hike-2": "photoHike2",
            "hike-3": "photoHike3",
            "hike-4": "photoHike4",
            "hike-5": "photoHike5",
            "water-1": "photoWater1",
            "water-2": "photoWater2",
            "water-3": "photoWater3",
            "lg-1": "photoLg1",
            "lg-2": "photoLg2",
            "lg-3": "photoLg3",
            "lg-4": "photoLg4",
            "lg-5": "photoLg5",
            "lg-6": "photoLg6",
            "lg-7": "photoLg7",
            "lg-8": "photoLg8",
            "lg-9": "photoLg9",
            "lideres-1": "photoLideres1",
          };
          const titleKey = photoTitleMap[photo.id];
          const displayTitle = titleKey ? t(titleKey) : photo.title;

          return (
            <>
              <div className="relative w-full h-full max-h-[70vh] rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center">
                <Image
                  src={photo.src}
                  alt={displayTitle}
                  fill
                  sizes="(max-width: 1280px) 100vw, 1200px"
                  className="object-contain"
                  priority
                />
              </div>

              {/* Caption & Info Panel */}
              <div className="mt-4 text-center max-w-xl px-4">
                <h3 className="text-lg font-bold text-white tracking-wide">
                  {displayTitle}
                </h3>
                {photo.tags && photo.tags.length > 0 && (
                  <div className="flex flex-wrap justify-center gap-1.5 mt-2">
                    {photo.tags.map((tag) => (
                      <span key={tag} className="px-2 py-0.5 rounded-md bg-white/10 text-white/80 text-[11px] font-medium">
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </>
          );
        })()}
      </div>

      {/* Right Arrow Button */}
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white z-10 transition-transform hover:scale-110"
        aria-label={t("ariaNextImage")}
      >
        <ChevronRight size={28} />
      </button>

    </div>
  );
};
