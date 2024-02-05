import Axios from "axios";

const API_URL = "https://pokeapi.co/api/v2/pokemon";
const DEFAULT_OFFSET = 888;
const DEFAULT_LIMIT = 25;
const SPECIAL_LIMIT = 11;

export const calculateLimit = (offset) =>
  offset === DEFAULT_OFFSET ? SPECIAL_LIMIT : DEFAULT_LIMIT;

export const generateEndpoints = (offset, limit) => {
  const endpoints = [];

  for (let i = offset + 1; i < offset + limit; i++) {
    endpoints.push(`${API_URL}/${i}`);
  }

  return endpoints;
};

export const fetchPokemonData = async (url) => {
  const { data } = await Axios.get(url);
  return data;
};

export const fetchPokemonDetails = async (id) => {
  return Axios.get(`${API_URL}/${id}`);
};

export const fetchAbilityData = async (url) => {
  const { data } = await Axios.get(url);
  const shortEffect = data.effect_entries.find(
    (e) => e.language.name === "en"
  ).short_effect;
  return shortEffect;
};
