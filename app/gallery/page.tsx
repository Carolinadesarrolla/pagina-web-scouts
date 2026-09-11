"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import galleryData from "@/data/gallery.json";
import { PhotoLightbox, PhotoItem } from "@/components/PhotoLightbox";
import {
  Camera,
  Search,
  Filter,
  Maximize2,
  Folder
} from "@/components/Icons";

export default function GalleryPage() {
  const { t } = useLanguage();
  const [photos] = useState<PhotoItem[]>(galleryData.photos as PhotoItem[]);
  const [activeFolder, setActiveFolder] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedPhoto, setSelectedPhoto] = useState<PhotoItem | null>(null);

  // Albums/folders
  const albums = galleryData.albums;

  // Filter logic
  const filteredPhotos = photos.filter((photo) => {
    const matchesFolder =
      activeFolder === "all" || photo.folder.toLowerCase() === activeFolder.toLowerCase();
    const matchesQuery =
      photo.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      photo.folder.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (photo.tags && photo.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase())));
    return matchesFolder && matchesQuery;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      
      {/* Page Header */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[var(--primary)]">
          <Camera size={18} />
          <span>{t("navGallery")}</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-black text-[var(--on-surface)] tracking-tight">
          {t("galleryTitle")}
        </h1>
        <p className="text-base text-[var(--on-surface-variant)] max-w-2xl">
          {t("gallerySubtitle")}
        </p>
      </div>

      {/* Filter Controls Bar */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 p-4 rounded-[var(--md-shape-xl)] bg-[var(--surface-container-low)] border border-[var(--outline-variant)]">
        
        {/* Folder Filter Chips */}
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setActiveFolder("all")}
            className={`m3-chip ${activeFolder === "all" ? "m3-chip-active" : ""}`}
          >
            {t("galleryFilterAll")}
          </button>
          {albums.map((album) => {
            const albumTitleMap: Record<string, keyof typeof import("@/data/translations").translations.en> = {
              "lg": "albumLgTitle",
              "investiture": "albumInvestitureTitle",
              "camp 1": "albumCampTitle",
              "hike 1": "albumHikeTitle",
              "water": "albumWaterTitle",
              "líderes": "albumLeadersTitle",
            };
            const translatedTitle = albumTitleMap[album.id] ? t(albumTitleMap[album.id]) : album.title;
            return (
              <button
                key={album.id}
                onClick={() => setActiveFolder(album.folderName)}
                className={`m3-chip ${activeFolder === album.folderName ? "m3-chip-active" : ""}`}
              >
                {translatedTitle}
              </button>
            );
          })}
        </div>

        {/* Search Bar Input */}
        <div className="relative w-full md:w-72">
          <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--on-surface-variant)]" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={t("searchGalleryPlaceholder")}
            className="w-full pl-9 pr-4 py-2 rounded-full bg-[var(--surface-container-high)] border border-[var(--outline-variant)] text-xs text-[var(--on-surface)] focus:outline-none focus:border-[var(--primary)] transition-colors"
          />
        </div>

      </div>

      {/* Stats Bar */}
      <div className="flex items-center justify-between text-xs text-[var(--on-surface-variant)] font-semibold px-2">
        <span>
          {filteredPhotos.length} {t("photoCount")}
        </span>
        {activeFolder !== "all" && (
          <span className="uppercase text-[var(--primary)] font-bold">
            {t("album")}: {activeFolder}
          </span>
        )}
      </div>

      {/* Gallery Photo Grid */}
      {filteredPhotos.length === 0 ? (
        <div className="p-12 text-center rounded-[var(--md-shape-xl)] bg-[var(--surface-container)] border border-[var(--outline-variant)]">
          <p className="text-sm font-semibold text-[var(--on-surface-variant)]">
            {t("noPhotosFound")}
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredPhotos.map((photo) => {
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
            const photoKey = photoTitleMap[photo.id];
            const translatedPhotoTitle = photoKey ? t(photoKey) : photo.title;

            return (
              <div
                key={photo.id}
                onClick={() => setSelectedPhoto(photo)}
                className="group relative h-72 rounded-[var(--md-shape-xl)] overflow-hidden bg-[var(--surface-container-high)] border border-[var(--outline-variant)] shadow-md hover:shadow-2xl cursor-pointer transition-all duration-300 transform hover:-translate-y-1"
              >
                <Image
                  src={photo.src}
                  alt={translatedPhotoTitle}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />

                {/* Gradient Overlay & Details */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity flex flex-col justify-between p-4 text-white">
                  
                  <div className="flex justify-between items-start">
                    <span className="px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-md text-[10px] font-bold uppercase tracking-wider">
                      {photo.folder}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <Maximize2 size={16} />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-bold leading-snug line-clamp-2">
                      {translatedPhotoTitle}
                    </h3>
                    {photo.tags && photo.tags.length > 0 && (
                      <p className="text-[10px] text-white/70 mt-1 truncate">
                        {photo.tags.map((t) => `#${t}`).join(" ")}
                      </p>
                    )}
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Fullscreen Lightbox Modal */}
      {selectedPhoto && (
        <PhotoLightbox
          photo={selectedPhoto}
          photos={filteredPhotos}
          onClose={() => setSelectedPhoto(null)}
          onSelectPhoto={(p) => setSelectedPhoto(p)}
        />
      )}

    </div>
  );
}
