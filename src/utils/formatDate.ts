const formatDate = (date: string): string => {
  const dataFormatted = new Date(date);
  const day = dataFormatted.getDate() > 9 ? dataFormatted.getDate() : `0${dataFormatted.getDate()}`;
  const mouth = (dataFormatted.getMonth() + 1) > 9 ? dataFormatted.getMonth() + 1 : `0${dataFormatted.getMonth() + 1}`;
  const year = dataFormatted.getFullYear();

  return `${day}/${mouth}/${year}`;
};

export default formatDate;