import { writable } from 'svelte/store';

export const arrivalRate = writable<number>();
export const serviceRate = writable<number>();
export const numberOfServers = writable<number>();
