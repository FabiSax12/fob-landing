import fs from "node:fs";
import path from "node:path";
import { parse } from "yaml";
import type { Event } from "@/types/envent";

const contentDir = path.join(process.cwd(), "src/content");

// Helper para leer y parsear YAML
function loadYaml<T>(filePath: string): T {
  const fullPath = path.join(contentDir, filePath);
  const content = fs.readFileSync(fullPath, "utf-8");
  return parse(content) as T;
}

// Helper para cargar todos los archivos YAML de un directorio
function loadYamlDirectory<T>(dirPath: string): T[] {
  const fullPath = path.join(contentDir, dirPath);
  const files = fs.readdirSync(fullPath).filter((f) => f.endsWith(".yaml"));

  return files.map((file) => {
    const content = fs.readFileSync(path.join(fullPath, file), "utf-8");
    return parse(content) as T;
  });
}

// Cargar eventos
export function loadEvents(): Event[] {
  return loadYamlDirectory<Event>("eventos");
}

// Cargar integrantes
export function loadMembers(): { name: string; instrument: string; image: string }[] {
  const data = loadYaml<{ members: { name: string; instrument: string; image: string }[] }>(
    "integrantes.yaml"
  );
  return data.members;
}

// Cargar repertorio
export function loadRepertoire(): Record<string, { title: string; artist: string }[]> {
  return loadYaml<Record<string, { title: string; artist: string }[]>>("repertorio.yaml");
}

// Cargar géneros
export function loadGenres(): { id: string; name: string }[] {
  const data = loadYaml<{ genres: { id: string; name: string }[] }>("generos.yaml");
  return data.genres;
}

// Cargar reseñas
export function loadReviews(): { name: string; event: string; comment: string; rating: number }[] {
  const data = loadYaml<{
    reviews: { name: string; event: string; comment: string; rating: number }[];
  }>("resenas.yaml");
  return data.reviews;
}
