declare namespace trafficMeister {
export type Car = {
                id: number;
                type: string;
                brand: string;
                colors: string[];
                img: string;
            }

export function fetchData(cb: (error: string | null, data?: Car[]) => void): void
}