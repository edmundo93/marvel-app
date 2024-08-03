/* eslint-disable @typescript-eslint/no-explicit-any */

export const apiFetch = async (url: string): Promise<any> => {
  try {
    const response = await fetch(url, { next: { revalidate: 900 } });

    if (response.status === 200) {
      const jsonResp = await response.json();
      return jsonResp;
    }

    throw new Error(`${response.status} ${response.statusText}`);
  } catch (error: any) {
    throw error.message;
  }
};
