
export const periods=["Today","This Week","This Month","This Year"] as const
export type Period= typeof periods[number]

