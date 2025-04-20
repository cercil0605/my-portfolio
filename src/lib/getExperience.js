// src/lib/getExperience.js
import { promises as fs } from 'fs';
import path from 'path';

export async function getExperience() {
  const filePath = path.join(process.cwd(), 'public', 'experience.json');
  const jsonData = await fs.readFile(filePath, 'utf-8');
  return JSON.parse(jsonData);
}
