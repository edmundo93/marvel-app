export const convertIsoDateToDate = (isoDate: string): Date | null => {
  if (!isoDate) {
    return null;
  }
  return new Date(isoDate);
};

export const getYear = (date: Date): number | null => {
  if (!date) {
    return null;
  }

  return date.getFullYear();
};

export const getIsoDateYear = (isoDate: string): number | null => {
  if (!isoDate) {
    return null;
  }

  const date = convertIsoDateToDate(isoDate);
  return getYear(date as Date);
};
