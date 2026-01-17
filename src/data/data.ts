import {
  loadEvents,
  loadMembers,
  loadRepertoire,
  loadGenres,
  loadReviews,
} from "./loader";

// Cargar datos desde archivos YAML (gestionados por Decap CMS)
export const events = loadEvents().sort((a, b) => {
  // Ordenar eventos por fecha (más recientes primero)
  return new Date(b.date).getTime() - new Date(a.date).getTime();
});
export const members = loadMembers();
export const repertoire = loadRepertoire();
export const genres = loadGenres();
export const reviews = loadReviews();
