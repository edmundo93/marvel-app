/* eslint-disable @typescript-eslint/no-explicit-any */

export const apiFetch = async (url: string, signal: any): Promise<any> => {
  try {
    const response = await fetch(url, { next: { revalidate: 900 }, signal });

    if (response.status === 200) {
      const jsonResp = await response.json();
      return jsonResp;
    }

    throw new Error(`${response.status} ${response.statusText}`);
  } catch (error: any) {
    throw error;
  }
};
